"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { t, resumeTranslations } from "@/lib/translations";

export default function Skills() {
  const { lang } = useLang();
  const tx = t[lang].skills;
  const languages = resumeTranslations[lang].languages;

  return (
    <section id="skills" className="section border-b border-zinc-200">
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

        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">
          {Object.entries(resumeData.skills).map(([group, skills], gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.07 }}
            >
              <p className="section-label mb-4">{group}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs text-zinc-600 border border-zinc-200 bg-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-8 mt-16 pt-12 border-t border-zinc-200">
          <div>
            <p className="section-label mb-5">{tx.languages}</p>
            <div className="space-y-4 divide-y divide-zinc-100">
              {languages.map((l) => (
                <div key={l.lang} className="flex items-center justify-between pt-4 first:pt-0">
                  <span className="text-sm text-zinc-900 font-medium">{l.lang}</span>
                  <span className="text-xs text-zinc-500 font-mono">{l.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label mb-5">{tx.certifications}</p>
            <div className="space-y-3">
              {resumeData.certifications.map((c) => (
                <div key={c} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-teal-700 flex-shrink-0" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
