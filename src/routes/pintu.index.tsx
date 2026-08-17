import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import threeDoors from "@/assets/three-doors.jpg";
import { doors, person } from "@/content/birthday";

export const Route = createFileRoute("/pintu/")({
  head: () => ({
    meta: [
      { title: `Aula Tiga Pintu — Ulang Tahun ${person.name}` },
      {
        name: "description",
        content: "Pilih satu dari tiga gerbang kerajaan: balai emas, hutan berkabut, atau taman mawar.",
      },
      { property: "og:title", content: "Aula Tiga Pintu" },
      {
        property: "og:description",
        content: "Tiga gerbang, tiga dunia. Pilih satu untuk melanjutkan perjalanan.",
      },
    ],
  }),
  component: DoorHall,
});

function DoorHall() {
  const navigate = useNavigate();
  const [chosen, setChosen] = useState<(typeof doors)[number] | null>(null);
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (!chosen) return;
    if (count === 0) {
      navigate({ to: chosen.to });
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [chosen, count, navigate]);

  return (
    <main className="theme-royal relative min-h-screen overflow-hidden bg-background">
      <img
        src={threeDoors}
        alt=""
        aria-hidden
        width={1536}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-5 py-16">
        <header className="text-center">
          <p className="font-sans text-[0.6rem] uppercase tracking-[0.5em] text-primary">
            Aula Utama
          </p>
          <h1 className="mt-3 text-3xl tracking-[0.12em] sm:text-5xl">Pilih Satu Pintu</h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Tiga gerbang terbuka untukmu. Masing-masing menyimpan dunia yang berbeda.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {doors.map((door, i) => (
            <motion.button
              key={door.id}
              type="button"
              onClick={() => setChosen(door)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer rounded-[6rem_6rem_0.5rem_0.5rem] border-2 border-primary/35 bg-card/70 px-5 pb-7 pt-10 text-center backdrop-blur-sm transition-colors hover:border-primary"
            >
              <span className="font-display text-4xl text-primary">{door.numeral}</span>
              <h2 className="mt-4 text-xl">{door.title}</h2>
              <p className="mt-2 text-base text-muted-foreground">{door.subtitle}</p>
              <span className="mt-5 inline-block font-sans text-[0.6rem] uppercase tracking-[0.3em] text-primary/80">
                {door.hint}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {chosen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          >
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.4em] text-primary">
              Gerbang {chosen.numeral} terbuka
            </p>
            <AnimatePresence mode="wait">
              <motion.span
                key={count}
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 font-display text-[7rem] leading-none text-gilt"
              >
                {count === 0 ? "✦" : count}
              </motion.span>
            </AnimatePresence>
            <p className="mt-4 text-lg text-muted-foreground">{chosen.title}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
