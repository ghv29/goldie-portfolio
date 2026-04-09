"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, ExternalLink } from "lucide-react";
import { resumeData } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { t, resumeTranslations } from "@/lib/translations";

const EDU_COLORS = ["var(--accent)", "var(--accent-2)", "var(--accent-3)", "var(--accent-4)"];
const EDU_KEYS = ["ironhack", "fhm", "gtu"] as const;

export default function Education() {
  const { lang } = useLang();
  const tx = t[lang].education;
  const eduTranslations = resumeTranslations[lang].education;

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="section-label mb-3">{tx.label}</p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white">
            {tx.heading} <span className="gradient-text">{tx.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {resumeData.education.map((edu, i) => {
            const color = EDU_COLORS[i % EDU_COLORS.length];
            const details = eduTranslations[EDU_KEYS[i]];

            return (
              <motion.div key={edu.degree} initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-6 md:p-8 flex gap-5">
                <div className="hidden sm:flex w-12 h-12 rounded-xl items-center justify-center flex-shrink-0"
                  style={{ background: `${color}14`, border: `1px solid ${color}30` }}>
                  <GraduationCap size={20} style={{ color }} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{edu.degree}</h3>
                      <p className="font-semibold text-sm" style={{ color }}>{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="tag tag-cyan text-[10px]">{edu.dates}</span>
                      <p className="text-xs text-slate-500 mt-1 flex items-center justify-end gap-1">
                        <MapPin size={10} />{edu.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mt-3">
                    {details.map((d, di) => (
                      <li key={di} className="flex gap-2 text-sm text-slate-400 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />{d}
                      </li>
                    ))}
                  </ul>
                  {edu.link && (
                    <a href={`https://${edu.link}`} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs mt-3 transition-colors" style={{ color }}>
                      <ExternalLink size={11} />{edu.link}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
