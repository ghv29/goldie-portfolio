"use client";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function Navigation() {
  const { lang, setLang } = useLang();
  const tx = t[lang].nav;
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

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
      setScrolled(window.scrollY > 20);
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

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-teal-700"
        style={{ scaleX: scrollYProgress }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8] transition-all duration-200 ${
          scrolled ? "border-b border-zinc-200" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-14">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-sm text-teal-700"
            aria-label="Back to top"
          >
            GV
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className={`text-xs font-medium transition-colors ${
                  active === l.href.replace("#", "")
                    ? "text-teal-700"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "de" : "en")}
              className="text-xs font-medium text-zinc-400 hover:text-zinc-900 transition-colors"
              aria-label="Switch language"
            >
              {lang === "en" ? "DE" : "EN"}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1 text-zinc-500 hover:text-zinc-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-14 left-0 right-0 z-40 bg-[#FAFAF8] border-b border-zinc-200 md:hidden"
          >
            <div className="container py-6 flex flex-col gap-5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className={`text-left text-base font-medium transition-colors ${
                    active === l.href.replace("#", "")
                      ? "text-teal-700"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
