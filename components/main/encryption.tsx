"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SECTIONS, AI_INNOVATION } from "@/constants";

export const Encryption = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  const section = SECTIONS.innovation;

  return (
    <div
      ref={sectionRef}
      className="relative w-full py-24 overflow-hidden"
    >
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-emerald-400/60 font-mono text-[11px] tracking-[0.2em]">
            {section.label}
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {section.heading}{" "}
          <span className="cursive gradient-text text-5xl md:text-6xl lg:text-7xl">
            {section.accent}
          </span>{" "}
          {section.suffix}
        </h2>

        <p className="text-gray-400 text-[15px] max-w-2xl leading-relaxed mb-10">
          {section.description}
        </p>

        <div className="flex flex-wrap gap-3 max-w-xl">
          {AI_INNOVATION.badges.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-300 text-sm hover:bg-cyan-500/15 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="w-full flex items-start justify-center absolute inset-0 opacity-15">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};