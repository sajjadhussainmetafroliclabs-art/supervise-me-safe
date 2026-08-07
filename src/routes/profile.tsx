import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Bookmark, ChevronRight, PenLine } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { SupervisorCard } from "@/components/SupervisorCard";
import { supervisors } from "@/lib/data";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Profile | Supportive Steps" },
      {
        name: "description",
        content:
          "See your verification status, review activity and saved clinical supervisors on Supportive Steps.",
      },
      { property: "og:title", content: "My Profile | Supportive Steps" },
      {
        property: "og:description",
        content: "Verification status, review count and saved supervisors.",
      },
    ],
  }),
  component: Profile,
});

function Profile() {
  return (
    <PhoneFrame>
      <ScreenHeader
        title="My profile"
        action={
          <Link
            to="/edit-profile"
            aria-label="Edit profile"
            className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-accent"
          >
            <PenLine className="size-4" />
          </Link>
        }
      />

      <section className="rounded-2xl bg-card p-5 text-center shadow-soft">
        <span className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-secondary font-display text-xl font-semibold text-primary">
          JE
        </span>
        <h2 className="mt-4 font-display text-lg font-semibold">Jordan Ellis</h2>
        <p className="text-sm text-muted-foreground">Counseling Student · Austin, Texas</p>
        <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-success/12 px-3 py-1 text-xs font-medium text-success">
          <BadgeCheck className="size-3.5" /> Verified
        </p>
      </section>

      <section className="mt-4 grid grid-cols-3 gap-3">
        <Stat label="Reviews" value="7" />
        <Stat label="Saved" value="4" />
        <Stat label="Hours" value="42" />
      </section>

      <section className="mt-6">
        <h3 className="mb-3 text-base">Personal info</h3>
        <div className="divide-y divide-border overflow-hidden rounded-2xl bg-card shadow-soft">
          <Row label="Email" value="jordan.ellis@university.edu" />
          <Row label="Program" value="M.Ed. Clinical Mental Health" />
          <Row label="License track" value="LPC-Associate" />
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base">Saved supervisors</h3>
          <Link to="/search" className="flex items-center text-xs font-medium text-primary">
            Browse <ChevronRight className="size-3.5" />
          </Link>
        </div>
        <div className="space-y-3">
          {supervisors.slice(2).map((s) => (
            <SupervisorCard key={s.id} supervisor={s} />
          ))}
        </div>
      </section>

      <section className="mt-6 flex items-center gap-3 rounded-2xl bg-secondary p-4">
        <PenLine className="size-5 shrink-0 text-primary" />
        <p className="text-xs leading-relaxed text-secondary-foreground">
          Your published reviews are anonymous — supervisors can never trace them to
          this profile.
        </p>
      </section>

      <BottomNav />
    </PhoneFrame>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-card p-4 text-center shadow-soft">
      <p className="font-display text-xl font-semibold text-primary">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 p-4">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="truncate text-sm font-medium">{value}</span>
    </div>
  );
}
