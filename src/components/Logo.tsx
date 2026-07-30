import { cn } from "@/lib/utils";

/** Supportive Steps mark: ascending steps cradled by a supportive arc. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Supportive Steps logo"
      className={cn("size-16", className)}
    >
      <circle cx="32" cy="32" r="30" className="fill-secondary" />
      <path
        d="M12 44c0-13 9-22 20-22"
        className="stroke-beige"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="18" y="38" width="10" height="8" rx="3" className="fill-sage" />
      <rect x="28" y="30" width="10" height="16" rx="3" className="fill-primary" />
      <rect x="38" y="20" width="10" height="26" rx="3" className="fill-primary" />
      <circle cx="43" cy="14" r="4" className="fill-beige" />
    </svg>
  );
}
