"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Briefcase, Zap } from "lucide-react";
import { resumeData } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { t, resumeTranslations } from "@/lib/translations";

const COMPANY_COLORS = ["var(--accent)", "var(--accent-2)", "var(--accent-3)", "var(--accent-4)"];

// Map company key to translation key
const BULLET_KEYS = ["amazon", "textil", "tesla", "gg"] as const;

export default function Experience() {
  const { lang } = useLang();
  const tx = t[lang].experience;
  const bulletTranslations = resumeTranslations[lang].experience;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="section-label mb-3">{tx.label}</p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white">
            {tx.heading} <span className="gradient-text">{tx.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgb(var(--accent-rgb) / 0.25) 10%, rgb(var(--accent-rgb) / 0.25) 90%, transparent)" }} />

          <div className="space-y-4">
            {resumeData.experience.map((exp, i) => {
              const color = COMPANY_COLORS[i % COMPANY_COLORS.length];
              const isOpen = open === i;
              const bullets = bulletTranslations[BULLET_KEYS[i]].bullets;

              return (
                <motion.div key={exp.company} initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }} className="md:pl-16 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-[18px] top-6 w-3 h-3 rounded-full -translate-x-1/2 border-2"
                    style={{ borderColor: color, background: "var(--bg)", boxShadow: `0 0 12px color-mix(in oklab, ${color} 35%, transparent)` }} />

                  <div className="glass glass-hover rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setOpen(isOpen ? null : i)}>
                    <div className="p-5 md:p-6 flex items-start gap-4">
                      <div className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                        <Briefcase size={16} style={{ color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <div>
                            <h3 className="font-display font-bold text-lg text-white">{exp.role}</h3>
                            <p className="text-sm font-semibold" style={{ color }}>{exp.company}</p>
                          </div>
                          <div className="text-right">
                            <span className="tag tag-cyan text-[10px]">{exp.dates}</span>
                            <p className="text-xs text-slate-500 mt-1">{exp.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Zap size={11} className="text-[color:var(--accent)]" />
                          <span className="text-xs text-slate-400">{exp.highlight}</span>
                        </div>
                      </div>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0 mt-1">
                        <ChevronDown size={18} className="text-slate-500" />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                          <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-white/5">
                            <ul className="space-y-2 mt-4">
                              {bullets.map((b, bi) => (
                                <li key={bi} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                                  <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
