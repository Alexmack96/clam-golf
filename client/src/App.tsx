import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute.js";
import { Layout } from "./components/Layout.js";
import { LoginPage } from "./pages/LoginPage.js";
import { LoggedOutPage } from "./pages/LoggedOutPage.js";
import { DistancesPage } from "./pages/DistancesPage.js";
import { ShotCalculatorPage } from "./pages/ShotCalculatorPage.js";
import { ClubsPage } from "./pages/ClubsPage.js";
import { GpsPage } from "./pages/GpsPage.js";
import { ScorecardPage } from "./pages/ScorecardPage.js";
import { SwingThoughtsPage } from "./pages/SwingThoughtsPage.js";

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logged-out" element={<LoggedOutPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/distances" replace />} />
          <Route path="/distances" element={<DistancesPage />} />
          <Route path="/shot-calculator" element={<ShotCalculatorPage />} />
          <Route path="/gps" element={<GpsPage />} />
          <Route path="/scorecard" element={<ScorecardPage />} />
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/swing-thoughts" element={<SwingThoughtsPage />} />
          <Route path="*" element={<Navigate to="/distances" replace />} />
        </Route>
      </Route>
    </Routes>
  );
}
