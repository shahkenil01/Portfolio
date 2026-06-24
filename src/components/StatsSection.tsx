"use client";

import React, { useEffect, useState } from "react";
import { FaProjectDiagram, FaCode, FaGithub, FaAward, FaCertificate } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    { label: "Completed Projects", value: 12, suffix: "+", icon: FaProjectDiagram, color: "text-primary" },
    { label: "Technologies Used", value: 20, suffix: "+", icon: FaCode, color: "text-secondary" },
    { label: "GitHub Repos", value: 16, suffix: "", icon: FaGithub, color: "text-primary" },
    { label: "Hackathons", value: 2, suffix: "", icon: FaAward, color: "text-secondary" },
    { label: "Certifications", value: 5, suffix: "+", icon: FaCertificate, color: "text-primary" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      // Ease Out Quad
      const easeProgress = progress * (2 - progress);

      setCounts(
        stats.map((stat) => Math.floor(easeProgress * stat.value))
      );

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts(stats.map((stat) => stat.value));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 relative z-10 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="glass-card p-6 rounded-2xl border-white/5 text-center flex flex-col items-center justify-center space-y-3 hover:border-white/10 transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lg ${stat.color}`}>
                  <Icon />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold font-poppins text-white">
                    {counts[idx]}
                    <span className="text-primary">{stat.suffix}</span>
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-400 font-inter mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
