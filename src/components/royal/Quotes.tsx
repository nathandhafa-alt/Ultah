import { motion } from "motion/react";

type Layout = "scroll" | "alternating" | "grid";

const wrapperClass: Record<Layout, string> = {
  // Kerajaan: tumpukan terpusat, lebar kartu menyempit-melebar bergantian
  scroll: "mx-auto flex w-full max-w-3xl flex-col items-center gap-5 sm:gap-9",
  // Hutan/Goa: jalur zigzag dengan jarak tak beraturan
  alternating: "mx-auto flex w-full max-w-4xl flex-col gap-6 sm:gap-4",
  // Romansa: mozaik grid dengan kartu berbeda ukuran
  grid: "mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-5",
};

// Variasi ukuran/jarak per pintu
function itemClass(layout: Layout, i: number) {
  if (layout === "scroll") {
    const big = i % 3 === 0;
    return [
      big ? "w-full p-7 sm:p-10" : "w-full sm:w-[82%] p-5 sm:p-7",
      i % 3 === 2 ? "sm:-mt-3" : "",
      "text-center",
    ].join(" ");
  }
  if (layout === "alternating") {
    const left = i % 2 === 0;
    const widths = ["sm:w-[86%]", "sm:w-[68%]", "sm:w-[76%]"];
    const offsets = ["sm:mt-2", "sm:mt-10", "sm:mt-6"];
    return [
      "w-full",
      widths[i % widths.length],
      offsets[i % offsets.length],
      left ? "sm:self-start p-6 sm:p-8" : "sm:self-end sm:text-right p-5 sm:p-6",
    ].join(" ");
  }
  // grid mozaik
  const spans = [
    "sm:col-span-4 sm:row-span-2 p-6 sm:p-9",
    "sm:col-span-2 p-5 sm:p-6",
    "sm:col-span-2 p-5 sm:p-6",
    "sm:col-span-3 p-5 sm:p-7",
    "sm:col-span-3 p-5 sm:p-7",
  ];
  return `flex flex-col justify-center text-center ${spans[i % spans.length]}`;
}

function textClass(layout: Layout, i: number) {
  const big =
    (layout === "scroll" && i % 3 === 0) || (layout === "grid" && i % 5 === 0);
  return big
    ? "text-2xl sm:text-3xl"
    : layout === "alternating" && i % 2 === 1
      ? "text-lg sm:text-xl"
      : "text-xl sm:text-2xl";
}

export function Quotes({
  quotes,
  layout = "scroll",
}: {
  quotes: string[];
  layout?: Layout;
}) {
  return (
    <div className={wrapperClass[layout]}>
      {quotes.map((q, i) => {
        const left = i % 2 === 0;
        const initial =
          layout === "alternating"
            ? { opacity: 0, x: left ? -40 : 40, y: 16, filter: "blur(6px)" }
            : layout === "grid"
              ? { opacity: 0, y: 28, scale: 0.94, filter: "blur(6px)" }
              : { opacity: 0, y: 36, scale: 0.97, filter: "blur(6px)" };
        return (
          <motion.figure
            key={q}
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25, margin: "0px 0px -10% 0px" }}
            transition={{
              duration: 0.75,
              delay: (i % 4) * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className={[
              "group relative overflow-hidden rounded-xl border border-primary/30 bg-card/70 shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-primary/60",
              itemClass(layout, i),
            ].join(" ")}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
            />
            <span
              aria-hidden
              className="font-display text-3xl leading-none text-primary/60"
            >
              &ldquo;
            </span>
            <blockquote
              className={`mt-2 font-display leading-relaxed text-balance text-foreground/90 ${textClass(layout, i)}`}
            >
              {q}
            </blockquote>
            <figcaption className="mt-4 font-sans text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
              Petuah {i + 1}
            </figcaption>
          </motion.figure>
        );
      })}
    </div>
  );
}
