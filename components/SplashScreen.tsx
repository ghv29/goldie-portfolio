"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const duration = 1500;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setProgress(p * 100);
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onDone, 600);
        }, 150);
      }
    };
    requestAnimationFrame(tick);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "#050810" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="relative mb-10"
          >
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center relative"
              style={{
                background: "linear-gradient(135deg, rgb(var(--accent-rgb) / 0.10), rgb(var(--accent-2-rgb) / 0.10))",
                border: "1px solid rgb(var(--accent-rgb) / 0.25)",
                boxShadow: "0 12px 35px rgb(15 23 42 / 0.18)",
              }}
            >
              <span className="font-display font-bold text-4xl gradient-text">GV</span>
            </div>
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{ border: "1px solid rgb(var(--accent-rgb) / 0.18)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="font-display text-sm tracking-[0.2em] uppercase text-slate-400 mb-8"
          >
            Goldie Vaghela
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-px bg-white/10 overflow-hidden relative rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                width: `${progress}%`,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
