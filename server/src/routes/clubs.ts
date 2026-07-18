import { Router } from "express";
import { db } from "../db/client.js";
import { Prisma } from "../generated/prisma/index.js";
import { createClubSchema } from "@clam/core";

export const clubsRouter = Router();

const MAX_ACTIVE_CLUBS = 14;

clubsRouter.get("/", async (_req, res) => {
  const clubs = await db.club.findMany({
    include: { distances: true },
    orderBy: { sortOrder: "asc" },
  });
  res.json(clubs);
});

clubsRouter.post("/", async (req, res) => {
  const parsed = createClubSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
    return;
  }
  const { name, type } = parsed.data;

  const { _max } = await db.club.aggregate({ _max: { sortOrder: true } });

  try {
    // New clubs land on the bench (isActive: false) — the caller swaps them
    // into the bag explicitly via PATCH /:id/activate.
    const club = await db.club.create({
      data: { name, type, sortOrder: (_max.sortOrder ?? 0) + 1, isActive: false },
      include: { distances: true },
    });
    res.status(201).json(club);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      res.status(409).json({ error: "A club with that name already exists" });
      return;
    }
    throw err;
  }
});

// Swap a benched club into the bag by benching another active club in the
// same transaction, so the 14-club count never changes.
clubsRouter.patch("/:id/activate", async (req, res) => {
  const { id } = req.params;
  const { deactivateClubId } = req.body as { deactivateClubId?: string };

  if (typeof deactivateClubId !== "string" || !deactivateClubId) {
    res.status(400).json({ error: "deactivateClubId is required" });
    return;
  }
  if (deactivateClubId === id) {
    res.status(400).json({ error: "Cannot swap a club with itself" });
    return;
  }

  const [incoming, outgoing] = await Promise.all([
    db.club.findUnique({ where: { id } }),
    db.club.findUnique({ where: { id: deactivateClubId } }),
  ]);

  if (!incoming) {
    res.status(404).json({ error: "Club not found" });
    return;
  }
  if (!outgoing) {
    res.status(404).json({ error: "Club to bench not found" });
    return;
  }
  if (incoming.isActive) {
    res.status(409).json({ error: "Club is already in the bag" });
    return;
  }
  if (!outgoing.isActive) {
    res.status(409).json({ error: "Club to bench is not currently in the bag" });
    return;
  }

  const [activated] = await db.$transaction([
    db.club.update({
      where: { id },
      data: { isActive: true, sortOrder: outgoing.sortOrder },
      include: { distances: true },
    }),
    db.club.update({ where: { id: deactivateClubId }, data: { isActive: false } }),
  ]);

  res.json(activated);
});

clubsRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { isActive } = req.body as { isActive?: boolean };

  if (typeof isActive !== "boolean") {
    res.status(400).json({ error: "isActive must be a boolean" });
    return;
  }

  if (isActive) {
    const activeCount = await db.club.count({ where: { isActive: true } });
    if (activeCount >= MAX_ACTIVE_CLUBS) {
      res.status(409).json({
        error: `Bag is full (${MAX_ACTIVE_CLUBS}/${MAX_ACTIVE_CLUBS}) — swap out a club instead`,
      });
      return;
    }
  }

  try {
    const club = await db.club.update({ where: { id }, data: { isActive } });
    res.json(club);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ error: "Club not found" });
      return;
    }
    throw err;
  }
});

// Soft delete only — clubs are never removed, just benched, so their
// distance history stays intact if they come back into the bag.
clubsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const club = await db.club.update({ where: { id }, data: { isActive: false } });
    res.json(club);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ error: "Club not found" });
      return;
    }
    throw err;
  }
});
