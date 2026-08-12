import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo, LogoLockup } from "@/components/Logo";
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
    <PhoneFrame className="items-center justify-center overflow-hidden bg-[#FBF6EF] text-center">
      {/* Oversized watermark of the mark, echoing the brand splash artwork */}
      <Logo
        aria-hidden
        className="pointer-events-none absolute -bottom-16 left-1/2 size-[26rem] -translate-x-1/2 opacity-[0.07]"
      />

      <div className="animate-fade-rise relative flex flex-col items-center">
        <LogoLockup className="w-[17rem]" />
      </div>

      <div className="absolute inset-x-6 bottom-12">
        {ready ? (
          <Link
            to="/onboarding"
            className="animate-fade-rise flex h-13 w-full items-center justify-center rounded-xl bg-primary py-4 font-display text-sm font-semibold text-primary-foreground shadow-soft"
          >
            Continue
          </Link>
        ) : (
          <div className="mx-auto h-1.5 w-24 overflow-hidden rounded-full bg-primary/20">
            <div className="h-full w-1/2 animate-soft-pulse rounded-full bg-primary/70" />
          </div>
        )}
      </div>
    </PhoneFrame>
  );
}
