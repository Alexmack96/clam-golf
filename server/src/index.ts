import { config } from "dotenv";
config({ path: import.meta.dirname + "/../../.env" });
import * as Sentry from "@sentry/node";
import express from "express";
import { join } from "path";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { requireAuth } from "./middleware/auth.js";
import { usersRouter } from "./routes/users.js";
import { distancesRouter } from "./routes/distances.js";
import { clubsRouter } from "./routes/clubs.js";

Sentry.init({ dsn: env.SENTRY_DSN, environment: env.SENTRY_ENVIRONMENT });

const app = express();

const trustedOrigins = env.TRUSTED_ORIGINS.split(",").map((o) => o.trim());

app.use(
  cors({
    origin: trustedOrigins,
    credentials: true,
  }),
);

app.use(helmet());

app.use(express.json({ limit: "50kb" }));
app.use(express.urlencoded({ extended: true, limit: "50kb" }));

if (env.NODE_ENV === "production") {
  const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.post("/api/auth/sign-in/*path", authLimiter);
}
app.all("/api/auth/*path", toNodeHandler(auth));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/me", requireAuth, (req, res) => {
  const { id, email, name } = req.user!;
  res.json({ user: { id, email, name } });
});

app.use("/api/admin/users", requireAuth, usersRouter);
app.use("/api/distances", requireAuth, distancesRouter);
app.use("/api/clubs", requireAuth, clubsRouter);

if (env.NODE_ENV === "production") {
  const clientDist = join(import.meta.dirname, "../../client/dist");
  app.use(express.static(clientDist));

  // SPA fallback: serve index.html for any non API route
  app.get("/*path", (_req, res) => {
    res.sendFile(join(clientDist, "index.html"));
  });
}

Sentry.setupExpressErrorHandler(app);
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`Backend running on port ${env.PORT}`);
});
