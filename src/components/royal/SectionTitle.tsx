import { motion } from "motion/react";

export function SectionTitle({
  kicker,
  title,
}: {
  kicker?: string;
  title: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="mb-8 text-center"
    >
      {kicker ? (
        <p className="font-sans text-[0.65rem] uppercase tracking-[0.4em] text-primary">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl tracking-wide sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 flex items-center justify-center gap-2">
        <span className="h-px w-12 bg-primary/50" />
        <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
        <span className="h-px w-12 bg-primary/50" />
      </div>
    </motion.header>
  );
}
