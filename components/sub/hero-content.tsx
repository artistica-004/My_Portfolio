"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineGlobeAlt } from "react-icons/hi";

/* ─── Reusable Mini Code Terminal ─── */
const MiniTerminal = ({
  fileName,
  lang,
  statusText,
  accentColor,
  bgColor,
  borderColor,
  dotColors,
  cursorColor,
  glowColor,
  codeLines,
  size = "md",
}: {
  fileName: string;
  lang: string;
  statusText: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  dotColors: [string, string, string];
  cursorColor: string;
  glowColor: string;
  codeLines: { indent: number; tokens: { text: string; color: string }[] }[];
  size?: "sm" | "md";
}) => {
  const isSm = size === "sm";
  return (
    <div
      className={
        isSm
          ? "w-[150px] h-[120px] md:w-[170px] md:h-[135px]"
          : "w-[180px] h-[200px] md:w-[220px] md:h-[240px]"
      }
      style={{ filter: `drop-shadow(0 0 40px ${glowColor})` }}
    >
      <div
        className="w-full h-full rounded-xl overflow-hidden backdrop-blur-xl relative"
        style={{ background: bgColor, border: `1px solid ${borderColor}` }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5 border-b"
          style={{ borderColor, background: `${bgColor}` }}
        >
          <span className="w-[6px] h-[6px] rounded-full" style={{ background: dotColors[0] }} />
          <span className="w-[6px] h-[6px] rounded-full" style={{ background: dotColors[1] }} />
          <span className="w-[6px] h-[6px] rounded-full" style={{ background: dotColors[2] }} />
          <span
            className="ml-1.5 font-mono tracking-wide"
            style={{ fontSize: isSm ? "6.5px" : "8px", color: accentColor, opacity: 0.8 }}
          >
            {fileName}
          </span>
        </div>

        {/* Code area */}
        <div
          className="px-2.5 py-2 font-mono"
          style={{
            fontSize: isSm ? "5.5px" : "7.5px",
            lineHeight: isSm ? "1.6" : "1.75",
          }}
        >
          {codeLines.map((line, lineIdx) => (
            <div key={lineIdx} className="flex items-center">
              <span
                className="mr-1.5 text-right select-none"
                style={{
                  width: isSm ? 10 : 14,
                  fontSize: isSm ? "5px" : "6.5px",
                  color: "rgba(255,255,255,0.2)",
                }}
              >
                {lineIdx + 1}
              </span>
              {line.indent > 0 && <span style={{ width: line.indent * (isSm ? 8 : 12) }} />}
              {line.tokens.map((token, tIdx) => (
                <span key={tIdx} style={{ color: token.color }}>
                  {token.text}
                </span>
              ))}
              {lineIdx === codeLines.length - 1 && (
                <span
                  className="inline-block ml-0.5 animate-pulse rounded-[1px]"
                  style={{
                    width: isSm ? 3 : 4,
                    height: isSm ? 8 : 11,
                    background: cursorColor,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div
          className="absolute bottom-0 left-0 right-0 px-2.5 py-1 border-t flex items-center justify-between"
          style={{ borderColor, background: `${bgColor}` }}
        >
          <span className="font-mono" style={{ fontSize: isSm ? "5px" : "6.5px", color: accentColor, opacity: 0.7 }}>
            ● {statusText}
          </span>
          <span className="font-mono" style={{ fontSize: isSm ? "5px" : "6.5px", color: "rgba(255,255,255,0.25)" }}>
            {lang}
          </span>
        </div>
      </div>
    </div>
  );
};

/* ─── Center: developer.ts (Purple theme) ─── */
const CenterTerminal = () => (
  <MiniTerminal
    fileName="developer.ts"
    lang="TypeScript"
    statusText="ready"
    accentColor="rgba(196, 181, 253, 0.7)"
    bgColor="rgba(10, 10, 26, 0.75)"
    borderColor="rgba(255, 255, 255, 0.08)"
    dotColors={["rgba(255,255,255,0.25)", "rgba(255,255,255,0.18)", "rgba(255,255,255,0.12)"]}
    cursorColor="rgba(167, 139, 250, 0.6)"
    glowColor="rgba(139, 92, 246, 0.08)"
    codeLines={[
      { indent: 0, tokens: [{ text: "const", color: "rgba(198,160,221,0.7)" }, { text: " dev", color: "rgba(229,192,123,0.65)" }, { text: " = {", color: "rgba(171,178,191,0.5)" }] },
      { indent: 1, tokens: [{ text: "name", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'Abhishek'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "role", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'FullStack'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "stack", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'React+AI'", color: "rgba(152,195,121,0.65)" }] },
      { indent: 0, tokens: [{ text: "};", color: "rgba(171,178,191,0.5)" }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ text: "export", color: "rgba(198,160,221,0.7)" }, { text: " dev", color: "rgba(229,192,123,0.65)" }, { text: ";", color: "rgba(171,178,191,0.5)" }] },
    ]}
  />
);

/* ─── Card: Current Role (Cyan tint) ─── */
const RoleTerminal = () => (
  <MiniTerminal
    fileName="role.config.ts"
    lang="Config"
    statusText="active"
    accentColor="rgba(103, 232, 249, 0.6)"
    bgColor="rgba(10, 10, 26, 0.75)"
    borderColor="rgba(255, 255, 255, 0.08)"
    dotColors={["rgba(255,255,255,0.25)", "rgba(255,255,255,0.18)", "rgba(255,255,255,0.12)"]}
    cursorColor="rgba(34, 211, 238, 0.5)"
    glowColor="rgba(6, 182, 212, 0.06)"
    size="sm"
    codeLines={[
      { indent: 0, tokens: [{ text: "export", color: "rgba(103,232,249,0.6)" }, { text: " const", color: "rgba(198,160,221,0.6)" }, { text: " role", color: "rgba(229,192,123,0.55)" }, { text: " = {", color: "rgba(143,171,190,0.45)" }] },
      { indent: 1, tokens: [{ text: "company", color: "rgba(86,182,194,0.55)" }, { text: ": ", color: "rgba(143,171,190,0.4)" }, { text: "'Futurense'", color: "rgba(136,221,237,0.55)" }, { text: ",", color: "rgba(143,171,190,0.4)" }] },
      { indent: 1, tokens: [{ text: "group", color: "rgba(86,182,194,0.55)" }, { text: ": ", color: "rgba(143,171,190,0.4)" }, { text: "'Aditya Birla'", color: "rgba(136,221,237,0.55)" }, { text: ",", color: "rgba(143,171,190,0.4)" }] },
      { indent: 1, tokens: [{ text: "title", color: "rgba(86,182,194,0.55)" }, { text: ": ", color: "rgba(143,171,190,0.4)" }, { text: "'Full Stack'", color: "rgba(136,221,237,0.55)" }] },
      { indent: 0, tokens: [{ text: "};", color: "rgba(143,171,190,0.45)" }] },
    ]}
  />
);

/* ─── Card: Experience (Emerald tint) ─── */
const ExperienceTerminal = () => (
  <MiniTerminal
    fileName="experience.ts"
    lang="Runtime"
    statusText="verified"
    accentColor="rgba(110, 231, 183, 0.6)"
    bgColor="rgba(10, 10, 26, 0.75)"
    borderColor="rgba(255, 255, 255, 0.08)"
    dotColors={["rgba(255,255,255,0.25)", "rgba(255,255,255,0.18)", "rgba(255,255,255,0.12)"]}
    cursorColor="rgba(52, 211, 153, 0.5)"
    glowColor="rgba(16, 185, 129, 0.06)"
    size="sm"
    codeLines={[
      { indent: 0, tokens: [{ text: "const", color: "rgba(110,231,183,0.6)" }, { text: " exp", color: "rgba(229,192,123,0.55)" }, { text: " = {", color: "rgba(143,187,170,0.45)" }] },
      { indent: 1, tokens: [{ text: "years", color: "rgba(85,185,138,0.55)" }, { text: ": ", color: "rgba(143,187,170,0.4)" }, { text: "4", color: "rgba(181,232,204,0.55)" }, { text: ",", color: "rgba(143,187,170,0.4)" }] },
      { indent: 1, tokens: [{ text: "level", color: "rgba(85,185,138,0.55)" }, { text: ": ", color: "rgba(143,187,170,0.4)" }, { text: "'Production'", color: "rgba(134,239,172,0.5)" }, { text: ",", color: "rgba(143,187,170,0.4)" }] },
      { indent: 1, tokens: [{ text: "apps", color: "rgba(85,185,138,0.55)" }, { text: ": ", color: "rgba(143,187,170,0.4)" }, { text: "'Enterprise'", color: "rgba(134,239,172,0.5)" }] },
      { indent: 0, tokens: [{ text: "};", color: "rgba(143,187,170,0.45)" }] },
    ]}
  />
);

/* ─── Card: AI Projects (Amber tint) ─── */
const AITerminal = () => (
  <MiniTerminal
    fileName="ai-engine.py"
    lang="Python"
    statusText="running"
    accentColor="rgba(252, 211, 77, 0.6)"
    bgColor="rgba(10, 10, 26, 0.75)"
    borderColor="rgba(255, 255, 255, 0.08)"
    dotColors={["rgba(255,255,255,0.25)", "rgba(255,255,255,0.18)", "rgba(255,255,255,0.12)"]}
    cursorColor="rgba(245, 158, 11, 0.5)"
    glowColor="rgba(245, 158, 11, 0.06)"
    size="sm"
    codeLines={[
      { indent: 0, tokens: [{ text: "from", color: "rgba(251,191,36,0.6)" }, { text: " langchain ", color: "rgba(252,211,77,0.55)" }, { text: "import", color: "rgba(251,191,36,0.6)" }, { text: " LLM", color: "rgba(229,192,123,0.55)" }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ text: "model", color: "rgba(212,164,74,0.55)" }, { text: " = ", color: "rgba(187,162,110,0.4)" }, { text: "LLM", color: "rgba(229,192,123,0.55)" }, { text: "(", color: "rgba(187,162,110,0.4)" }] },
      { indent: 1, tokens: [{ text: "engine", color: "rgba(212,164,74,0.55)" }, { text: "=", color: "rgba(187,162,110,0.4)" }, { text: "'GenAI'", color: "rgba(253,230,138,0.5)" }] },
      { indent: 0, tokens: [{ text: ")", color: "rgba(187,162,110,0.4)" }] },
    ]}
  />
);

/* ─── Revolving dot that orbits around center ─── */
const RevolvingDot = ({
  radius,
  size,
  color,
  duration,
  startAngle = 0,
  pulse = false,
}: {
  radius: number;
  size: number;
  color: string;
  duration: number;
  startAngle?: number;
  pulse?: boolean;
}) => (
  <div
    className="absolute left-1/2 top-1/2"
    style={{
      width: radius * 2,
      height: radius * 2,
      marginLeft: -radius,
      marginTop: -radius,
      animation: `spin ${duration}s linear infinite`,
      transform: `rotate(${startAngle}deg)`,
    }}
  >
    <span
      className="absolute rounded-full"
      style={{
        top: 0,
        left: "50%",
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        backgroundColor: color,
        boxShadow: pulse
          ? `0 0 ${size * 4}px ${size}px ${color}50, 0 0 ${size * 2}px ${color}30`
          : `0 0 ${size * 2}px ${color}20`,
      }}
    >
      {pulse && (
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ backgroundColor: color, opacity: 0.3 }}
        />
      )}
    </span>
  </div>
);

/* ─── Orbit ring ─── */
const OrbitRing = ({ radius, delay }: { radius: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.8 }}
    className="absolute rounded-full border border-white/[0.05]"
    style={{
      width: radius * 2,
      height: radius * 2,
      left: `calc(50% - ${radius}px)`,
      top: `calc(50% - ${radius}px)`,
    }}
  />
);

/* ─── Right side scene ─── */
const HeroScene = () => (
  <div className="relative w-[380px] h-[380px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] flex-shrink-0 overflow-visible">
    {/* Orbit rings */}
    <OrbitRing radius={130} delay={0.3} />
    <OrbitRing radius={190} delay={0.5} />
    <OrbitRing radius={240} delay={0.6} />

    {/* Code terminal center */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <CenterTerminal />
      </motion.div>
    </div>

    {/* Glow behind terminal */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-purple-500/8 blur-[80px] z-0" />

    {/* Card: Current Role (Cyan terminal) — top right */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="absolute z-20"
      style={{ right: "-5%", top: "5%" }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <RoleTerminal />
      </motion.div>
    </motion.div>

    {/* Card: Experience (Emerald terminal) — bottom left */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.7 }}
      className="absolute z-20"
      style={{ left: "-8%", bottom: "12%" }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <ExperienceTerminal />
      </motion.div>
    </motion.div>

    {/* Card: AI Projects (Amber terminal) — bottom right */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.7 }}
      className="absolute z-20"
      style={{ right: "-2%", bottom: "8%" }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <AITerminal />
      </motion.div>
    </motion.div>

    {/* Revolving dots — actually orbiting! */}
    <RevolvingDot radius={130} size={8} color="#f59e0b" duration={12} startAngle={0} pulse />
    <RevolvingDot radius={130} size={5} color="#06b6d4" duration={12} startAngle={180} pulse />
    <RevolvingDot radius={190} size={7} color="#f59e0b" duration={20} startAngle={90} pulse />
    <RevolvingDot radius={190} size={4} color="#8b5cf6" duration={20} startAngle={270} />
    <RevolvingDot radius={240} size={5} color="#06b6d4" duration={28} startAngle={45} pulse />
    <RevolvingDot radius={240} size={4} color="#10b981" duration={28} startAngle={200} />

    {/* Connecting line from top */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="absolute left-1/2 top-[5%] w-px h-[20%] -translate-x-1/2"
      style={{
        background: "linear-gradient(to bottom, transparent, rgba(6,182,212,0.3), transparent)",
      }}
    />
  </div>
);

/* ─── Main HeroContent ─── */
export const HeroContent = () => {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen z-[20] px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-8 mt-16 lg:mt-0">
        {/* LEFT: Text content — blackhole pull effect */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_3px_rgba(52,211,153,0.4)]" />
            <span className="text-emerald-400 text-[12px] font-mono tracking-wide">
              Available for opportunities
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-cyan-400/80 text-[12px] sm:text-[13px] font-mono tracking-[0.25em] uppercase mb-5"
          >
            Full Stack Developer · AI Integrations
          </motion.p>

          {/* Name — pulled upward with stagger */}
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold leading-[0.95] tracking-tight mb-7 font-serif"
          >
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300"
            >
              Abhishek
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300"
            >
              Verma
            </motion.span>
          </motion.h1>

          {/* Subtle upward float animation on the whole text area */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-gray-400 text-[15px] md:text-base leading-relaxed max-w-[480px] mb-9"
            >
              4+ years building scalable, data-driven web applications
              using React, Next.js, Node.js, and Python. Experienced in
              integrating Generative AI features such as LLM-powered chat,
              document analysis, and AI scoring into production systems, with
              a strong focus on performance, system design, and real-world
              business use cases.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="#projects"
                className="flex items-center gap-2 py-3 px-7 rounded-full bg-gradient-to-r from-purple-600 to-purple-500
                  text-white text-[14px] font-semibold hover:shadow-lg hover:shadow-purple-500/25
                  hover:scale-105 active:scale-[0.98] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                View My Work
              </Link>
              <Link
                href="#contact"
                className="py-3 px-7 rounded-full border border-white/[0.12] text-white text-[14px] font-semibold
                  hover:bg-white/[0.05] hover:border-white/[0.2] hover:scale-105
                  active:scale-[0.98] transition-all duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom: Social icons + phone */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex items-center gap-5 text-gray-500"
          >
            <Link
              href="https://linkedin.com/in/abhishek-verma"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <RxLinkedinLogo className="w-[18px] h-[18px]" />
            </Link>
            <Link
              href="https://github.com/abhishekverma"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors duration-300"
            >
              <RxGithubLogo className="w-[18px] h-[18px]" />
            </Link>
            <HiOutlineGlobeAlt className="w-[18px] h-[18px]" />
            <span className="text-[12px] font-mono tracking-wide text-gray-500">
              +91 88742 50240
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT: Astronaut scene with orbiting cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="flex-shrink-0 hidden md:flex items-center justify-center"
        >
          <HeroScene />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
};
