import type { CourseRow, TeeSetRow } from "../hooks/useCourses.js";
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
  strokeIndex: number;
  strokes: number | null;
  putts: number | null;
}

export interface Line {
  holeId: string;
  number: number;
  par: number;
  si: number;
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
          strokeIndex: tee?.strokeIndex ?? 0,
          strokes: sc?.strokes ?? null,
          putts: sc?.putts ?? null,
        };
      });
      // Par and S.I. printed in the shared columns are Player 1's; each cell
      // keeps its own par for scoring.
      return {
        holeId: h.id,
        number: h.number,
        par: cells[0]?.par ?? 4,
        si: cells[0]?.strokeIndex ?? 0,
        cells,
      };
    });
}

export const sum = (ns: number[]) => ns.reduce((n, x) => n + x, 0);

/**
 * How the paper card lays its tees out: the front tees (white, yellow, …) in a
 * left block sharing one Par + S.I., and red as its own right-hand block with
 * its own par and index. Anything that is not red is a front tee.
 */
export interface CardTees {
  leftTees: TeeSetRow[];
  redTee: TeeSetRow | null;
  /** The tee the shared middle Par + S.I. columns follow (the longest front tee). */
  parTee: TeeSetRow | null;
}

const COLOUR_ORDER: Record<string, number> = { White: 0, Yellow: 1, Blue: 2, Red: 3 };

export function orderCardTees(teeSets: TeeSetRow[]): CardTees {
  const ord = (c: string) => COLOUR_ORDER[c] ?? 9;
  const leftTees = teeSets.filter((t) => t.colour !== "Red").sort((a, b) => ord(a.colour) - ord(b.colour));
  const redTee = teeSets.find((t) => t.colour === "Red") ?? null;
  // Fall back to red so a red-only course still prints a Par column.
  const parTee = leftTees[0] ?? redTee;
  return { leftTees, redTee, parTee };
}

/** The tee row for a given hole and tee set, or undefined if that tee is unset. */
export function teeAt(course: CourseRow, holeId: string, teeSetId: string | undefined) {
  if (!teeSetId) return undefined;
  return course.holes.find((h) => h.id === holeId)?.tees.find((t) => t.teeSetId === teeSetId);
}

/** Sum a tee's yardage over a set of card lines (an Out/In/Total footer cell). */
export function sumTeeYards(course: CourseRow, rows: Line[], teeSetId: string | undefined) {
  return sum(rows.map((r) => teeAt(course, r.holeId, teeSetId)?.yards ?? 0));
}

/** Sum a tee's par over a set of card lines. */
export function sumTeePar(course: CourseRow, rows: Line[], teeSetId: string | undefined) {
  return sum(rows.map((r) => teeAt(course, r.holeId, teeSetId)?.par ?? 0));
}

/** A player's running gross total over a set of lines; "–" until they've scored. */
export function playerTotal(rows: Line[], idx: number): number | "–" {
  const played = rows.filter((r) => r.cells[idx]?.strokes != null);
  return played.length ? sum(played.map((r) => r.cells[idx]!.strokes ?? 0)) : "–";
}

/** Colour a score the way you would ring it on paper. */
export function scoreClass(strokes: number, par: number) {
  const d = strokes - par;
  if (d <= -2) return "bg-amber-400/30 font-semibold rounded";
  if (d === -1) return "bg-primary/25 font-semibold rounded";
  if (d === 0) return "";
  if (d >= 2) return "text-destructive";
  return "text-muted-foreground";
}
