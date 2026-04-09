"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t, resumeTranslations } from "@/lib/translations";

export default function About() {
  const { lang } = useLang();
  const tx = t[lang].about;
  const summary = resumeTranslations[lang].summary;

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <p className="section-label mb-3">{tx.label}</p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-8">
            {tx.heading} <span className="gradient-text">{tx.headingAccent}</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">{summary}</p>
        </motion.div>
      </div>
    </section>
  );
}
