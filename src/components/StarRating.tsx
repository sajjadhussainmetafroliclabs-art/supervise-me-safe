import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  value,
  size = "sm",
  onChange,
}: {
  value: number;
  size?: "sm" | "lg";
  onChange?: (v: number) => void;
}) {
  const px = size === "lg" ? "size-9" : "size-4";
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => {
        const filled = n <= Math.round(value);
        const star = (
          <Star
            className={cn(px, filled ? "fill-beige text-beige" : "text-border")}
            strokeWidth={1.5}
          />
        );
        return onChange ? (
          <button key={n} type="button" aria-label={`${n} stars`} onClick={() => onChange(n)}>
            {star}
          </button>
        ) : (
          <span key={n}>{star}</span>
        );
      })}
    </div>
  );
}
