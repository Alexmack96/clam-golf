import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Ruler, Satellite, ClipboardList, Brain, MoreHorizontal, Calculator, Settings2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover.js";

// Four destinations plus a More sheet. Clubs and the shot calculator live behind
// More: they are reference tools you reach for occasionally, not the things you
// tap every hole.
const mainTabs = [
  { to: "/distances", label: "Distances", Icon: Ruler },
  { to: "/gps", label: "GPS", Icon: Satellite },
  { to: "/scorecard", label: "Card", Icon: ClipboardList },
  { to: "/swing-thoughts", label: "Think", Icon: Brain },
] as const;

const moreLinks = [
  { to: "/shot-calculator", label: "Shot Calculator", Icon: Calculator },
  { to: "/clubs", label: "Clubs", Icon: Settings2 },
] as const;

const tab = (isActive: boolean) =>
  `flex-1 flex flex-col items-center justify-center gap-0.5 transition-all active:scale-[0.92] active:opacity-70 ${
    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
  }`;

export function BottomNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const moreActive = moreLinks.some((l) => pathname.startsWith(l.to));

  return (
    <nav
      className="md:hidden shrink-0 z-40 glass-pane border-t border-border app-chrome"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex h-14">
        {mainTabs.map(({ to, label, Icon }) => (
          <NavLink key={to} to={to} end={to === "/distances"} className={({ isActive }) => tab(isActive)}>
            <Icon className="size-5" strokeWidth={1.75} />
            <span className="text-[9.5px] font-medium tracking-wide">{label}</span>
          </NavLink>
        ))}

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className={tab(moreActive)} aria-label="More">
            <MoreHorizontal className="size-5" strokeWidth={1.75} />
            <span className="text-[9.5px] font-medium tracking-wide">More</span>
          </PopoverTrigger>
          <PopoverContent side="top" align="end" sideOffset={8} className="w-44 p-1.5">
            {moreLinks.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 rounded-md px-3 py-2.5 text-[14px] transition-colors ${
                    isActive ? "bg-accent text-primary" : "hover:bg-accent/60"
                  }`
                }
              >
                <Icon className="size-4" strokeWidth={1.75} />
                {label}
              </NavLink>
            ))}
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
