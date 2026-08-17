import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import romanceBg from "@/assets/romance-bg.jpg";
import { PhotoFrame } from "@/components/royal/PhotoFrame";
import { GreetingCard } from "@/components/royal/GreetingCard";
import { SectionTitle } from "@/components/royal/SectionTitle";
import { Quotes } from "@/components/royal/Quotes";
import {
  cardsRomance,
  greetings,
  person,
  quotesRomance,
  photoSlotsRomance,
} from "@/content/birthday";

export const Route = createFileRoute("/pintu/3")({
  head: () => ({
    meta: [
      { title: `Taman Mawar — Untuk ${person.name}` },
      {
        name: "description",
        content: `Halaman bertema romansa: ucapan lembut, kartu, dan kenangan untuk ulang tahun ke-${person.age} ${person.name}.`,
      },
      { property: "og:title", content: `Taman Mawar — Untuk ${person.name}` },
      {
        property: "og:description",
        content: "Kelopak mawar, kata-kata lembut, dan kenangan yang manis.",
      },
    ],
  }),
  component: RomancePage,
});

const petals = Array.from({ length: 12 }, (_, i) => i);

function RomancePage() {
  return (
    <main className="theme-romance relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-20">
        {petals.map((p) => (
          <motion.span
            key={p}
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{ y: "110vh", opacity: [0, 0.8, 0], x: [0, p % 2 ? 30 : -30, 0] }}
            transition={{
              duration: 12 + (p % 5) * 3,
              repeat: Infinity,
              delay: p * 1.4,
              ease: "linear",
            }}
            style={{ left: `${(p * 8.3) % 100}%` }}
            className="absolute h-3 w-2 rounded-[100%_0_100%_0] bg-primary/40"
          />
        ))}
      </div>

      <section className="relative min-h-screen">
        <img
          src={romanceBg}
          alt=""
          aria-hidden
          width={1280}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative z-10 mx-auto grid min-h-screen max-w-5xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <PhotoFrame label="Couple Terbaik❤️‍🔥" variant="rose" aspect="4 / 5" src="/public/7.png" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <p className="font-sans text-[0.6rem] uppercase tracking-[0.45em] text-primary">
              Untukmu
            </p>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
              {greetings.romance.heading}
            </h1>
            <p className="mt-5 font-display text-2xl text-primary">{greetings.romance.lead}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {greetings.romance.body}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <SectionTitle kicker="Untukmu" title="Kartu Ucapan" />
        <div className="grid gap-5 sm:grid-cols-2">
          {cardsRomance.map((card, i) => (
            <GreetingCard key={card.from} card={card} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <SectionTitle kicker="Pengingat Lembut" title="Kalimat Motivasi" />
        <Quotes quotes={quotesRomance} layout="grid" />
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20">
        <SectionTitle kicker="Album" title="Foto Kenangan" />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {photoSlotsRomance.map((slot, i) => (
            <motion.div
              key={slot.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <PhotoFrame label={slot.label} src={slot.src} variant="rose" />
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border px-5 py-12 text-center">
        <p className="font-display text-xl text-primary">
          Selamat ulang tahun, {person.name}.
        </p>
        <Link
          to="/pintu"
          className="mt-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.3em] text-primary underline-offset-8 hover:underline"
        >
          Kembali ke Aula Pintu
        </Link>
      </footer>
    </main>
  );
}
