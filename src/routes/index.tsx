import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import parchment from "@/assets/parchment.jpg";
import throneHall from "@/assets/throne-hall.jpg";
import crown from "@/assets/crown.png";
import { invitation, person } from "@/content/birthday";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Undangan Kerajaan — Ulang Tahun ${person.name}` },
      {
        name: "description",
        content: `Buka segel undangan kerajaan dan rayakan ulang tahun ke-${person.age} ${person.name} pada ${person.dateLabel}.`,
      },
      { property: "og:title", content: `Undangan Kerajaan — Ulang Tahun ${person.name}` },
      {
        property: "og:description",
        content: `Sebuah undangan bersegel emas untuk hari istimewa ${person.name}.`,
      },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="theme-royal relative min-h-screen overflow-hidden bg-background">
      <img
        src={throneHall}
        alt=""
        aria-hidden
        width={1536}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-16">
        <img
          src={crown}
          alt=""
          aria-hidden
          width={640}
          height={640}
          className="mb-6 h-14 w-auto drop-shadow-[0_0_20px_var(--gold)]"
        />
        <p className="font-sans text-[0.6rem] uppercase tracking-[0.5em] text-primary">
          {invitation.kicker}
        </p>

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.button
              key="sealed"
              type="button"
              onClick={() => setOpened(true)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
              transition={{ duration: 0.6 }}
              className="group mt-8 w-full max-w-md cursor-pointer rounded-sm border-2 border-primary/40 p-1 text-left shadow-2xl"
            >
              <div
                className="relative flex min-h-[16rem] flex-col items-center justify-center gap-4 rounded-sm px-6 py-12"
                style={{ backgroundImage: `url(${parchment})`, backgroundSize: "cover" }}
              >
                <p className="font-display text-lg tracking-[0.2em] text-[oklch(0.3_0.06_45)]">
                  {person.name}
                </p>
                <motion.span
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-[oklch(0.42_0.16_25)] font-display text-2xl text-[oklch(0.92_0.06_85)] shadow-[0_8px_24px_-6px_oklch(0.3_0.12_25)] ring-4 ring-[oklch(0.5_0.16_25)]"
                >
                  {person.name.charAt(0)}
                </motion.span>
                <span className="font-sans text-[0.6rem] uppercase tracking-[0.35em] text-[oklch(0.38_0.05_45)]">
                  {invitation.seal}
                </span>
              </div>
            </motion.button>
          ) : (
            <motion.article
              key="open"
              initial={{ opacity: 0, rotateX: -70, y: 40 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              style={{ transformPerspective: 1200, transformOrigin: "top" }}
              className="mt-8 w-full max-w-lg rounded-sm border-2 border-primary/40 p-1 shadow-2xl"
            >
              <div
                className="rounded-sm px-6 py-12 text-center sm:px-10"
                style={{ backgroundImage: `url(${parchment})`, backgroundSize: "cover" }}
              >
                <h1 className="text-3xl tracking-[0.15em] text-[oklch(0.28_0.06_40)] sm:text-4xl">
                  {invitation.title}
                </h1>
                <div className="mx-auto my-5 h-px w-24 bg-[oklch(0.55_0.1_60)]" />
                <p className="text-lg leading-relaxed text-[oklch(0.32_0.05_45)]">
                  {invitation.body}
                </p>
                <p className="mt-6 font-display text-5xl text-[oklch(0.4_0.14_25)]">
                  {person.age}
                </p>
                <p className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-[oklch(0.4_0.05_45)]">
                  {person.dateLabel}
                </p>
                <button
                  type="button"
                  onClick={() => navigate({ to: "/pintu" })}
                  className="mt-9 cursor-pointer rounded-sm border border-[oklch(0.45_0.14_25)] bg-[oklch(0.42_0.16_25)] px-7 py-3 font-sans text-[0.7rem] uppercase tracking-[0.3em] text-[oklch(0.95_0.04_85)] transition-transform hover:scale-[1.03]"
                >
                  {invitation.cta}
                </button>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
