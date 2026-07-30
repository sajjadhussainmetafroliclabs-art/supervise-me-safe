import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Mobile-first canvas. On phones it fills the screen; on larger screens it
 * centres a phone-width column so the app always reads as a mobile product.
 */
export function PhoneFrame({
  children,
  className,
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div className="flex min-h-screen justify-center gradient-calm">
      <div
        className={cn(
          "relative flex min-h-screen w-full max-w-[430px] flex-col bg-background shadow-lift",
          padded && "px-5 pb-8 pt-6",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
