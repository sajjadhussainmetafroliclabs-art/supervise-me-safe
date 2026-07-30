import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Info, MessageSquareCheck } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications | Supportive Steps" },
      {
        name: "description",
        content:
          "Track review approvals, account verification updates and system announcements from Supportive Steps.",
      },
      { property: "og:title", content: "Notifications | Supportive Steps" },
      {
        property: "og:description",
        content: "Review approvals, account status and product updates in one place.",
      },
    ],
  }),
  component: Notifications;
});

const items = [
  {
    icon: MessageSquareCheck,
    tone: "success",
    title: "Review approved",
    body: "Your review of Dr. Amara Hale passed moderation and is now published.",
    time: "1h ago",
  },
  {
    icon: BadgeCheck,
    tone: "primary",
    title: "Account approved",
    body: "Your university email was verified. Full access is unlocked.",
    time: "Yesterday",
  },
  {
    icon: Info,
    tone: "beige",
    title: "System update",
    body: "New specialty filters added for school-based and community settings.",
    time: "3 days ago",
  },
];

function Notifications() {
  return (
    <PhoneFrame>
      <ScreenHeader backTo="/dashboard" title="Notifications" subtitle="Everything about your account and reviews." />
      <div className="space-y-3">
        {items.map((n) => {
          const Icon = n.icon;
          return (
            <article key={n.title} className="flex gap-4 rounded-2xl bg-card p-4 shadow-soft">
              <span
                className={
                  n.tone === "success"
                    ? "flex size-10 shrink-0 items-center justify-center rounded-xl bg-success/12 text-success"
                    : n.tone === "primary"
                      ? "flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"
                      : "flex size-10 shrink-0 items-center justify-center rounded-xl bg-beige/35 text-beige-foreground"
                }
              >
                <Icon className="size-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-display text-sm font-semibold">{n.title}</p>
                  <span className="shrink-0 text-xs text-muted-foreground">{n.time}</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{n.body}</p>
              </div>
            </article>
          );
        })}
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
