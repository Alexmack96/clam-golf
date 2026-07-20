-- Golf courses, holes and tee sets, for the GPS rangefinder on /gps.
--
-- The split is deliberate: Hole holds geometry that is true regardless of
-- which tees you play (the green outline, a dogleg aim point), while HoleTee
-- holds everything the scorecard prints per tee colour (yardage, par, stroke
-- index). Duke's 17th is a par 5 off white and a par 4 off yellow, so par
-- cannot live on Hole.

CREATE TABLE "courses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0
);
CREATE UNIQUE INDEX "courses_name_key" ON "courses"("name");

-- greenPolygon is a JSON array of [lat, lng] pairs tracing the green, imported
-- from OpenStreetMap. Front and back distances are derived from it by
-- projecting onto the line of play, so it must always describe the same green
-- as greenLat/greenLng. Nullable because a hole exists on the scorecard before
-- anyone has assigned its geometry.
CREATE TABLE "holes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "courseId" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "greenPolygon" TEXT,
    "greenLat" REAL,
    "greenLng" REAL,
    "aimLat" REAL,
    "aimLng" REAL,
    CONSTRAINT "holes_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "holes_courseId_number_key" ON "holes"("courseId", "number");

CREATE TABLE "tee_sets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "courseId" TEXT NOT NULL,
    "colour" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "tee_sets_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "tee_sets_courseId_colour_key" ON "tee_sets"("courseId", "colour");

-- teeLat/teeLng are nullable on purpose: only the yellow set gets real
-- coordinates up front. White and red carry scorecard numbers until someone
-- places their tee boxes, which is a data task rather than a schema change.
CREATE TABLE "hole_tees" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "holeId" TEXT NOT NULL,
    "teeSetId" TEXT NOT NULL,
    "yards" INTEGER NOT NULL,
    "par" INTEGER NOT NULL,
    "strokeIndex" INTEGER NOT NULL,
    "teeLat" REAL,
    "teeLng" REAL,
    CONSTRAINT "hole_tees_holeId_fkey" FOREIGN KEY ("holeId") REFERENCES "holes" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "hole_tees_teeSetId_fkey" FOREIGN KEY ("teeSetId") REFERENCES "tee_sets" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "hole_tees_holeId_teeSetId_key" ON "hole_tees"("holeId", "teeSetId");
