import { z } from "zod";

/** One hole for one player: strokes always, putts when bothered. */
export const holeScoreSchema = z.object({
  holeId: z.string().min(1),
  // Nobody makes an ace in zero, and a hole that took more than 20 is a
  // typo on a phone keypad rather than a round worth recording.
  strokes: z.number().int().min(1).max(20),
  putts: z.number().int().min(0).max(10).nullable(),
});

/**
 * One player on the card. The id is minted on the phone, like the round's, so a
 * player exists before the server has heard of it. Position 1 is always you.
 */
export const playerSchema = z.object({
  id: z.string().min(1),
  position: z.number().int().min(1).max(4),
  name: z.string().min(1).max(40),
  teeSetId: z.string().min(1),
  scores: holeScoreSchema.array().max(18),
});

/**
 * A whole round, pushed up in one piece.
 *
 * The round is played offline in localStorage and synced by replacing the
 * server's copy wholesale. That is why this is a complete document rather than
 * a patch: one device, one writer, so there is nothing to merge, and a failed
 * push just retries with the next change instead of queueing. The tee set is per
 * player — a mixed fourball plays off different tees on the same card.
 */
export const upsertRoundSchema = z.object({
  courseId: z.string().min(1),
  playedOn: z.iso.datetime(),
  completedAt: z.iso.datetime().nullable(),
  players: playerSchema.array().min(1).max(4),
});

export type HoleScoreInput = z.infer<typeof holeScoreSchema>;
export type PlayerInput = z.infer<typeof playerSchema>;
export type UpsertRoundInput = z.infer<typeof upsertRoundSchema>;

/**
 * Reaching the green with two strokes still in hand for par. Derived rather
 * than recorded — logging putts is enough, so there is no extra tap and no way
 * for a stored flag to disagree with the strokes next to it.
 */
export function isGreenInRegulation(strokes: number, putts: number | null, par: number): boolean {
  if (putts === null) return false;
  return strokes - putts <= par - 2;
}

/** Gross strokes over a set of holes, ignoring any not yet played. */
export function totalStrokes(scores: { strokes: number }[]): number {
  return scores.reduce((n, s) => n + s.strokes, 0);
}
