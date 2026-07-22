import { useState } from "react";
import { Plus, X, UserPlus } from "lucide-react";
import { Button } from "../ui/button.js";
import { Input } from "../ui/input.js";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select.js";
import { useSession } from "../../lib/authClient.js";
import type { CourseRow } from "../../hooks/useCourses.js";
import type { NewPlayer } from "../../hooks/useActiveRound.js";

interface Row {
  name: string;
  teeSetId: string;
}

function defaultTee(course: CourseRow | undefined) {
  return course?.teeSets.find((t) => t.colour === "Yellow")?.id ?? course?.teeSets[0]?.id ?? "";
}

/** Courses grouped by their venue, in the picker's given order. */
function byVenue(courses: CourseRow[]) {
  const groups = new Map<string, CourseRow[]>();
  for (const c of courses) {
    const list = groups.get(c.venue) ?? [];
    list.push(c);
    groups.set(c.venue, list);
  }
  return [...groups.entries()];
}

export function NewRoundDialog({
  courses,
  disabled,
  onCreate,
}: {
  courses: CourseRow[];
  disabled?: boolean;
  onCreate: (courseId: string, players: NewPlayer[]) => void;
}) {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [courseId, setCourseId] = useState(courses[0]?.id ?? "");
  const [rows, setRows] = useState<Row[]>([]);

  const course = courses.find((c) => c.id === courseId) ?? courses[0];

  function reset() {
    const first = courses[0];
    setCourseId(first?.id ?? "");
    setRows([{ name: session?.user.name ?? "", teeSetId: defaultTee(first) }]);
  }

  function pickCourse(id: string) {
    const next = courses.find((c) => c.id === id);
    setCourseId(id);
    // Tee sets belong to a course, so a course change invalidates every row's
    // tee — reset them all to the new course's default.
    setRows((rs) => rs.map((r) => ({ ...r, teeSetId: defaultTee(next) })));
  }

  function addGuest() {
    if (rows.length >= 4) return;
    setRows((rs) => [...rs, { name: "", teeSetId: defaultTee(course) }]);
  }

  function create() {
    onCreate(
      courseId,
      rows.map((r) => ({ name: r.name, teeSetId: r.teeSetId })),
    );
    setOpen(false);
  }

  const canCreate = courseId !== "" && rows.every((r) => r.teeSetId !== "");

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (o) reset();
        setOpen(o);
      }}
    >
      <Button
        size="lg"
        className="h-auto w-full flex-col gap-1.5 rounded-2xl py-6"
        disabled={disabled}
        onClick={() => setOpen(true)}
      >
        <Plus className="size-7" strokeWidth={2.25} />
        <span className="text-[15px] font-semibold">Start a round</span>
        <span className="text-[12px] font-normal opacity-80">
          Toot Hill · Richmond Duke's · Richmond Prince's
        </span>
      </Button>

      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>New round</DialogTitle>
          <DialogDescription>
            Pick a course and who's playing. You're Player 1; add up to three more.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="eyebrow">Course</label>
            <Select value={courseId} onValueChange={pickCourse}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a course" />
              </SelectTrigger>
              <SelectContent>
                {byVenue(courses).map(([venue, list]) => (
                  <SelectGroup key={venue}>
                    <SelectLabel>{venue}</SelectLabel>
                    {list.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="eyebrow">Players</label>
            {rows.map((r, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-muted text-[11px] font-semibold tabular-nums">
                  {i + 1}
                </span>
                <Input
                  value={r.name}
                  placeholder={i === 0 ? "You" : `Player ${i + 1}`}
                  onChange={(e) =>
                    setRows((rs) => rs.map((x, j) => (j === i ? { ...x, name: e.target.value } : x)))
                  }
                  className="h-9 flex-1"
                />
                <Select
                  value={r.teeSetId}
                  onValueChange={(v) =>
                    setRows((rs) => rs.map((x, j) => (j === i ? { ...x, teeSetId: v } : x)))
                  }
                >
                  <SelectTrigger className="h-9 w-[116px] shrink-0 text-[13px]">
                    <SelectValue placeholder="Tees" />
                  </SelectTrigger>
                  <SelectContent>
                    {course?.teeSets.map((t) => (
                      <SelectItem key={t.id} value={t.id}>
                        {t.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {/* Player 1 is always you and cannot be removed. */}
                {i > 0 && (
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="shrink-0"
                    aria-label={`Remove player ${i + 1}`}
                    onClick={() => setRows((rs) => rs.filter((_, j) => j !== i))}
                  >
                    <X className="size-4" />
                  </Button>
                )}
              </div>
            ))}
            {rows.length < 4 && (
              <Button variant="outline" size="sm" className="w-full" onClick={addGuest}>
                <UserPlus className="mr-1.5 size-4" /> Add player
              </Button>
            )}
          </div>

          <Button className="w-full" disabled={!canCreate} onClick={create}>
            Start round
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
