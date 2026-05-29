"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { resumeData } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { t, resumeTranslations } from "@/lib/translations";

const BULLET_KEYS = ["amazon", "textil", "tesla", "gg"] as const;

export default function Experience() {
  const { lang } = useLang();
  const tx = t[lang].experience;
  const bulletTranslations = resumeTranslations[lang].experience;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="section border-b border-zinc-200">
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
          {resumeData.experience.map((exp, i) => {
            const isOpen = open === i;
            const bullets = bulletTranslations[BULLET_KEYS[i]].bullets;

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  className="w-full text-left py-6 flex items-start justify-between gap-4 group"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                      <h3 className="font-display font-semibold text-base text-zinc-900">
                        {exp.role}
                      </h3>
                      <span className="text-zinc-300">·</span>
                      <span className="text-sm text-teal-700 font-medium">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 text-xs text-zinc-400">
                      <span className="font-mono">{exp.dates}</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown size={16} className="text-zinc-400 group-hover:text-zinc-600 transition-colors" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2.5 pb-8">
                        {bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                            <span className="mt-2 w-1 h-1 rounded-full bg-teal-700 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
