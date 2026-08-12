import { createFileRoute, Link } from "@tanstack/react-router";
import { MailQuestion } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot Password | Supportive Steps" },
      {
        name: "description",
        content:
          "Reset your Supportive Steps password by requesting a secure verification code sent to your email.",
      },
      { property: "og:title", content: "Forgot Password | Supportive Steps" },
      {
        property: "og:description",
        content: "Request a secure verification code to reset your password.",
      },
    ],
  }),
  component: ForgotPassword,
});

function ForgotPassword() {
  return (
    <PhoneFrame>
      <ScreenHeader title="Forgot password?" backTo="/auth" />

      <div className="surface-card p-5">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
          <MailQuestion className="size-6" />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Enter the email linked to your account. We'll send a 6-digit verification
          code so you can set a new password.
        </p>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@university.edu"
              className="h-12 rounded-xl"
            />
          </div>
          <Button asChild size="lg" className="h-13 w-full rounded-xl py-6 font-display">
            <Link to="/verify-code">Send code</Link>
          </Button>
        </form>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Remembered it?{" "}
        <Link to="/auth" className="font-semibold text-primary">
          Back to login
        </Link>
      </p>
    </PhoneFrame>
  );
}
