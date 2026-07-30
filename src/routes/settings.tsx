import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bell,
  ChevronRight,
  HelpCircle,
  KeyRound,
  LogOut,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings | Supportive Steps" },
      {
        name: "description",
        content:
          "Manage privacy, password, notification preferences and account options in Supportive Steps.",
      },
      { property: "og:title", content: "Settings | Supportive Steps" },
      {
        property: "og:description",
        content: "Privacy controls, notifications and account management.",
      },
    ],
  }),
  component: Settings,
});

function Settings() {
  return (
    <PhoneFrame>
      <ScreenHeader title="Settings" />

      <Group title="Privacy">
        <ToggleRow
          icon={ShieldCheck}
          label="Hide my activity"
          detail="Keep saved supervisors private"
          defaultChecked
        />
        <ToggleRow
          icon={ShieldCheck}
          label="Anonymous by default"
          detail="Always publish reviews anonymously"
          defaultChecked
        />
      </Group>

      <Group title="Account">
        <LinkRow icon={KeyRound} label="Change password" />
        <LinkRow icon={Bell} label="Notification preferences" />
        <LinkRow icon={HelpCircle} label="Help center" />
      </Group>

      <Group title="Notifications">
        <ToggleRow icon={Bell} label="Review approvals" detail="Push + email" defaultChecked />
        <ToggleRow icon={Bell} label="Product updates" detail="Occasional emails" />
      </Group>

      <div className="mt-6 space-y-3">
        <Link
          to="/auth"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-card py-4 font-display text-sm font-semibold text-foreground shadow-soft"
        >
          <LogOut className="size-4" /> Log out
        </Link>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-destructive/10 py-4 font-display text-sm font-semibold text-destructive">
          <Trash2 className="size-4" /> Delete account
        </button>
      </div>

      <BottomNav />
    </PhoneFrame>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6 first:mt-0">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
      <div className="divide-y divide-border overflow-hidden rounded-2xl bg-card shadow-soft">
        {children}
      </div>
    </section>
  );
}

function ToggleRow({
  icon: Icon,
  label,
  detail,
  defaultChecked,
}: {
  icon: React.ElementType;
  label: string;
  detail: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 p-4">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary">
        <Icon className="size-4 text-primary" strokeWidth={1.8} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{detail}</p>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}

function LinkRow({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <button className="flex w-full items-center gap-3 p-4 text-left">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary">
        <Icon className="size-4 text-primary" strokeWidth={1.8} />
      </span>
      <span className="flex-1 text-sm font-medium">{label}</span>
      <ChevronRight className="size-4 text-muted-foreground" />
    </button>
  );
}
