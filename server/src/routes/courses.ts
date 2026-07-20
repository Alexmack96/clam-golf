import { Router } from "express";
import { db } from "../db/client.js";
import { Prisma } from "../generated/prisma/index.js";
import {
  assignGreenSchema,
  setAimPointSchema,
  setTeePositionSchema,
  centroid,
  type Ring,
} from "@clam/core";

export const coursesRouter = Router();

/**
 * Green outlines are stored as JSON text (SQLite has no array type) but the
 * API speaks arrays in both directions, so no caller has to know that.
 */
function parseRing(json: string | null): Ring | null {
  if (!json) return null;
  const parsed = JSON.parse(json) as Ring;
  return parsed.length >= 3 ? parsed : null;
}

coursesRouter.get("/", async (_req, res) => {
  const courses = await db.course.findMany({
    orderBy: { sortOrder: "asc" },
    include: {
      teeSets: { orderBy: { colour: "asc" } },
      holes: {
        orderBy: { number: "asc" },
        include: { tees: true },
      },
    },
  });

  res.json(
    courses.map((c) => ({
      ...c,
      holes: c.holes.map((h) => ({ ...h, greenPolygon: parseRing(h.greenPolygon) })),
    })),
  );
});

// Binds a green outline to a hole. The centre is derived here rather than
// accepted from the client so it can never disagree with its own outline —
// front and back distances are projections of that outline, and a centre that
// belonged to a different green would produce plausible-looking wrong numbers.
coursesRouter.patch("/holes/:id/green", async (req, res) => {
  const { id } = req.params;

  if (req.body?.greenPolygon === null) {
    const hole = await db.hole.update({
      where: { id },
      data: { greenPolygon: null, greenLat: null, greenLng: null },
    });
    res.json({ ...hole, greenPolygon: null });
    return;
  }

  const parsed = assignGreenSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
    return;
  }

  const ring = parsed.data.greenPolygon as Ring;
  const centre = centroid(ring);

  try {
    const hole = await db.hole.update({
      where: { id },
      data: {
        greenPolygon: JSON.stringify(ring),
        greenLat: centre.lat,
        greenLng: centre.lng,
      },
    });
    res.json({ ...hole, greenPolygon: ring });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ error: "Hole not found" });
      return;
    }
    throw err;
  }
});

// The dogleg corner or layup target the hole is played through. Survives
// between rounds — once you have decided where to lay up on the 12th, the
// marker is waiting there next time.
coursesRouter.patch("/holes/:id/aim", async (req, res) => {
  const parsed = setAimPointSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
    return;
  }
  const { aimLat, aimLng } = parsed.data;
  if ((aimLat === null) !== (aimLng === null)) {
    res.status(400).json({ error: "aimLat and aimLng must be set or cleared together" });
    return;
  }

  try {
    const hole = await db.hole.update({ where: { id: req.params.id }, data: { aimLat, aimLng } });
    res.json({ ...hole, greenPolygon: parseRing(hole.greenPolygon) });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ error: "Hole not found" });
      return;
    }
    throw err;
  }
});

coursesRouter.patch("/hole-tees/:id/position", async (req, res) => {
  const parsed = setTeePositionSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
    return;
  }
  const { teeLat, teeLng } = parsed.data;
  if ((teeLat === null) !== (teeLng === null)) {
    res.status(400).json({ error: "teeLat and teeLng must be set or cleared together" });
    return;
  }

  try {
    const holeTee = await db.holeTee.update({
      where: { id: req.params.id },
      data: { teeLat, teeLng },
    });
    res.json(holeTee);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ error: "Tee not found" });
      return;
    }
    throw err;
  }
});
