import { motion } from "motion/react";
import type { Card } from "@/content/birthday";

export function GreetingCard({ card, index = 0 }: { card: Card; index?: number }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 28, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative rounded-lg border border-border bg-card/80 p-6 shadow-lg backdrop-blur-sm"
      style={{ rotate: `${index % 2 === 0 ? -1 : 1}deg` }}
    >
      <span
        aria-hidden
        className="absolute -top-3 left-6 font-display text-4xl leading-none text-primary/50"
      >
        &ldquo;
      </span>
      <p className="text-lg leading-relaxed text-card-foreground">{card.message}</p>
      <footer className="mt-4 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        — {card.from}
      </footer>
    </motion.blockquote>
  );
}
