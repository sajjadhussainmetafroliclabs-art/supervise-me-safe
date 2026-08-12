import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, KeyRound } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Set a New Password | Supportive Steps" },
      {
        name: "description",
        content:
          "Choose a new, secure password for your Supportive Steps account and get back to supervision reviews.",
      },
      { property: "og:title", content: "Set a New Password | Supportive Steps" },
      {
        property: "og:description",
        content: "Create a new password for your Supportive Steps account.",
      },
    ],
  }),
  component: ResetPassword,
});

const rules = [
  "At least 8 characters",
  "One uppercase letter",
  "One number or symbol",
];

function ResetPassword() {
  return (
    <PhoneFrame>
      <ScreenHeader title="New password" backTo="/verify-code" />

      <div className="surface-card p-5">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
          <KeyRound className="size-6" />
        </div>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="new-password">New password</Label>
            <Input
              id="new-password"
              type="password"
              placeholder="••••••••"
              className="h-12 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              className="h-12 rounded-xl"
            />
          </div>

          <ul className="space-y-2 pt-1">
            {rules.map((rule) => (
              <li key={rule} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex size-5 items-center justify-center rounded-full bg-secondary text-primary">
                  <Check className="size-3" />
                </span>
                {rule}
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="h-13 w-full rounded-xl py-6 font-display">
            <Link to="/password-updated">Update password</Link>
          </Button>
        </form>
      </div>
    </PhoneFrame>
  );
}
