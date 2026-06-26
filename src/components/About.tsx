"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Text block */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold font-poppins text-primary">
              Who is Shah Kenil?
            </h3>
            <p className="text-gray-300 font-inter leading-relaxed">
              I am an Information Technology student passionate about DevOps, Cloud Computing, Full Stack Development, and Artificial Intelligence / Machine Learning. I enjoy building scalable web applications and learning modern DevOps practices.
            </p>
            <p className="text-gray-300 font-inter leading-relaxed">
              Currently, I am focused on Linux, Docker, Git, GitHub Actions, AWS, and CI/CD while also developing and integrating ML models with frameworks like FastAPI. My goal is to work at the intersection of development, operations, and AI to build reliable, automated, and intelligent systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="flex items-center gap-2 text-xs font-semibold text-gray-400 glass-card px-4 py-2 rounded-full border-primary/20">
                <FaMapMarkerAlt className="text-primary" /> Ahmedabad, Gujarat
              </span>
              <span className="flex items-center gap-2 text-xs font-semibold text-gray-400 glass-card px-4 py-2 rounded-full border-primary/20">
                📞 7990787840
              </span>
              <a
                href="mailto:shahkenil3506@gmail.com"
                className="flex items-center gap-2 text-xs font-semibold text-white bg-primary/20 hover:bg-primary/30 glass-card px-4 py-2 rounded-full border-primary/30 transition-all duration-300"
              >
                <FaFileAlt className="text-primary" /> Email Me
              </a>
            </div>
          </div>

          {/* Details / Stats block */}
          <div className="md:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl border-primary/20 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaGraduationCap className="text-3xl text-primary" />
                <div>
                  <h4 className="text-base font-bold font-poppins text-white">Education</h4>
                  <p className="text-xs text-gray-400">Credentials & Universities</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-200">
                    B.Tech in Information Technology
                  </p>
                  <p className="text-xs text-gray-400">
                    Silver Oak University (Semester 5) | CGPA: 8.07
                  </p>
                </div>

                <div className="border-t border-white/5 pt-3">
                  <p className="text-sm font-semibold text-gray-200">
                    Diploma in Information Technology
                  </p>
                  <p className="text-xs text-gray-400">
                    R. C. Technical Institute, GTU | CGPA: 7.47
                  </p>
                </div>

                <div className="border-t border-white/5 pt-3">
                  <p className="text-sm font-semibold text-gray-200">
                    SSC (10th)
                  </p>
                  <p className="text-xs text-gray-400">
                    Smt. V.D.N. Shah Madhyamik School, GSEB | 69.17%
                  </p>
                </div>
              </div>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl text-center hover:border-secondary/40 transition-colors duration-300">
                <p className="text-2xl font-bold font-poppins text-primary">2+</p>
                <p className="text-xs text-gray-400">Key Projects</p>
              </div>
              <div className="glass-card p-4 rounded-xl text-center hover:border-secondary/40 transition-colors duration-300">
                <p className="text-2xl font-bold font-poppins text-secondary">20+</p>
                <p className="text-xs text-gray-400">Tech Skills</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
