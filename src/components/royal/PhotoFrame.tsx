import { Crown } from "lucide-react";

type Props = {
  label: string;
  src?: string;
  aspect?: string;
  variant?: "gold" | "vine" | "rose";
  className?: string;
};

const variantRing: Record<string, string> = {
  gold: "border-primary/50 shadow-[0_0_40px_-12px_var(--gold)]",
  vine: "border-primary/40 shadow-[0_0_40px_-12px_oklch(0.8_0.15_155)]",
  rose: "border-primary/30 shadow-[0_10px_40px_-16px_var(--primary)]",
};

export function PhotoFrame({
  label,
  src,
  aspect = "4 / 5",
  variant = "gold",
  className = "",
}: Props) {
  return (
    <figure className={`group relative ${className}`}>
      <div
        className={`relative overflow-hidden rounded-[2rem_2rem_0.5rem_0.5rem] border-2 bg-card/60 backdrop-blur-sm ${variantRing[variant]}`}
        style={{ aspectRatio: aspect }}
      >
        {src ? (
          <img
            src={src}
            alt={label}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center">
            <Crown className="h-7 w-7 text-primary/70" aria-hidden />
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
              Foto
            </span>
            <span className="font-display text-base text-foreground/80">{label}</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem_2rem_0.5rem_0.5rem] ring-1 ring-inset ring-primary/20" />
      </div>
      {src ? (
        <figcaption className="mt-3 text-center font-sans text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
