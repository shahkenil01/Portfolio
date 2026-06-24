"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaCloud, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  const titles = ["Aspiring DevOps Engineer", "Full Stack Developer"];
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentTitle = titles[titleIdx];
    const typingSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && displayText === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIdx]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider self-start"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Open for Internships & Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold font-poppins tracking-tight leading-none text-white"
          >
            Hi, I am <br />
            <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
              Shah Kenil
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-xl md:text-3xl font-medium font-inter text-gray-300 min-h-[40px] flex items-center"
          >
            {displayText}
            <span className="w-1.5 h-6 bg-primary ml-1.5 animate-pulse" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-inter text-base max-w-lg leading-relaxed"
          >
            Passionate about building highly reliable deployment pipelines, automation, cloud infrastructure and scalable full-stack applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full text-sm font-semibold glass-card text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Content - Visual Animated Skill Mind Map Sphere */}
        <div className="lg:col-span-5 flex justify-center items-center relative min-h-[380px]">
          <div className="relative w-80 h-80 flex items-center justify-center">
            
            {/* Center Core Brand */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 border border-primary/20 rounded-full flex items-center justify-center"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-32 h-32 border border-secondary/20 border-dashed rounded-full flex items-center justify-center"
            />
            
            <div className="absolute w-20 h-20 rounded-full glass-card border-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.3)] z-10">
              <span className="text-xl">🚀</span>
            </div>

            {/* Orbiting Skill Balloon nodes */}
            {[
              { name: "Docker", angle: 0, delay: 0, color: "border-blue-400 text-blue-400" },
              { name: "Linux", angle: 60, delay: 0.5, color: "border-amber-400 text-amber-400" },
              { name: "AWS", angle: 120, delay: 1, color: "border-orange-400 text-orange-400" },
              { name: "Git", angle: 180, delay: 1.5, color: "border-red-400 text-red-400" },
              { name: "React", angle: 240, delay: 2, color: "border-cyan-400 text-cyan-400" },
              { name: "CI/CD", angle: 300, delay: 2.5, color: "border-purple-400 text-purple-400" },
            ].map((skill, idx) => {
              const radius = 110;
              const x = Math.cos((skill.angle * Math.PI) / 180) * radius;
              const y = Math.sin((skill.angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: [x, x + 8, x - 4, x],
                    y: [y, y - 8, y + 6, y],
                  }}
                  transition={{
                    scale: { duration: 0.5, delay: skill.delay },
                    opacity: { duration: 0.5, delay: skill.delay },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 },
                    x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 },
                  }}
                  className={`absolute glass-card px-3.5 py-1.5 rounded-full border text-[10px] font-bold font-mono shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer hover:scale-110 hover:border-primary transition-all duration-300 ${skill.color}`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {skill.name}
                </motion.div>
              );
            })}

            {/* Inner Floating Mini Balloons */}
            {[
              { name: "YAML", angle: 30, radius: 60, color: "text-gray-400" },
              { name: "Nginx", angle: 150, radius: 60, color: "text-gray-400" },
              { name: "Node", angle: 270, radius: 60, color: "text-gray-400" },
            ].map((item, idx) => {
              const x = Math.cos((item.angle * Math.PI) / 180) * item.radius;
              const y = Math.sin((item.angle * Math.PI) / 180) * item.radius;
              return (
                <motion.div
                  key={idx}
                  animate={{
                    y: [y, y + 4, y - 4, y],
                    x: [x, x - 4, x + 4, x],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.5,
                  }}
                  className={`absolute text-[9px] font-semibold font-mono opacity-60 ${item.color}`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {item.name}
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
