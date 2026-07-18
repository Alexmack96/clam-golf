export type ClubType = "Driver" | "Wood" | "Hybrid" | "Iron" | "Wedge" | "Putter";

// Simple, consistent-stroke glyphs (matches the lucide-react look used elsewhere)
// distinguishing club head shape at a glance — no external image assets.
export function ClubIcon({ type, className }: { type: ClubType; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "Driver":
      return (
        <svg {...common}>
          <path d="M5 21 17 5" />
          <path d="M17 5c2.2-1 4 .3 4 2.4 0 3-3 6.6-6.4 6.6-1.4 0-2.3-.6-2.6-1.5" />
        </svg>
      );
    case "Wood":
      return (
        <svg {...common}>
          <path d="M6 21 16 6" />
          <ellipse cx="17.5" cy="6.5" rx="3.4" ry="2.6" transform="rotate(35 17.5 6.5)" />
        </svg>
      );
    case "Hybrid":
      return (
        <svg {...common}>
          <path d="M6 21 15.5 7.5" />
          <path d="M15.5 7.5c0-2 1.6-3.3 3.4-2.9 1.6.4 2.4 2.1 1.8 3.9-.7 2-2.7 3-4.3 2.4-1-.4-1.3-1.4-.9-2.4Z" />
        </svg>
      );
    case "Iron":
      return (
        <svg {...common}>
          <path d="M8 21 15 9" />
          <path d="M15 9 20 5.5c.6-.4.6-1.1 0-1.4-1.5-.8-3.7-.3-5 1.1L12 8.5" />
        </svg>
      );
    case "Wedge":
      return (
        <svg {...common}>
          <path d="M8 21 14 10" />
          <path d="M14 10 19.5 5c.7-.6.5-1.5-.4-1.7-2-.5-4.4.4-5.7 2.2L11.5 8" />
        </svg>
      );
    case "Putter":
      return (
        <svg {...common}>
          <path d="M9 21 13 8" />
          <path d="M13 8V4" />
          <path d="M11.5 8.5h4L17 12h-8Z" />
        </svg>
      );
  }
}
