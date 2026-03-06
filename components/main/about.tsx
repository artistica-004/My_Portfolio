"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO, EDUCATION, ABOUT_SECTION, SECTIONS } from "@/constants";

const BADGE_STYLES: Record<string, { bg: string; border: string; text: string }> = {
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-300" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-300" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-300" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-300" },
};

const BADGE_ICONS: Record<string, React.ReactNode> = {
  purple: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  cyan: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  ),
  emerald: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 0H4v24h16V0zm-1 23H5V1h14v22zm-4-7H9v-1h6v1zm0-2H9v-1h6v1zm-3-2V7l3 2.5L12 12z" />
    </svg>
  ),
  amber: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
};

const StatCard = ({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card p-6 flex flex-col items-center justify-center text-center"
  >
    <span className="text-3xl md:text-4xl font-bold gradient-text font-space stat-number">
      {value}
    </span>
    <span className="text-gray-400 text-xs mt-2 uppercase tracking-wider">
      {label}
    </span>
  </motion.div>
);

export const About = () => {
  const section = SECTIONS.about;

  return (
    <section
      id="about-me"
      className="relative py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <span className="text-purple-400/70 font-mono text-[11px] tracking-[0.2em]">
          {section.label}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight"
      >
        {section.heading}{" "}
        <span className="cursive gradient-text text-5xl md:text-6xl lg:text-7xl">
          {section.accent}
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-gray-300 leading-relaxed text-[15px]">
            {PERSONAL_INFO.title} based in{" "}
            <strong className="text-white">{PERSONAL_INFO.location}</strong>,
            currently pursuing my{" "}
            <strong className="text-white">
              {EDUCATION.degree}
            </strong>{" "}
            at {EDUCATION.university} with a CGPA of{" "}
            <strong className="text-white">{EDUCATION.gpa}</strong>.
          </p>

          <p className="text-gray-300 leading-relaxed text-[15px]">
            I specialize in building{" "}
            <strong className="text-white">RAG systems and LLM-powered applications</strong>{" "}
            using LangChain, Groq, and Streamlit. Skilled in semantic retrieval,
            prompt optimization, and deploying scalable AI solutions with{" "}
            <strong className="text-white">high accuracy and low latency</strong>.
          </p>

          <p className="text-gray-300 leading-relaxed text-[15px]">
            During my internships at{" "}
            <strong className="text-white">CodSoft</strong> and{" "}
            <strong className="text-white">Unified Mentor</strong>, I developed
            AI-powered applications using LLM APIs, implemented RAG fundamentals
            including document chunking and embeddings, and built structured LLM
            workflows evaluated on latency and response accuracy.
          </p>

          <p className="text-gray-300 leading-relaxed text-[15px]">
            I&apos;ve deployed projects on{" "}
            <strong className="text-white">Hugging Face Spaces</strong> with
            secure API integration, achieving approximately{" "}
            <strong className="text-white">95% accuracy</strong> and under{" "}
            <strong className="text-white">3 seconds response time</strong> in
            production AI applications.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {ABOUT_SECTION.badges.map((badge) => {
              const style = BADGE_STYLES[badge.colorScheme] || BADGE_STYLES.purple;
              const icon = BADGE_ICONS[badge.colorScheme];
              return (
                <span
                  key={badge.text}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${style.bg} border ${style.border} ${style.text} text-sm`}
                >
                  {icon}
                  {badge.text}
                </span>
              );
            })}
          </div>
        </motion.div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_SECTION.stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={0.2 + i * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass-card p-6"
          >
            <h4 className="text-xs uppercase tracking-wider text-purple-400 font-mono mb-4">
              Certifications
            </h4>
            <div className="space-y-3">
              {[
                "Complete Generative AI Certification",
                "Python Programming Certification",
              ].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="text-purple-400">•</span>
                  <span className="font-mono text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};