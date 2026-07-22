/**
 * Seeds Richmond Park's two courses from the printed scorecards.
 * Run with: bun run db:seed:courses
 *
 * Fill-only, like seedClubs — it runs on every container boot and must never
 * overwrite green outlines, tee coordinates or aim points that were placed in
 * the app. Only scorecard numbers live here, and those don't change.
 *
 * Geometry (greenPolygon, teeLat/teeLng) is deliberately absent: it comes from
 * the OpenStreetMap import and the assignment editor on /gps, not from here.
 *
 * Card arithmetic checks, all verified against the printed totals:
 *   Duke's   white 6321/71   yellow 5860/70   red 5744/74
 *   Prince's white 5366/68   yellow 5092/68   red 4916/70
 */
import "dotenv/config";
import { db } from "./client.js";
import { TeeColour } from "../generated/prisma/index.js";

type TeeRow = { yards: number; par: number; si: number };
type HoleRow = { number: number } & Record<"white" | "yellow" | "red", TeeRow>;

// Duke's 17th is the one hole where par differs by tee: a par 5 off white,
// a par 4 off yellow. That single row is why par lives on HoleTee.
const DUKES: HoleRow[] = [
  { number: 1,  white: { yards: 361, par: 4, si: 8  }, yellow: { yards: 344, par: 4, si: 8  }, red: { yards: 296, par: 4, si: 10 } },
  { number: 2,  white: { yards: 304, par: 4, si: 18 }, yellow: { yards: 298, par: 4, si: 18 }, red: { yards: 293, par: 4, si: 8  } },
  { number: 3,  white: { yards: 307, par: 4, si: 10 }, yellow: { yards: 303, par: 4, si: 10 }, red: { yards: 299, par: 4, si: 14 } },
  { number: 4,  white: { yards: 409, par: 4, si: 4  }, yellow: { yards: 373, par: 4, si: 4  }, red: { yards: 365, par: 4, si: 4  } },
  { number: 5,  white: { yards: 404, par: 4, si: 2  }, yellow: { yards: 374, par: 4, si: 2  }, red: { yards: 368, par: 4, si: 2  } },
  { number: 6,  white: { yards: 332, par: 4, si: 12 }, yellow: { yards: 329, par: 4, si: 12 }, red: { yards: 324, par: 4, si: 16 } },
  { number: 7,  white: { yards: 177, par: 3, si: 16 }, yellow: { yards: 173, par: 3, si: 16 }, red: { yards: 168, par: 3, si: 18 } },
  { number: 8,  white: { yards: 410, par: 4, si: 6  }, yellow: { yards: 394, par: 4, si: 6  }, red: { yards: 405, par: 5, si: 6  } },
  { number: 9,  white: { yards: 347, par: 4, si: 14 }, yellow: { yards: 329, par: 4, si: 14 }, red: { yards: 322, par: 4, si: 12 } },
  { number: 10, white: { yards: 189, par: 3, si: 11 }, yellow: { yards: 125, par: 3, si: 11 }, red: { yards: 122, par: 3, si: 11 } },
  { number: 11, white: { yards: 316, par: 4, si: 15 }, yellow: { yards: 311, par: 4, si: 15 }, red: { yards: 307, par: 4, si: 5  } },
  { number: 12, white: { yards: 520, par: 5, si: 7  }, yellow: { yards: 516, par: 5, si: 7  }, red: { yards: 513, par: 5, si: 1  } },
  { number: 13, white: { yards: 433, par: 4, si: 3  }, yellow: { yards: 429, par: 4, si: 3  }, red: { yards: 426, par: 5, si: 13 } },
  { number: 14, white: { yards: 433, par: 4, si: 1  }, yellow: { yards: 423, par: 4, si: 1  }, red: { yards: 428, par: 5, si: 3  } },
  { number: 15, white: { yards: 385, par: 4, si: 5  }, yellow: { yards: 316, par: 4, si: 5  }, red: { yards: 305, par: 4, si: 15 } },
  { number: 16, white: { yards: 158, par: 3, si: 17 }, yellow: { yards: 153, par: 3, si: 17 }, red: { yards: 150, par: 3, si: 17 } },
  { number: 17, white: { yards: 489, par: 5, si: 13 }, yellow: { yards: 411, par: 4, si: 13 }, red: { yards: 397, par: 5, si: 7  } },
  { number: 18, white: { yards: 347, par: 4, si: 9  }, yellow: { yards: 259, par: 4, si: 9  }, red: { yards: 256, par: 4, si: 9  } },
];

const PRINCES: HoleRow[] = [
  { number: 1,  white: { yards: 357, par: 4, si: 11 }, yellow: { yards: 335, par: 4, si: 11 }, red: { yards: 316, par: 4, si: 9  } },
  { number: 2,  white: { yards: 162, par: 3, si: 13 }, yellow: { yards: 156, par: 3, si: 13 }, red: { yards: 133, par: 3, si: 17 } },
  { number: 3,  white: { yards: 348, par: 4, si: 7  }, yellow: { yards: 320, par: 4, si: 7  }, red: { yards: 313, par: 4, si: 3  } },
  { number: 4,  white: { yards: 120, par: 3, si: 15 }, yellow: { yards: 114, par: 3, si: 15 }, red: { yards: 117, par: 3, si: 15 } },
  { number: 5,  white: { yards: 367, par: 4, si: 5  }, yellow: { yards: 363, par: 4, si: 5  }, red: { yards: 341, par: 4, si: 5  } },
  // Red SI 13 here and 2 on the 17th: the card photo is ambiguous between the
  // two, and this is the reading that makes the front nine all-odd and the
  // back nine all-even, as a stroke index must be.
  { number: 6,  white: { yards: 322, par: 4, si: 9  }, yellow: { yards: 321, par: 4, si: 9  }, red: { yards: 316, par: 4, si: 13 } },
  { number: 7,  white: { yards: 430, par: 4, si: 1  }, yellow: { yards: 409, par: 4, si: 1  }, red: { yards: 403, par: 5, si: 7  } },
  { number: 8,  white: { yards: 402, par: 4, si: 3  }, yellow: { yards: 379, par: 4, si: 3  }, red: { yards: 361, par: 4, si: 1  } },
  { number: 9,  white: { yards: 476, par: 5, si: 17 }, yellow: { yards: 465, par: 5, si: 17 }, red: { yards: 444, par: 5, si: 11 } },
  { number: 10, white: { yards: 415, par: 4, si: 2  }, yellow: { yards: 408, par: 4, si: 2  }, red: { yards: 402, par: 5, si: 10 } },
  { number: 11, white: { yards: 153, par: 3, si: 18 }, yellow: { yards: 150, par: 3, si: 18 }, red: { yards: 147, par: 3, si: 18 } },
  { number: 12, white: { yards: 359, par: 4, si: 10 }, yellow: { yards: 309, par: 4, si: 10 }, red: { yards: 304, par: 4, si: 14 } },
  { number: 13, white: { yards: 243, par: 3, si: 4  }, yellow: { yards: 223, par: 3, si: 4  }, red: { yards: 217, par: 3, si: 4  } },
  { number: 14, white: { yards: 256, par: 4, si: 16 }, yellow: { yards: 250, par: 4, si: 16 }, red: { yards: 243, par: 4, si: 8  } },
  { number: 15, white: { yards: 273, par: 4, si: 8  }, yellow: { yards: 266, par: 4, si: 8  }, red: { yards: 259, par: 4, si: 6  } },
  { number: 16, white: { yards: 121, par: 3, si: 14 }, yellow: { yards: 99,  par: 3, si: 14 }, red: { yards: 93,  par: 3, si: 16 } },
  { number: 17, white: { yards: 271, par: 4, si: 12 }, yellow: { yards: 266, par: 4, si: 12 }, red: { yards: 261, par: 4, si: 2  } },
  { number: 18, white: { yards: 291, par: 4, si: 6  }, yellow: { yards: 259, par: 4, si: 6  }, red: { yards: 246, par: 4, si: 12 } },
];

// Toot Hill Golf Club, transcribed from the printed card. Men's white and yellow
// share a par and stroke index; red differs only at the 14th (a par 5 off red,
// par 4 off the men's tees), which is why red totals 71 to the men's 70. Totals
// verified below: white 6255/70, yellow 5685/70, red 5186/71.
const TOOT_HILL: HoleRow[] = [
  { number: 1,  white: { yards: 442, par: 4, si: 10 }, yellow: { yards: 422, par: 4, si: 10 }, red: { yards: 394, par: 4, si: 5  } },
  { number: 2,  white: { yards: 382, par: 4, si: 4  }, yellow: { yards: 362, par: 4, si: 4  }, red: { yards: 339, par: 4, si: 3  } },
  { number: 3,  white: { yards: 165, par: 3, si: 16 }, yellow: { yards: 143, par: 3, si: 16 }, red: { yards: 125, par: 3, si: 15 } },
  { number: 4,  white: { yards: 430, par: 4, si: 2  }, yellow: { yards: 393, par: 4, si: 2  }, red: { yards: 371, par: 4, si: 1  } },
  { number: 5,  white: { yards: 372, par: 4, si: 6  }, yellow: { yards: 342, par: 4, si: 6  }, red: { yards: 297, par: 4, si: 11 } },
  { number: 6,  white: { yards: 171, par: 3, si: 12 }, yellow: { yards: 162, par: 3, si: 12 }, red: { yards: 144, par: 3, si: 13 } },
  { number: 7,  white: { yards: 476, par: 5, si: 14 }, yellow: { yards: 436, par: 5, si: 14 }, red: { yards: 426, par: 5, si: 7  } },
  { number: 8,  white: { yards: 258, par: 4, si: 18 }, yellow: { yards: 255, par: 4, si: 18 }, red: { yards: 218, par: 4, si: 17 } },
  { number: 9,  white: { yards: 386, par: 4, si: 8  }, yellow: { yards: 354, par: 4, si: 8  }, red: { yards: 328, par: 4, si: 9  } },
  { number: 10, white: { yards: 410, par: 4, si: 3  }, yellow: { yards: 398, par: 4, si: 3  }, red: { yards: 355, par: 4, si: 2  } },
  { number: 11, white: { yards: 541, par: 5, si: 9  }, yellow: { yards: 512, par: 5, si: 9  }, red: { yards: 475, par: 5, si: 6  } },
  { number: 12, white: { yards: 153, par: 3, si: 13 }, yellow: { yards: 125, par: 3, si: 13 }, red: { yards: 96,  par: 3, si: 12 } },
  { number: 13, white: { yards: 418, par: 4, si: 7  }, yellow: { yards: 379, par: 4, si: 7  }, red: { yards: 349, par: 4, si: 4  } },
  { number: 14, white: { yards: 422, par: 4, si: 1  }, yellow: { yards: 411, par: 4, si: 1  }, red: { yards: 389, par: 5, si: 10 } },
  { number: 15, white: { yards: 173, par: 3, si: 15 }, yellow: { yards: 118, par: 3, si: 15 }, red: { yards: 95,  par: 3, si: 14 } },
  { number: 16, white: { yards: 580, par: 5, si: 5  }, yellow: { yards: 470, par: 5, si: 5  }, red: { yards: 449, par: 5, si: 8  } },
  { number: 17, white: { yards: 132, par: 3, si: 17 }, yellow: { yards: 127, par: 3, si: 17 }, red: { yards: 98,  par: 3, si: 16 } },
  { number: 18, white: { yards: 344, par: 4, si: 11 }, yellow: { yards: 276, par: 4, si: 11 }, red: { yards: 238, par: 4, si: 18 } },
];

const COURSES: { name: string; venue: string; sortOrder: number; holes: HoleRow[] }[] = [
  { name: "Duke's", venue: "Richmond Park", sortOrder: 0, holes: DUKES },
  { name: "Prince's", venue: "Richmond Park", sortOrder: 1, holes: PRINCES },
  { name: "Toot Hill", venue: "Toot Hill Golf Club", sortOrder: 2, holes: TOOT_HILL },
];

const TEE_SETS: { key: "white" | "yellow" | "red"; colour: TeeColour; name: string }[] = [
  { key: "yellow", colour: TeeColour.Yellow, name: "Men's Yellow" },
  { key: "white", colour: TeeColour.White, name: "Men's White" },
  { key: "red", colour: TeeColour.Red, name: "Red" },
];

async function main() {
  for (const c of COURSES) {
    const course = await db.course.upsert({
      where: { name: c.name },
      create: { name: c.name, venue: c.venue, sortOrder: c.sortOrder },
      update: {},
    });

    const holes = new Map<number, string>();
    for (const h of c.holes) {
      const hole = await db.hole.upsert({
        where: { courseId_number: { courseId: course.id, number: h.number } },
        create: { courseId: course.id, number: h.number },
        update: {},
      });
      holes.set(h.number, hole.id);
    }

    for (const t of TEE_SETS) {
      const teeSet = await db.teeSet.upsert({
        where: { courseId_colour: { courseId: course.id, colour: t.colour } },
        create: { courseId: course.id, colour: t.colour, name: t.name },
        update: {},
      });

      for (const h of c.holes) {
        const row = h[t.key];
        await db.holeTee.upsert({
          where: { holeId_teeSetId: { holeId: holes.get(h.number)!, teeSetId: teeSet.id } },
          create: {
            holeId: holes.get(h.number)!,
            teeSetId: teeSet.id,
            yards: row.yards,
            par: row.par,
            strokeIndex: row.si,
          },
          update: {},
        });
      }
    }

    for (const t of TEE_SETS) {
      const yards = c.holes.reduce((n, h) => n + h[t.key].yards, 0);
      const par = c.holes.reduce((n, h) => n + h[t.key].par, 0);
      console.log(`${c.name} ${t.name}: ${yards} yards, par ${par}`);
    }
  }
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
