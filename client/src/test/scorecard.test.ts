import { describe, it, expect } from "vitest";
import {
  buildLines,
  orderCardTees,
  playerTotal,
  scoreClass,
  sumTeePar,
  sumTeeYards,
  teeAt,
} from "../lib/scorecard";
import type { CourseRow, HoleRow, HoleTeeRow, TeeSetRow } from "../hooks/useCourses";
import type { ActiveRound, LocalPlayer } from "../hooks/useActiveRound";

function tee(
  holeId: string,
  teeSetId: string,
  yards: number,
  par: number,
  strokeIndex = 1,
): HoleTeeRow {
  return { id: `${holeId}-${teeSetId}`, holeId, teeSetId, yards, par, strokeIndex, teeLat: null, teeLng: null };
}

function teeSet(id: string, colour: TeeSetRow["colour"]): TeeSetRow {
  return { id, courseId: "c1", colour, name: colour };
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
    hole("h2", 2, [tee("h2", "yellow", 411, 4, 1), tee("h2", "red", 389, 5, 3)]),
    hole("h1", 1, [tee("h1", "yellow", 422, 4, 10), tee("h1", "red", 394, 4, 5)]),
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

  it("resolves each player's yardage, par and stroke index from their own tee", () => {
    const h2 = lines[1];
    expect(h2.cells[0]).toMatchObject({ playerId: "p1", yards: 411, par: 4, strokeIndex: 1 });
    expect(h2.cells[1]).toMatchObject({ playerId: "p2", yards: 389, par: 5, strokeIndex: 3 });
  });

  it("prints Player 1's par and stroke index in the shared columns", () => {
    const h1 = lines[0];
    expect(h1.par).toBe(4);
    expect(h1.si).toBe(10); // yellow (p1's tee), not red's 5
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

describe("orderCardTees", () => {
  it("splits red out to its own block and leaves the rest on the left", () => {
    const { leftTees, redTee } = orderCardTees([
      teeSet("red", "Red"),
      teeSet("white", "White"),
      teeSet("yellow", "Yellow"),
    ]);
    expect(leftTees.map((t) => t.colour)).toEqual(["White", "Yellow"]);
    expect(redTee?.colour).toBe("Red");
  });

  it("orders the left block white → yellow → blue regardless of input order", () => {
    const { leftTees } = orderCardTees([
      teeSet("blue", "Blue"),
      teeSet("yellow", "Yellow"),
      teeSet("white", "White"),
    ]);
    expect(leftTees.map((t) => t.colour)).toEqual(["White", "Yellow", "Blue"]);
  });

  it("points the shared Par column at the longest front tee (white)", () => {
    const { parTee } = orderCardTees([teeSet("white", "White"), teeSet("yellow", "Yellow")]);
    expect(parTee?.colour).toBe("White");
  });

  it("falls back to red for the Par column when there is no front tee", () => {
    const { leftTees, redTee, parTee } = orderCardTees([teeSet("red", "Red")]);
    expect(leftTees).toEqual([]);
    expect(redTee?.colour).toBe("Red");
    expect(parTee?.colour).toBe("Red"); // a red-only course still gets a Par column
  });

  it("returns no par tee for a course with no tees at all", () => {
    expect(orderCardTees([])).toEqual({ leftTees: [], redTee: null, parTee: null });
  });
});

describe("tee lookups and footers", () => {
  it("finds the tee row for a hole, and undefined for an unset tee", () => {
    expect(teeAt(course, "h1", "yellow")?.yards).toBe(422);
    expect(teeAt(course, "h1", "blue")).toBeUndefined(); // no blue tee
    expect(teeAt(course, "h1", undefined)).toBeUndefined();
  });

  it("sums a tee's yardage and par across the given lines", () => {
    const lines = buildLines(course, players, scores);
    expect(sumTeeYards(course, lines, "yellow")).toBe(422 + 411);
    expect(sumTeeYards(course, lines, "red")).toBe(394 + 389);
    expect(sumTeePar(course, lines, "red")).toBe(4 + 5);
    // An unset tee contributes nothing rather than throwing.
    expect(sumTeeYards(course, lines, "blue")).toBe(0);
  });
});

describe("playerTotal", () => {
  const lines = buildLines(course, players, scores); // only hole 1 is scored

  it("sums only the holes a player has scored", () => {
    expect(playerTotal(lines, 0)).toBe(4); // p1: 4 on h1, h2 unscored
    expect(playerTotal(lines, 1)).toBe(6); // p2: 6 on h1
  });

  it("shows a dash until a player has scored anything", () => {
    const blank = buildLines(course, players, []);
    expect(playerTotal(blank, 0)).toBe("–");
  });
});
