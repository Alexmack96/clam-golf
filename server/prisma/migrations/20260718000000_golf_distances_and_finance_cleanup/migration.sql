-- Drop bank-import staging tables and other finance features that carried over
-- from clam-finance-tracker and are no longer wired up in this golf fork.
DROP TABLE IF EXISTS "CategoryRule";
DROP TABLE IF EXISTS "monzo_api_transaction";
DROP TABLE IF EXISTS "plaid_item";
DROP TABLE IF EXISTS "plaid_transaction";
DROP TABLE IF EXISTS "monzo_credential";
DROP TABLE IF EXISTS "amex_transaction";
DROP TABLE IF EXISTS "barclays_transaction";
DROP TABLE IF EXISTS "santander_transaction";
DROP TABLE IF EXISTS "hsbc_transaction";
DROP TABLE IF EXISTS "chase_transaction";
DROP TABLE IF EXISTS "sofi_transaction";
DROP TABLE IF EXISTS "note";
DROP TABLE IF EXISTS "tab";
DROP TABLE IF EXISTS "investment_snapshot";
DROP TABLE IF EXISTS "investment_account";

-- Golf: clubs and their carry yardages, normalised so a club can have one
-- (full swing) or several (wedge partial-swing) distance rows.
CREATE TABLE "club" (
    "id"        TEXT    NOT NULL PRIMARY KEY,
    "name"      TEXT    NOT NULL,
    "type"      TEXT    NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0
);
CREATE UNIQUE INDEX "club_name_key" ON "club"("name");

CREATE TABLE "distance" (
    "id"        TEXT     NOT NULL PRIMARY KEY,
    "clubId"    TEXT     NOT NULL,
    "swing"     TEXT     NOT NULL DEFAULT 'Full',
    "yards"     INTEGER  NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "distance_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "club" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "distance_clubId_swing_key" ON "distance"("clubId", "swing");
