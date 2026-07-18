import { NavLink } from "react-router-dom";
import { Ruler, Calculator, Settings2 } from "lucide-react";

const mainTabs = [
  { to: "/distances", label: "Distances", Icon: Ruler },
  { to: "/shot-calculator", label: "Calculator", Icon: Calculator },
  { to: "/clubs", label: "Clubs", Icon: Settings2 },
] as const;

export function BottomNav() {
  return (
    <nav
      className="md:hidden shrink-0 z-40 glass-pane border-t border-border app-chrome"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex h-14">
        {mainTabs.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/distances"}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center gap-0.5 transition-all active:scale-[0.92] active:opacity-70 ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            <Icon className="size-5" strokeWidth={1.75} />
            <span className="text-[9.5px] font-medium tracking-wide">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
