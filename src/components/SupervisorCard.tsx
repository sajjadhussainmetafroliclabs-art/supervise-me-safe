import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import type { Supervisor } from "@/lib/data";

export function SupervisorCard({ supervisor }: { supervisor: Supervisor }) {
  const initials = supervisor.name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <Link
      to="/supervisor/$id"
      params={{ id: supervisor.id }}
      className="flex gap-4 rounded-2xl bg-card p-4 shadow-soft transition-shadow hover:shadow-lift"
    >
      <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary font-display text-base font-semibold text-primary">
        {initials}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-sm font-semibold">{supervisor.name}</span>
        <span className="block text-xs text-muted-foreground">
          {supervisor.credentials} · {supervisor.specialty}
        </span>
        <span className="mt-2 flex items-center gap-2">
          <StarRating value={supervisor.rating} />
          <span className="text-xs font-medium text-foreground">{supervisor.rating}</span>
          <span className="text-xs text-muted-foreground">({supervisor.reviewCount})</span>
        </span>
        <span className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="size-3" /> {supervisor.city}, {supervisor.state}
        </span>
      </span>
    </Link>
  );
}
