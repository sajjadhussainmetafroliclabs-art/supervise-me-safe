import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/review-submitted")({
  head: () => ({
    meta: [
      { title: "Review Submitted | Supportive Steps" },
      {
        name: "description",
        content:
          "Your anonymous supervision review has been submitted and is now in moderation before publication.",
      },
      { property: "og:title", content: "Review Submitted | Supportive Steps" },
      {
        property: "og:description",
        content: "Moderation, publishing and notification — here's what happens next.",
      },
    ],
  }),
  component: ReviewSubmitted,
});

const steps = [
  {
    title: "Moderation",
    detail: "A moderator checks for identifying details and community guideline fit.",
    state: "active",
  },
  { title: "Publish", detail: "Your review appears on the supervisor's profile.", state: "todo" },
  { title: "Notification", detail: "We let you know the moment it goes live.", state: "todo" },
] as const;

function ReviewSubmitted() {
  return (
    <PhoneFrame>
      <div className="animate-fade-rise mt-10 flex flex-col items-center text-center">
        <div className="flex size-40 items-center justify-center rounded-full bg-secondary">
          <span className="flex size-24 items-center justify-center rounded-full bg-success">
            <Check className="size-12 text-success-foreground" strokeWidth={2.5} />
          </span>
        </div>
        <h1 className="mt-8 text-2xl">Review submitted</h1>
        <p className="mt-3 max-w-[19rem] text-sm leading-relaxed text-muted-foreground">
          Thank you for helping the next cohort choose supervision with confidence.
          Your identity was not attached to this submission.
        </p>
      </div>

      <ol className="mt-10 space-y-1">
        {steps.map((s, i) => (
          <li key={s.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "flex size-8 items-center justify-center rounded-full font-display text-xs font-semibold",
                  s.state === "active"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground",
                )}
              >
                {i + 1}
              </span>
              {i < steps.length - 1 ? <span className="h-12 w-px bg-border" /> : null}
            </div>
            <div className="pb-4">
              <p className="font-display text-sm font-semibold">{s.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-auto space-y-3">
        <Button asChild size="lg" className="h-13 w-full rounded-xl py-6 font-display">
          <Link to="/dashboard">Back to dashboard</Link>
        </Button>
        <Button asChild variant="secondary" size="lg" className="h-12 w-full rounded-xl">
          <Link to="/search">Find another supervisor</Link>
        </Button>
      </div>
    </PhoneFrame>
  );
}
