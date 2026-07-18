-- Clubs are never hard-deleted: benching a club (swapping it out of the
-- 14-club bag) just flips isActive to false, keeping its distance history.
ALTER TABLE "clubs" ADD COLUMN "isActive" BOOLEAN NOT NULL DEFAULT true;
