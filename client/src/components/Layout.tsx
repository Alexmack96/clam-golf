import { useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "../lib/authClient.js";
import { Navbar } from "./Navbar.js";
import { BottomNav } from "./BottomNav.js";

export function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
  }, [pathname]);

  async function handleSignOut() {
    await signOut();
    navigate("/logged-out");
  }

  return (
    <div className="fixed inset-0 flex flex-col">
      <div className="app-atmosphere" aria-hidden />
      <Navbar onSignOut={handleSignOut} />
      <main ref={mainRef} className="flex-1 overflow-y-auto overscroll-contain px-4 py-8 sm:px-6 md:py-12">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
