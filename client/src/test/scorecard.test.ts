import { describe, it, expect } from "vitest";
import { buildLines, scoreClass } from "../lib/scorecard";
import type { CourseRow, HoleRow, HoleTeeRow } from "../hooks/useCourses";
import type { ActiveRound, LocalPlayer } from "../hooks/useActiveRound";

function tee(holeId: string, teeSetId: string, yards: number, par: number): HoleTeeRow {
  return { id: `${holeId}-${teeSetId}`, holeId, teeSetId, yards, par, strokeIndex: 1, teeLat: null, teeLng: null };
}

function hole(id: string, number: number, tees: HoleTeeRow[]): HoleRow {
  return {
    id,
    courseId: "c1",
    number,
    greenPolygon: null,
    greenLat: null,
    greenLng: null,
    aimLat: null,
    aimLng: null,
    tees,
  };
}

// Two holes; the 2nd is a par 4 off yellow but a par 5 off red — the mixed-tee
// case (Toot Hill's 14th) that makes per-player par load-bearing.
const course: CourseRow = {
  id: "c1",
  name: "Toot Hill",
  venue: "Toot Hill Golf Club",
  sortOrder: 0,
  teeSets: [
    { id: "yellow", courseId: "c1", colour: "Yellow", name: "Men's Yellow" },
    { id: "red", courseId: "c1", colour: "Red", name: "Red" },
  ],
  // Deliberately out of order to prove buildLines sorts by number.
  holes: [
    hole("h2", 2, [tee("h2", "yellow", 411, 4), tee("h2", "red", 389, 5)]),
    hole("h1", 1, [tee("h1", "yellow", 422, 4), tee("h1", "red", 394, 4)]),
  ],
};

const players: LocalPlayer[] = [
  { id: "p1", position: 1, name: "You", teeSetId: "yellow" },
  { id: "p2", position: 2, name: "Guest", teeSetId: "red" },
];

const scores: ActiveRound["scores"] = [
  { playerId: "p1", holeId: "h1", strokes: 4, putts: 2 },
  { playerId: "p2", holeId: "h1", strokes: 6, putts: null },
];

describe("buildLines", () => {
  const lines = buildLines(course, players, scores);

  it("orders holes by number regardless of input order", () => {
    expect(lines.map((l) => l.number)).toEqual([1, 2]);
  });

  it("resolves each player's yardage and par from their own tee", () => {
    const h2 = lines[1];
    expect(h2.cells[0]).toMatchObject({ playerId: "p1", yards: 411, par: 4 });
    expect(h2.cells[1]).toMatchObject({ playerId: "p2", yards: 389, par: 5 });
  });

  it("keeps a mixed fourball's differing pars apart", () => {
    const h2 = lines[1];
    expect(h2.cells[0].par).not.toBe(h2.cells[1].par);
    // The shared column prints Player 1's par.
    expect(h2.par).toBe(4);
  });

  it("attaches scores to the right player and hole, leaving the rest null", () => {
    const h1 = lines[0];
    expect(h1.cells[0]).toMatchObject({ strokes: 4, putts: 2 });
    expect(h1.cells[1]).toMatchObject({ strokes: 6, putts: null });
    // Hole 2 was unscored.
    expect(lines[1].cells[0].strokes).toBeNull();
    expect(lines[1].cells[1].strokes).toBeNull();
  });
});

describe("scoreClass", () => {
  it("rings birdies and better but leaves par plain", () => {
    expect(scoreClass(3, 5)).toContain("amber"); // eagle or better
    expect(scoreClass(3, 4)).toContain("primary"); // birdie
    expect(scoreClass(4, 4)).toBe(""); // par
  });

  it("marks doubles and worse as destructive, single bogey muted", () => {
    expect(scoreClass(5, 4)).toContain("muted"); // bogey
    expect(scoreClass(6, 4)).toContain("destructive"); // double+
  });
});
