"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function Navigation() {
  const { lang, setLang } = useLang();
  const tx = t[lang].nav;
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  const NAV_LINKS = [
    { label: tx.about, href: "#about" },
    { label: tx.experience, href: "#experience" },
    { label: tx.projects, href: "#projects" },
    { label: tx.skills, href: "#skills" },
    { label: tx.education, href: "#education" },
    { label: tx.contact, href: "#contact" },
  ];

  useEffect(() => {
    const ids = ["about", "experience", "projects", "skills", "education", "contact"];
    const handleScroll = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  const LangToggle = ({ className = "" }: { className?: string }) => (
    <button
      onClick={() => setLang(lang === "en" ? "de" : "en")}
      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-display font-bold tracking-wider transition-all ${className}`}
      style={{ background: "rgb(var(--accent-rgb) / 0.08)", border: "1px solid rgb(var(--accent-rgb) / 0.2)" }}
      aria-label="Switch language"
    >
      <span className={lang === "en" ? "text-[color:var(--accent)]" : "text-slate-500"}>EN</span>
      <span className="text-slate-600 mx-0.5">/</span>
      <span className={lang === "de" ? "text-[color:var(--accent)]" : "text-slate-500"}>DE</span>
    </button>
  );

  return (
    <>
      {/* Desktop */}
      <motion.nav
        style={{ opacity }}
        className="fixed top-4 left-0 right-0 z-50 hidden md:flex justify-center px-8"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.8, duration: 0.5, ease: "easeOut" }}
      >
        <div className="glass rounded-2xl px-6 py-3 flex items-center gap-5"
          style={{ backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="font-display font-bold text-sm gradient-text mr-1">GV</span>
          {NAV_LINKS.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className={`text-[11px] font-display font-semibold uppercase tracking-widest transition-colors ${
                active === l.href.replace("#", "") ? "text-[color:var(--accent)]" : "text-slate-400 hover:text-slate-200"
              }`}>
              {l.label}
            </button>
          ))}
          <LangToggle className="ml-1" />
        </div>
      </motion.nav>

      {/* Mobile top-right controls */}
      <motion.div className="fixed top-4 right-4 z-50 md:hidden flex items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <LangToggle />
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="glass w-10 h-10 rounded-xl flex items-center justify-center" aria-label="Menu">
          {mobileOpen ? <X size={18} className="text-[color:var(--accent)]" /> : <Menu size={18} className="text-slate-300" />}
        </button>
      </motion.div>

      {/* Mobile drawer */}
      <motion.div className="fixed inset-0 z-40 md:hidden" initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        transition={{ duration: 0.25 }}>
        <div className="absolute inset-0 bg-bg/90 backdrop-blur-xl" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-7">
          {NAV_LINKS.map((l, i) => (
            <motion.button key={l.href} onClick={() => scrollTo(l.href)}
              className="font-display font-bold text-2xl text-slate-200 hover:text-[color:var(--accent)] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.06 }}>
              {l.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Scroll progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{ scaleX: scrollYProgress, background: "linear-gradient(90deg, var(--accent), var(--accent-2))" }} />
    </>
  );
}
