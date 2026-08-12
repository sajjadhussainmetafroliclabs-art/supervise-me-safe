import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/password-updated")({
  head: () => ({
    meta: [
      { title: "Password Updated | Supportive Steps" },
      {
        name: "description",
        content:
          "Your Supportive Steps password has been updated. Log in again to continue reviewing clinical supervisors.",
      },
      { property: "og:title", content: "Password Updated | Supportive Steps" },
      {
        property: "og:description",
        content: "Your password was changed successfully.",
      },
    ],
  }),
  component: PasswordUpdated,
});

function PasswordUpdated() {
  return (
    <PhoneFrame className="items-center justify-center text-center">
      <div className="animate-fade-rise flex flex-col items-center">
        <span className="flex size-20 items-center justify-center rounded-full bg-secondary text-primary">
          <CheckCircle2 className="size-10" />
        </span>
        <h1 className="mt-6 text-2xl">Password updated</h1>
        <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-muted-foreground">
          Your password has been changed successfully. For your safety you've been
          signed out of other devices.
        </p>
      </div>

      <div className="absolute inset-x-5 bottom-10 space-y-3">
        <Button asChild size="lg" className="h-13 w-full rounded-xl py-6 font-display">
          <Link to="/auth">Back to login</Link>
        </Button>
        <Button asChild variant="ghost" className="w-full rounded-xl font-display">
          <Link to="/dashboard">Go to dashboard</Link>
        </Button>
      </div>
    </PhoneFrame>
  );
}
