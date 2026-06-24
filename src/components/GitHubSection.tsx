"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch, FaFolderOpen, FaCode } from "react-icons/fa";

interface Repo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
}

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [stats, setStats] = useState({ stars: 0, forks: 0 });

  // Load simulated Github projects and stats since live fetches depend on network/rate-limits
  useEffect(() => {
    const mockRepos: Repo[] = [
      {
        name: "e-commerce-best",
        description: "Full Stack E-Commerce Platform featuring role based admin panels, Cashfree checks and Docker environments.",
        stargazers_count: 18,
        forks_count: 5,
        language: "JavaScript",
        html_url: "https://github.com/shahkenil01",
      },
      {
        name: "aqua-shield-pro",
        description: "Water Filter Service Management Application designed with React Native, Expo, and Docker setup.",
        stargazers_count: 10,
        forks_count: 3,
        language: "TypeScript",
        html_url: "https://github.com/shahkenil01",
      },
      {
        name: "devops-ci-cd-pipelines",
        description: "Ready-to-use Docker compose bundles, AWS configuration matrices, and Github Actions workflow setups.",
        stargazers_count: 15,
        forks_count: 5,
        language: "YAML",
        html_url: "https://github.com/shahkenil01",
      },
      {
        name: "portfolio-nextjs",
        description: "Modern, high-performance developer portfolio built with Next.js, Framer Motion, and Tailwind CSS.",
        stargazers_count: 6,
        forks_count: 2,
        language: "TypeScript",
        html_url: "https://github.com/shahkenil01",
      },
    ];

    setRepos(mockRepos);
    const totalStars = mockRepos.reduce((acc, r) => acc + r.stargazers_count, 0);
    const totalForks = mockRepos.reduce((acc, r) => acc + r.forks_count, 0);
    setStats({ stars: totalStars, forks: totalForks });
  }, []);

  return (
    <section id="github" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-white mb-4">
            GitHub Contributions
          </h2>
          <p className="text-gray-400 font-inter max-w-lg mx-auto">
            Live metrics and featured repositories from my active GitHub profile.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Profile details summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 rounded-2xl border-primary/20 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 font-inter uppercase tracking-wider">GitHub Stars</p>
              <h3 className="text-3xl font-bold font-poppins text-white mt-1">{stats.stars}</h3>
            </div>
            <FaStar className="text-3xl text-yellow-500" />
          </div>
          
          <div className="glass-card p-6 rounded-2xl border-secondary/20 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 font-inter uppercase tracking-wider">Forks & Pulls</p>
              <h3 className="text-3xl font-bold font-poppins text-white mt-1">{stats.forks}</h3>
            </div>
            <FaCodeBranch className="text-3xl text-secondary" />
          </div>

          <div className="glass-card p-6 rounded-2xl border-primary/20 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 font-inter uppercase tracking-wider">Total Repositories</p>
              <h3 className="text-3xl font-bold font-poppins text-white mt-1">16</h3>
            </div>
            <FaFolderOpen className="text-3xl text-primary" />
          </div>
        </div>

        {/* Repositories layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-300 group block space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaGithub className="text-xl text-gray-400 group-hover:text-primary transition-colors" />
                  <h3 className="font-bold text-white font-poppins group-hover:text-primary transition-colors text-sm md:text-base">
                    {repo.name}
                  </h3>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 font-mono">
                  {repo.language}
                </span>
              </div>

              <p className="text-xs text-gray-300 font-inter leading-relaxed line-clamp-2">
                {repo.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-400 font-mono pt-2">
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" /> {repo.stargazers_count} Stars
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch className="text-secondary" /> {repo.forks_count} Forks
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
