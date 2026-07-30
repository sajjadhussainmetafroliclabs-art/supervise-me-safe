import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Bookmark, Briefcase, MapPin, PenLine } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { StarRating } from "@/components/StarRating";
import { Button } from "@/components/ui/button";
import { recentReviews, supervisors } from "@/lib/data";

export const Route = createFileRoute("/supervisor/$id")({
  loader: ({ params }) => {
    const supervisor = supervisors.find((s) => s.id === params.id);
    if (!supervisor) throw notFound();
    return { supervisor };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Supervisor unavailable | Supportive Steps" }, { name: "robots", content: "noindex" }],
      };
    }
    const { supervisor } = loaderData;
    const title = `${supervisor.name}, ${supervisor.credentials} | Supportive Steps`;
    const description = `${supervisor.specialty} supervisor in ${supervisor.city}, ${supervisor.state}. ${supervisor.rating} stars from ${supervisor.reviewCount} anonymous supervisee reviews.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: SupervisorProfile,
});

function SupervisorProfile() {
  const { supervisor } = Route.useLoaderData();
  const reviews = recentReviews.filter((r) => r.supervisorId === supervisor.id);
  const initials = supervisor.name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((p: string) => p[0])
    .join("");

  return (
    <PhoneFrame>
      <ScreenHeader backTo="/search" title="Supervisor profile" />

      <section className="rounded-2xl bg-card p-5 text-center shadow-soft">
        <span className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-secondary font-display text-xl font-semibold text-primary">
          {initials}
        </span>
        <h2 className="mt-4 font-display text-lg font-semibold">{supervisor.name}</h2>
        <p className="text-sm text-muted-foreground">
          {supervisor.credentials} · {supervisor.licenseType}
        </p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <StarRating value={supervisor.rating} />
          <span className="text-sm font-semibold">{supervisor.rating}</span>
          <span className="text-xs text-muted-foreground">
            ({supervisor.reviewCount} reviews)
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-left">
          <div className="rounded-xl bg-secondary p-3">
            <p className="flex items-center gap-1 text-[11px] text-secondary-foreground/80">
              <Briefcase className="size-3" /> Experience
            </p>
            <p className="mt-1 font-display text-sm font-semibold">{supervisor.years} years</p>
          </div>
          <div className="rounded-xl bg-secondary p-3">
            <p className="flex items-center gap-1 text-[11px] text-secondary-foreground/80">
              <MapPin className="size-3" /> Location
            </p>
            <p className="mt-1 font-display text-sm font-semibold">
              {supervisor.city}, {supervisor.state}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h3 className="mb-2 text-base">Specialization</h3>
        <p className="rounded-2xl bg-card p-4 text-sm leading-relaxed text-muted-foreground shadow-soft">
          <span className="mb-2 block font-display text-sm font-semibold text-foreground">
            {supervisor.specialty}
          </span>
          {supervisor.bio}
        </p>
      </section>

      <section className="mt-6">
        <h3 className="mb-3 text-base">Anonymous reviews</h3>
        <div className="space-y-3">
          {reviews.length ? (
            reviews.map((r) => (
              <article key={r.id} className="rounded-2xl bg-card p-4 shadow-soft">
                <div className="flex items-center justify-between">
                  <StarRating value={r.rating} />
                  <span className="text-xs text-muted-foreground">{r.date}</span>
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
            ))
          ) : (
            <p className="rounded-2xl bg-card p-5 text-center text-sm text-muted-foreground shadow-soft">
              No published reviews yet. Be the first to share your experience.
            </p>
          )}
        </div>
      </section>

      <div className="sticky bottom-0 -mx-5 mt-8 flex gap-3 border-t border-border bg-background/95 px-5 py-4 backdrop-blur">
        <Button asChild size="lg" className="h-12 flex-1 rounded-xl font-display">
          <Link to="/review/$id" params={{ id: supervisor.id }}>
            <PenLine className="size-4" /> Write Review
          </Link>
        </Button>
        <Button variant="secondary" size="lg" className="h-12 rounded-xl px-5">
          <Bookmark className="size-4" /> Save
        </Button>
      </div>
    </PhoneFrame>
  );
}
