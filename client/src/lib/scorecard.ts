import type { CourseRow } from "../hooks/useCourses.js";
import type { ActiveRound, LocalPlayer } from "../hooks/useActiveRound.js";

/**
 * The transform behind the play card: course + players + a flat score list into
 * one row per hole, with each player's own tee resolving their yardage and par.
 *
 * Pure and kept out of the component so it can be tested — the per-player tee
 * lookup is where a mixed fourball's numbers would go wrong (Player 1's par is
 * not Player 2's when they play different tees).
 */

export interface Cell {
  playerId: string;
  yards: number;
  par: number;
  strokes: number | null;
  putts: number | null;
}

export interface Line {
  holeId: string;
  number: number;
  par: number;
  cells: Cell[];
}

export function buildLines(
  course: CourseRow,
  players: LocalPlayer[],
  scores: ActiveRound["scores"],
): Line[] {
  return course.holes
    .slice()
    .sort((a, b) => a.number - b.number)
    .map((h) => {
      const cells = players.map((pl) => {
        const tee = h.tees.find((t) => t.teeSetId === pl.teeSetId);
        const sc = scores.find((s) => s.playerId === pl.id && s.holeId === h.id);
        return {
          playerId: pl.id,
          yards: tee?.yards ?? 0,
          par: tee?.par ?? 4,
          strokes: sc?.strokes ?? null,
          putts: sc?.putts ?? null,
        };
      });
      // Par printed in the shared column is Player 1's; each cell keeps its own
      // par for scoring.
      return { holeId: h.id, number: h.number, par: cells[0]?.par ?? 4, cells };
    });
}

export const sum = (ns: number[]) => ns.reduce((n, x) => n + x, 0);

/** Colour a score the way you would ring it on paper. */
export function scoreClass(strokes: number, par: number) {
  const d = strokes - par;
  if (d <= -2) return "bg-amber-400/30 font-semibold rounded";
  if (d === -1) return "bg-primary/25 font-semibold rounded";
  if (d === 0) return "";
  if (d >= 2) return "text-destructive";
  return "text-muted-foreground";
}
