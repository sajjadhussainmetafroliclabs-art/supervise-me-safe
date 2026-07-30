import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { SupervisorCard } from "@/components/SupervisorCard";
import { Input } from "@/components/ui/input";
import { licenseTypes, specialties, states, supervisors } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search Clinical Supervisors | Supportive Steps" },
      {
        name: "description",
        content:
          "Search verified clinical supervisors by state, city, specialty and license type, with peer ratings from counseling students.",
      },
      { property: "og:title", content: "Search Clinical Supervisors | Supportive Steps" },
      {
        property: "og:description",
        content: "Filter supervisors by state, city, specialty and license type.",
      },
    ],
  }),
  component: SearchScreen,
});

type Filters = { state?: string; specialty?: string; licenseType?: string };

function SearchScreen() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>({});

  const results = useMemo(
    () =>
      supervisors.filter((s) => {
        const q = query.trim().toLowerCase();
        const matchesQuery =
          !q ||
          s.name.toLowerCase().includes(q) ||
          s.specialty.toLowerCase().includes(q) ||
          s.city.toLowerCase().includes(q);
        return (
          matchesQuery &&
          (!filters.state || s.state === filters.state) &&
          (!filters.specialty || s.specialty === filters.specialty) &&
          (!filters.licenseType || s.licenseType === filters.licenseType)
        );
      }),
    [query, filters],
  );

  const toggle = (key: keyof Filters, value: string) =>
    setFilters((p) => ({ ...p, [key]: p[key] === value ? undefined : value }));

  return (
    <PhoneFrame>
      <ScreenHeader
        backTo="/dashboard"
        title="Find a supervisor"
        subtitle="Verified supervisors, reviewed by peers."
      />

      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Name, specialty or city"
          className="h-12 rounded-xl pl-11"
        />
      </div>

      <div className="mt-5 space-y-4">
        <FilterRow label="State" options={states} active={filters.state} onSelect={(v) => toggle("state", v)} />
        <FilterRow
          label="Specialty"
          options={specialties}
          active={filters.specialty}
          onSelect={(v) => toggle("specialty", v)}
        />
        <FilterRow
          label="License type"
          options={licenseTypes}
          active={filters.licenseType}
          onSelect={(v) => toggle("licenseType", v)}
        />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-base">{results.length} supervisors</h2>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <SlidersHorizontal className="size-3.5" /> Sorted by rating
        </span>
      </div>

      <div className="mt-3 space-y-3">
        {results.length ? (
          results
            .slice()
            .sort((a, b) => b.rating - a.rating)
            .map((s) => <SupervisorCard key={s.id} supervisor={s} />)
        ) : (
          <p className="rounded-2xl bg-card p-6 text-center text-sm text-muted-foreground shadow-soft">
            No supervisors match these filters yet.
          </p>
        )}
      </div>

      <BottomNav />
    </PhoneFrame>
  );
}

function FilterRow({
  label,
  options,
  active,
  onSelect,
}: {
  label: string;
  options: string[];
  active?: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onSelect(o)}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
              active === o
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground shadow-soft",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
