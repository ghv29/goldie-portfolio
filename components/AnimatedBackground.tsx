"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 30 : 70;
    const LINE_DIST = isMobile ? 80 : 130;

    let W = window.innerWidth;
    let H = document.body.scrollHeight || window.innerHeight;
    let animId: number;

    const resize = () => {
      W = window.innerWidth;
      H = Math.max(document.body.scrollHeight, window.innerHeight);
      canvas.width = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      r: number; alpha: number;
    };

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.003;

      const styles = getComputedStyle(document.documentElement);
      const accent = styles.getPropertyValue("--accent-rgb").trim() || "37 99 235";
      const accent2 = styles.getPropertyValue("--accent-2-rgb").trim() || "79 70 229";
      const accent3 = styles.getPropertyValue("--accent-3-rgb").trim() || "16 185 129";
      const blobAlpha = parseFloat(styles.getPropertyValue("--bg-blob-alpha")) || 0;
      const dotAlphaBase = parseFloat(styles.getPropertyValue("--bg-dot-alpha")) || 0;
      const lineAlphaBase = parseFloat(styles.getPropertyValue("--bg-line-alpha")) || 0;

      const rgba = (rgb: string, a: number) => `rgb(${rgb} / ${Math.max(0, Math.min(1, a))})`;

      // Mesh gradient blobs
      if (blobAlpha > 0) {
        const g1 = ctx.createRadialGradient(W * 0.2, H * 0.1, 0, W * 0.2, H * 0.1, W * 0.45);
        g1.addColorStop(0, rgba(accent, blobAlpha));
        g1.addColorStop(1, "transparent");
        ctx.fillStyle = g1;
        ctx.fillRect(0, 0, W, H);

        const g2 = ctx.createRadialGradient(W * 0.8, H * 0.35, 0, W * 0.8, H * 0.35, W * 0.4);
        g2.addColorStop(0, rgba(accent2, blobAlpha));
        g2.addColorStop(1, "transparent");
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, W, H);

        const g3 = ctx.createRadialGradient(W * 0.5, H * 0.7, 0, W * 0.5, H * 0.7, W * 0.35);
        g3.addColorStop(0, rgba(accent3, blobAlpha * 0.9));
        g3.addColorStop(1, "transparent");
        ctx.fillStyle = g3;
        ctx.fillRect(0, 0, W, H);
      }

      // Update + draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = rgba(accent, p.alpha * dotAlphaBase);
        ctx.fill();
      }

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DIST) {
            const opacity = (1 - dist / LINE_DIST) * lineAlphaBase;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = rgba(accent, opacity);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
