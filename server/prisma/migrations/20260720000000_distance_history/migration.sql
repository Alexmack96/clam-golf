-- History table: one row per previous yards value a distance held.
CREATE TABLE "distance_history" (
    "id"         INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
    "distanceId" TEXT     NOT NULL,
    "clubId"     TEXT     NOT NULL,
    "swing"      TEXT     NOT NULL,
    "yards"      INTEGER  NOT NULL,
    "changedAt"  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- On every yards edit, snapshot the value being replaced. SQLite has no
-- temporal-table feature, so a trigger is the standard way to get an audit
-- trail without touching every call site that updates "distances".
CREATE TRIGGER "distances_history_on_update"
AFTER UPDATE ON "distances"
FOR EACH ROW
WHEN OLD."yards" IS NOT NEW."yards"
BEGIN
  INSERT INTO "distance_history" ("distanceId", "clubId", "swing", "yards", "changedAt")
  VALUES (OLD."id", OLD."clubId", OLD."swing", OLD."yards", CURRENT_TIMESTAMP);
END;
