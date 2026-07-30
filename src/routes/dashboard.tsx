import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, PenLine, Search } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StarRating } from "@/components/StarRating";
import { SupervisorCard } from "@/components/SupervisorCard";
import { recentReviews, supervisors } from "@/lib/data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard | Supportive Steps" },
      {
        name: "description",
        content:
          "Your Supportive Steps home: find a supervisor, write an anonymous review and see the latest supervision feedback.",
      },
      { property: "og:title", content: "Dashboard | Supportive Steps" },
      {
        property: "og:description",
        content: "Quick actions, recent reviews and suggested clinical supervisors.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <PhoneFrame>
      <header className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Good morning,</p>
          <h1 className="text-2xl">Jordan</h1>
        </div>
        <Link
          to="/notifications"
          aria-label="Notifications"
          className="relative flex size-11 items-center justify-center rounded-full bg-card shadow-soft"
        >
          <Bell className="size-5 text-primary" strokeWidth={1.8} />
          <span className="absolute right-3 top-3 size-2 rounded-full bg-warning" />
        </Link>
      </header>

      <section className="gradient-sage rounded-2xl p-5 text-primary-foreground shadow-soft">
        <h2 className="font-display text-lg font-semibold">You're verified</h2>
        <p className="mt-1 text-sm leading-relaxed text-primary-foreground/85">
          Counseling Student · 42 supervision hours logged this term. Your reviews stay
          fully anonymous.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 text-base">Quick actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/search" className="rounded-2xl bg-card p-4 shadow-soft">
            <span className="flex size-10 items-center justify-center rounded-xl bg-secondary">
              <Search className="size-5 text-primary" strokeWidth={1.8} />
            </span>
            <span className="mt-3 block font-display text-sm font-semibold">
              Find Supervisor
            </span>
            <span className="mt-1 block text-xs text-muted-foreground">
              Filter by state & specialty
            </span>
          </Link>
          <Link
            to="/review/$id"
            params={{ id: supervisors[0].id }}
            className="rounded-2xl bg-card p-4 shadow-soft"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-secondary">
              <PenLine className="size-5 text-primary" strokeWidth={1.8} />
            </span>
            <span className="mt-3 block font-display text-sm font-semibold">Write Review</span>
            <span className="mt-1 block text-xs text-muted-foreground">
              Anonymous & moderated
            </span>
          </Link>
        </div>
      </section>

      <section className="mt-7">
        <h2 className="mb-3 text-base">Recent reviews</h2>
        <div className="space-y-3">
          {recentReviews.map((r) => (
            <article key={r.id} className="rounded-2xl bg-card p-4 shadow-soft">
              <div className="flex items-center justify-between">
                <p className="font-display text-sm font-semibold">{r.supervisorName}</p>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <div className="mt-1">
                <StarRating value={r.rating} />
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{r.body}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-7">
        <h2 className="mb-3 text-base">Suggested supervisors</h2>
        <div className="space-y-3">
          {supervisors.slice(0, 2).map((s) => (
            <SupervisorCard key={s.id} supervisor={s} />
          ))}
        </div>
      </section>

      <BottomNav />
    </PhoneFrame>
  );
}
