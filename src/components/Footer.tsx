"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 relative z-10 border-t border-white/5 bg-black/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500 font-inter">
          &copy; {new Date().getFullYear()} Shah Kenil. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 font-poppins">
          Designed & Developed by <span className="text-primary font-bold">Shah Kenil</span>
        </p>
      </div>
    </footer>
  );
}
