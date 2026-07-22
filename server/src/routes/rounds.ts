import { Router } from "express";
import { db } from "../db/client.js";
import { currentUserId } from "../db/auditContext.js";
import { Prisma } from "../generated/prisma/index.js";
import { upsertRoundSchema } from "@clam/core";

export const roundsRouter = Router();

// A round is its players, each player their tee set and their own scores. The
// card renders straight from this shape.
const withPlayers = {
  players: {
    where: { deletedAt: null },
    orderBy: { position: "asc" },
    include: {
      teeSet: { select: { name: true, colour: true } },
      scores: {
        where: { deletedAt: null },
        include: { hole: { select: { number: true } } },
      },
    },
  },
  course: { select: { name: true, venue: true } },
} as const;

roundsRouter.get("/", async (_req, res) => {
  const rounds = await db.round.findMany({
    where: { deletedAt: null },
    orderBy: { playedOn: "desc" },
    include: withPlayers,
  });
  res.json(rounds);
});

roundsRouter.get("/:id", async (req, res) => {
  const round = await db.round.findFirst({
    where: { id: req.params.id, deletedAt: null },
    include: withPlayers,
  });
  if (!round) {
    res.status(404).json({ error: "Round not found" });
    return;
  }
  res.json(round);
});

/**
 * Replaces the server's copy of a round with the phone's.
 *
 * The id comes from the client because the round exists on the phone first — it
 * is played offline and pushed when there is signal. That makes this a plain
 * idempotent replace: retrying a push that already landed is harmless. Players
 * and scores are recreated wholesale each push (one device, one writer, nothing
 * to merge); the round itself is only ever soft-deleted, so a push revives a
 * round that was deleted from history rather than silently failing.
 */
roundsRouter.put("/:id", async (req, res) => {
  const parsed = upsertRoundSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
    return;
  }
  const { courseId, playedOn, completedAt, players } = parsed.data;

  // A hole can only be scored on the course it belongs to; a tee set can only
  // be played if it belongs to that course too. Without these a stale phone
  // could file Prince's scores, or a Duke's tee, against the wrong card.
  const holeIds = [...new Set(players.flatMap((p) => p.scores.map((s) => s.holeId)))];
  if (holeIds.length > 0) {
    const valid = await db.hole.count({ where: { id: { in: holeIds }, courseId } });
    if (valid !== holeIds.length) {
      res.status(400).json({ error: "One or more holes do not belong to that course" });
      return;
    }
  }
  const teeSetIds = [...new Set(players.map((p) => p.teeSetId))];
  const validTees = await db.teeSet.count({ where: { id: { in: teeSetIds }, courseId } });
  if (validTees !== teeSetIds.length) {
    res.status(400).json({ error: "One or more tee sets do not belong to that course" });
    return;
  }

  try {
    const round = await db.$transaction(async (tx) => {
      await tx.round.upsert({
        where: { id: req.params.id },
        create: {
          id: req.params.id,
          courseId,
          playedOn: new Date(playedOn),
          completedAt: completedAt ? new Date(completedAt) : null,
        },
        update: {
          courseId,
          playedOn: new Date(playedOn),
          completedAt: completedAt ? new Date(completedAt) : null,
          // A push always means the round is live again.
          deletedAt: null,
          deletedById: null,
        },
      });

      // Replace rather than merge: deleting the players cascades their scores,
      // then both are recreated from the phone's whole truth. Top-level
      // createMany (not nested) keeps the audit stamp in reach — see ADR 0003.
      await tx.player.deleteMany({ where: { roundId: req.params.id } });
      await tx.player.createMany({
        data: players.map((p) => ({
          id: p.id,
          roundId: req.params.id,
          position: p.position,
          name: p.name,
          teeSetId: p.teeSetId,
        })),
      });
      const scoreRows = players.flatMap((p) =>
        p.scores.map((s) => ({
          playerId: p.id,
          holeId: s.holeId,
          strokes: s.strokes,
          putts: s.putts,
        })),
      );
      if (scoreRows.length > 0) {
        await tx.holeScore.createMany({ data: scoreRows });
      }

      return tx.round.findUnique({ where: { id: req.params.id }, include: withPlayers });
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

/**
 * Soft-delete: a round removed from history stays in the database so a mis-tap
 * is recoverable (ADR 0003). The row is stamped, not dropped, and every read
 * filters deletedAt IS NULL.
 */
roundsRouter.delete("/:id", async (req, res) => {
  const existing = await db.round.findFirst({
    where: { id: req.params.id, deletedAt: null },
    select: { id: true },
  });
  if (!existing) {
    res.status(404).json({ error: "Round not found" });
    return;
  }
  await db.round.update({
    where: { id: req.params.id },
    data: { deletedAt: new Date(), deletedById: currentUserId() },
  });
  res.status(204).end();
});
