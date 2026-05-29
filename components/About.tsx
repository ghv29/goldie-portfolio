"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t, resumeTranslations } from "@/lib/translations";

export default function About() {
  const { lang } = useLang();
  const tx = t[lang].about;
  const summary = resumeTranslations[lang].summary;

  return (
    <section id="about" className="section border-b border-zinc-200">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="section-label mb-3">{tx.label}</p>
          <h2 className="font-display font-bold text-4xl text-zinc-900 mb-8">
            {tx.heading} {tx.headingAccent}
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed">{summary}</p>
        </motion.div>
      </div>
    </section>
  );
}
