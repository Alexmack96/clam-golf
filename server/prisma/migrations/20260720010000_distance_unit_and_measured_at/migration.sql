-- Unit the yardage was measured in. All existing rows are yards.
ALTER TABLE "distances" ADD COLUMN "unit" TEXT NOT NULL DEFAULT 'Yards';

-- Day the distance was actually measured/verified (range session), distinct
-- from "updatedAt" (last edit time). Existing rows predate this column, so
-- backfill them to the day it was introduced as a baseline.
ALTER TABLE "distances" ADD COLUMN "measuredAt" DATETIME NOT NULL DEFAULT '2026-07-19 00:00:00';
