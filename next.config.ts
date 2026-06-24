import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack in next.config.ts if it falls back improperly
  transpilePackages: ["framer-motion", "gsap"],
};

export default nextConfig;
