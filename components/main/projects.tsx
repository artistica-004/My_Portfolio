"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/constants";

const PROJECT_BADGES: Record<string, string[]> = {
  "Sophius AI": [
    "50% load performance improvement",
    "LangChain AI workflow",
    "Cross-platform mobile apps",
  ],
  "Indian Oil": [
    "50% performance uplift",
    "DeckGL geo-visualization",
    "Vite.js migration",
  ],
  "Lepton Maps": [
    "40% faster deployments",
    "Role-based dynamic UI",
    "Real-time insights",
  ],
  "Smart Market": [
    "45% UI performance gain",
    "Web Workers + Memoization",
    "TanStack Query migration",
  ],
  "API Health and Consumption Monitor": [
    "Slack + Email alerts",
    "Real-time health tracking",
    "Markdown message design",
  ],
  "RBL Gateway": [
    "OpenPGP encryption",
    "Banking-grade security",
    "Secure gateway",
  ],
  "Smart Campus": [
    "Three.js 3D visualization",
    "Telecom infrastructure map",
    "Real-time Supabase data",
  ],
};

const BADGE_COLORS = [
  {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-300",
    dot: "text-purple-400",
  },
  {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-300",
    dot: "text-emerald-400",
  },
  {
    bg: "bg-gray-500/10",
    border: "border-gray-500/25",
    text: "text-gray-300",
    dot: "text-gray-400",
  },
];

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className || "w-4 h-4"}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const FeaturedProjectCard = ({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) => {
  const badges = PROJECT_BADGES[project.title] || [];
  const maxTech = 15;
  const visibleTech = project.tech.slice(0, maxTech);
  const remaining = project.tech.length - maxTech;
  const hasLink = project.link && project.link !== "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="glass-card p-6 md:p-8 flex flex-col"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-gray-500 font-mono text-[10px] tracking-[0.15em] uppercase">
          {"Mission " + String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25 font-semibold tracking-wider uppercase flex items-center gap-1">
            ★ Features
          </span>
          {hasLink && (
            <Link href={project.link} target="_blank" rel="noreferrer noopener">
              <ExternalLinkIcon className="w-4 h-4 text-gray-600 hover:text-white transition-colors cursor-pointer" />
            </Link>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-cyan-400 font-space mb-3">
        {project.title}
      </h3>

      <p className="text-gray-400 text-[13px] leading-relaxed mb-4">
        {project.description}
      </p>

      <ul className="space-y-2.5 mb-5">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-2.5 text-[12px] text-gray-300/90 leading-[1.7]">
            <span className="text-amber-400/70 flex-shrink-0 text-[9px] mt-[3px]">✦</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-5">
        {badges.map((badge, i) => {
          const color = BADGE_COLORS[i % BADGE_COLORS.length];
          return (
            <span
              key={i}
              className={`text-[11px] px-3 py-1.5 rounded-full border ${color.bg} ${color.border} ${color.text} flex items-center gap-1.5`}
            >
              <span className={`${color.dot} text-[8px]`}>✦</span>
              {badge}
            </span>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
        {visibleTech.map((tech) => (
          <span key={tech} className="tech-pill">
            {tech}
          </span>
        ))}
        {remaining > 0 && (
          <span className="tech-pill opacity-60">+{remaining}</span>
        )}
      </div>

      {hasLink && (
        <Link
          href={project.link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
        >
          <ExternalLinkIcon className="w-3.5 h-3.5" />
          View Project →
        </Link>
      )}
    </motion.div>
  );
};

const StandardProjectCard = ({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) => {
  const maxTech = 15;
  const visibleTech = project.tech.slice(0, maxTech);
  const remaining = project.tech.length - maxTech;
  const hasLink = project.link && project.link !== "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index - 2) * 0.1 + 0.3, duration: 0.5 }}
      className="glass-card p-5 md:p-6 flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 font-mono text-[10px] tracking-[0.15em] uppercase">
          {"Mission " + String(index + 1).padStart(2, "0")}
        </span>
        {hasLink && (
          <Link href={project.link} target="_blank" rel="noreferrer noopener">
            <ExternalLinkIcon className="w-3.5 h-3.5 text-gray-600 hover:text-white transition-colors" />
          </Link>
        )}
      </div>

      <h3 className="text-base font-bold text-cyan-400 font-space mb-2">
        {project.title}
      </h3>

      <p className="text-gray-400 text-[12px] leading-relaxed mb-3">
        {project.description}
      </p>

      <ul className="space-y-2 mb-4">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-2 text-[12px] text-gray-300/90 leading-[1.7]">
            <span className="text-purple-400 flex-shrink-0 text-[10px] mt-0.5">✦</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mt-auto mb-3">
        {visibleTech.map((tech) => (
          <span key={tech} className="tech-pill">
            {tech}
          </span>
        ))}
        {remaining > 0 && (
          <span className="tech-pill opacity-60">+{remaining}</span>
        )}
      </div>

      {hasLink && (
        <Link
          href={project.link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
        >
          <ExternalLinkIcon className="w-3 h-3" />
          View Project →
        </Link>
      )}
    </motion.div>
  );
};

export const Projects = () => {
  const featured = PROJECTS.slice(0, 2);
  const standard = PROJECTS.slice(2);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto"
    >
      <div
        className="hidden md:block absolute right-[10%] top-[45%] w-1.5 h-1.5 rounded-full bg-emerald-400/40 animate-pulse"
      />
      <div
        className="hidden md:block absolute right-[15%] top-[75%] w-2 h-2 rounded-full bg-amber-400/30 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <span className="text-emerald-400/60 font-mono text-[11px] tracking-[0.2em]">
          {"// 04. PROJECTS"}
        </span>
      </motion.div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Space{" "}
          <span className="cursive gradient-text text-5xl md:text-6xl lg:text-7xl">
            Missions
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-400 text-[13px] max-w-xs leading-relaxed md:text-right"
        >
          Production-grade applications shipped for enterprise clients and built
          as flagship products.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {featured.map((project, i) => (
          <FeaturedProjectCard
            key={project.title}
            project={project}
            index={i}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {standard.map((project, i) => (
          <StandardProjectCard
            key={project.title}
            project={project}
            index={i + 2}
          />
        ))}
      </div>
    </section>
  );
};
