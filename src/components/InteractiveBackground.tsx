"use client";

import React, { useEffect, useRef, useState } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse Glow effect tracker
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Lenis Smooth Scroll Setup removed



    // Canvas Particles
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screens
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Absolute Full Screen Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
      />
      {/* Global Glowing Cursor Tracker */}
      <div className="fixed inset-0 pointer-events-none z-10 cursor-glow" />

      {/* Floating Ambient Blobs */}
      <div className="fixed -top-40 -left-40 w-96 h-96 gradient-blob-1 rounded-full blur-3xl pointer-events-none z-0 opacity-60" />
      <div className="fixed top-1/2 -right-40 w-[500px] h-[500px] gradient-blob-2 rounded-full blur-3xl pointer-events-none z-0 opacity-50" />
      <div className="fixed -bottom-40 left-1/3 w-[450px] h-[450px] gradient-blob-1 rounded-full blur-3xl pointer-events-none z-0 opacity-40" />
    </>
  );
}
