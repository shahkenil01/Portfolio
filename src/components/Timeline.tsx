"use client";

import React from "react";
import { FaBriefcase, FaAward, FaCalendarAlt } from "react-icons/fa";

export default function Timeline() {
  const experiences = [
    {
      type: "work",
      title: "Web Developer Intern",
      organization: "SoftCoding Solutions",
      date: "Internship Period",
      description: "Worked on website layout development, clean functional scripting, frontend layout refactoring, debugging cross-browser UI defects, and coordinating software development workflows.",
      icon: FaBriefcase,
      color: "border-primary text-primary",
    },
    {
      type: "hackathon",
      title: "Smart India Hackathon Participant",
      organization: "National Level Hackathon",
      date: "SIH Event",
      description: "Worked on collaborative problem solving, system workflow mapping, and quick prototyping of web modules resolving industry-level problem domains.",
      icon: FaAward,
      color: "border-secondary text-secondary",
    },
    {
      type: "hackathon",
      title: "Odoo Hackathon Developer",
      organization: "ERP Customization Hackathon",
      date: "Odoo Event",
      description: "Designed UI elements and APIs tailored around quick integrations and streamlined workflows, presenting functional models to evaluation committees.",
      icon: FaAward,
      color: "border-primary text-primary",
    },
  ];

  return (
    <section id="timeline" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-white mb-4">
            Experience & Hackathons
          </h2>
          <p className="text-gray-400 font-inter max-w-lg mx-auto">
            My development milestone timeline, showing professional work history and hackathon achievements.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 pl-8 ml-4 space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className="relative group">
                
                {/* Node point icon */}
                <div className={`absolute -left-[50px] top-1 w-10 h-10 rounded-full bg-[#050816] border-2 ${exp.color} flex items-center justify-center text-sm shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110`}>
                  <Icon />
                </div>

                {/* Content Panel */}
                <div className="glass-card p-6 rounded-2xl border-white/5 hover:border-white/10 transition-all duration-300 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/5 text-gray-400 flex items-center gap-1.5 font-inter">
                      <FaCalendarAlt /> {exp.date}
                    </span>
                    <span className={`text-[10px] uppercase font-bold tracking-widest ${exp.type === "work" ? "text-primary" : "text-secondary"}`}>
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-poppins text-white">
                    {exp.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-gray-400 font-inter">
                    {exp.organization}
                  </p>

                  <p className="text-sm text-gray-300 font-inter leading-relaxed">
                    {exp.description}
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
