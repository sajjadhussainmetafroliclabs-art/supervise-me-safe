import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/verify-code")({
  head: () => ({
    meta: [
      { title: "Verify Code | Supportive Steps" },
      {
        name: "description",
        content:
          "Enter the 6-digit verification code sent to your email to continue resetting your Supportive Steps password.",
      },
      { property: "og:title", content: "Verify Code | Supportive Steps" },
      {
        property: "og:description",
        content: "Confirm the 6-digit code we emailed you.",
      },
    ],
  }),
  component: VerifyCode,
});

function VerifyCode() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  return (
    <PhoneFrame>
      <ScreenHeader title="Verify your email" backTo="/forgot-password" />

      <div className="surface-card p-5">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
          <ShieldCheck className="size-6" />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          We sent a 6-digit code to your email. Enter it below to continue.
        </p>

        <div className="mt-6 grid grid-cols-6 gap-2">
          {code.map((digit, i) => (
            <Input
              key={i}
              inputMode="numeric"
              maxLength={1}
              aria-label={`Digit ${i + 1}`}
              value={digit}
              onChange={(e) => {
                const next = [...code];
                next[i] = e.target.value.replace(/\D/g, "").slice(-1);
                setCode(next);
              }}
              className="h-13 rounded-xl px-0 text-center font-display text-lg"
            />
          ))}
        </div>

        <Button asChild size="lg" className="mt-6 h-13 w-full rounded-xl py-6 font-display">
          <Link to="/reset-password">Verify code</Link>
        </Button>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Didn't get it? <span className="font-semibold text-primary">Resend in 0:42</span>
        </p>
      </div>
    </PhoneFrame>
  );
}
