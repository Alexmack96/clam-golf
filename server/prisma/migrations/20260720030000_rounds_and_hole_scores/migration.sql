-- Scorecards: a round of golf and what each hole cost.
--
-- rounds.id has no default. The id is minted on the phone, because a round is
-- played offline in localStorage and pushed up as one whole document — it needs
-- an identity before the server has ever heard of it, so that the push can be a
-- retryable upsert rather than a create-then-update dance.

CREATE TABLE "rounds" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "courseId" TEXT NOT NULL,
    "teeSetId" TEXT NOT NULL,
    "playedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    -- Null while still in play; an abandoned nine is still a round.
    "completedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "rounds_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "rounds_teeSetId_fkey" FOREIGN KEY ("teeSetId") REFERENCES "tee_sets" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX "rounds_playedOn_idx" ON "rounds"("playedOn");

-- Strokes are gross; no handicap is applied anywhere in this app. Putts are
-- nullable so a hole can be scored with one tap, and are what make
-- green-in-regulation derivable instead of another field to fill in.
CREATE TABLE "hole_scores" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "roundId" TEXT NOT NULL,
    "holeId" TEXT NOT NULL,
    "strokes" INTEGER NOT NULL,
    "putts" INTEGER,
    CONSTRAINT "hole_scores_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "rounds" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "hole_scores_holeId_fkey" FOREIGN KEY ("holeId") REFERENCES "holes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "hole_scores_roundId_holeId_key" ON "hole_scores"("roundId", "holeId");
