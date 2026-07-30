import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Consent | Supportive Steps" },
      {
        name: "description",
        content:
          "Review the anonymous review policy, privacy policy and community guidelines before joining Supportive Steps.",
      },
      { property: "og:title", content: "Terms & Consent | Supportive Steps" },
      {
        property: "og:description",
        content: "Anonymity, privacy and community standards explained.",
      },
    ],
  }),
  component: Terms,
});

const consents = [
  {
    id: "anon",
    label: "Anonymous reviews",
    detail:
      "I understand reviews are published without my name and that I must not include identifying details about clients.",
  },
  {
    id: "privacy",
    label: "Privacy policy",
    detail:
      "I consent to Supportive Steps storing my verification details securely and separately from my reviews.",
  },
  {
    id: "community",
    label: "Community guidelines",
    detail:
      "I will keep feedback factual, professional and free of harassment or defamatory claims.",
  },
];

function Terms() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const allChecked = consents.every((c) => checked[c.id]);

  return (
    <PhoneFrame>
      <ScreenHeader
        backTo="/verification"
        title="Terms & consent"
        subtitle="Please read and accept before continuing."
      />

      <div className="mb-5 max-h-56 overflow-y-auto rounded-2xl bg-card p-5 text-xs leading-relaxed text-muted-foreground shadow-soft">
        <h2 className="mb-2 font-display text-sm font-semibold text-foreground">
          Anonymous review policy
        </h2>
        <p>
          Supportive Steps exists so counseling students and licensed associates can
          describe supervision experiences without fear of retaliation. Reviews are
          published without any identifying information about the reviewer.
        </p>
        <p className="mt-3">
          Every submission passes human moderation before publication. Moderators
          remove client information, personal attacks, allegations that cannot be
          described factually, and anything that could identify the reviewer.
        </p>
        <h2 className="mb-2 mt-4 font-display text-sm font-semibold text-foreground">
          Privacy
        </h2>
        <p>
          Verification records are stored separately from review content and are
          never visible to supervisors, other members, or the public. You may request
          deletion of your account and associated records at any time.
        </p>
        <h2 className="mb-2 mt-4 font-display text-sm font-semibold text-foreground">
          Community guidelines
        </h2>
        <p>
          Describe what happened, how it affected your training, and what you would
          want a future supervisee to know. Avoid speculation about motives,
          diagnoses of any individual, and language intended to harm.
        </p>
      </div>

      <div className="space-y-3">
        {consents.map((c) => (
          <label
            key={c.id}
            className="flex gap-3 rounded-2xl bg-card p-4 shadow-soft"
            htmlFor={c.id}
          >
            <Checkbox
              id={c.id}
              checked={!!checked[c.id]}
              onCheckedChange={(v) => setChecked((p) => ({ ...p, [c.id]: v === true }))}
              className="mt-0.5"
            />
            <span>
              <span className="block font-display text-sm font-semibold">{c.label}</span>
              <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                {c.detail}
              </span>
            </span>
          </label>
        ))}
      </div>

      <Button
        asChild={allChecked}
        disabled={!allChecked}
        size="lg"
        className="mt-auto h-13 rounded-xl py-6 font-display"
      >
        {allChecked ? <Link to="/pending">I agree, continue</Link> : <span>I agree, continue</span>}
      </Button>
    </PhoneFrame>
  );
}
