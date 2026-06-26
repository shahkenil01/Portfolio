import React from "react";
import InteractiveBackground from "@/components/InteractiveBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Roadmap from "@/components/Roadmap";
import StatsSection from "@/components/StatsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050816] text-[#f3f4f6]">
      {/* Dynamic particles, mouse glows & lenis wrapper */}
      <InteractiveBackground />

      {/* Main navigation */}
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Roadmap />
        <StatsSection />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
