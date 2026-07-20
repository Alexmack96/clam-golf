import type { ClubRow } from "../hooks/useClubs.js";

export interface ClubOption {
  label: string;
  clubName: string;
  swing: string;
  yards: number;
}

/**
 * Every yardage currently in the bag, one entry per club-and-swing-length.
 * Benched clubs and unmeasured swings are excluded — suggesting a club you are
 * not carrying is worse than suggesting nothing.
 */
export function bagOptions(clubs: ClubRow[]): ClubOption[] {
  return clubs
    .filter((c) => c.isActive)
    .flatMap((c) =>
      c.distances.map((d) => ({
        label: `${c.name} · ${d.swing}`,
        clubName: c.name,
        swing: d.swing,
        yards: d.yards,
      })),
    )
    .filter((o) => o.yards > 0);
}

/** The club whose carry sits closest to `yards`. */
export function nearestClub(options: ClubOption[], yards: number): ClubOption | null {
  let best: ClubOption | null = null;
  let bestDelta = Infinity;
  for (const o of options) {
    const delta = Math.abs(o.yards - yards);
    if (delta < bestDelta) {
      bestDelta = delta;
      best = o;
    }
  }
  return best;
}

/**
 * The furthest the player can carry anything. This is what decides whether a
 * hole needs playing in two shots, so it deliberately tracks the bag rather
 * than a fixed number — change your driver yardage on the Distances page and
 * the layup threshold moves with it.
 */
export function longestCarry(options: ClubOption[]): number {
  return options.reduce((max, o) => Math.max(max, o.yards), 0);
}

/** Full swings only — what you would actually choose to leave yourself. */
export function fullSwingYardages(options: ClubOption[]): number[] {
  return options
    .filter((o) => o.swing === "Full")
    .map((o) => o.yards)
    .sort((a, b) => a - b);
}
