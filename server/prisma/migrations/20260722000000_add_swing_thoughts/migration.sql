-- Swing thoughts: cues held in mind for a kind of shot, ranked so the
-- highest-impact one sits on top within its shot type.
--
-- ShotType is deliberately its own enum, distinct from ClubType (see
-- docs/adr/0002). SQLite has no native enums, so both are stored as TEXT and
-- validated in Zod / Prisma, not by the database.

CREATE TABLE "swing_thoughts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shotType" TEXT NOT NULL,
    "phase" TEXT NOT NULL,
    -- 0–100; sorted desc within a shotType.
    "rank" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "note" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "swing_thoughts_shotType_rank_idx" ON "swing_thoughts"("shotType", "rank");
