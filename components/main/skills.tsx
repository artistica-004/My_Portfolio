"use client";

import { motion } from "framer-motion";
import { SKILLS_CATEGORIES, TECH_TICKER } from "@/constants";

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const SkillCategory = ({
  category,
  index,
}: {
  category: (typeof SKILLS_CATEGORIES)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="glass-card p-3 sm:p-4 md:p-5 group min-w-0 w-full"
    >
      {/* Category header with colored dot */}
      <div className="flex items-center gap-2.5 mb-4">
        <span
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: category.color }}
        />
        <h3 className="text-[9px] sm:text-[10px] font-bold text-gray-300 tracking-[0.15em] font-mono uppercase">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 w-full min-w-0">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 + i * 0.03, duration: 0.3 }}
            className="cursor-default text-[10px] sm:text-[11px] md:text-xs rounded-md sm:rounded-lg px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 font-mono"
            style={{
              backgroundColor: hexToRgba(category.color, 0.08),
              borderColor: hexToRgba(category.color, 0.2),
              color: hexToRgba(category.color, 0.9),
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const TechTicker = () => {
  // Double for seamless loop
  const doubled = [...TECH_TICKER, ...TECH_TICKER];

  return (
    <div className="w-full overflow-hidden py-6 sm:py-8 mt-8 sm:mt-12 border-t border-b border-white/5">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="text-gray-500 text-sm font-mono tracking-wide flex-shrink-0"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-16 lg:px-24 w-full max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <span className="text-cyan-400/70 font-mono text-[11px] tracking-[0.2em]">
          {"// 02. SKILLS"}
        </span>
      </motion.div>

      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Tech{" "}
          <span className="cursive gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Constellation
          </span>
        </h2>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-400 text-[13px] sm:text-[15px] mb-8 sm:mb-12 max-w-lg leading-relaxed"
      >
        Every tool I&apos;ve used in production across 4+ years of building
        enterprise applications.
      </motion.p>

      {/* Skills Grid - responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
        {SKILLS_CATEGORIES.map((category, i) => (
          <SkillCategory key={category.title} category={category} index={i} />
        ))}
      </div>

      {/* Tech Ticker */}
      <TechTicker />
    </section>
  );
};
