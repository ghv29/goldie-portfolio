"use client";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { resumeData } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang].hero;
  const { basics } = resumeData;

  const scrollToExperience = () =>
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="section relative min-h-screen flex flex-col justify-center">
      <div className="container relative z-10">
        {/* Name */}
        <motion.h1 {...fadeUp(0.1)}
          className="font-display font-extrabold text-5xl sm:text-6xl lg:text-8xl text-white mb-4 leading-none tracking-tight">
          Goldie <span className="gradient-text">Vaghela</span>
        </motion.h1>

        {/* Title */}
        <motion.div {...fadeUp(0.2)} className="flex flex-wrap items-center gap-3 mb-6">
          <p className="font-display text-xl sm:text-2xl text-slate-300 font-medium">{tx.title}</p>
          <span className="w-1 h-1 rounded-full bg-slate-500" />
          <p className="font-display text-lg text-slate-500">{tx.subtitle}</p>
        </motion.div>

        {/* Tagline */}
        <motion.p {...fadeUp(0.3)} className="text-slate-400 max-w-2xl text-base leading-relaxed mb-2">
          {tx.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-12">
          <button onClick={scrollToExperience} className="btn-primary">{tx.cta1}</button>
          <a href={`https://${basics.github}`} target="_blank" rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2">
            <Github size={14} />{tx.cta2}
          </a>
        </motion.div>

        {/* Contact links */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4">
          {[
            { icon: <MapPin size={12} />, label: basics.location },
            { icon: <Mail size={12} />, label: basics.email, href: `mailto:${basics.email}` },
            { icon: <Linkedin size={12} />, label: "LinkedIn", href: `https://${basics.linkedin}` },
          ].map((c) => (
            <a key={c.label} href={c.href || "#"}
              target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-[color:var(--accent)] transition-colors text-xs">
              <span className="text-[color:var(--accent)]">{c.icon}</span>{c.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button onClick={scrollToExperience}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-[color:var(--accent)] transition-colors"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} aria-label="Scroll down">
        <span className="text-xs font-display tracking-widest uppercase">{tx.scroll}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
