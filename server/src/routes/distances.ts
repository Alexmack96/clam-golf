import { Router } from "express";
import { db } from "../db/client.js";
import { Prisma, SwingLength } from "../generated/prisma/index.js";
import { upsertDistanceSchema } from "@clam/core";

export const distancesRouter = Router();

// Upsert: the wedge chart shows every swing column for every row, including
// ones that don't have a Distance row yet, so saving a previously-empty
// cell needs to create rather than update.
distancesRouter.patch("/:clubId/:swing", async (req, res) => {
  const { clubId, swing } = req.params;
  if (!Object.values(SwingLength).includes(swing as SwingLength)) {
    res.status(400).json({ error: "Invalid swing length" });
    return;
  }
  const parsed = upsertDistanceSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
    return;
  }

  try {
    const distance = await db.distance.upsert({
      where: { clubId_swing: { clubId, swing: swing as SwingLength } },
      update: { yards: parsed.data.yards, measuredAt: new Date() },
      create: { clubId, swing: swing as SwingLength, yards: parsed.data.yards },
    });
    res.json(distance);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2003") {
      res.status(404).json({ error: "Club not found" });
      return;
    }
    throw err;
  }
});

// Clears a cell back to empty rather than leaving a stale/wrong yardage.
distancesRouter.delete("/:clubId/:swing", async (req, res) => {
  const { clubId, swing } = req.params;
  if (!Object.values(SwingLength).includes(swing as SwingLength)) {
    res.status(400).json({ error: "Invalid swing length" });
    return;
  }

  try {
    await db.distance.delete({ where: { clubId_swing: { clubId, swing: swing as SwingLength } } });
    res.status(204).end();
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ error: "Distance not found" });
      return;
    }
    throw err;
  }
});
