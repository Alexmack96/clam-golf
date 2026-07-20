import { z } from "zod";

/**
 * A whole round, pushed up in one piece.
 *
 * The round is played offline in localStorage and synced by replacing the
 * server's copy wholesale. That is why this is a complete document rather than
 * a patch: there is one player on one device, so there is nothing to merge, and
 * a failed push just retries with the next change instead of queueing.
 */
export const upsertRoundSchema = z.object({
  courseId: z.string().min(1),
  teeSetId: z.string().min(1),
  playedOn: z.iso.datetime(),
  completedAt: z.iso.datetime().nullable(),
  scores: z
    .object({
      holeId: z.string().min(1),
      // Nobody makes an ace in zero, and a hole that took more than 20 is a
      // typo on a phone keypad rather than a round worth recording.
      strokes: z.number().int().min(1).max(20),
      putts: z.number().int().min(0).max(10).nullable(),
    })
    .array()
    .max(18),
});

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
