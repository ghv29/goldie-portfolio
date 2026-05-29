"use client";
import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ImpactStrip from "@/components/ImpactStrip";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <SplashScreen onDone={() => setSplashDone(true)} />

      {splashDone && (
        <>
          <Navigation />
          <main className="bg-[#FAFAF8]">
            <Hero />
            <Story />
            <About />
            <Experience />
            <ImpactStrip />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
