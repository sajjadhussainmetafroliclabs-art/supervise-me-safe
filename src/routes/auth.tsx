import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign Up or Log In | Supportive Steps" },
      {
        name: "description",
        content:
          "Create your Supportive Steps account or log in to review and discover verified clinical supervisors.",
      },
      { property: "og:title", content: "Sign Up or Log In | Supportive Steps" },
      {
        property: "og:description",
        content: "Secure access for counseling students and licensed associates.",
      },
    ],
  }),
  component: Auth,
});

function Auth() {
  const [mode, setMode] = useState<"signup" | "login">("signup");

  return (
    <PhoneFrame>
      <div className="mt-6 flex flex-col items-center text-center">
        <Logo className="size-16" />
        <h1 className="mt-4 text-2xl">Supportive Steps</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A safe space for supervision feedback
        </p>
      </div>

      <div className="mt-8 surface-card p-5">
        <div className="grid grid-cols-2 gap-1 rounded-xl bg-secondary p-1">
          {(["signup", "login"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn(
                "rounded-lg py-2 font-display text-sm font-semibold transition-colors",
                mode === m
                  ? "bg-card text-primary shadow-soft"
                  : "text-secondary-foreground/70",
              )}
            >
              {m === "signup" ? "Sign Up" : "Login"}
            </button>
          ))}
        </div>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {mode === "signup" ? (
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" placeholder="Jordan Ellis" className="h-12 rounded-xl" />
            </div>
          ) : null}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@university.edu"
              className="h-12 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" className="h-12 rounded-xl" />
          </div>

          <Button asChild size="lg" className="h-13 w-full rounded-xl py-6 font-display">
            <Link to="/role">{mode === "signup" ? "Create account" : "Log in"}</Link>
          </Button>
        </form>

        <button className="mt-4 w-full text-center text-sm font-medium text-muted-foreground">
          Forgot password?
        </button>
      </div>

      <p className="mt-8 text-center text-xs leading-relaxed text-muted-foreground">
        Reviews on Supportive Steps are always anonymous. Your account details are
        never shown alongside your feedback.
      </p>
    </PhoneFrame>
  );
}
