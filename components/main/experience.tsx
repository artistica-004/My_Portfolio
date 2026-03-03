"use client";

import { motion } from "framer-motion";
import { EXPERIENCE_DATA, SECTIONS } from "@/constants";

const CARD_ACCENTS = [
  { border: "border-l-purple-500/60", dot: "bg-purple-400", glow: "shadow-purple-500/10" },
  { border: "border-l-cyan-500/60", dot: "bg-cyan-400", glow: "shadow-cyan-500/10" },
  { border: "border-l-amber-500/60", dot: "bg-amber-400", glow: "shadow-amber-500/10" },
];

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE_DATA)[number];
  index: number;
}) => {
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" as const }}
      className={`relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl
        border-l-[3px] ${accent.border} p-7 md:p-9 hover:bg-white/[0.04] hover:border-white/[0.1]
        hover:shadow-xl ${accent.glow} transition-all duration-500 group`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-[17px] md:text-[19px] font-extrabold text-white tracking-tight">
            {experience.company}
          </h3>
          {index === 0 && (
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
              className="text-[9px] px-3 py-[3px] rounded-full bg-emerald-400/15 text-emerald-400
                border border-emerald-400/30 uppercase tracking-[0.15em] font-bold select-none"
            >
              Current
            </motion.span>
          )}
        </div>
        <span className="text-gray-500 font-mono text-[12px] tracking-wide shrink-0 tabular-nums">
          {experience.duration}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <p className="text-purple-400 text-[13px] font-semibold tracking-wide">
          {experience.role}
        </p>
        <span className="text-gray-600 text-[11px] font-mono tracking-wider">
          {experience.location}
        </span>
      </div>

      <ul className="space-y-3.5">
        {experience.highlights.map((highlight, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.08, duration: 0.4 }}
            className="flex gap-3.5 text-[13px] text-gray-300/90 leading-[1.75]"
          >
            <span className="text-amber-400/80 mt-[3px] flex-shrink-0 text-[10px] select-none">
              ✦
            </span>
            <span className="group-hover:text-gray-200 transition-colors duration-300">
              {highlight}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-3"
      >
        <span className="text-emerald-400/60 font-mono text-[11px] tracking-[0.2em]">
          {SECTIONS.experience.label}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-20 leading-tight"
      >
        {SECTIONS.experience.heading}{" "}
        <span className="cursive gradient-text text-5xl md:text-6xl lg:text-7xl">
          {SECTIONS.experience.accent}
        </span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="hidden md:block absolute left-[-28px] top-8 bottom-8 w-px bg-gradient-to-b from-purple-500/30 via-cyan-500/20 to-amber-500/30" />

        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, i) => (
            <div key={exp.company} className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                className={`hidden md:block absolute left-[-32px] top-10 w-[9px] h-[9px] rounded-full ${CARD_ACCENTS[i % CARD_ACCENTS.length].dot}`}
                style={{
                  boxShadow: `0 0 8px ${
                    i === 0 ? "rgba(168,85,247,0.5)" : i === 1 ? "rgba(6,182,212,0.5)" : "rgba(251,191,36,0.5)"
                  }`,
                }}
              />
              <ExperienceCard experience={exp} index={i} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center pt-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
        </motion.div>
      </div>
    </section>
  );
};
