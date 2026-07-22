import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  swingThoughtInputSchema,
  shotTypeSchema,
  swingPhaseSchema,
  type SwingThoughtInput,
  type ShotType,
  type SwingPhase,
} from "@clam/core";
import { Plus, Pencil, ChevronDown, Trash2 } from "lucide-react";
import { Card } from "../components/ui/card.js";
import { Skeleton } from "../components/ui/skeleton.js";
import { Badge } from "../components/ui/badge.js";
import { Button } from "../components/ui/button.js";
import { Input } from "../components/ui/input.js";
import { Textarea } from "../components/ui/textarea.js";
import { Label } from "../components/ui/label.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select.js";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible.js";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../components/ui/dialog.js";
import {
  useSwingThoughts,
  useSwingThoughtMutations,
  type SwingThoughtRow,
} from "../hooks/useSwingThoughts.js";

const SHOT_TYPES = shotTypeSchema.options;
const SWING_PHASES = swingPhaseSchema.options;

// What the modal is doing: creating a fresh thought pre-set to a shot, or
// editing an existing one.
type Editing =
  | { mode: "create"; shotType: ShotType }
  | { mode: "edit"; thought: SwingThoughtRow };

function phaseLabel(phase: SwingPhase) {
  return phase;
}

function ThoughtCard({ thought, onEdit }: { thought: SwingThoughtRow; onEdit: () => void }) {
  return (
    <Card className="flex items-start gap-4 p-4">
      <div className="flex flex-col items-center justify-center shrink-0 w-12">
        <span className="text-2xl font-bold tabular-nums text-primary leading-none">
          {thought.rank}
        </span>
        <span className="text-[9px] uppercase tracking-wide text-muted-foreground mt-0.5">rank</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-base font-medium text-foreground break-words">{thought.text}</p>
        </div>
        {thought.note && (
          <p className="text-sm text-muted-foreground mt-1 break-words">{thought.note}</p>
        )}
        <Badge variant="outline" className="mt-2 text-[10px]">
          {phaseLabel(thought.phase)}
        </Badge>
      </div>
      <Button
        size="icon-sm"
        variant="ghost"
        className="shrink-0 text-muted-foreground hover:text-foreground"
        onClick={onEdit}
        aria-label="Edit thought"
      >
        <Pencil className="size-4" />
      </Button>
    </Card>
  );
}

function ShotSection({
  shotType,
  thoughts,
  onAdd,
  onEdit,
}: {
  shotType: ShotType;
  thoughts: SwingThoughtRow[];
  onAdd: () => void;
  onEdit: (t: SwingThoughtRow) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="border border-border rounded-xl">
      <CollapsibleTrigger className="w-full flex items-center justify-between gap-3 px-4 py-3 group">
        <div className="flex items-center gap-3">
          <span className="text-base font-semibold text-foreground">{shotType}</span>
          <Badge variant="secondary" className="text-[10px]">
            {thoughts.length}
          </Badge>
        </div>
        <ChevronDown className="size-5 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4 space-y-3">
        {thoughts.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nothing here yet.</p>
        ) : (
          thoughts.map((t) => <ThoughtCard key={t.id} thought={t} onEdit={() => onEdit(t)} />)
        )}
        <Button variant="outline" className="w-full gap-1.5 border-dashed" onClick={onAdd}>
          <Plus className="size-4" />
          Add {shotType} thought
        </Button>
      </CollapsibleContent>
    </Collapsible>
  );
}

function ThoughtDialog({
  editing,
  onClose,
}: {
  editing: Editing;
  onClose: () => void;
}) {
  const { create, update, remove } = useSwingThoughtMutations();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const defaults: SwingThoughtInput =
    editing.mode === "edit"
      ? {
          shotType: editing.thought.shotType,
          phase: editing.thought.phase,
          rank: editing.thought.rank,
          text: editing.thought.text,
          note: editing.thought.note ?? undefined,
        }
      : { shotType: editing.shotType, phase: "Setup", rank: 50, text: "", note: undefined };

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SwingThoughtInput>({
    resolver: zodResolver(swingThoughtInputSchema),
    defaultValues: defaults,
  });

  async function onSubmit(values: SwingThoughtInput) {
    const input: SwingThoughtInput = { ...values, note: values.note?.trim() || undefined };
    try {
      if (editing.mode === "edit") {
        await update.mutateAsync({ id: editing.thought.id, input });
      } else {
        await create.mutateAsync(input);
      }
      onClose();
    } catch {
      setError("root.serverError", { message: "Could not save — try again" });
    }
  }

  async function onDelete() {
    if (editing.mode !== "edit") return;
    await remove.mutateAsync(editing.thought.id);
    onClose();
  }

  return (
    <Dialog open onOpenChange={(next) => !next && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{editing.mode === "edit" ? "Edit thought" : "New thought"}</DialogTitle>
          <DialogDescription>
            A cue for one kind of shot, ranked by how much it deserves your attention.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Shot</Label>
              <Controller
                name="shotType"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SHOT_TYPES.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Phase</Label>
              <Controller
                name="phase"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SWING_PHASES.map((p) => (
                        <SelectItem key={p} value={p}>
                          {p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="st-text" className="text-xs text-muted-foreground">
              Thought
            </Label>
            <Input id="st-text" placeholder="Weight forward" {...register("text")} />
            {errors.text && <p className="text-xs text-destructive">{errors.text.message}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="st-rank" className="text-xs text-muted-foreground">
              Rank (0–100)
            </Label>
            <Input
              id="st-rank"
              type="number"
              min={0}
              max={100}
              {...register("rank", { valueAsNumber: true })}
            />
            {errors.rank && <p className="text-xs text-destructive">{errors.rank.message}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="st-note" className="text-xs text-muted-foreground">
              Note (optional)
            </Label>
            <Textarea
              id="st-note"
              rows={3}
              placeholder="Feels like my hands stay ahead through impact."
              {...register("note")}
            />
            {errors.note && <p className="text-xs text-destructive">{errors.note.message}</p>}
          </div>

          {errors.root?.serverError && (
            <p className="text-xs text-destructive">{errors.root.serverError.message}</p>
          )}

          <DialogFooter className="sm:justify-between">
            {editing.mode === "edit" ? (
              confirmDelete ? (
                <Button
                  type="button"
                  variant="destructive"
                  className="gap-1.5"
                  disabled={remove.isPending}
                  onClick={onDelete}
                >
                  <Trash2 className="size-4" />
                  Confirm delete
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="ghost"
                  className="gap-1.5 text-muted-foreground hover:text-destructive"
                  onClick={() => setConfirmDelete(true)}
                >
                  <Trash2 className="size-4" />
                  Delete
                </Button>
              )
            ) : (
              <span />
            )}
            <div className="flex gap-2">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function SwingThoughtsPage() {
  const { data, isPending } = useSwingThoughts();
  const [editing, setEditing] = useState<Editing | null>(null);

  const thoughts = data ?? [];
  const byShot = (shot: ShotType) => thoughts.filter((t) => t.shotType === shot);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Swing Thoughts</h1>
          <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
            One shot at a time, highest impact first
          </p>
        </div>
        <Button
          size="icon"
          className="rounded-full shrink-0"
          onClick={() => setEditing({ mode: "create", shotType: "Driver" })}
          aria-label="Add swing thought"
        >
          <Plus className="size-5" />
        </Button>
      </div>

      {isPending ? (
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-14 w-full rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {SHOT_TYPES.map((shot) => (
            <ShotSection
              key={shot}
              shotType={shot}
              thoughts={byShot(shot)}
              onAdd={() => setEditing({ mode: "create", shotType: shot })}
              onEdit={(t) => setEditing({ mode: "edit", thought: t })}
            />
          ))}
        </div>
      )}

      {editing && (
        <ThoughtDialog
          key={editing.mode === "edit" ? editing.thought.id : `create-${editing.shotType}`}
          editing={editing}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  );
}
