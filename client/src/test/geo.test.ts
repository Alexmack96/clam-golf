import { describe, it, expect } from "vitest";
import { distanceYards, bearing, centroid, greenDistances, type Ring } from "@clam/core";

const GREEN_CENTRE = { lat: 51.44, lng: -0.247 };

// A 30m square green centred on GREEN_CENTRE. Degrees per metre at this
// latitude: 1/111320 north, and 1/(111320 * cos(51.44)) east.
const M_PER_DEG_LAT = 111_320;
const M_PER_DEG_LNG = 111_320 * Math.cos((51.44 * Math.PI) / 180);
const HALF = 15;

const squareGreen: Ring = [
  [GREEN_CENTRE.lat - HALF / M_PER_DEG_LAT, GREEN_CENTRE.lng - HALF / M_PER_DEG_LNG],
  [GREEN_CENTRE.lat - HALF / M_PER_DEG_LAT, GREEN_CENTRE.lng + HALF / M_PER_DEG_LNG],
  [GREEN_CENTRE.lat + HALF / M_PER_DEG_LAT, GREEN_CENTRE.lng + HALF / M_PER_DEG_LNG],
  [GREEN_CENTRE.lat + HALF / M_PER_DEG_LAT, GREEN_CENTRE.lng - HALF / M_PER_DEG_LNG],
];

/** A point `yards` due south of the green centre — i.e. playing due north. */
function southOfGreen(yards: number) {
  const metres = yards / 1.0936133;
  return { lat: GREEN_CENTRE.lat - metres / M_PER_DEG_LAT, lng: GREEN_CENTRE.lng };
}

describe("distanceYards", () => {
  it("measures a known north-south offset", () => {
    // 0.001° of latitude is 111.32m, which is 121.7 yards.
    const a = { lat: 51.44, lng: -0.247 };
    const b = { lat: 51.441, lng: -0.247 };
    expect(distanceYards(a, b)).toBeCloseTo(121.7, 0);
  });

  it("is zero for a point against itself, and symmetric", () => {
    const a = { lat: 51.44, lng: -0.247 };
    const b = { lat: 51.4432, lng: -0.2481 };
    expect(distanceYards(a, a)).toBe(0);
    expect(distanceYards(a, b)).toBeCloseTo(distanceYards(b, a), 6);
  });
});

describe("bearing", () => {
  it("reads 0 due north and 90 due east", () => {
    expect(bearing({ lat: 51.44, lng: -0.247 }, { lat: 51.45, lng: -0.247 })).toBeCloseTo(0, 1);
    expect(bearing({ lat: 51.44, lng: -0.247 }, { lat: 51.44, lng: -0.237 })).toBeCloseTo(90, 1);
  });
});

describe("centroid", () => {
  it("finds the centre of a square", () => {
    const c = centroid(squareGreen);
    expect(c.lat).toBeCloseTo(GREEN_CENTRE.lat, 7);
    expect(c.lng).toBeCloseTo(GREEN_CENTRE.lng, 7);
  });

  it("ignores how densely each edge was traced", () => {
    // Same square, but the southern edge carries extra vertices — exactly what
    // hand-traced OSM outlines look like. A mean of the vertices would sag
    // south; an area-weighted centroid must not.
    const south = GREEN_CENTRE.lat - HALF / M_PER_DEG_LAT;
    const west = GREEN_CENTRE.lng - HALF / M_PER_DEG_LNG;
    const east = GREEN_CENTRE.lng + HALF / M_PER_DEG_LNG;
    const dense: Ring = [
      [south, west],
      [south, west + (east - west) * 0.25],
      [south, west + (east - west) * 0.5],
      [south, west + (east - west) * 0.75],
      [south, east],
      [GREEN_CENTRE.lat + HALF / M_PER_DEG_LAT, east],
      [GREEN_CENTRE.lat + HALF / M_PER_DEG_LAT, west],
    ];
    expect(centroid(dense).lat).toBeCloseTo(GREEN_CENTRE.lat, 7);
  });
});

describe("greenDistances", () => {
  it("brackets the middle by half the green's depth", () => {
    const { front, middle, back } = greenDistances(squareGreen, southOfGreen(150));
    expect(middle).toBeCloseTo(150, 0);
    // 15m either side of centre is 16.4 yards.
    expect(front).toBeCloseTo(150 - 16.4, 0);
    expect(back).toBeCloseTo(150 + 16.4, 0);
  });

  it("always orders front, middle, back", () => {
    for (const yards of [40, 150, 300, 520]) {
      const d = greenDistances(squareGreen, southOfGreen(yards));
      expect(d.front).toBeLessThan(d.middle);
      expect(d.middle).toBeLessThan(d.back);
    }
  });

  it("reads depth from the line of play, so the same green plays deeper end-on", () => {
    // A green 40m deep north-south and 20m wide east-west. Attack it up the
    // long axis and it is 40m of green to work with; come in from the side and
    // it is 20m. Anything that measured a fixed "green depth" would miss this.
    const long: Ring = [
      [GREEN_CENTRE.lat - 20 / M_PER_DEG_LAT, GREEN_CENTRE.lng - 10 / M_PER_DEG_LNG],
      [GREEN_CENTRE.lat - 20 / M_PER_DEG_LAT, GREEN_CENTRE.lng + 10 / M_PER_DEG_LNG],
      [GREEN_CENTRE.lat + 20 / M_PER_DEG_LAT, GREEN_CENTRE.lng + 10 / M_PER_DEG_LNG],
      [GREEN_CENTRE.lat + 20 / M_PER_DEG_LAT, GREEN_CENTRE.lng - 10 / M_PER_DEG_LNG],
    ];
    const metres = 150 / 1.0936133;

    const fromSouth = greenDistances(long, southOfGreen(150));
    const fromWest = greenDistances(long, {
      lat: GREEN_CENTRE.lat,
      lng: GREEN_CENTRE.lng - metres / M_PER_DEG_LNG,
    });

    expect((fromSouth.back - fromSouth.front) / 1.0936133).toBeCloseTo(40, 0);
    expect((fromWest.back - fromWest.front) / 1.0936133).toBeCloseTo(20, 0);
  });

  it("never reports a negative front edge once you are on the green", () => {
    // Putting, the line of play is pure GPS noise. Whatever it points at, the
    // page must not show a distance behind you.
    for (const offset of [0, 0.5, 2, 8]) {
      const d = greenDistances(squareGreen, southOfGreen(offset));
      expect(d.front).toBeGreaterThanOrEqual(0);
      expect(Number.isFinite(d.front)).toBe(true);
    }
    const onCentre = greenDistances(squareGreen, GREEN_CENTRE);
    expect(onCentre.front).toBe(onCentre.middle);
    expect(onCentre.back).toBe(onCentre.middle);
  });
});
