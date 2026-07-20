import { Router } from "express";
import { db } from "../db/client.js";
import { Prisma } from "../generated/prisma/index.js";
import { upsertRoundSchema } from "@clam/core";

export const roundsRouter = Router();

const withScores = {
  scores: { include: { hole: { select: { number: true } } } },
  course: { select: { name: true } },
  teeSet: { select: { name: true, colour: true } },
} as const;

roundsRouter.get("/", async (_req, res) => {
  const rounds = await db.round.findMany({
    orderBy: { playedOn: "desc" },
    include: withScores,
  });
  res.json(rounds);
});

roundsRouter.get("/:id", async (req, res) => {
  const round = await db.round.findUnique({ where: { id: req.params.id }, include: withScores });
  if (!round) {
    res.status(404).json({ error: "Round not found" });
    return;
  }
  res.json(round);
});

/**
 * Replaces the server's copy of a round with the phone's.
 *
 * The id comes from the client because the round exists on the phone first —
 * it is played offline and pushed when there is signal. That makes this a plain
 * idempotent replace: retrying a push that already landed is harmless, so a
 * dropped request needs no queue, only the next change to fire.
 */
roundsRouter.put("/:id", async (req, res) => {
  const parsed = upsertRoundSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
    return;
  }
  const { courseId, teeSetId, playedOn, completedAt, scores } = parsed.data;

  // A hole can only be scored on the course it belongs to. Without this a
  // stale phone could file Prince's scores against Duke's card.
  const holeIds = scores.map((s) => s.holeId);
  if (holeIds.length > 0) {
    const valid = await db.hole.count({ where: { id: { in: holeIds }, courseId } });
    if (valid !== new Set(holeIds).size) {
      res.status(400).json({ error: "One or more holes do not belong to that course" });
      return;
    }
  }

  try {
    const round = await db.$transaction(async (tx) => {
      await tx.round.upsert({
        where: { id: req.params.id },
        create: {
          id: req.params.id,
          courseId,
          teeSetId,
          playedOn: new Date(playedOn),
          completedAt: completedAt ? new Date(completedAt) : null,
        },
        update: {
          courseId,
          teeSetId,
          playedOn: new Date(playedOn),
          completedAt: completedAt ? new Date(completedAt) : null,
        },
      });

      // Replace rather than merge: the phone's card is the whole truth, so a
      // hole deleted there must disappear here too.
      await tx.holeScore.deleteMany({ where: { roundId: req.params.id } });
      if (scores.length > 0) {
        await tx.holeScore.createMany({
          data: scores.map((s) => ({ ...s, roundId: req.params.id })),
        });
      }

      return tx.round.findUnique({ where: { id: req.params.id }, include: withScores });
    });

    res.json(round);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2003") {
      res.status(400).json({ error: "Unknown course, tee set or hole" });
      return;
    }
    throw err;
  }
});

roundsRouter.delete("/:id", async (req, res) => {
  try {
    await db.round.delete({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ error: "Round not found" });
      return;
    }
    throw err;
  }
});
