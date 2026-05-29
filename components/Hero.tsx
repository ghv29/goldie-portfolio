"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const kpis = [
  { value: "2", label: "capstone projects" },
  { value: "44", label: "engineered features" },
  { value: "0.858", label: "R² turbofan" },
  { value: "70+", label: "skills extracted" },
];

export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang].hero;

  return (
    <section
      id="hero"
      className="section min-h-[92vh] flex flex-col justify-center border-b border-zinc-200"
    >
      <div className="container">
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display font-bold leading-[0.92] tracking-tight text-zinc-900 mb-6"
          style={{ fontSize: "clamp(3.25rem, 11vw, 7.5rem)" }}
        >
          Goldie
          <br />
          Vaghela
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-zinc-500 text-sm sm:text-base mb-10 max-w-lg"
        >
          Data Analyst &middot; Engineering &amp; Operations background &middot; Helmstedt, Germany
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mb-14">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            {tx.cta1}
          </button>
          <a href={lang === "de" ? "/cv-de.pdf" : "/cv-en.pdf"} download className="btn-secondary">
            {tx.cta3}
          </a>
        </motion.div>

        {/* KPI strip */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-zinc-200"
        >
          {kpis.map((kpi) => (
            <div key={kpi.label} className="flex items-baseline gap-2">
              <span className="font-mono text-lg font-semibold text-teal-700">{kpi.value}</span>
              <span className="text-xs text-zinc-400">{kpi.label}</span>
            </div>
          ))}
          <div className="flex items-baseline">
            <span className="font-mono text-sm text-zinc-400">Python &middot; SQL &middot; Tableau</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
