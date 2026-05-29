"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { resumeData } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { t, resumeTranslations } from "@/lib/translations";

const EDU_KEYS = ["ironhack", "fhm", "gtu"] as const;

export default function Education() {
  const { lang } = useLang();
  const tx = t[lang].education;
  const eduTx = resumeTranslations[lang].education;

  return (
    <section id="education" className="section border-b border-zinc-200">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-3">{tx.label}</p>
          <h2 className="font-display font-bold text-4xl text-zinc-900">
            {tx.heading} {tx.headingAccent}
          </h2>
        </motion.div>

        <div className="divide-y divide-zinc-200">
          {resumeData.education.map((edu, i) => {
            const details = eduTx[EDU_KEYS[i]];
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="py-8 grid md:grid-cols-[1fr_auto] gap-6 items-start"
              >
                <div>
                  <h3 className="font-display font-semibold text-lg text-zinc-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-teal-700 text-sm font-medium mb-4">{edu.institution}</p>
                  <ul className="space-y-1.5">
                    {details.map((d, di) => (
                      <li key={di} className="flex gap-3 text-sm text-zinc-500 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-zinc-300 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-mono text-xs text-zinc-400 mb-1">{edu.dates}</p>
                  <p className="text-xs text-zinc-400 flex items-center justify-end gap-1">
                    <MapPin size={10} />
                    {edu.location}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
