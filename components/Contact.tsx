"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Shield } from "lucide-react";
import { resumeData } from "@/lib/data";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function Contact() {
  const { lang } = useLang();
  const tx = t[lang].contact;
  const footer = t[lang].footer;
  const { basics } = resumeData;

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Glow blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, rgb(var(--accent-rgb) / 0.25), transparent)" }} />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-15"
            style={{ background: "radial-gradient(circle, rgb(var(--accent-2-rgb) / 0.22), transparent)" }} />

          <div className="relative z-10">
            <p className="section-label mb-4">{tx.label}</p>
            <h2 className="font-display font-extrabold text-4xl lg:text-6xl text-white mb-4">
              {tx.heading} <span className="gradient-text">{tx.headingAccent}</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 text-base leading-relaxed">{tx.body}</p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a href={`mailto:${basics.email}`} className="btn-primary flex items-center gap-2">
                <Mail size={14} />{basics.email}
              </a>
            </div>

            <div className="mb-10">
              <div className="inline-flex items-center gap-2 tag tag-green text-[10px]">
                <Shield size={10} />
                <span>EU work authorisation</span>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              {[
                { icon: <Github size={18} />, href: `https://${basics.github}`, label: "GitHub" },
                { icon: <Linkedin size={18} />, href: `https://${basics.linkedin}`, label: "LinkedIn" },
                { icon: <MapPin size={18} />, href: "#", label: basics.location },
              ].map((l) => (
                <a key={l.label} href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-[color:var(--accent)] transition-colors">
                  {l.icon}
                  <span className="text-xs">{l.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <p className="text-center text-slate-600 text-xs mt-8">{footer.copy}</p>
      </div>
    </section>
  );
}
