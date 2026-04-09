import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        bg: "#050810",
        surface: "#0d1117",
        "surface-2": "#111827",
        accent: "#00d4ff",
        "accent-2": "#7c3aed",
        "accent-3": "#10b981",
        muted: "#6b7280",
        border: "rgba(255,255,255,0.08)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        counter: "counter 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,212,255,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0,212,255,0.5)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
