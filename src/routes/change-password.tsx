import { createFileRoute, Link } from "@tanstack/react-router";
import { KeyRound } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/change-password")({
  head: () => ({
    meta: [
      { title: "Change Password | Supportive Steps" },
      {
        name: "description",
        content:
          "Update the password on your Supportive Steps account from your settings at any time.",
      },
      { property: "og:title", content: "Change Password | Supportive Steps" },
      {
        property: "og:description",
        content: "Update your account password from settings.",
      },
    ],
  }),
  component: ChangePassword,
});

function ChangePassword() {
  return (
    <PhoneFrame>
      <ScreenHeader title="Change password" backTo="/settings" />

      <div className="surface-card p-5">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
          <KeyRound className="size-6" />
        </div>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" placeholder="••••••••" className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" placeholder="••••••••" className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Confirm new password</Label>
            <Input id="confirm" type="password" placeholder="••••••••" className="h-12 rounded-xl" />
          </div>

          <Button asChild size="lg" className="h-13 w-full rounded-xl py-6 font-display">
            <Link to="/password-updated">Save new password</Link>
          </Button>
        </form>

        <Link
          to="/forgot-password"
          className="mt-4 block text-center text-sm font-medium text-muted-foreground"
        >
          Forgot current password?
        </Link>
      </div>
    </PhoneFrame>
  );
}
