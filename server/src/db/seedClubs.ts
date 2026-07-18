/**
 * Seeds the bag: one Club per club plus its Distance row(s).
 * Run with: bun run db:seed:clubs
 *
 * Safe to re-run — upserts by club name / (clubId, swing).
 * Wedge partial-swing yardages (Shoulder/Chest/Hip) are estimated as a
 * percentage of the full-swing yardage (75% / 55% / 35%) since only full
 * yardages were provided; tune them in the `distance` table as real data
 * comes in from the range.
 */
import "dotenv/config";
import { db } from "./client.js";
import { ClubType, SwingLength } from "../generated/prisma/index.js";

const WEDGE_RATIOS: { swing: SwingLength; pct: number }[] = [
  { swing: SwingLength.Full, pct: 1 },
  { swing: SwingLength.Shoulder, pct: 0.75 },
  { swing: SwingLength.Chest, pct: 0.55 },
  { swing: SwingLength.Hip, pct: 0.35 },
];

const roundTo5 = (n: number) => Math.round(n / 5) * 5;

const CLUBS: { name: string; type: ClubType; sortOrder: number; full: number | null }[] = [
  { name: "Putter", type: ClubType.Putter, sortOrder: 0, full: null },
  { name: "60°", type: ClubType.Wedge, sortOrder: 1, full: 70 },
  { name: "56°", type: ClubType.Wedge, sortOrder: 2, full: 95 },
  { name: "52°", type: ClubType.Wedge, sortOrder: 3, full: 95 },
  { name: "PW", type: ClubType.Wedge, sortOrder: 4, full: 130 },
  { name: "9 Iron", type: ClubType.Iron, sortOrder: 5, full: 145 },
  { name: "8 Iron", type: ClubType.Iron, sortOrder: 6, full: 140 },
  { name: "7 Iron", type: ClubType.Iron, sortOrder: 7, full: 170 },
  { name: "6 Iron", type: ClubType.Iron, sortOrder: 8, full: 165 },
  { name: "4 Iron", type: ClubType.Iron, sortOrder: 9, full: 180 },
  { name: "Hybrid", type: ClubType.Hybrid, sortOrder: 10, full: 200 },
  { name: "5 Wood", type: ClubType.Wood, sortOrder: 11, full: 220 },
  { name: "Driver", type: ClubType.Driver, sortOrder: 12, full: 270 },
];

async function main() {
  for (const c of CLUBS) {
    const club = await db.club.upsert({
      where: { name: c.name },
      create: { name: c.name, type: c.type, sortOrder: c.sortOrder },
      update: { type: c.type, sortOrder: c.sortOrder },
    });

    if (c.full == null) continue;

    const rows = c.type === ClubType.Wedge ? WEDGE_RATIOS : [{ swing: SwingLength.Full, pct: 1 }];
    for (const { swing, pct } of rows) {
      const yards = swing === SwingLength.Full ? c.full : roundTo5(c.full * pct);
      await db.distance.upsert({
        where: { clubId_swing: { clubId: club.id, swing } },
        create: { clubId: club.id, swing, yards },
        update: { yards },
      });
    }
  }

  console.log(`Seeded ${CLUBS.length} clubs.`);
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
