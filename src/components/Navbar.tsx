"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check current section
      const sections = ["home", "about", "skills", "projects", "timeline", "github", "contact"];
      let currentSection = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Timeline", id: "timeline" },
    { label: "Github", id: "github" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Scroll Progress Bar */}
      <div 
        className="h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between glass-nav mt-3 rounded-full mx-4 md:mx-auto max-w-5xl transition-all duration-300">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img 
            src="/assets/logo.png" 
            alt="SK Logo" 
            className="w-8 h-8 object-contain rounded-lg border border-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_10px_rgba(0,229,255,0.4)] transition-all duration-300"
          />
          <span className="text-sm font-bold font-poppins tracking-wider text-white group-hover:text-primary transition-colors">
            Shah Kenil
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-all duration-300 font-inter hover:text-primary ${
                activeSection === item.id ? "text-primary font-semibold" : "text-gray-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shahkenil01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kenil-shah-816b99239/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold glass-card border-secondary/30 text-white hover:border-primary/50 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}
