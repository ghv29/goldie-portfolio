# Goldie Vaghela — Portfolio

A responsive data analytics portfolio built with Next.js 14, TailwindCSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
goldie-portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page orchestrator
│   └── globals.css         # Global styles, CSS variables, utility classes
├── components/
│   ├── AnimatedBackground.tsx  # Canvas particle + mesh gradient background
│   ├── SplashScreen.tsx        # 1.5s intro with monogram + progress bar
│   ├── Navigation.tsx          # Sticky nav with scroll spy + mobile menu
│   ├── Hero.tsx                # Full-screen hero
│   ├── ImpactStrip.tsx         # KPI cards (placed above Projects)
│   ├── Story.tsx               # Motivation/story section (bilingual)
│   ├── About.tsx               # Professional summary
│   ├── Experience.tsx          # Accordion timeline with company colours
│   ├── Projects.tsx            # Project cards with metrics + stack tags
│   ├── Skills.tsx              # Grouped skill pills + languages + certs
│   ├── Education.tsx           # Education cards with details
│   └── Contact.tsx             # CTA section + all contact links
├── lib/
│   └── data.ts             # Full structured resume data (JSON)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customisation

All content lives in `lib/data.ts` — edit it to update any text, links, or data without touching components.

To update contact links, edit `basics` in `lib/data.ts`.

Text for section headings and bilingual content lives in `lib/translations.ts`.
