"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function ImpactStrip() {
  const { lang } = useLang();
  const imp = t[lang].impact;

  const items = [
    { value: "0.858", label: imp.r2, context: imp.r2ctx },
    { value: "70+", label: imp.skills, context: imp.skillsCtx },
    { value: "122K", label: imp.records, context: imp.recordsCtx },
    { value: "50–60", label: imp.team, context: imp.teamCtx },
  ];

  return (
    <section className="py-10 border-y border-zinc-200 bg-zinc-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200"
        >
          {items.map((item) => (
            <div key={item.label} className="px-5 py-2 first:pl-0">
              <p className="font-mono text-2xl font-semibold text-teal-700 leading-none mb-1">
                {item.value}
              </p>
              <p className="text-xs font-medium text-zinc-700 mb-0.5">{item.label}</p>
              <p className="text-xs text-zinc-400">{item.context}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
