"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineGlobeAlt } from "react-icons/hi";

/* ─── Astronaut SVG ─── */
const Astronaut = () => (
  <svg viewBox="0 0 200 280" className="w-[160px] h-[220px] md:w-[200px] md:h-[280px] drop-shadow-[0_0_50px_rgba(139,92,246,0.25)]">
    {/* Helmet outer glow ring */}
    <ellipse cx="100" cy="72" rx="54" ry="58" fill="none" stroke="url(#helmetGlow)" strokeWidth="3" opacity="0.3">
      <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" />
    </ellipse>
    {/* Helmet shell */}
    <ellipse cx="100" cy="72" rx="50" ry="54" fill="#1e2033" stroke="#2a2d3e" strokeWidth="2.5" />
    {/* Helmet inner ring */}
    <ellipse cx="100" cy="72" rx="46" ry="50" fill="none" stroke="#1f2234" strokeWidth="1" opacity="0.4" />
    {/* Visor background */}
    <ellipse cx="100" cy="68" rx="38" ry="42" fill="#0f0f2e" />
    {/* Visor glass - layered gradients for depth */}
    <ellipse cx="100" cy="66" rx="34" ry="38" fill="url(#visorGrad)" opacity="0.9" />
    <ellipse cx="100" cy="64" rx="30" ry="34" fill="url(#visorGrad2)" opacity="0.5" />
    {/* Visor highlight / reflection */}
    <ellipse cx="88" cy="54" rx="16" ry="10" fill="white" opacity="0.06" transform="rotate(-15,88,54)" />
    {/* Eyes — blinking */}
    <circle cx="87" cy="68" r="5" fill="#06b6d4" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.1;0.9" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="113" cy="68" r="5" fill="#06b6d4" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.1;0.9" dur="4s" repeatCount="indefinite" />
    </circle>
    {/* Eye glow */}
    <circle cx="87" cy="68" r="10" fill="#06b6d4" opacity="0.12">
      <animate attributeName="opacity" values="0.12;0.02;0.12" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="113" cy="68" r="10" fill="#06b6d4" opacity="0.12">
      <animate attributeName="opacity" values="0.12;0.02;0.12" dur="4s" repeatCount="indefinite" />
    </circle>

    {/* Antenna */}
    <line x1="100" y1="18" x2="100" y2="4" stroke="#2a2d3e" strokeWidth="2" strokeLinecap="round" />
    <circle cx="100" cy="3" r="3.5" fill="#06b6d4">
      <animate attributeName="fill" values="#06b6d4;#8b5cf6;#f59e0b;#06b6d4" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="3" r="7" fill="#06b6d4" opacity="0.1">
      <animate attributeName="r" values="7;10;7" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.1;0.05;0.1" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* Neck connector */}
    <rect x="85" y="120" width="30" height="12" rx="4" fill="#2a2d3e" stroke="#1f2234" strokeWidth="1" />
    <rect x="90" y="122" width="20" height="8" rx="3" fill="#374151" />

    {/* Body / Torso */}
    <rect x="62" y="128" rx="22" ry="10" width="76" height="78" fill="#1e2033" stroke="#2a2d3e" strokeWidth="1.8" />
    {/* Chest panel */}
    <rect x="78" y="140" rx="6" width="44" height="24" fill="#0f0f2e" stroke="#1f2234" strokeWidth="1" />
    {/* LED lights row */}
    <circle cx="88" cy="152" r="3.5" fill="#f59e0b" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="152" r="3.5" fill="#06b6d4" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="112" cy="152" r="3.5" fill="#10b981" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1.8s" repeatCount="indefinite" />
    </circle>
    {/* Chest badge / emblem */}
    <circle cx="100" cy="175" r="8" fill="none" stroke="#2a2d3e" strokeWidth="1" opacity="0.5" />
    <circle cx="100" cy="175" r="4" fill="#2a2d3e" opacity="0.3" />

    {/* Arms */}
    <rect x="38" y="132" rx="12" width="28" height="56" fill="#1e2033" stroke="#2a2d3e" strokeWidth="1.5" />
    <rect x="134" y="132" rx="12" width="28" height="56" fill="#1e2033" stroke="#2a2d3e" strokeWidth="1.5" />
    {/* Shoulder joints */}
    <circle cx="62" cy="136" r="6" fill="#2a2d3e" stroke="#1f2234" strokeWidth="1" />
    <circle cx="138" cy="136" r="6" fill="#2a2d3e" stroke="#1f2234" strokeWidth="1" />
    {/* Gloves */}
    <ellipse cx="52" cy="194" rx="14" ry="9" fill="#374151" stroke="#2a2d3e" strokeWidth="1" />
    <ellipse cx="148" cy="194" rx="14" ry="9" fill="#374151" stroke="#2a2d3e" strokeWidth="1" />

    {/* Legs */}
    <rect x="70" y="200" rx="10" width="26" height="48" fill="#1e2033" stroke="#2a2d3e" strokeWidth="1.5" />
    <rect x="104" y="200" rx="10" width="26" height="48" fill="#1e2033" stroke="#2a2d3e" strokeWidth="1.5" />
    {/* Knee joints */}
    <circle cx="83" cy="222" r="4" fill="#2a2d3e" stroke="#1f2234" strokeWidth="1" />
    <circle cx="117" cy="222" r="4" fill="#2a2d3e" stroke="#1f2234" strokeWidth="1" />
    {/* Boots */}
    <rect x="65" y="242" rx="8" width="36" height="16" fill="#374151" stroke="#2a2d3e" strokeWidth="1" />
    <rect x="99" y="242" rx="8" width="36" height="16" fill="#374151" stroke="#2a2d3e" strokeWidth="1" />
    {/* Boot soles */}
    <rect x="65" y="254" rx="4" width="36" height="5" fill="#2a2d3e" opacity="0.3" />
    <rect x="99" y="254" rx="4" width="36" height="5" fill="#2a2d3e" opacity="0.3" />

    {/* Backpack / jetpack */}
    <rect x="75" y="130" rx="4" width="8" height="50" fill="#374151" opacity="0.6" stroke="#1f2234" strokeWidth="0.5" />
    <rect x="117" y="130" rx="4" width="8" height="50" fill="#374151" opacity="0.6" stroke="#1f2234" strokeWidth="0.5" />

    {/* Defs */}
    <defs>
      <radialGradient id="visorGrad" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
        <stop offset="40%" stopColor="#6366f1" stopOpacity="0.2" />
        <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
      </radialGradient>
      <radialGradient id="visorGrad2" cx="60%" cy="60%">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="helmetGlow" x1="0" y1="0" x2="200" y2="144">
        <stop offset="0%" stopColor="#2a2d3e" />
        <stop offset="50%" stopColor="#1f2234" />
        <stop offset="100%" stopColor="#2a2d3e" />
      </linearGradient>
    </defs>
  </svg>
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

    {/* Astronaut center */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Astronaut />
      </motion.div>
    </div>

    {/* Glow behind astronaut */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-purple-500/8 blur-[80px] z-0" />

    {/* Card: Current Role — top right */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="absolute z-20"
      style={{ right: "-5%", top: "8%" }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-xl border border-white/[0.08] bg-[#0a0a1a]/80 backdrop-blur-xl px-5 py-3.5 min-w-[170px] shadow-xl shadow-black/30">
          <span className="text-[9px] font-mono tracking-[0.2em] text-cyan-400 uppercase block mb-1.5">
            Current Role
          </span>
          <p className="text-white text-[13px] font-bold leading-tight">
            Futurense · Aditya Birla
          </p>
          <p className="text-gray-400 text-[11px] font-mono mt-0.5">
            Full Stack Developer
          </p>
        </div>
      </motion.div>
    </motion.div>

    {/* Card: Experience — bottom left */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.7 }}
      className="absolute z-20"
      style={{ left: "-8%", bottom: "15%" }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="rounded-xl border border-white/[0.08] bg-[#0a0a1a]/80 backdrop-blur-xl px-5 py-3.5 min-w-[160px] shadow-xl shadow-black/30">
          <span className="text-[9px] font-mono tracking-[0.2em] text-emerald-400 uppercase block mb-1.5">
            Experience
          </span>
          <p className="text-white text-2xl font-bold leading-tight">
            4+ Years
          </p>
          <p className="text-gray-400 text-[11px] font-mono mt-0.5">
            Production-grade apps
          </p>
        </div>
      </motion.div>
    </motion.div>

    {/* Card: AI Projects — bottom right */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.7 }}
      className="absolute z-20"
      style={{ right: "-2%", bottom: "10%" }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="rounded-xl border border-white/[0.08] bg-[#0a0a1a]/80 backdrop-blur-xl px-5 py-3.5 min-w-[130px] shadow-xl shadow-black/30">
          <span className="text-[9px] font-mono tracking-[0.2em] text-purple-400 uppercase block mb-1.5">
            AI Projects
          </span>
          <p className="text-white text-lg font-bold leading-tight">Gen AI</p>
          <p className="text-gray-400 text-[11px] font-mono mt-0.5">
            LangChain · LLMs
          </p>
        </div>
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
              4+ years building scalable, data-driven web applications.
              Specializing in React, Next.js, and Generative AI integrations
              — from LLM-powered chat to production-grade AI workflows.
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
