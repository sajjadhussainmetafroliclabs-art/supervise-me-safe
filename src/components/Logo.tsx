import { cn } from "@/lib/utils";
import markAsset from "@/assets/mark.png.asset.json";
import lockupAsset from "@/assets/logo.png.asset.json";

/** Supportive Steps brand mark (emblem only). */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={markAsset.url}
      alt="Supportive Steps logo"
      className={cn("size-16 object-contain", className)}
    />
  );
}

/** Full brand lockup: emblem + wordmark + tagline. */
export function LogoLockup({ className }: { className?: string }) {
  return (
    <img
      src={lockupAsset.url}
      alt="Supportive Steps — Empowering Future Counselors Through Trusted Support"
      className={cn("w-64 object-contain", className)}
    />
  );
}
