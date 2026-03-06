"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { PERSONAL_INFO, HERO_SECTION } from "@/constants";

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
      { indent: 1, tokens: [{ text: "name", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'Abhishek Verma'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "role", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'Full Stack Dev'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "stack", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'React+Next+AI'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "exp", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'4+ years'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "focus", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'Perf & Design'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "clients", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'Enterprise'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "packages", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "2", color: "rgba(209,154,102,0.65)" }] },
      { indent: 0, tokens: [{ text: "};", color: "rgba(171,178,191,0.5)" }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ text: "export", color: "rgba(198,160,221,0.7)" }, { text: " default", color: "rgba(198,160,221,0.7)" }, { text: " dev", color: "rgba(229,192,123,0.65)" }, { text: ";", color: "rgba(171,178,191,0.5)" }] },
    ]}
  />
);

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
      { indent: 1, tokens: [{ text: "title", color: "rgba(86,182,194,0.55)" }, { text: ": ", color: "rgba(143,171,190,0.4)" }, { text: "'Full Stack'", color: "rgba(136,221,237,0.55)" }, { text: ",", color: "rgba(143,171,190,0.4)" }] },
      { indent: 1, tokens: [{ text: "location", color: "rgba(86,182,194,0.55)" }, { text: ": ", color: "rgba(143,171,190,0.4)" }, { text: "'Mumbai'", color: "rgba(136,221,237,0.55)" }, { text: ",", color: "rgba(143,171,190,0.4)" }] },
      { indent: 1, tokens: [{ text: "lead", color: "rgba(86,182,194,0.55)" }, { text: ": ", color: "rgba(143,171,190,0.4)" }, { text: "true", color: "rgba(209,154,102,0.6)" }] },
      { indent: 0, tokens: [{ text: "};", color: "rgba(143,171,190,0.45)" }] },
    ]}
  />
);

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
      { indent: 1, tokens: [{ text: "companies", color: "rgba(85,185,138,0.55)" }, { text: ": ", color: "rgba(143,187,170,0.4)" }, { text: "3", color: "rgba(181,232,204,0.55)" }, { text: ",", color: "rgba(143,187,170,0.4)" }] },
      { indent: 1, tokens: [{ text: "clients", color: "rgba(85,185,138,0.55)" }, { text: ": ", color: "rgba(143,187,170,0.4)" }, { text: "'KPMG,RBL'", color: "rgba(134,239,172,0.5)" }, { text: ",", color: "rgba(143,187,170,0.4)" }] },
      { indent: 1, tokens: [{ text: "perf", color: "rgba(85,185,138,0.55)" }, { text: ": ", color: "rgba(143,187,170,0.4)" }, { text: "'+50%'", color: "rgba(134,239,172,0.5)" }, { text: ",", color: "rgba(143,187,170,0.4)" }] },
      { indent: 1, tokens: [{ text: "apps", color: "rgba(85,185,138,0.55)" }, { text: ": ", color: "rgba(143,187,170,0.4)" }, { text: "8", color: "rgba(181,232,204,0.55)" }] },
      { indent: 0, tokens: [{ text: "};", color: "rgba(143,187,170,0.45)" }] },
    ]}
  />
);

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
      { indent: 0, tokens: [{ text: "from", color: "rgba(251,191,36,0.6)" }, { text: " fastapi ", color: "rgba(252,211,77,0.55)" }, { text: "import", color: "rgba(251,191,36,0.6)" }, { text: " App", color: "rgba(229,192,123,0.55)" }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ text: "ai", color: "rgba(212,164,74,0.55)" }, { text: " = ", color: "rgba(187,162,110,0.4)" }, { text: "LLM", color: "rgba(229,192,123,0.55)" }, { text: "(", color: "rgba(187,162,110,0.4)" }] },
      { indent: 1, tokens: [{ text: "engine", color: "rgba(212,164,74,0.55)" }, { text: "=", color: "rgba(187,162,110,0.4)" }, { text: "'GenAI'", color: "rgba(253,230,138,0.5)" }, { text: ",", color: "rgba(187,162,110,0.4)" }] },
      { indent: 1, tokens: [{ text: "tasks", color: "rgba(212,164,74,0.55)" }, { text: "=", color: "rgba(187,162,110,0.4)" }, { text: "['chat',", color: "rgba(253,230,138,0.5)" }] },
      { indent: 2, tokens: [{ text: "'doc_analysis']", color: "rgba(253,230,138,0.5)" }] },
      { indent: 0, tokens: [{ text: ")", color: "rgba(187,162,110,0.4)" }] },
    ]}
  />
);

const SpaceOrbit = ({
  radius,
  duration,
  startAngle = 0,
  children,
}: {
  radius: number;
  duration: number;
  startAngle?: number;
  children: React.ReactNode;
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
    <div
      className="absolute"
      style={{
        top: 0,
        left: "50%",
        transform: "translate(-50%, -50%)",
        animation: `spin ${duration}s linear infinite reverse`,
      }}
    >
      {children}
    </div>
  </div>
);

const Planetoid = ({ size, color, glow }: { size: number; color: string; glow: string }) => (
  <div
    className="rounded-full animate-pulse"
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle at 35% 35%, ${color}, ${glow})`,
      boxShadow: `0 0 ${size * 2}px ${size / 2}px ${glow}, 0 0 ${size}px ${color}`,
    }}
  />
);

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

const HeroScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const [conns, setConns] = useState<{ d: string; color: string; flow: string }[]>([]);

  const updateConns = useCallback(() => {
    const box = containerRef.current;
    if (!box) return;
    const cr = box.getBoundingClientRect();
    const pos = (el: HTMLDivElement | null) => {
      if (!el) return { x: cr.width / 2, y: cr.height / 2 };
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2 - cr.left, y: r.top + r.height / 2 - cr.top };
    };
    const c = pos(centerRef.current);
    const targets = [
      { el: roleRef.current, color: "rgba(103,232,249,0.1)", flow: "rgba(103,232,249,0.35)" },
      { el: expRef.current, color: "rgba(110,231,183,0.1)", flow: "rgba(110,231,183,0.35)" },
      { el: aiRef.current, color: "rgba(252,211,77,0.1)", flow: "rgba(252,211,77,0.35)" },
    ];
    setConns(targets.map(({ el, color, flow }) => {
      const p = pos(el);
      const cx1 = c.x + (p.x - c.x) * 0.5;
      const cx2 = p.x - (p.x - c.x) * 0.5;
      return { d: `M${c.x},${c.y} C${cx1},${c.y} ${cx2},${p.y} ${p.x},${p.y}`, color, flow };
    }));
  }, []);

  useEffect(() => {
    const t = setTimeout(updateConns, 500);
    window.addEventListener("resize", updateConns);
    return () => { clearTimeout(t); window.removeEventListener("resize", updateConns); };
  }, [updateConns]);

  const onNodeDrag = useCallback(() => {
    requestAnimationFrame(updateConns);
  }, [updateConns]);

  return (
    <div ref={containerRef} className="relative w-[380px] h-[380px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] flex-shrink-0 overflow-visible">
      <OrbitRing radius={130} delay={0.3} />
      <OrbitRing radius={190} delay={0.5} />
      <OrbitRing radius={240} delay={0.6} />

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[15]" style={{ overflow: "visible" }}>
        {conns.map((conn, i) => (
          <g key={i}>
            <path d={conn.d} fill="none" stroke={conn.color} strokeWidth="1.5" strokeLinecap="round" />
            <motion.path
              d={conn.d}
              fill="none"
              stroke={conn.flow}
              strokeWidth="1.5"
              strokeDasharray="4 14"
              strokeLinecap="round"
              animate={{ strokeDashoffset: [0, -36] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
            <circle r="2.5" fill={conn.flow} opacity="0.9">
              <animateMotion dur="3.5s" repeatCount="indefinite" path={conn.d} />
            </circle>
          </g>
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          ref={centerRef}
          drag
          dragMomentum={false}
          dragElastic={0.1}
          onDrag={onNodeDrag}
          onDragEnd={onNodeDrag}
          whileDrag={{ scale: 1.05 }}
          whileHover={{ scale: 1.02 }}
          className="cursor-grab active:cursor-grabbing"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <CenterTerminal />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-purple-500/8 blur-[80px] z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="absolute z-20"
        style={{ right: "-5%", top: "5%" }}
      >
        <motion.div
          ref={roleRef}
          drag
          dragMomentum={false}
          dragElastic={0.1}
          onDrag={onNodeDrag}
          onDragEnd={onNodeDrag}
          whileDrag={{ scale: 1.05 }}
          whileHover={{ scale: 1.02 }}
          className="cursor-grab active:cursor-grabbing"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <RoleTerminal />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="absolute z-20"
        style={{ left: "-8%", bottom: "12%" }}
      >
        <motion.div
          ref={expRef}
          drag
          dragMomentum={false}
          dragElastic={0.1}
          onDrag={onNodeDrag}
          onDragEnd={onNodeDrag}
          whileDrag={{ scale: 1.05 }}
          whileHover={{ scale: 1.02 }}
          className="cursor-grab active:cursor-grabbing"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <ExperienceTerminal />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute z-20"
        style={{ right: "-2%", bottom: "8%" }}
      >
        <motion.div
          ref={aiRef}
          drag
          dragMomentum={false}
          dragElastic={0.1}
          onDrag={onNodeDrag}
          onDragEnd={onNodeDrag}
          whileDrag={{ scale: 1.05 }}
          whileHover={{ scale: 1.02 }}
          className="cursor-grab active:cursor-grabbing"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <AITerminal />
          </motion.div>
        </motion.div>
      </motion.div>

      <SpaceOrbit radius={130} duration={18} startAngle={0}>
        <Planetoid size={10} color="#f59e0b" glow="rgba(245,158,11,0.35)" />
      </SpaceOrbit>
      <SpaceOrbit radius={130} duration={18} startAngle={180}>
        <Planetoid size={8} color="#06b6d4" glow="rgba(6,182,212,0.35)" />
      </SpaceOrbit>
      <SpaceOrbit radius={190} duration={30} startAngle={90}>
        <Planetoid size={7} color="#8b5cf6" glow="rgba(139,92,246,0.35)" />
      </SpaceOrbit>
      <SpaceOrbit radius={190} duration={30} startAngle={270}>
        <Planetoid size={9} color="#f59e0b" glow="rgba(245,158,11,0.3)" />
      </SpaceOrbit>
      <SpaceOrbit radius={240} duration={42} startAngle={45}>
        <Planetoid size={6} color="#06b6d4" glow="rgba(6,182,212,0.3)" />
      </SpaceOrbit>
      <SpaceOrbit radius={240} duration={42} startAngle={200}>
        <Planetoid size={5} color="#10b981" glow="rgba(16,185,129,0.3)" />
      </SpaceOrbit>

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
};

const useTypingText = (texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentFullText = texts[textIndex];

    if (!isDeleting) {
      setDisplayText(currentFullText.substring(0, displayText.length + 1));
      if (displayText.length + 1 === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(currentFullText.substring(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
    }
  }, [displayText, isDeleting, textIndex, texts, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return displayText;
};

export const HeroContent = () => {
  const typedText = useTypingText(
    PERSONAL_INFO.typingTexts || ["Full Stack Developer"],
    80,
    40,
    2000
  );

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen z-[20] px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-8 mt-16 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_3px_rgba(52,211,153,0.4)]" />
            <span className="text-emerald-400 text-[12px] font-mono tracking-wide">
              {HERO_SECTION.badge}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="h-6 mb-5 flex items-center"
          >
            <span className="text-cyan-400/80 text-[12px] sm:text-[13px] font-mono tracking-[0.25em] uppercase">
              {typedText}
            </span>
            <span className="inline-block w-[2px] h-[14px] bg-cyan-400/70 ml-[2px] animate-pulse" />
          </motion.div>

          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold leading-[0.95] tracking-tight mb-7 font-serif"
          >
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300"
            >
              {PERSONAL_INFO.firstName}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300"
            >
              {PERSONAL_INFO.lastName}
            </motion.span>
          </motion.h1>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-gray-400 text-[15px] md:text-base leading-relaxed max-w-[480px] mb-9"
            >
              {PERSONAL_INFO.shortSummary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href={HERO_SECTION.ctaButtons[0].href}
                className="flex items-center gap-2 py-3 px-7 rounded-full bg-gradient-to-r from-purple-600 to-purple-500
                  text-white text-[14px] font-semibold hover:shadow-lg hover:shadow-purple-500/25
                  hover:scale-105 active:scale-[0.98] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                {HERO_SECTION.ctaButtons[0].text}
              </Link>
              <Link
                href={HERO_SECTION.ctaButtons[1].href}
                className="py-3 px-7 rounded-full border border-white/[0.12] text-white text-[14px] font-semibold
                  hover:bg-white/[0.05] hover:border-white/[0.2] hover:scale-105
                  active:scale-[0.98] transition-all duration-300"
              >
                {HERO_SECTION.ctaButtons[1].text}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex items-center gap-5 text-gray-500"
          >
            <Link
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <RxLinkedinLogo className="w-[18px] h-[18px]" />
            </Link>
            <Link
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors duration-300"
            >
              <RxGithubLogo className="w-[18px] h-[18px]" />
            </Link>
            <HiOutlineGlobeAlt className="w-[18px] h-[18px]" />
            <div className="relative group">
              <a
                href="#contact"
                className="text-[12px] font-mono tracking-wide text-gray-500 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
              >
                +91 ******
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] bg-purple-600/90 text-white px-2.5 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Request to get → Contact me
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="flex-shrink-0 hidden md:flex items-center justify-center"
        >
          <HeroScene />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
            <path
              d="M9 2C9 2 3 7 3 14c0 4 2.5 7 6 10 3.5-3 6-6 6-10 0-7-6-12-6-12z"
              fill="none"
              stroke="rgba(139,92,246,0.4)"
              strokeWidth="1.2"
            />
            <path
              d="M3 14l-2 4 3-1z"
              fill="none"
              stroke="rgba(139,92,246,0.25)"
              strokeWidth="0.8"
            />
            <path
              d="M15 14l2 4-3-1z"
              fill="none"
              stroke="rgba(139,92,246,0.25)"
              strokeWidth="0.8"
            />
            <circle cx="9" cy="9" r="2" fill="rgba(139,92,246,0.5)" />
            <motion.line
              x1="9" x2="9" y1="22" y2="28"
              stroke="rgba(139,92,246,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
        <span className="text-[9px] font-mono tracking-[0.2em] text-purple-400/40 uppercase">
          scroll
        </span>
      </motion.div>
    </div>
  );
};

export { HeroContent };

