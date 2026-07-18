-- Drop the last finance-tracker leftovers (Category/Transaction) and the
-- couple-tracker "owner" concept (Alex/Casey/Joint) that came with them —
-- none of it applies to a single-golfer app.
DROP TABLE IF EXISTS "Transaction";
DROP TABLE IF EXISTS "Category";
ALTER TABLE "user" DROP COLUMN "owner";

-- Rename golf tables to plural.
ALTER TABLE "club" RENAME TO "clubs";
ALTER TABLE "distance" RENAME TO "distances";
