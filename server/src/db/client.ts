import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "../generated/prisma/index.js";
import { currentUserId } from "./auditContext.js";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL! });

// Every one of our domain tables carries createdById/updatedById. Better Auth's
// own tables do not, so they are excluded — stamping a column they lack would
// throw. deletedById is stamped by hand in the delete routes, not here.
const AUDITED = new Set([
  "Club",
  "Distance",
  "Course",
  "Hole",
  "TeeSet",
  "HoleTee",
  "Round",
  "Player",
  "HoleScore",
  "SwingThought",
]);

/** Fills createdById/updatedById on a create payload, without clobbering an explicit value. */
function stampCreate(data: Record<string, unknown>, uid: string) {
  if (data.createdById === undefined) data.createdById = uid;
  if (data.updatedById === undefined) data.updatedById = uid;
}

/**
 * Prisma client with automatic audit stamping.
 *
 * createdById/updatedById come from the request's user (see auditContext) rather
 * than from every call site. Only top-level writes are intercepted, so the
 * scoring routes create players and scores as top-level createMany calls instead
 * of nested writes — that keeps them in reach of this stamp. See ADR 0003.
 */
export const db = new PrismaClient({ adapter }).$extends({
  query: {
    $allModels: {
      async $allOperations({ model, operation, args, query }) {
        const uid = currentUserId();
        if (!uid || !model || !AUDITED.has(model)) {
          return query(args as never);
        }
        const a = args as Record<string, unknown>;
        switch (operation) {
          case "create": {
            if (a.data) stampCreate(a.data as Record<string, unknown>, uid);
            break;
          }
          case "createMany": {
            const d = a.data;
            if (Array.isArray(d)) d.forEach((row) => stampCreate(row as Record<string, unknown>, uid));
            else if (d) stampCreate(d as Record<string, unknown>, uid);
            break;
          }
          case "update":
          case "updateMany": {
            const d = a.data as Record<string, unknown> | undefined;
            if (d && d.updatedById === undefined) d.updatedById = uid;
            break;
          }
          case "upsert": {
            if (a.create) stampCreate(a.create as Record<string, unknown>, uid);
            const u = a.update as Record<string, unknown> | undefined;
            if (u && u.updatedById === undefined) u.updatedById = uid;
            break;
          }
        }
        return query(args as never);
      },
    },
  },
});
