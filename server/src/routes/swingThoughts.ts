import { Router } from "express";
import { db } from "../db/client.js";
import { Prisma } from "../generated/prisma/index.js";
import { swingThoughtInputSchema } from "@clam/core";

export const swingThoughtsRouter = Router();

// Ordered the way the page reads: grouped by shot, highest rank first, then
// stable by creation for ties.
swingThoughtsRouter.get("/", async (_req, res) => {
  const thoughts = await db.swingThought.findMany({
    orderBy: [{ shotType: "asc" }, { rank: "desc" }, { createdAt: "asc" }],
  });
  res.json(thoughts);
});

swingThoughtsRouter.post("/", async (req, res) => {
  const parsed = swingThoughtInputSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
    return;
  }
  const thought = await db.swingThought.create({ data: parsed.data });
  res.status(201).json(thought);
});

swingThoughtsRouter.put("/:id", async (req, res) => {
  const parsed = swingThoughtInputSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
    return;
  }
  try {
    const thought = await db.swingThought.update({
      where: { id: req.params.id },
      data: parsed.data,
    });
    res.json(thought);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ error: "Swing thought not found" });
      return;
    }
    throw err;
  }
});

swingThoughtsRouter.delete("/:id", async (req, res) => {
  try {
    await db.swingThought.delete({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ error: "Swing thought not found" });
      return;
    }
    throw err;
  }
});
