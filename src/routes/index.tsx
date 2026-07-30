import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { PhoneFrame } from "@/components/PhoneFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Supportive Steps — Trusted Clinical Supervisor Reviews" },
      {
        name: "description",
        content:
          "Supportive Steps helps counseling students and licensed associates find trusted clinical supervisors and share safe, anonymous supervision reviews.",
      },
      { property: "og:title", content: "Supportive Steps — Trusted Clinical Supervisor Reviews" },
      {
        property: "og:description",
        content:
          "Find trusted clinical supervisors, share anonymous supervision experiences, and build better professional relationships.",
      },
    ],
  }),
  component: Splash,
});

function Splash() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <PhoneFrame className="items-center justify-center gradient-sage text-center">
      <div className="animate-fade-rise flex flex-col items-center">
        <Logo className="size-28 animate-soft-pulse" />
        <h1 className="mt-8 text-3xl text-primary-foreground">Supportive Steps</h1>
        <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-primary-foreground/80">
          Empowering Future Counselors Through Trusted Support
        </p>
      </div>

      <div className="absolute inset-x-6 bottom-12">
        {ready ? (
          <Link
            to="/onboarding"
            className="animate-fade-rise flex h-13 w-full items-center justify-center rounded-xl bg-card py-4 font-display text-sm font-semibold text-primary shadow-soft"
          >
            Continue
          </Link>
        ) : (
          <div className="mx-auto h-1.5 w-24 overflow-hidden rounded-full bg-primary-foreground/25">
            <div className="h-full w-1/2 animate-soft-pulse rounded-full bg-primary-foreground/70" />
          </div>
        )}
      </div>
    </PhoneFrame>
  );
}
