import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useTransform } from "motion/react";
import { useMotionValue } from "motion/react";
import { useEffect } from "react";
import forestBright from "@/assets/forest-bright.jpg";
import forestDark from "@/assets/forest-dark.jpg";
import caveCrystal from "@/assets/cave-crystal.jpg";
import { PhotoFrame } from "@/components/royal/PhotoFrame";
import { GreetingCard } from "@/components/royal/GreetingCard";
import { SectionTitle } from "@/components/royal/SectionTitle";
import { Quotes } from "@/components/royal/Quotes";
import {
  cardsForest,
  greetings,
  person,
  quotesForest,
  photoSlotsForest,
} from "@/content/birthday";

export const Route = createFileRoute("/pintu/2")({
  head: () => ({
    meta: [
      { title: `Hutan & Goa Kristal — Ulang Tahun ${person.name}` },
      {
        name: "description",
        content: `Perjalanan dari hutan terang menuju goa kristal, berisi ucapan dan kenangan untuk ${person.name}.`,
      },
      { property: "og:title", content: `Hutan & Goa Kristal — ${person.name}` },
      {
        property: "og:description",
        content: "Scroll perlahan: hutan berubah menjadi goa penuh kristal bercahaya.",
      },
    ],
  }),
  component: ForestCave,
});

function ForestCave() {
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollYProgress.set(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [scrollYProgress]);
  const brightOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const darkOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.65], [0, 1, 0]);
  const caveOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);
  const veil = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 0.65, 0.75]);

  return (
    <main className="theme-forest relative min-h-screen text-foreground">
      <div className="fixed inset-0 -z-10">
        <motion.div
          aria-hidden
          style={{ opacity: brightOpacity, backgroundImage: `url(${forestBright})` }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <motion.div
          aria-hidden
          style={{ opacity: darkOpacity, backgroundImage: `url(${forestDark})` }}
          className="absolute inset-0 bg-cover bg-center"
        />
         <PhotoFrame label="Sang Ratu Muda" aspect="4 / 5" src="/3.jpeg" />
        <motion.div
          aria-hidden
          style={{ opacity: caveOpacity, backgroundImage: `url(${caveCrystal})` }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <motion.div style={{ opacity: veil }} className="absolute inset-0 bg-background" />
      </div>

      <section className="flex min-h-screen items-center px-5 py-24">
        <div className="relative z-10 mx-auto grid w-full max-w-4xl items-center gap-10 rounded-3xl bg-background/45 px-5 py-10 backdrop-blur-[2px] md:grid-cols-2 md:gap-12 md:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl tracking-[0.12em] sm:text-6xl">
              {greetings.forest.heading}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-foreground/90">
              {greetings.forest.lead}
            </p>
            <p className="mt-3 text-lg text-muted-foreground">{greetings.forest.body}</p>
          </motion.div>
        </div>
      </section>

      <div className="pb-12 text-center">
          <p className="mt-10 font-sans text-[0.6rem] uppercase tracking-[0.4em] text-primary">
            Turun perlahan ke dalam goa
          </p>
      </div>

      <section className="mx-auto max-w-4xl px-5 py-24">
        <SectionTitle kicker="Suara dari Rimba" title="Kartu Ucapan" />
        <div className="grid gap-5 sm:grid-cols-2">
          {cardsForest.map((card, i) => (
            <GreetingCard key={card.from} card={card} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24">
        <SectionTitle kicker="Cahaya Kristal" title="Kalimat yang Menyala" />
        <Quotes quotes={quotesForest} layout="alternating" />
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24">
        <SectionTitle kicker="Di Dalam Goa" title="Kenangan yang Tersimpan" />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {photoSlotsForest.map((slot, i) => (
            <motion.div
              key={slot.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <PhotoFrame label={slot.label} src={slot.src} variant="vine" />
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-card/50 px-5 py-12 text-center backdrop-blur-sm">
        <p className="text-lg text-muted-foreground">
          Sampai jumpa di Akhir, {person.name}.
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
