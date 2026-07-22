import * as Sentry from "@sentry/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Keep every open client on the latest deploy without a manual hard refresh.
// The PWA plugin registers the worker with registerType "autoUpdate", which
// activates a new service worker and reloads the page as soon as one is found —
// but only checks on load. Poll the existing registration so an already-open
// tab picks up a push on its own instead of waiting to be reopened. A reload
// mid-round is safe: the card is held in localStorage, not in page memory.
const UPDATE_POLL_MS = 5 * 60 * 1000;
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.ready
    .then((registration) => {
      setInterval(() => {
        registration.update().catch(() => {
          // Offline or the server is briefly unreachable; the next tick retries.
        });
      }, UPDATE_POLL_MS);
    })
    .catch(() => {
      // No worker registered (e.g. dev without PWA) — nothing to poll.
    });
}

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
  sendDefaultPii: true,
});
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { App } from "./App.js";
import { ThemeProvider } from "./context/ThemeContext.js";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </Sentry.ErrorBoundary>
  </StrictMode>,
);
