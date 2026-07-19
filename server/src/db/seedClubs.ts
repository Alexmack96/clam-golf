/**
 * Seeds the bag: one Club per club plus its Distance row(s).
 * Run with: bun run db:seed:clubs
 *
 * Runs on every container boot, so it only ever fills in what is missing —
 * existing clubs and distances are left exactly as they are. Yardages are the
 * data the app exists to record, and re-seeding must never overwrite them.
 *
 * Consequence: editing the numbers below will not update a database that
 * already has those rows. Change them in the app, or delete the row first.
 */
import "dotenv/config";
import { db } from "./client.js";
import { ClubType, SwingLength } from "../generated/prisma/index.js";

const CLUBS: {
  name: string;
  type: ClubType;
  sortOrder: number;
  distances: Partial<Record<SwingLength, number>>;
}[] = [
  { name: "Putter", type: ClubType.Putter, sortOrder: 0, distances: {} },
  {
    name: "60°",
    type: ClubType.Wedge,
    sortOrder: 1,
    distances: { Full: 70, Shoulder: 60, Chest: 50, Hip: 30 },
  },
  {
    name: "56°",
    type: ClubType.Wedge,
    sortOrder: 2,
    distances: { Full: 95, Shoulder: 70, Chest: 55, Hip: 30 },
  },
  {
    name: "52°",
    type: ClubType.Wedge,
    sortOrder: 3,
    distances: { Full: 95, Shoulder: 75, Chest: 55, Hip: 30 },
  },
  { name: "PW", type: ClubType.Wedge, sortOrder: 4, distances: { Full: 130 } },
  { name: "9 Iron", type: ClubType.Iron, sortOrder: 5, distances: { Full: 145 } },
  { name: "8 Iron", type: ClubType.Iron, sortOrder: 6, distances: { Full: 140 } },
  { name: "7 Iron", type: ClubType.Iron, sortOrder: 7, distances: { Full: 170 } },
  { name: "6 Iron", type: ClubType.Iron, sortOrder: 8, distances: { Full: 165, Shoulder: 110 } },
  { name: "4 Iron", type: ClubType.Iron, sortOrder: 9, distances: { Full: 180 } },
  { name: "Hybrid", type: ClubType.Hybrid, sortOrder: 10, distances: { Full: 200 } },
  { name: "5 Wood", type: ClubType.Wood, sortOrder: 11, distances: { Full: 220 } },
  { name: "Driver", type: ClubType.Driver, sortOrder: 12, distances: { Full: 260 } },
];

async function main() {
  for (const c of CLUBS) {
    const club = await db.club.upsert({
      where: { name: c.name },
      create: { name: c.name, type: c.type, sortOrder: c.sortOrder },
      update: {},
    });

    const swings = Object.entries(c.distances) as [SwingLength, number][];
    for (const [swing, yards] of swings) {
      await db.distance.upsert({
        where: { clubId_swing: { clubId: club.id, swing } },
        create: { clubId: club.id, swing, yards },
        update: {},
      });
    }
  }

  console.log(`Seeded ${CLUBS.length} clubs.`);
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
