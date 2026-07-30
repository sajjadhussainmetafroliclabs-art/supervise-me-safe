import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { GraduationCap, BookOpen, Check } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/role")({
  head: () => ({
    meta: [
      { title: "Choose Your Role | Supportive Steps" },
      {
        name: "description",
        content:
          "Join Supportive Steps as a counseling student or a licensed associate and see the verification each role requires.",
      },
      { property: "og:title", content: "Choose Your Role | Supportive Steps" },
      {
        property: "og:description",
        content: "Counseling student or licensed associate — pick the path that fits you.",
      },
    ],
  }),
  component: RoleSelect,
});

const roles = [
  {
    id: "student",
    emoji: "🎓",
    icon: GraduationCap,
    title: "Counseling Student",
    description:
      "Currently enrolled in a master's or doctoral counseling program and looking for practicum or internship supervision.",
    requirements: ["Active university email", "Student ID (optional)"],
  },
  {
    id: "associate",
    emoji: "📚",
    icon: BookOpen,
    title: "Licensed Associate",
    description:
      "Accruing post-graduate hours under a board-approved supervisor toward full licensure.",
    requirements: ["State license number", "License proof (optional)"],
  },
];

function RoleSelect() {
  const [selected, setSelected] = useState("student");

  return (
    <PhoneFrame>
      <ScreenHeader
        backTo="/auth"
        title="Select your role"
        subtitle="This tailors verification and what you can review."
      />

      <div className="space-y-4">
        {roles.map((role) => {
          const active = selected === role.id;
          const Icon = role.icon;
          return (
            <button
              key={role.id}
              onClick={() => setSelected(role.id)}
              className={cn(
                "w-full rounded-2xl border-2 bg-card p-5 text-left shadow-soft transition-colors",
                active ? "border-primary" : "border-transparent",
              )}
            >
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-xl">
                  <Icon className="size-6 text-primary" strokeWidth={1.8} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-base font-semibold">
                      {role.emoji} {role.title}
                    </h2>
                    {active ? (
                      <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-primary">
                        <Check className="size-3.5 text-primary-foreground" />
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {role.requirements.map((r) => (
                      <li key={r} className="text-xs font-medium text-secondary-foreground">
                        • {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <Button asChild size="lg" className="mt-auto h-13 rounded-xl py-6 font-display">
        <Link to="/verification">Continue</Link>
      </Button>
    </PhoneFrame>
  );
}
