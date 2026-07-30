import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

export function ScreenHeader({
  title,
  subtitle,
  backTo,
  action,
}: {
  title: string;
  subtitle?: string;
  backTo?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-6 flex items-start gap-3">
      {backTo ? (
        <Link
          to={backTo}
          aria-label="Go back"
          className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-accent"
        >
          <ChevronLeft className="size-5" />
        </Link>
      ) : null}
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl leading-tight">{title}</h1>
        {subtitle ? (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      {action}
    </header>
  );
}
