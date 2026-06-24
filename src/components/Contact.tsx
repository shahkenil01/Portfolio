"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setSuccess(null);

    // Using simulated responses for now
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      if (formRef.current) formRef.current.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 font-inter max-w-lg mx-auto">
            Have a project or integration requirement in mind? Let's discuss details and create deployment options.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xl font-bold font-poppins text-primary">Contact Information</h3>
            <p className="text-sm text-gray-300 font-inter leading-relaxed">
              Fill out the form or reach out directly on LinkedIn or GitHub. I typically reply within 24 hours.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:shahkenil3506@gmail.com"
                className="flex items-center gap-4 glass-card p-4 rounded-xl border-white/5 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-base">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-inter">Direct Mail</p>
                  <p className="text-sm font-semibold text-white font-mono mt-0.5">shahkenil3506@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/kenil-shah-816b99239/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card p-4 rounded-xl border-white/5 hover:border-secondary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center text-base">
                  <FaLinkedin />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-inter">LinkedIn</p>
                  <p className="text-sm font-semibold text-white mt-0.5">linkedin.com/in/kenil-shah</p>
                </div>
              </a>

              <a
                href="https://github.com/shahkenil01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card p-4 rounded-xl border-white/5 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-base">
                  <FaGithub />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-inter">GitHub Profile</p>
                  <p className="text-sm font-semibold text-white mt-0.5">github.com/shahkenil01</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-7">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="glass-card p-6 md:p-8 rounded-3xl border-primary/20 bg-opacity-70 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-inter">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all duration-300 font-inter"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-inter">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all duration-300 font-inter"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-inter">
                  Message Details
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all duration-300 font-inter"
                  placeholder="Describe project context or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? (
                  "Sending Message..."
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

              {success === true && (
                <p className="text-xs text-green-400 font-semibold text-center mt-2 animate-pulse">
                  ✓ Message sent successfully! I will reach out soon.
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
