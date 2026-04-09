"use client";
import { motion } from "framer-motion";
import { Github, TrendingUp } from "lucide-react";
import { resumeData } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { t, resumeTranslations } from "@/lib/translations";

const PROJECT_COLORS = ["var(--accent)", "var(--accent-2)", "var(--accent-3)", "var(--accent-4)"];
const BULLET_KEYS = ["stellenradar", "turbofan", "group"] as const;

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

export default function Projects() {
  const { lang } = useLang();
  const tx = t[lang].projects;
  const bulletTranslations = resumeTranslations[lang].projects;

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="section-label mb-3">{tx.label}</p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white">
            {tx.heading} <span className="gradient-text">{tx.headingAccent}</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {resumeData.projects.map((project, i) => {
            const accent = PROJECT_COLORS[i % PROJECT_COLORS.length];
            const bullets = bulletTranslations[BULLET_KEYS[i]].bullets;

            return (
              <motion.div key={project.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 flex flex-col cursor-default"
                style={{ border: "1px solid var(--border)", transition: "border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${accent}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 30px color-mix(in oklab, ${accent} 18%, transparent)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}>
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="tag text-[10px]"
                    style={{
                      background: `color-mix(in oklab, ${accent} 10%, transparent)`,
                      color: accent,
                      border: `1px solid color-mix(in oklab, ${accent} 22%, transparent)`,
                    }}
                  >
                    {project.year}
                  </span>
                  <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer"
                    className="text-slate-500 hover:text-[color:var(--accent)] transition-colors">
                    <Github size={16} />
                  </a>
                </div>

                <h3 className="font-display font-bold text-base text-white mb-1 leading-tight">{project.title}</h3>
                <p className="text-xs text-slate-500 mb-4">{project.context}</p>

                {/* Metrics */}
                {project.metrics?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((m) => (
                      <span key={m} className="flex items-center gap-1 text-xs font-semibold font-display" style={{ color: accent }}>
                        <TrendingUp size={10} />{m}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bullets (translated) */}
                <ul className="space-y-2 mb-5 flex-1">
                  {bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2 text-xs text-slate-400 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent }} />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.stack.map((s) => (
                    <span key={s} className="text-[10px] px-2 py-0.5 rounded-full text-slate-400"
                      style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
