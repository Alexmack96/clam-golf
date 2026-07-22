import type { RequestHandler } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth.js";
import { auditContext } from "../db/auditContext.js";

export const requireAuth: RequestHandler = async (req, res, next) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  req.user = session.user;
  req.session = session.session;
  // Run the rest of the request inside the audit store so the Prisma extension
  // can stamp createdById/updatedById from this user.
  auditContext.run({ userId: session.user.id }, () => next());
};
