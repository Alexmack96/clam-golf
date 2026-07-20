/**
 * Golf-course geometry. Shared because the client needs it to draw distances
 * and the server needs it to check that an assigned green actually sits the
 * scorecard's yardage from its tee.
 *
 * Everything public here is in yards, because every other number in this app
 * is in yards. Internals work in metres and convert once at the boundary.
 */

export type LatLng = { lat: number; lng: number };
export type Ring = [number, number][];

const EARTH_RADIUS_M = 6_371_008.8;
const YARDS_PER_METRE = 1.0936133;
const toRad = (deg: number) => (deg * Math.PI) / 180;

/** Great-circle distance in yards. */
export function distanceYards(a: LatLng, b: LatLng): number {
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_M * Math.asin(Math.min(1, Math.sqrt(h))) * YARDS_PER_METRE;
}

/** Initial bearing from `a` to `b`, in degrees clockwise from north. */
export function bearing(a: LatLng, b: LatLng): number {
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  return (Math.atan2(y, x) * 180) / Math.PI;
}

/**
 * Area-weighted centroid of a closed ring — the "middle of the green".
 *
 * Not the mean of the vertices: OSM outlines are traced by hand, so one side
 * of a green often carries far more points than the other, and a plain average
 * would drag the middle towards whichever edge was surveyed in more detail.
 */
export function centroid(ring: Ring): LatLng {
  // Work relative to the first vertex. A green spans ~0.0003° at a latitude of
  // ~51°, so the shoelace cross-products of raw coordinates are differences of
  // near-identical large numbers and lose most of their significant digits.
  // Shifting to a local origin first keeps the result exact to well under a
  // centimetre instead of drifting by tens of centimetres.
  const [lat0, lng0] = ring[0];
  let twiceArea = 0;
  let lat = 0;
  let lng = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const latI = ring[i][0] - lat0;
    const lngI = ring[i][1] - lng0;
    const latJ = ring[j][0] - lat0;
    const lngJ = ring[j][1] - lng0;
    const cross = latJ * lngI - latI * lngJ;
    twiceArea += cross;
    lat += (latI + latJ) * cross;
    lng += (lngI + lngJ) * cross;
  }
  // A degenerate ring (all points collinear) has no area; fall back to the mean
  // rather than dividing by zero.
  if (twiceArea === 0) {
    const n = ring.length;
    return {
      lat: ring.reduce((s, p) => s + p[0], 0) / n,
      lng: ring.reduce((s, p) => s + p[1], 0) / n,
    };
  }
  return { lat: lat0 + lat / (3 * twiceArea), lng: lng0 + lng / (3 * twiceArea) };
}

/** Local east/north offset in metres. Flat-earth, but a green is 30m across. */
function offsetMetres(from: LatLng, to: LatLng): { east: number; north: number } {
  return {
    east: toRad(to.lng - from.lng) * EARTH_RADIUS_M * Math.cos(toRad(from.lat)),
    north: toRad(to.lat - from.lat) * EARTH_RADIUS_M,
  };
}

export type GreenDistances = { front: number; middle: number; back: number };

/**
 * Distance in yards from `from` to the near edge, centre and far edge of a
 * green, all measured along the line of play rather than as raw min/max
 * distance to the outline.
 *
 * That distinction matters when you are off to the side: the nearest point of
 * the outline is then a corner you would never aim at, and quoting it as
 * "front" would have you club down for a shot that has to cover more ground.
 * Projecting onto the line of play instead answers the question actually being
 * asked — how deep is the green from here.
 */
export function greenDistances(ring: Ring, from: LatLng): GreenDistances {
  const centre = centroid(ring);
  const middle = distanceYards(from, centre);

  const axis = offsetMetres(from, centre);
  const axisLength = Math.hypot(axis.east, axis.north);
  // Within a few metres of the centre there is no meaningful line of play: the
  // direction is whatever noise the last GPS fix contained, and projecting onto
  // it puts the front edge *behind* you as a negative yardage. You are on the
  // green and putting at this point, so collapse to one number.
  if (axisLength < 5) return { front: middle, middle, back: middle };

  const unit = { east: axis.east / axisLength, north: axis.north / axisLength };

  let near = Infinity;
  let far = -Infinity;
  for (const [lat, lng] of ring) {
    const v = offsetMetres(from, { lat, lng });
    const along = v.east * unit.east + v.north * unit.north;
    if (along < near) near = along;
    if (along > far) far = along;
  }

  // Express the edges as offsets from the centre, then hang them off the
  // haversine middle so all three numbers stay on one consistent scale.
  const centreAlong = axisLength;
  return {
    // Standing level with the front edge but off to one side, the projection
    // can run marginally negative. Zero is the honest answer there.
    front: Math.max(0, middle + (near - centreAlong) * YARDS_PER_METRE),
    middle,
    back: middle + (far - centreAlong) * YARDS_PER_METRE,
  };
}

/**
 * Walks a fraction of the way from `a` to `b`. Used to seed the layup marker
 * partway down the hole before the player drags it somewhere sensible.
 */
export function interpolate(a: LatLng, b: LatLng, fraction: number): LatLng {
  return {
    lat: a.lat + (b.lat - a.lat) * fraction,
    lng: a.lng + (b.lng - a.lng) * fraction,
  };
}
