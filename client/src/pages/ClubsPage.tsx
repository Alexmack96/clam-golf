import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClubSchema, type CreateClubInput } from "@clam/core";
import { Plus, X, ArrowLeftRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card.js";
import { Skeleton } from "../components/ui/skeleton.js";
import { Badge } from "../components/ui/badge.js";
import { Button } from "../components/ui/button.js";
import { Input } from "../components/ui/input.js";
import { Label } from "../components/ui/label.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select.js";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "../components/ui/dialog.js";
import { ClubIcon, type ClubType } from "../components/ClubIcon.js";
import api from "../lib/api.js";
import { useClubs, MAX_ACTIVE_CLUBS, type ClubRow } from "../hooks/useClubs.js";

const CLUB_TYPES: ClubType[] = ["Driver", "Wood", "Hybrid", "Iron", "Wedge", "Putter"];

function ClubTile({ club, action }: { club: ClubRow; action: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border p-3 flex flex-col items-center gap-2 text-center">
      <div className="size-12 rounded-full bg-primary/10 grid place-items-center">
        <ClubIcon type={club.type} className="size-6 text-primary" />
      </div>
      <div>
        <div className="text-sm font-medium text-foreground">{club.name}</div>
        <Badge variant="outline" className="mt-1 text-[10px]">
          {club.type}
        </Badge>
      </div>
      {action}
    </div>
  );
}

function AddClubDialog({ onCreated }: { onCreated: () => void }) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CreateClubInput>({ resolver: zodResolver(createClubSchema) });

  async function onSubmit(values: CreateClubInput) {
    try {
      await api.post("/api/clubs", values);
      reset();
      setOpen(false);
      onCreated();
    } catch (err) {
      const message =
        (err as { response?: { data?: { error?: string } } }).response?.data?.error ??
        "Could not create club";
      setError("root.serverError", { message });
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) reset();
      }}
    >
      <DialogTrigger asChild>
        <Button size="sm" className="gap-1.5">
          <Plus className="size-4" />
          Add Club
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new club</DialogTitle>
          <DialogDescription>
            It'll land on the bench — swap it into the bag once you're ready.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="space-y-1.5">
            <Label htmlFor="club-name" className="text-xs text-muted-foreground">
              Name
            </Label>
            <Input id="club-name" placeholder="Sand Iron" {...register("name")} />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Type</Label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a club type" />
                  </SelectTrigger>
                  <SelectContent>
                    {CLUB_TYPES.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.type && <p className="text-xs text-destructive mt-1">{errors.type.message}</p>}
          </div>
          {errors.root?.serverError && (
            <p className="text-xs text-destructive">{errors.root.serverError.message}</p>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add club"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function SwapDialog({
  incoming,
  activeClubs,
  onConfirm,
  onOpenChange,
}: {
  incoming: ClubRow;
  activeClubs: ClubRow[];
  onConfirm: (deactivateClubId: string) => void;
  onOpenChange: (open: boolean) => void;
}) {
  const [outgoingId, setOutgoingId] = useState<string>("");

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bag is full ({MAX_ACTIVE_CLUBS}/{MAX_ACTIVE_CLUBS})</DialogTitle>
          <DialogDescription>
            Choose a club to bench to make room for the {incoming.name}.
          </DialogDescription>
        </DialogHeader>
        <Select value={outgoingId} onValueChange={setOutgoingId}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Club to bench" />
          </SelectTrigger>
          <SelectContent>
            {activeClubs.map((c) => (
              <SelectItem key={c.id} value={c.id}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" disabled={!outgoingId} onClick={() => onConfirm(outgoingId)}>
            Swap in
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ClubsPage() {
  const { data, isPending } = useClubs();
  const queryClient = useQueryClient();
  const [swapTarget, setSwapTarget] = useState<ClubRow | null>(null);
  const [error, setPageError] = useState<string | null>(null);

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["clubs"] });

  const benchMutation = useMutation({
    mutationFn: (id: string) => api.patch(`/api/clubs/${id}`, { isActive: false }),
    onSuccess: invalidate,
  });

  const activateMutation = useMutation({
    mutationFn: (id: string) => api.patch(`/api/clubs/${id}`, { isActive: true }),
    onSuccess: invalidate,
    onError: (err: unknown) => {
      const message =
        (err as { response?: { data?: { error?: string } } }).response?.data?.error ??
        "Could not add club to bag";
      setPageError(message);
    },
  });

  const swapMutation = useMutation({
    mutationFn: ({ id, deactivateClubId }: { id: string; deactivateClubId: string }) =>
      api.patch(`/api/clubs/${id}/activate`, { deactivateClubId }),
    onSuccess: () => {
      invalidate();
      setSwapTarget(null);
    },
    onError: (err: unknown) => {
      const message =
        (err as { response?: { data?: { error?: string } } }).response?.data?.error ?? "Swap failed";
      setPageError(message);
    },
  });

  const clubs = data ?? [];
  const activeClubs = clubs.filter((c) => c.isActive).sort((a, b) => a.sortOrder - b.sortOrder);
  const benchedClubs = clubs.filter((c) => !c.isActive).sort((a, b) => a.sortOrder - b.sortOrder);

  function handleAddToBag(club: ClubRow) {
    setPageError(null);
    if (activeClubs.length >= MAX_ACTIVE_CLUBS) {
      setSwapTarget(club);
      return;
    }
    activateMutation.mutate(club.id);
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Clubs</h1>
          <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Manage your bag</p>
        </div>
        <AddClubDialog onCreated={invalidate} />
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs uppercase tracking-wide text-muted-foreground">
              In the Bag
            </CardTitle>
            <CardDescription>
              {activeClubs.length} / {MAX_ACTIVE_CLUBS} clubs
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isPending ? (
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-28 w-full rounded-xl" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activeClubs.map((club) => (
                  <ClubTile
                    key={club.id}
                    club={club}
                    action={
                      <Button
                        size="sm"
                        variant="ghost"
                        className="gap-1 text-xs text-muted-foreground hover:text-destructive"
                        disabled={benchMutation.isPending}
                        onClick={() => benchMutation.mutate(club.id)}
                      >
                        <X className="size-3.5" />
                        Bench
                      </Button>
                    }
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs uppercase tracking-wide text-muted-foreground">
              On the Bench
            </CardTitle>
            <CardDescription>Inactive clubs — kept for when they come back in</CardDescription>
          </CardHeader>
          <CardContent>
            {isPending ? (
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 2 }).map((_, i) => (
                  <Skeleton key={i} className="h-28 w-full rounded-xl" />
                ))}
              </div>
            ) : benchedClubs.length === 0 ? (
              <p className="text-sm text-muted-foreground">No clubs on the bench.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {benchedClubs.map((club) => (
                  <ClubTile
                    key={club.id}
                    club={club}
                    action={
                      <Button
                        size="sm"
                        variant="ghost"
                        className="gap-1 text-xs text-muted-foreground hover:text-primary"
                        disabled={activateMutation.isPending}
                        onClick={() => handleAddToBag(club)}
                      >
                        <ArrowLeftRight className="size-3.5" />
                        Add to bag
                      </Button>
                    }
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {swapTarget && (
        <SwapDialog
          incoming={swapTarget}
          activeClubs={activeClubs}
          onOpenChange={(open) => {
            if (!open) setSwapTarget(null);
          }}
          onConfirm={(deactivateClubId) => swapMutation.mutate({ id: swapTarget.id, deactivateClubId })}
        />
      )}
    </div>
  );
}
