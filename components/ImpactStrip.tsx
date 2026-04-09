"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function ImpactStrip() {
  const { lang } = useLang();
  const imp = t[lang].impact;

  const impactItems = [
    { label: imp.r2, value: "0.858", context: imp.r2ctx },
    { label: imp.skills, value: "70+", context: imp.skillsCtx },
    { label: imp.records, value: "122K", context: imp.recordsCtx },
    { label: imp.team, value: "50", context: imp.teamCtx },
  ];

  return (
    <section className="py-10">
      <div className="container">
        <motion.div
          {...fadeUp(0)}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-stretch justify-items-center"
        >
          {impactItems.map((item) => (
            <div
              key={item.label}
              className="glass rounded-xl px-4 py-3 w-full max-w-[280px] flex flex-col items-center text-center gap-1"
            >
              <span className="font-display font-bold text-2xl gradient-text leading-none">{item.value}</span>
              <p className="text-xs font-display font-semibold text-slate-300">{item.label}</p>
              <p className="text-xs text-slate-500">{item.context}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

