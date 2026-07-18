import { Router } from "express";
import { db } from "../db/client.js";
import { SwingLength } from "../generated/prisma/index.js";

export const distancesRouter = Router();

distancesRouter.get("/", async (_req, res) => {
  const clubs = await db.club.findMany({
    include: { distances: true },
    orderBy: { sortOrder: "asc" },
  });
  res.json(clubs);
});

distancesRouter.patch("/:clubId/:swing", async (req, res) => {
  const { clubId, swing } = req.params;
  if (!Object.values(SwingLength).includes(swing as SwingLength)) {
    res.status(400).json({ error: "Invalid swing length" });
    return;
  }
  const yards = Number(req.body.yards);
  if (!Number.isInteger(yards) || yards <= 0) {
    res.status(400).json({ error: "yards must be a positive integer" });
    return;
  }

  const distance = await db.distance.update({
    where: { clubId_swing: { clubId, swing: swing as SwingLength } },
    data: { yards },
  });
  res.json(distance);
});
