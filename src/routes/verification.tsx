import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Upload } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/verification")({
  head: () => ({
    meta: [
      { title: "Verify Your Credentials | Supportive Steps" },
      {
        name: "description",
        content:
          "Verify your university email or license number so Supportive Steps reviews stay credible and trustworthy.",
      },
      { property: "og:title", content: "Verify Your Credentials | Supportive Steps" },
      {
        property: "og:description",
        content: "Credential checks keep supervision reviews credible and safe.",
      },
    ],
  }),
  component: Verification,
});

function Verification() {
  return (
    <PhoneFrame>
      <ScreenHeader
        backTo="/role"
        title="Verification"
        subtitle="We verify every member so reviews stay credible."
      />

      <div className="mb-6 flex items-start gap-3 rounded-2xl bg-secondary p-4">
        <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
        <p className="text-xs leading-relaxed text-secondary-foreground">
          Verification details are used only to confirm eligibility. They are never
          published or linked to any review you write.
        </p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="uni-email">University email</Label>
          <Input
            id="uni-email"
            type="email"
            placeholder="jordan.ellis@university.edu"
            className="h-12 rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="license">License number</Label>
          <Input id="license" placeholder="LPC-A 84102" className="h-12 rounded-xl" />
        </div>

        <UploadField label="Student ID" hint="JPG or PDF, optional" />
        <UploadField label="License proof" hint="JPG or PDF, optional" />
      </form>

      <Button asChild size="lg" className="mt-auto h-13 rounded-xl py-6 font-display">
        <Link to="/terms">Submit for review</Link>
      </Button>
    </PhoneFrame>
  );
}

function UploadField({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <button
        type="button"
        className="flex w-full items-center gap-3 rounded-xl border border-dashed border-border bg-card p-4 text-left"
      >
        <span className="flex size-10 items-center justify-center rounded-lg bg-secondary">
          <Upload className="size-4 text-primary" />
        </span>
        <span>
          <span className="block text-sm font-medium">Upload {label.toLowerCase()}</span>
          <span className="block text-xs text-muted-foreground">{hint}</span>
        </span>
      </button>
    </div>
  );
}
