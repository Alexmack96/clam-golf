import type { ActiveRound, RoundSummary } from "../hooks/useActiveRound.js";

/**
 * The two mappers between the round as the phone holds it (a flat list of
 * scores, each tagged with its player) and the shapes either side of the wire.
 *
 * These are pure and load-bearing: a slip here files a score against the wrong
 * player, silently. Kept out of the store so they can be tested on their own.
 */

/** The phone's round → the body the server's PUT expects (scores nested per player). */
export function toUpsertBody(r: ActiveRound) {
  return {
    courseId: r.courseId,
    playedOn: r.playedOn,
    completedAt: r.completedAt,
    players: r.players.map((p) => ({
      id: p.id,
      position: p.position,
      name: p.name,
      teeSetId: p.teeSetId,
      scores: r.scores
        .filter((s) => s.playerId === p.id)
        .map((s) => ({ holeId: s.holeId, strokes: s.strokes, putts: s.putts })),
    })),
  };
}

/** A round fetched from the server → the flat local shape, for editing a finished card. */
export function fromSummary(r: RoundSummary): ActiveRound {
  return {
    id: r.id,
    courseId: r.courseId,
    playedOn: r.playedOn,
    completedAt: r.completedAt,
    players: r.players.map((p) => ({
      id: p.id,
      position: p.position,
      name: p.name,
      teeSetId: p.teeSetId,
    })),
    scores: r.players.flatMap((p) =>
      p.scores.map((s) => ({
        playerId: p.id,
        holeId: s.holeId,
        strokes: s.strokes,
        putts: s.putts,
      })),
    ),
  };
}
