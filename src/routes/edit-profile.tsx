import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export const Route = createFileRoute("/edit-profile")({
  head: () => ({
    meta: [
      { title: "Edit Profile | Supportive Steps" },
      {
        name: "description",
        content:
          "Update your name, program, license track and contact details on Supportive Steps.",
      },
      { property: "og:title", content: "Edit Profile | Supportive Steps" },
      {
        property: "og:description",
        content: "Update your counseling profile details and photo.",
      },
    ],
  }),
  component: EditProfile,
});

function EditProfile() {
  return (
    <PhoneFrame>
      <ScreenHeader title="Edit profile" subtitle="Keep your details up to date" backTo="/profile" />

      <section className="rounded-2xl bg-card p-5 text-center shadow-soft">
        <div className="relative mx-auto w-fit">
          <span className="flex size-20 items-center justify-center rounded-3xl bg-secondary font-display text-xl font-semibold text-primary">
            JE
          </span>
          <button
            type="button"
            aria-label="Change photo"
            className="absolute -bottom-1 -right-1 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft"
          >
            <Camera className="size-4" strokeWidth={1.8} />
          </button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Your photo is only visible to you — reviews stay anonymous.
        </p>
      </section>

      <form className="mt-6 space-y-4">
        <Field label="Full name" defaultValue="Jordan Ellis" />
        <Field label="Email" type="email" defaultValue="jordan.ellis@university.edu" />
        <Field label="Location" defaultValue="Austin, Texas" />
        <Field label="Program" defaultValue="M.Ed. Clinical Mental Health" />
        <Field label="License track" defaultValue="LPC-Associate" />

        <div>
          <label
            htmlFor="bio"
            className="mb-1.5 block text-xs font-medium text-muted-foreground"
          >
            About you
          </label>
          <textarea
            id="bio"
            rows={4}
            defaultValue="Second-year counseling student focused on trauma-informed care and group work."
            className="w-full resize-none rounded-2xl bg-card p-4 text-sm shadow-soft outline-none ring-primary/30 focus:ring-2"
          />
        </div>

        <div className="space-y-3 pt-2">
          <Link
            to="/profile"
            className="flex w-full items-center justify-center rounded-xl bg-primary py-4 font-display text-sm font-semibold text-primary-foreground shadow-soft"
          >
            Save changes
          </Link>
          <Link
            to="/profile"
            className="flex w-full items-center justify-center rounded-xl bg-card py-4 font-display text-sm font-semibold text-foreground shadow-soft"
          >
            Cancel
          </Link>
        </div>
      </form>
    </PhoneFrame>
  );
}

function Field({
  label,
  defaultValue,
  type = "text",
}: {
  label: string;
  defaultValue: string;
  type?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        defaultValue={defaultValue}
        className="w-full rounded-2xl bg-card p-4 text-sm shadow-soft outline-none ring-primary/30 focus:ring-2"
      />
    </div>
  );
}
