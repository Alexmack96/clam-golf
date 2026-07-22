-- Multi-player scorecards, course venues, and audit + soft-delete columns.
--
-- Three shapes change at once (see ADR 0001 and ADR 0003):
--   1. Rounds gain up to four Players; the tee set moves from Round onto Player.
--   2. HoleScore is re-keyed from (roundId, holeId) to (playerId, holeId).
--   3. Every domain table gets createdAt/updatedAt/createdById/updatedById; the
--      three scoring tables also get deletedAt/deletedById (soft-delete).
--
-- SQLite specifics that shape this file:
--   * ADD COLUMN cannot default to CURRENT_TIMESTAMP, so backfilled timestamps
--     use a constant sentinel; new rows get now() from Prisma.
--   * A column bound to a foreign key cannot be dropped, so rounds (losing
--     teeSetId) and hole_scores (re-keyed) are rebuilt, not altered.
--   * defer_foreign_keys holds FK checks until COMMIT so the table swaps and the
--     Player backfill are not rejected mid-migration.

PRAGMA defer_foreign_keys = ON;

-- 1. Audit columns on the existing tables (ADD COLUMN, constant defaults).
ALTER TABLE "clubs" ADD COLUMN "createdAt" DATETIME NOT NULL DEFAULT '2026-07-22 00:00:00';
ALTER TABLE "clubs" ADD COLUMN "updatedAt" DATETIME NOT NULL DEFAULT '2026-07-22 00:00:00';
ALTER TABLE "clubs" ADD COLUMN "createdById" TEXT REFERENCES "user"("id");
ALTER TABLE "clubs" ADD COLUMN "updatedById" TEXT REFERENCES "user"("id");

ALTER TABLE "distances" ADD COLUMN "createdAt" DATETIME NOT NULL DEFAULT '2026-07-22 00:00:00';
ALTER TABLE "distances" ADD COLUMN "createdById" TEXT REFERENCES "user"("id");
ALTER TABLE "distances" ADD COLUMN "updatedById" TEXT REFERENCES "user"("id");

ALTER TABLE "courses" ADD COLUMN "venue" TEXT NOT NULL DEFAULT 'Richmond Park';
ALTER TABLE "courses" ADD COLUMN "createdAt" DATETIME NOT NULL DEFAULT '2026-07-22 00:00:00';
ALTER TABLE "courses" ADD COLUMN "updatedAt" DATETIME NOT NULL DEFAULT '2026-07-22 00:00:00';
ALTER TABLE "courses" ADD COLUMN "createdById" TEXT REFERENCES "user"("id");
ALTER TABLE "courses" ADD COLUMN "updatedById" TEXT REFERENCES "user"("id");

ALTER TABLE "holes" ADD COLUMN "createdAt" DATETIME NOT NULL DEFAULT '2026-07-22 00:00:00';
ALTER TABLE "holes" ADD COLUMN "updatedAt" DATETIME NOT NULL DEFAULT '2026-07-22 00:00:00';
ALTER TABLE "holes" ADD COLUMN "createdById" TEXT REFERENCES "user"("id");
ALTER TABLE "holes" ADD COLUMN "updatedById" TEXT REFERENCES "user"("id");

ALTER TABLE "tee_sets" ADD COLUMN "createdAt" DATETIME NOT NULL DEFAULT '2026-07-22 00:00:00';
ALTER TABLE "tee_sets" ADD COLUMN "updatedAt" DATETIME NOT NULL DEFAULT '2026-07-22 00:00:00';
ALTER TABLE "tee_sets" ADD COLUMN "createdById" TEXT REFERENCES "user"("id");
ALTER TABLE "tee_sets" ADD COLUMN "updatedById" TEXT REFERENCES "user"("id");

ALTER TABLE "hole_tees" ADD COLUMN "createdAt" DATETIME NOT NULL DEFAULT '2026-07-22 00:00:00';
ALTER TABLE "hole_tees" ADD COLUMN "updatedAt" DATETIME NOT NULL DEFAULT '2026-07-22 00:00:00';
ALTER TABLE "hole_tees" ADD COLUMN "createdById" TEXT REFERENCES "user"("id");
ALTER TABLE "hole_tees" ADD COLUMN "updatedById" TEXT REFERENCES "user"("id");

ALTER TABLE "swing_thoughts" ADD COLUMN "createdById" TEXT REFERENCES "user"("id");
ALTER TABLE "swing_thoughts" ADD COLUMN "updatedById" TEXT REFERENCES "user"("id");

-- 2. Players. Backfill one Player 1 ("You") per existing round, carrying that
--    round's tee set — the seam ADR 0001 promised for the single-player era.
CREATE TABLE "players" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "roundId" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "teeSetId" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,
    "updatedById" TEXT,
    "deletedAt" DATETIME,
    "deletedById" TEXT,
    CONSTRAINT "players_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "rounds" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "players_teeSetId_fkey" FOREIGN KEY ("teeSetId") REFERENCES "tee_sets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "players_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user" ("id"),
    CONSTRAINT "players_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "user" ("id"),
    CONSTRAINT "players_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "user" ("id")
);
CREATE UNIQUE INDEX "players_roundId_position_key" ON "players"("roundId", "position");

INSERT INTO "players" ("id", "roundId", "position", "name", "teeSetId")
    SELECT "id" || '-p1', "id", 1, 'You', "teeSetId" FROM "rounds";

-- 3. Re-key hole_scores onto players (via each round's Player 1).
CREATE TABLE "new_hole_scores" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "playerId" TEXT NOT NULL,
    "holeId" TEXT NOT NULL,
    "strokes" INTEGER NOT NULL,
    "putts" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,
    "updatedById" TEXT,
    "deletedAt" DATETIME,
    "deletedById" TEXT,
    CONSTRAINT "hole_scores_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "hole_scores_holeId_fkey" FOREIGN KEY ("holeId") REFERENCES "holes" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "hole_scores_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user" ("id"),
    CONSTRAINT "hole_scores_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "user" ("id"),
    CONSTRAINT "hole_scores_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "user" ("id")
);
INSERT INTO "new_hole_scores" ("id", "playerId", "holeId", "strokes", "putts")
    SELECT hs."id", p."id", hs."holeId", hs."strokes", hs."putts"
    FROM "hole_scores" hs
    JOIN "players" p ON p."roundId" = hs."roundId" AND p."position" = 1;
DROP TABLE "hole_scores";
ALTER TABLE "new_hole_scores" RENAME TO "hole_scores";
CREATE UNIQUE INDEX "hole_scores_playerId_holeId_key" ON "hole_scores"("playerId", "holeId");

-- 4. Rounds lose teeSetId (now on Player) and gain audit + soft-delete columns.
CREATE TABLE "new_rounds" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "courseId" TEXT NOT NULL,
    "playedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,
    "updatedById" TEXT,
    "deletedAt" DATETIME,
    "deletedById" TEXT,
    CONSTRAINT "rounds_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "rounds_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user" ("id"),
    CONSTRAINT "rounds_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "user" ("id"),
    CONSTRAINT "rounds_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "user" ("id")
);
INSERT INTO "new_rounds" ("id", "courseId", "playedOn", "completedAt", "createdAt", "updatedAt")
    SELECT "id", "courseId", "playedOn", "completedAt", "createdAt", "updatedAt" FROM "rounds";
DROP TABLE "rounds";
ALTER TABLE "new_rounds" RENAME TO "rounds";
CREATE INDEX "rounds_playedOn_idx" ON "rounds"("playedOn");
