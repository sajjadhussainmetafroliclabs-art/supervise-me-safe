import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { StarRating } from "@/components/StarRating";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { experienceTags, supervisors } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/review/$id")({
  loader: ({ params }) => {
    const supervisor = supervisors.find((s) => s.id === params.id);
    if (!supervisor) throw notFound();
    return { supervisor };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Review unavailable | Supportive Steps" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `Write an anonymous review of ${loaderData.supervisor.name} | Supportive Steps`;
    const description =
      "Share a moderated, fully anonymous account of your clinical supervision experience to help future supervisees.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: WriteReview,
});

const MAX = 1000;

function WriteReview() {
  const { supervisor } = Route.useLoaderData();
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [body, setBody] = useState("");

  const valid = rating > 0 && body.trim().length >= 40;

  return (
    <PhoneFrame>
      <ScreenHeader
        backTo="/search"
        title="Write a review"
        subtitle={`About ${supervisor.name}, ${supervisor.credentials}`}
      />

      <div className="mb-6 flex items-start gap-3 rounded-2xl bg-secondary p-4">
        <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
        <p className="text-xs leading-relaxed text-secondary-foreground">
          This review is anonymous. Never include client details or information that
          could identify you.
        </p>
      </div>

      <section className="rounded-2xl bg-card p-5 text-center shadow-soft">
        <p className="font-display text-sm font-semibold">Overall experience</p>
        <div className="mt-3 flex justify-center">
          <StarRating value={rating} size="lg" onChange={setRating} />
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 text-base">Experience tags</h2>
        <div className="flex flex-wrap gap-2">
          {experienceTags.map((t) => {
            const active = tags.includes(t);
            return (
              <button
                key={t}
                onClick={() =>
                  setTags((p) => (active ? p.filter((x) => x !== t) : [...p, t]))
                }
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground shadow-soft",
                )}
              >
                {t}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 text-base">Your experience</h2>
        <Textarea
          value={body}
          maxLength={MAX}
          onChange={(e) => setBody(e.target.value.slice(0, MAX))}
          rows={7}
          placeholder="What was supervision like week to week? How was feedback delivered? What would a future supervisee want to know?"
          className="rounded-2xl bg-card p-4 text-sm shadow-soft"
        />
        <p className="mt-2 text-right text-xs text-muted-foreground">
          {body.length}/{MAX}
        </p>
      </section>

      <Button
        asChild={valid}
        disabled={!valid}
        size="lg"
        className="mt-6 h-13 rounded-xl py-6 font-display"
      >
        {valid ? (
          <Link to="/review-submitted">Submit anonymously</Link>
        ) : (
          <span>Submit anonymously</span>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Add a rating and at least 40 characters to submit.
      </p>
    </PhoneFrame>
  );
}
