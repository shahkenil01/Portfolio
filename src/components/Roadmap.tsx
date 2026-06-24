"use client";

import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaLinux, FaDocker, FaAws } from "react-icons/fa";
import { SiGithubactions, SiKubernetes, SiTerraform, SiJenkins } from "react-icons/si";

export default function Roadmap() {
  const steps = [
    { title: "HTML & CSS", icon: FaHtml5, desc: "Foundational styling", status: "completed" },
    { title: "JavaScript", icon: FaJs, desc: "Interactive logics", status: "completed" },
    { title: "React & Node", icon: FaReact, desc: "Full Stack UI/APIs", status: "completed" },
    { title: "MongoDB / SQL", icon: FaDatabase, desc: "Data persistence", status: "completed" },
    { title: "Git & Versioning", icon: FaGitAlt, desc: "Code tracking", status: "completed" },
    { title: "Linux Shell", icon: FaLinux, desc: "System administrations", status: "completed" },
    { title: "Docker Containers", icon: FaDocker, desc: "Application packaging", status: "completed" },
    { title: "Actions & Pipelines", icon: SiGithubactions, desc: "CI/CD automations", status: "completed" },
    { title: "AWS Cloud", icon: FaAws, desc: "Scalable hosting & IAM", status: "completed" },
    { title: "Kubernetes (K8s)", icon: SiKubernetes, desc: "Container orchestrations", status: "future" },
    { title: "Terraform IaC", icon: SiTerraform, desc: "Infrastructure as Code", status: "future" },
    { title: "Jenkins Systems", icon: SiJenkins, desc: "Enterprise pipelines", status: "future" },
  ];

  return (
    <section id="roadmap" className="py-24 relative z-10 bg-black/10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-white mb-4">
            Learning Journey Roadmap
          </h2>
          <p className="text-gray-400 font-inter max-w-lg mx-auto">
            My structured growth pathway from standard layouts towards production-ready DevOps automation.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Roadmap Steps Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCompleted = step.status === "completed";
            return (
              <div 
                key={idx}
                className={`glass-card p-6 rounded-2xl border-white/5 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  isCompleted 
                    ? "border-primary/20 hover:border-primary/40 shadow-[0_0_15px_rgba(0,229,255,0.05)]" 
                    : "border-secondary/20 hover:border-secondary/40 shadow-[0_0_15px_rgba(124,58,237,0.05)]"
                }`}
              >
                {/* Step badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                    isCompleted 
                      ? "bg-primary/10 text-primary" 
                      : "bg-secondary/10 text-secondary"
                  }`}>
                    {isCompleted ? "COMPLETED" : "FUTURE"}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                    isCompleted 
                      ? "bg-primary/10 text-primary" 
                      : "bg-secondary/10 text-secondary"
                  }`}>
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm font-poppins">{step.title}</h3>
                    <p className="text-xs text-gray-400 font-inter mt-0.5">{step.desc}</p>
                  </div>
                </div>

                {/* Progress bar connector mockup */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>Step {idx + 1}</span>
                  <span className={isCompleted ? "text-primary/70" : "text-secondary/70"}>
                    {isCompleted ? "● Active Skill" : "○ Upcoming Study"}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
