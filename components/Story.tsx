"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function Story() {
  const { lang } = useLang();
  const tx = t[lang].story;

  return (
    <section id="story" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="section-label mb-3">{tx.label}</p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl mb-8">
            {tx.heading} <span className="gradient-text">{tx.headingAccent}</span>
          </h2>

          <div className="space-y-5 text-base leading-relaxed">
            {tx.paragraphs.map((p) => (
              <p key={p} className="text-slate-300 max-w-3xl">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 glass rounded-2xl p-6">
            <p className="font-display font-semibold text-slate-200 mb-3">{tx.proofTitle}</p>
            <ul className="grid gap-2 text-slate-300 text-sm leading-relaxed">
              {tx.proofBullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

