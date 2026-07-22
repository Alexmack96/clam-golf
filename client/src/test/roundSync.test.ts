import { describe, it, expect } from "vitest";
import { toUpsertBody, fromSummary } from "../lib/roundSync";
import type { ActiveRound, RoundSummary } from "../hooks/useActiveRound";

const round: ActiveRound = {
  id: "r1",
  courseId: "c1",
  playedOn: "2026-07-26T08:00:00.000Z",
  completedAt: null,
  players: [
    { id: "p1", position: 1, name: "You", teeSetId: "yellow" },
    { id: "p2", position: 2, name: "Guest", teeSetId: "red" },
  ],
  scores: [
    { playerId: "p1", holeId: "h1", strokes: 4, putts: 2 },
    { playerId: "p2", holeId: "h1", strokes: 5, putts: null },
    { playerId: "p1", holeId: "h2", strokes: 3, putts: 1 },
  ],
};

describe("toUpsertBody", () => {
  it("nests each score under its own player and nobody else's", () => {
    const body = toUpsertBody(round);
    expect(body.players[0].scores).toEqual([
      { holeId: "h1", strokes: 4, putts: 2 },
      { holeId: "h2", strokes: 3, putts: 1 },
    ]);
    expect(body.players[1].scores).toEqual([{ holeId: "h1", strokes: 5, putts: null }]);
  });

  it("drops playerId from the wire shape and keeps a null putt", () => {
    const [, guest] = toUpsertBody(round).players;
    expect(guest.scores[0]).not.toHaveProperty("playerId");
    expect(guest.scores[0].putts).toBeNull();
  });

  it("carries the round's course, date and per-player tee sets", () => {
    const body = toUpsertBody(round);
    expect(body.courseId).toBe("c1");
    expect(body.completedAt).toBeNull();
    expect(body.players.map((p) => p.teeSetId)).toEqual(["yellow", "red"]);
  });
});

describe("fromSummary", () => {
  const summary: RoundSummary = {
    id: "r1",
    courseId: "c1",
    playedOn: "2026-07-26T08:00:00.000Z",
    completedAt: "2026-07-26T12:00:00.000Z",
    course: { name: "Prince's", venue: "Richmond Park" },
    players: [
      {
        id: "p1",
        position: 1,
        name: "You",
        teeSetId: "yellow",
        teeSet: { name: "Men's Yellow", colour: "Yellow" },
        scores: [{ holeId: "h1", strokes: 4, putts: 2, hole: { number: 1 } }],
      },
      {
        id: "p2",
        position: 2,
        name: "Guest",
        teeSetId: "red",
        teeSet: { name: "Red", colour: "Red" },
        scores: [{ holeId: "h1", strokes: 5, putts: null, hole: { number: 1 } }],
      },
    ],
  };

  it("flattens server players into scores tagged with the right player", () => {
    const local = fromSummary(summary);
    expect(local.scores).toEqual([
      { playerId: "p1", holeId: "h1", strokes: 4, putts: 2 },
      { playerId: "p2", holeId: "h1", strokes: 5, putts: null },
    ]);
    expect(local.completedAt).toBe("2026-07-26T12:00:00.000Z");
  });

  it("round-trips back to the same per-player scores", () => {
    const body = toUpsertBody(fromSummary(summary));
    expect(body.players[0].scores).toEqual([{ holeId: "h1", strokes: 4, putts: 2 }]);
    expect(body.players[1].scores).toEqual([{ holeId: "h1", strokes: 5, putts: null }]);
  });
});
