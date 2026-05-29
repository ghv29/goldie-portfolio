"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { resumeData } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { t, resumeTranslations } from "@/lib/translations";

const FEATURED = [
  {
    key: "stellenradar" as const,
    result: "ETL + NLP job-search pipeline",
    image: "/project-stellenradar.svg",
    imageAlt: "StellenRadar dashboard — job matches and NLP skill extraction",
  },
  {
    key: "turbofan" as const,
    result: "Predicted engine failure on NASA CMAPSS data",
    image: "/project-turbofan.svg",
    imageAlt: "Turbofan predictive maintenance — fleet health dashboard",
  },
];

export default function Projects() {
  const { lang } = useLang();
  const tx = t[lang].projects;
  const bulletTx = resumeTranslations[lang].projects;

  return (
    <section id="projects" className="section border-b border-zinc-200">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">{tx.label}</p>
          <h2 className="font-display font-bold text-4xl text-zinc-900">
            {tx.heading} {tx.headingAccent}
          </h2>
        </motion.div>

        <div className="divide-y divide-zinc-200">
          {/* Featured projects: two-column text + image */}
          {FEATURED.map((proj, i) => {
            const project = resumeData.projects[i];
            const bullets = bulletTx[proj.key].bullets;
            const imgRight = i % 2 === 0;

            return (
              <motion.div
                key={proj.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center py-16"
              >
                {/* Text column */}
                <div className={imgRight ? "" : "md:order-2"}>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-xs text-zinc-400">{project.year}</span>
                    <a
                      href={`https://${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-teal-700 transition-colors"
                    >
                      <Github size={12} />
                      {project.github}
                    </a>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-zinc-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-teal-700 text-sm font-medium mb-6">{proj.result}</p>

                  <ul className="space-y-2.5 mb-7">
                    {bullets.slice(0, 3).map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-teal-700 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                    {project.stack.join(" · ")}
                  </p>
                </div>

                {/* Image column */}
                <div className={imgRight ? "" : "md:order-1"}>
                  <div className="border border-zinc-200 overflow-hidden bg-zinc-50">
                    <img
                      src={proj.image}
                      alt={proj.imageAlt}
                      className="w-full h-56 sm:h-64 object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Group projects row — no image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="py-16 max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-xs text-zinc-400">{resumeData.projects[2].year}</span>
              <a
                href="https://github.com/ghv29"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-teal-700 transition-colors"
              >
                <Github size={12} />
                github.com/ghv29
              </a>
            </div>
            <h3 className="font-display font-bold text-2xl text-zinc-900 mb-1">
              {resumeData.projects[2].title}
            </h3>
            <p className="text-teal-700 text-sm font-medium mb-6">
              {resumeData.projects[2].context}
            </p>
            <ul className="space-y-2.5 mb-7">
              {bulletTx.group.bullets.map((b, bi) => (
                <li key={bi} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-teal-700 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-xs text-zinc-400 font-mono leading-relaxed">
              {resumeData.projects[2].stack.join(" · ")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
