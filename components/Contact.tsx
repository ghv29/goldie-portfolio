"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left: heading + links */}
          <div>
            <p className="section-label mb-3">{tx.label}</p>
            <h2 className="font-display font-bold text-4xl text-zinc-900 mb-4">
              {tx.heading} {tx.headingAccent}
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10">{tx.body}</p>

            <div className="space-y-5">
              <a
                href={`mailto:${basics.email}`}
                className="flex items-center gap-3 text-sm text-zinc-600 hover:text-teal-700 transition-colors"
              >
                <Mail size={16} className="text-teal-700 flex-shrink-0" />
                {basics.email}
              </a>
              <a
                href={`https://${basics.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-600 hover:text-teal-700 transition-colors"
              >
                <Github size={16} className="text-teal-700 flex-shrink-0" />
                {basics.github}
              </a>
              <a
                href={`https://${basics.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-600 hover:text-teal-700 transition-colors"
              >
                <Linkedin size={16} className="text-teal-700 flex-shrink-0" />
                {basics.linkedin}
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-zinc-200">
              <p className="text-xs text-zinc-400 leading-relaxed">{basics.workAuth}</p>
            </div>
          </div>

          {/* Right: QR code for job fair */}
          <div className="flex flex-col items-start gap-3">
            <p className="text-xs text-zinc-400 uppercase tracking-widest">Scan to visit</p>
            <div className="border border-zinc-200 p-4 bg-white inline-block">
              <QRCodeSVG
                value="https://goldie-portfolio.vercel.app"
                size={168}
                fgColor="#18181B"
                bgColor="#FFFFFF"
                level="M"
              />
            </div>
            <p className="font-mono text-xs text-zinc-400">goldie-portfolio.vercel.app</p>
          </div>
        </motion.div>

        <div className="mt-20 pt-6 border-t border-zinc-200">
          <p className="text-xs text-zinc-400">{footer.copy}</p>
        </div>
      </div>
    </section>
  );
}
