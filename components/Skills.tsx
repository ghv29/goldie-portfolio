"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { t, resumeTranslations } from "@/lib/translations";

const GROUP_COLORS: Record<string, string> = {
  "Programming & Data": "var(--accent)",
  "Visualisation & BI": "var(--accent-2)",
  "AI / Tools / Deploy": "var(--accent-3)",
  "Other": "var(--accent-4)",
};

export default function Skills() {
  const { lang } = useLang();
  const tx = t[lang].skills;
  const languages = resumeTranslations[lang].languages;

  const gridVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="section-label mb-3">{tx.label}</p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white">
            {tx.heading} <span className="gradient-text">{tx.headingAccent}</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {Object.entries(resumeData.skills).map(([group, skills], gi) => {
            const color = GROUP_COLORS[group] || "var(--accent)";
            const label = tx.groupLabels[group as keyof typeof tx.groupLabels] || group;
            return (
              <motion.div
                key={group}
                variants={cardVariants}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-8 rounded-full" style={{ background: color }} />
                  <div>
                    <p className="text-[10px] font-display font-semibold uppercase tracking-widest" style={{ color }}>{label}</p>
                    <h3 className="font-display font-bold text-white">{group}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, si) => (
                    <motion.span key={skill}
                      initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} transition={{ duration: 0.3, delay: si * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold font-display cursor-default"
                      style={{
                        background: `color-mix(in oklab, ${color} 14%, transparent)`,
                        border: `1px solid color-mix(in oklab, ${color} 26%, transparent)`,
                        color: "var(--text-strong)",
                      }}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Languages & Certs */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 rounded-full bg-[color:var(--accent)]" />
              <h3 className="font-display font-bold text-white">{tx.languages}</h3>
            </div>
            <div className="space-y-3">
              {languages.map((l) => (
                <div key={l.lang} className="flex items-center justify-between">
                  <span className="text-sm text-slate-300 font-semibold">{l.lang}</span>
                  <span className="text-xs text-slate-400">{l.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 rounded-full bg-[color:var(--accent-2)]" />
              <h3 className="font-display font-bold text-white">{tx.certifications}</h3>
            </div>
            <div className="space-y-2">
              {resumeData.certifications.map((c) => (
                <div key={c} className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
                  <span className="text-[color:var(--accent-2)] leading-none mt-[3px]">◆</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
