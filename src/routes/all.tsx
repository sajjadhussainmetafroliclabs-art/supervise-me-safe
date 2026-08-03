import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/all")({
  head: () => ({
    meta: [
      { title: "All Screens | Supportive Steps" },
      {
        name: "description",
        content:
          "Every Supportive Steps screen on one page: onboarding, verification, dashboard, search, reviews, profile and settings.",
      },
      { property: "og:title", content: "All Screens | Supportive Steps" },
      {
        property: "og:description",
        content: "A single-page overview of the complete Supportive Steps app flow.",
      },
    ],
  }),
  component: AllScreens,
});

import { supervisors } from "@/lib/data";

const mainScreens: { step: number; label: string; path: string }[] = [
  { step: 1, label: "Splash", path: "/" },
  { step: 2, label: "Onboarding", path: "/onboarding" },
  { step: 3, label: "Sign Up / Login", path: "/auth" },
  { step: 4, label: "Select Role", path: "/role" },
  { step: 5, label: "Verification", path: "/verification" },
  { step: 6, label: "Terms & Consent", path: "/terms" },
  { step: 7, label: "Pending Approval", path: "/pending" },
  { step: 8, label: "Dashboard", path: "/dashboard" },
  { step: 9, label: "Search Supervisors", path: "/search" },
  { step: 10, label: "Supervisor Profile", path: `/supervisor/${supervisors[0].id}` },
  { step: 11, label: "Write Review", path: `/review/${supervisors[0].id}` },
  { step: 12, label: "Review Submitted", path: "/review-submitted" },
  { step: 13, label: "Notifications", path: "/notifications" },
  { step: 14, label: "My Profile", path: "/profile" },
  { step: 15, label: "Settings", path: "/settings" },
];

const innerScreens: { step: number; label: string; path: string }[] = [
  ...supervisors.map((s, i) => ({
    step: i + 1,
    label: `Profile — ${s.name}`,
    path: `/supervisor/${s.id}`,
  })),
  ...supervisors.map((s, i) => ({
    step: supervisors.length + i + 1,
    label: `Review — ${s.name}`,
    path: `/review/${s.id}`,
  })),
];


type Screen = { step: number; label: string; path: string };

function Grid({ items }: { items: Screen[] }) {
  return (
    <div className="mx-auto mt-8 grid max-w-6xl grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
      {items.map((s) => (
        <figure key={s.path} className="flex flex-col items-center gap-3">
          <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-lift">
            <iframe
              src={s.path}
              title={`${s.label} screen`}
              loading="lazy"
              width={320}
              height={640}
              className="block h-[640px] w-[320px] border-0"
            />
          </div>
          <figcaption className="text-sm font-medium text-foreground">
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
              {s.step}
            </span>
            {s.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function AllScreens() {
  return (
    <div className="min-h-screen gradient-calm px-6 py-12">
      <header className="mx-auto max-w-6xl text-center">
        <h1 className="font-heading text-3xl font-semibold text-foreground">
          Supportive Steps — all screens
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The complete flow plus every inner page on a single page.
        </p>
      </header>

      <h2 className="mx-auto mt-10 max-w-6xl font-heading text-xl font-semibold text-foreground">
        Main flow
      </h2>
      <Grid items={mainScreens} />

      <h2 className="mx-auto mt-14 max-w-6xl font-heading text-xl font-semibold text-foreground">
        Inner pages
      </h2>
      <Grid items={innerScreens} />
    </div>
  );
}

