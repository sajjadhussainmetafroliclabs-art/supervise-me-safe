import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "How Supportive Steps Works | Onboarding" },
      {
        name: "description",
        content:
          "Discover how Supportive Steps connects counseling students with trusted clinical supervisors through safe, anonymous reviews.",
      },
      { property: "og:title", content: "How Supportive Steps Works" },
      {
        property: "og:description",
        content: "Find supervisors, share anonymous experiences, grow professionally.",
      },
    ],
  }),
  component: Onboarding,
});

const slides = [
  {
    title: "Find Trusted Clinical Supervisors",
    body: "Browse verified supervisors by state, specialty and license type — with honest ratings from peers who trained under them.",
    art: <StudentSupervisorArt />,
  },
  {
    title: "Share Safe Anonymous Experiences",
    body: "Your identity is never attached to a review. Moderation keeps feedback constructive, factual and emotionally safe.",
    art: <AnonymousArt />,
  },
  {
    title: "Build Better Professional Relationships",
    body: "Choose supervision that fits your growth path, so your pre-licensure hours build real clinical confidence.",
    art: <GrowthArt />,
  },
];

function Onboarding() {
  const [i, setI] = useState(0);
  const navigate = useNavigate();
  const slide = slides[i];
  const last = i === slides.length - 1;

  return (
    <PhoneFrame>
      <div className="flex justify-end">
        <Link to="/auth" className="text-sm font-medium text-muted-foreground">
          Skip
        </Link>
      </div>

      <div key={i} className="animate-fade-rise flex flex-1 flex-col items-center justify-center text-center">
        <div className="flex size-56 items-center justify-center rounded-3xl bg-secondary">
          {slide.art}
        </div>
        <h1 className="mt-10 text-2xl leading-snug">{slide.title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{slide.body}</p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {slides.map((s, idx) => (
          <span
            key={s.title}
            className={cn(
              "h-1.5 rounded-full transition-all",
              idx === i ? "w-6 bg-primary" : "w-1.5 bg-border",
            )}
          />
        ))}
      </div>

      <Button
        size="lg"
        className="mt-6 h-13 rounded-xl py-6 font-display"
        onClick={() => (last ? navigate({ to: "/auth" }) : setI(i + 1))}
      >
        {last ? "Get Started" : "Next"}
      </Button>
    </PhoneFrame>
  );
}

function StudentSupervisorArt() {
  return (
    <svg viewBox="0 0 120 120" className="size-40" role="img" aria-label="Student and supervisor">
      <circle cx="42" cy="42" r="14" className="fill-primary" />
      <path d="M20 92c0-14 10-24 22-24s22 10 22 24z" className="fill-primary/70" />
      <circle cx="82" cy="48" r="12" className="fill-sage" />
      <path d="M62 94c0-12 9-20 20-20s20 8 20 20z" className="fill-beige" />
    </svg>
  );
}

function AnonymousArt() {
  return (
    <svg viewBox="0 0 120 120" className="size-40" role="img" aria-label="Anonymous review">
      <rect x="20" y="26" width="80" height="54" rx="14" className="fill-card" />
      <rect x="32" y="42" width="46" height="6" rx="3" className="fill-sage" />
      <rect x="32" y="56" width="34" height="6" rx="3" className="fill-beige" />
      <circle cx="84" cy="86" r="18" className="fill-primary" />
      <path
        d="M78 86v-5a6 6 0 0 1 12 0v5"
        className="stroke-primary-foreground"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="76" y="86" width="16" height="12" rx="3" className="fill-primary-foreground" />
    </svg>
  );
}

function GrowthArt() {
  return (
    <svg viewBox="0 0 120 120" className="size-40" role="img" aria-label="Growth path">
      <rect x="20" y="76" width="20" height="22" rx="6" className="fill-beige" />
      <rect x="48" y="58" width="20" height="40" rx="6" className="fill-sage" />
      <rect x="76" y="34" width="20" height="64" rx="6" className="fill-primary" />
      <circle cx="86" cy="22" r="7" className="fill-beige" />
    </svg>
  );
}
