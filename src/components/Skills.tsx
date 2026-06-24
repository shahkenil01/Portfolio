"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaLinux, FaGitAlt, FaGithub, FaDocker, FaAws, FaTerminal, FaNetworkWired,
  FaReact, FaNodeJs, FaDatabase, FaExchangeAlt, FaFire
} from "react-icons/fa";
import { SiGithubactions, SiYaml, SiNextdotjs, SiExpress, SiExpo } from "react-icons/si";

export default function Skills() {
  const devopsSkills = [
    { name: "Linux", icon: FaLinux, level: 85, color: "from-amber-400 to-amber-600" },
    { name: "Git", icon: FaGitAlt, level: 90, color: "from-orange-500 to-red-600" },
    { name: "GitHub", icon: FaGithub, level: 90, color: "from-neutral-600 to-neutral-800" },
    { name: "Docker", icon: FaDocker, level: 85, color: "from-blue-400 to-blue-600" },
    { name: "GitHub Actions", icon: SiGithubactions, level: 80, color: "from-blue-600 to-indigo-700" },
    { name: "YAML / Configuration", icon: SiYaml, level: 85, color: "from-red-400 to-pink-600" },
    { name: "AWS Services", icon: FaAws, level: 75, color: "from-yellow-500 to-orange-600" },
    { name: "Networking", icon: FaNetworkWired, level: 75, color: "from-teal-400 to-emerald-600" },
    { name: "CI/CD Pipelines", icon: FaTerminal, level: 80, color: "from-purple-500 to-indigo-600" },
  ];

  const devSkills = [
    { name: "React", icon: FaReact, level: 90, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, level: 85, color: "from-neutral-700 to-neutral-900" },
    { name: "Node.js", icon: FaNodeJs, level: 85, color: "from-green-500 to-emerald-600" },
    { name: "Express.js", icon: SiExpress, level: 85, color: "from-gray-500 to-gray-700" },
    { name: "MongoDB", icon: FaDatabase, level: 80, color: "from-green-600 to-emerald-700" },
    { name: "REST APIs", icon: FaExchangeAlt, level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Firebase", icon: FaFire, level: 80, color: "from-yellow-500 to-amber-600" },
    { name: "React Native & Expo", icon: SiExpo, level: 75, color: "from-purple-600 to-pink-600" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 font-inter max-w-lg mx-auto">
            A comprehensive overview of my technological stack in DevOps, Cloud Automation, and Full Stack Development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* DevOps & Cloud */}
          <div>
            <h3 className="text-2xl font-bold font-poppins text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">
                01
              </span>
              DevOps & Cloud Automation
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {devopsSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-5 rounded-2xl border-primary/20 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-lg`}>
                        <Icon />
                      </div>
                      <h4 className="font-bold text-white text-sm font-poppins">{skill.name}</h4>
                    </div>

                    {/* Skill Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-gray-400 font-inter">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Development */}
          <div>
            <h3 className="text-2xl font-bold font-poppins text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">
                02
              </span>
              Full Stack Development
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {devSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-5 rounded-2xl border-secondary/20 hover:border-secondary/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-lg`}>
                        <Icon />
                      </div>
                      <h4 className="font-bold text-white text-sm font-poppins">{skill.name}</h4>
                    </div>

                    {/* Skill Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-gray-400 font-inter">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
