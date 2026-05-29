"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function Story() {
  const { lang } = useLang();
  const tx = t[lang].story;

  return (
    <section id="story" className="section border-b border-zinc-200">
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
            {tx.heading}{" "}
            <span className="text-teal-700">{tx.headingAccent}</span>
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-zinc-600">
            {tx.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-zinc-200">
            <p className="font-display font-semibold text-sm text-zinc-900 mb-4">
              {tx.proofTitle}
            </p>
            <ul className="space-y-3">
              {tx.proofBullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-teal-700 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
