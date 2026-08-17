import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import throneHall from "@/assets/throne-hall.jpg";
import parchment from "@/assets/parchment.jpg";
import crown from "@/assets/crown.png";
import { PhotoFrame } from "@/components/royal/PhotoFrame";
import { GreetingCard } from "@/components/royal/GreetingCard";
import { SectionTitle } from "@/components/royal/SectionTitle";
import { Quotes } from "@/components/royal/Quotes";
import {
  cardsRoyal,
  greetings,
  journey,
  person,
  quotesRoyal,
  photoSlotsRoyal,
} from "@/content/birthday";

export const Route = createFileRoute("/pintu/1")({
  head: () => ({
    meta: [
      { title: `Balai Kerajaan — Selamat Ulang Tahun ${person.name}` },
      {
        name: "description",
        content: `Dekrit kerajaan, galeri kenangan, kartu ucapan, dan peta perjalanan untuk ulang tahun ke-${person.age} ${person.name}.`,
      },
      { property: "og:title", content: `Balai Kerajaan — ${person.name}` },
      {
        property: "og:description",
        content: "Ucapan bergaya dekrit kerajaan, kenangan, dan peta perjalanan.",
      },
    ],
  }),
  component: RoyalHall,
});

function RoyalHall() {
  return (
    <main className="theme-royal min-h-screen bg-background text-foreground">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={throneHall}
          alt=""
          aria-hidden
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background" />
        <div className="relative z-10 mx-auto grid max-w-5xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <PhotoFrame label="Sang Ratu Muda" aspect="4 / 5" src="/1.jpeg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <img src={crown} alt="" aria-hidden width={640} height={640} className="h-10 w-auto" />
            <p className="mt-4 font-sans text-[0.6rem] uppercase tracking-[0.45em] text-primary">
              Dekrit Kerajaan
            </p>
            <h1 className="mt-3 text-4xl leading-tight tracking-wide sm:text-5xl">
              {greetings.royal.heading}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-foreground/90">
              {greetings.royal.lead}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {greetings.royal.body}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20">
        <SectionTitle kicker="Galeri Istana" title="Kenangan yang Dipajang" />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {photoSlotsRoyal.map((slot, i) => (
            <motion.div
              key={slot.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <PhotoFrame label={slot.label} src={slot.src} />
            </motion.div>
          ))}
        </div>
      </section>

      <section
        className="relative py-20"
        style={{ backgroundImage: `url(${parchment})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative mx-auto max-w-4xl px-5">
          <SectionTitle kicker="Gulungan Ucapan" title="Kartu dari Seisi Negeri" />
          <div className="grid gap-5 sm:grid-cols-2">
            {cardsRoyal.map((card, i) => (
              <GreetingCard key={card.from} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <SectionTitle kicker="Petuah" title="Kata-Kata untuk Dibawa Pulang" />
        <Quotes quotes={quotesRoyal} layout="scroll" />
      </section>

      <footer className="border-t border-border bg-card/40 px-5 py-14">
        <p className="text-center font-sans text-[0.6rem] uppercase tracking-[0.4em] text-primary">
          Peta Perjalanan
        </p>
        <ol className="mx-auto mt-8 flex max-w-4xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {journey.map((stop, i) => (
            <li key={stop.label} className="relative flex flex-1 items-start gap-3 sm:flex-col sm:items-center sm:text-center">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/60 bg-background font-sans text-[0.6rem] text-primary">
                {i + 1}
              </span>
              {i < journey.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute left-3 top-8 h-[calc(100%+0.75rem)] border-l border-dashed border-primary/40 sm:left-auto sm:top-3 sm:h-0 sm:w-full sm:translate-x-1/2 sm:border-l-0 sm:border-t sm:border-dashed"
                />
              ) : null}
              <span className="relative">
                <span className="block font-display text-base text-foreground">{stop.label}</span>
                <span className="block text-sm text-muted-foreground">{stop.note}</span>
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Link
            to="/pintu"
            className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-primary underline-offset-8 hover:underline"
          >
            Kembali ke Aula Pintu
          </Link>
        </div>
      </footer>
    </main>
  );
}
