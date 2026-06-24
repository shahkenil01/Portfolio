"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaDocker, FaDatabase, FaServer, FaCodeBranch } from "react-icons/fa";
import { SiExpo, SiFirebase } from "react-icons/si";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 font-inter max-w-lg mx-auto">
            Practical demonstrations of complex system architecture, automation, and full-stack solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          
          {/* Project 1: Aqua Shield Pro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Architecture Representation */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="glass-card p-6 rounded-3xl border-primary/20 bg-opacity-70 relative overflow-hidden">
                <div className="text-xs font-bold text-primary/80 font-mono mb-4 text-center">Mobile UI Screens Preview</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-1">
                    <p className="text-[8px] text-gray-400 font-mono text-center">Home</p>
                    <img src="/assets/mobile_home.png" alt="Home UI" className="rounded-lg border border-white/5 object-cover w-full aspect-[9/16]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[8px] text-gray-400 font-mono text-center">Detail</p>
                    <img src="/assets/mobile_detail.png" alt="Detail UI" className="rounded-lg border border-white/5 object-cover w-full aspect-[9/16]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[8px] text-gray-400 font-mono text-center">Reminders</p>
                    <img src="/assets/mobile_reminders.png" alt="Reminders UI" className="rounded-lg border border-white/5 object-cover w-full aspect-[9/16]" />
                  </div>
                </div>

                {/* Simulated Architecture Graph */}
                <div className="mt-6 border-t border-white/5 pt-4 space-y-3 font-mono text-[10px] text-gray-300">
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg border border-white/5">
                    <span>CI/CD Pipeline:</span>
                    <span className="text-primary font-semibold">android-apk.yml (Free Compiler VM)</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg border border-white/5">
                    <span>DevOps Metaspace:</span>
                    <span className="text-secondary font-semibold">-XX:MaxMetaspaceSize=1024m</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">
                Featured Case Study (Mobile & DevOps)
              </span>
              <h3 className="text-3xl font-bold font-poppins text-white">
                Aqua Shield Pro
              </h3>
              <p className="text-gray-400 font-inter leading-relaxed text-sm">
                A cross-platform Water Filter Service Management App with robust offline support, automated push reminders (3m/6m/1y), and quick maps navigation. Orchestrated with a custom Android APK compiler pipeline running on free GitHub Action virtual machines.
              </p>
              
              <ul className="grid grid-cols-2 gap-3 text-xs text-gray-300 font-inter">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> React Native & Expo Router
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Firebase Auth & Firestore
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> AsyncStorage Cache Memory
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> GitHub actions APK Compiler
                </li>
              </ul>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/shahkenil01/WaterFilterApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-300"
                >
                  <FaExternalLinkAlt /> Live Code
                </a>
              </div>
            </div>

          </div>

          {/* Project 2: Full Stack E-Commerce Platform */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Content Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-secondary tracking-widest uppercase">
                Featured E-Commerce System
              </span>
              <h3 className="text-3xl font-bold font-poppins text-white">
                Full Stack E-Commerce Platform
              </h3>
              <p className="text-gray-400 font-inter leading-relaxed">
                A highly secure, responsive client storefront and role-based administration dashboard. Integrated with Cashfree Payment gateway, secure REST APIs, and automated via GitHub Actions pipelines.
              </p>
              
              <ul className="grid grid-cols-2 gap-3 text-sm text-gray-300 font-inter">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Node.js & Express API
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> MongoDB Database
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Cashfree Payment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Dockerized API
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="https://e-commerce-best.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-300"
                >
                  <FaExternalLinkAlt /> Live Store
                </a>
                <a
                  href="https://e-commerce-best-admin.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold glass-card text-white hover:border-secondary/50 transition-all duration-300"
                >
                  <FaExternalLinkAlt /> Admin Panel
                </a>
                <a
                  href="https://github.com/shahkenil01/Full-Stack_Ecommerce-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold glass-card text-white hover:border-white/30 transition-all duration-300"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>

            {/* Simulated UI / Animated Screen Preview */}
            <div className="lg:col-span-6">
              <div className="glass-card p-4 rounded-3xl border-secondary/20 relative overflow-hidden group hover:border-secondary/40 transition-all duration-500">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-[10px] text-gray-400 font-mono text-center">Storefront Landing</p>
                    <img 
                      src="/assets/ecommerce_store.png" 
                      alt="E-Commerce Storefront Screenshot" 
                      className="rounded-xl border border-white/5 w-full object-cover aspect-[4/3]"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] text-gray-400 font-mono text-center">Admin Panel Dashboard</p>
                    <img 
                      src="/assets/ecommerce_admin.png" 
                      alt="Admin Dashboard Screenshot" 
                      className="rounded-xl border border-white/5 w-full object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
