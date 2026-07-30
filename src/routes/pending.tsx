import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pending")({
  head: () => ({
    meta: [
      { title: "Account Under Review | Supportive Steps" },
      {
        name: "description",
        content:
          "Your Supportive Steps account is being verified. Approval usually takes one to two business days.",
      },
      { property: "og:title", content: "Account Under Review | Supportive Steps" },
      {
        property: "og:description",
        content: "We're confirming your credentials — approval typically takes 1–2 business days.",
      },
    ],
  }),
  component: Pending,
});

function Pending() {
  return (
    <PhoneFrame className="items-center justify-center text-center">
      <div className="animate-fade-rise flex flex-col items-center">
        <div className="flex size-48 items-center justify-center rounded-3xl bg-secondary">
          <svg viewBox="0 0 100 100" className="size-28" role="img" aria-label="Hourglass">
            <rect x="24" y="14" width="52" height="7" rx="3.5" className="fill-primary" />
            <rect x="24" y="79" width="52" height="7" rx="3.5" className="fill-primary" />
            <path d="M32 21h36c0 16-14 22-14 29s14 13 14 29H32c0-16 14-22 14-29s-14-13-14-29z" className="fill-sage/40" />
            <path d="M38 74c0-9 12-13 12-13s12 4 12 13z" className="fill-beige animate-soft-pulse" />
          </svg>
        </div>

        <h1 className="mt-10 text-2xl">Your account is under review</h1>
        <p className="mt-3 max-w-[19rem] text-sm leading-relaxed text-muted-foreground">
          Our team is confirming your credentials. Most accounts are approved within
          one to two business days — we'll notify you by email as soon as you're in.
        </p>

        <div className="mt-8 w-full rounded-2xl bg-card p-4 text-left shadow-soft">
          <p className="font-display text-sm font-semibold">What happens next</p>
          <ol className="mt-3 space-y-2 text-xs leading-relaxed text-muted-foreground">
            <li>1. Credential check by a moderator</li>
            <li>2. Account approval notification</li>
            <li>3. Full access to search and reviews</li>
          </ol>
        </div>
      </div>

      <Button asChild size="lg" className="mt-10 h-13 w-full rounded-xl py-6 font-display">
        <Link to="/dashboard">Preview the dashboard</Link>
      </Button>
    </PhoneFrame>
  );
}
