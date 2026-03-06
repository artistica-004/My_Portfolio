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
    fileName="developer.py"
    lang="Python"
    statusText="ready"
    accentColor="rgba(196, 181, 253, 0.7)"
    bgColor="rgba(10, 10, 26, 0.75)"
    borderColor="rgba(255, 255, 255, 0.08)"
    dotColors={["rgba(255,255,255,0.25)", "rgba(255,255,255,0.18)", "rgba(255,255,255,0.12)"]}
    cursorColor="rgba(167, 139, 250, 0.6)"
    glowColor="rgba(139, 92, 246, 0.08)"
    codeLines={[
      { indent: 0, tokens: [{ text: "dev", color: "rgba(229,192,123,0.65)" }, { text: " = {", color: "rgba(171,178,191,0.5)" }] },
      { indent: 1, tokens: [{ text: "name", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'Shivani'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "role", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'GenAI Eng'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "stack", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'RAG+LLM'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "tools", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'LangChain'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "llm", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'Groq'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "deploy", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "'HuggingFace'", color: "rgba(152,195,121,0.65)" }, { text: ",", color: "rgba(171,178,191,0.4)" }] },
      { indent: 1, tokens: [{ text: "cgpa", color: "rgba(224,108,117,0.6)" }, { text: ": ", color: "rgba(171,178,191,0.4)" }, { text: "8.5", color: "rgba(209,154,102,0.65)" }] },
      { indent: 0, tokens: [{ text: "}", color: "rgba(171,178,191,0.5)" }] },
    ]}
  />
);

const RoleTerminal = () => (
  <MiniTerminal
    fileName="role.config.py"
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
      { indent: 0, tokens: [{ text: "role", color: "rgba(229,192,123,0.55)" }, { text: " = {", color: "rgba(143,171,190,0.45)" }] },
      { indent: 1, tokens: [{ text: "college", color: "rgba(86,182,194,0.55)" }, { text: ": ", color: "rgba(143,171,190,0.4)" }, { text: "'Pillai'", color: "rgba(136,221,237,0.55)" }, { text: ",", color: "rgba(143,171,190,0.4)" }] },
      { indent: 1, tokens: [{ text: "degree", color: "rgba(86,182,194,0.55)" }, { text: ": ", color: "rgba(143,171,190,0.4)" }, { text: "'B.Sc CS'", color: "rgba(136,221,237,0.55)" }, { text: ",", color: "rgba(143,171,190,0.4)" }] },
      { indent: 1, tokens: [{ text: "focus", color: "rgba(86,182,194,0.55)" }, { text: ": ", color: "rgba(143,171,190,0.4)" }, { text: "'GenAI'", color: "rgba(136,221,237,0.55)" }, { text: ",", color: "rgba(143,171,190,0.4)" }] },
      { indent: 1, tokens: [{ text: "location", color: "rgba(86,182,194,0.55)" }, { text: ": ", color: "rgba(143,171,190,0.4)" }, { text: "'Mumbai'", color: "rgba(136,221,237,0.55)" }, { text: ",", color: "rgba(143,171,190,0.4)" }] },
      { indent: 1, tokens: [{ text: "open", color: "rgba(86,182,194,0.55)" }, { text: ": ", color: "rgba(143,171,190,0.4)" }, { text: "True", color: "rgba(209,154,102,0.6)" }] },
      { indent: 0, tokens: [{ text: "}", color: "rgba(143,171,190,0.45)" }] },
    ]}
  />
);

const ExperienceTerminal = () => (
  <MiniTerminal
    fileName="internships.py"
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
      { indent: 0, tokens: [{ text: "exp", color: "rgba(110,231,183,0.6)" }, { text: " = {", color: "rgba(143,187,170,0.45)" }] },
      { indent: 1, tokens: [{ text: "intern1", color: "rgba(85,185,138,0.55)" }, { text: ": ", color: "rgba(143,187,170,0.4)" }, { text: "'CodSoft'", color: "rgba(181,232,204,0.55)" }, { text: ",", color: "rgba(143,187,170,0.4)" }] },
      { indent: 1, tokens: [{ text: "intern2", color: "rgba(85,185,138,0.55)" }, { text: ": ", color: "rgba(143,187,170,0.4)" }, { text: "'Unified'", color: "rgba(181,232,204,0.55)" }, { text: ",", color: "rgba(143,187,170,0.4)" }] },
      { indent: 1, tokens: [{ text: "accuracy", color: "rgba(85,185,138,0.55)" }, { text: ": ", color: "rgba(143,187,170,0.4)" }, { text: "'95%'", color: "rgba(134,239,172,0.5)" }, { text: ",", color: "rgba(143,187,170,0.4)" }] },
      { indent: 1, tokens: [{ text: "latency", color: "rgba(85,185,138,0.55)" }, { text: ": ", color: "rgba(143,187,170,0.4)" }, { text: "'<3s'", color: "rgba(134,239,172,0.5)" }, { text: ",", color: "rgba(143,187,170,0.4)" }] },
      { indent: 1, tokens: [{ text: "projects", color: "rgba(85,185,138,0.55)" }, { text: ": ", color: "rgba(143,187,170,0.4)" }, { text: "3", color: "rgba(181,232,204,0.55)" }] },
      { indent: 0, tokens: [{ text: "}", color: "rgba(143,187,170,0.45)" }] },
    ]}
  />
);

const AITerminal = () => (
  <MiniTerminal
    fileName="rag-engine.py"
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
      { indent: 0, tokens: [{ text: "from", color: "rgba(251,191,36,0.6)" }, { text: " langchain ", color: "rgba(252,211,77,0.55)" }, { text: "import", color: "rgba(251,191,36,0.6)" }, { text: " RAG", color: "rgba(229,192,123,0.55)" }] },
      { indent: 0, tokens: [{ text: "from", color: "rgba(251,191,36,0.6)" }, { text: " groq ", color: "rgba(252,211,77,0.55)" }, { text: "import", color: "rgba(251,191,36,0.6)" }, { text: " LLM", color: "rgba(229,192,123,0.55)" }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ text: "ai", color: "rgba(212,164,74,0.55)" }, { text: " = ", color: "rgba(187,162,110,0.4)" }, { text: "RAG", color: "rgba(229,192,123,0.55)" }, { text: "(", color: "rgba(187,162,110,0.4)" }] },
      { indent: 1, tokens: [{ text: "llm", color: "rgba(212,164,74,0.55)" }, { text: "=", color: "rgba(187,162,110,0.4)" }, { text: "'groq'", color: "rgba(253,230,138,0.5)" }, { text: ",", color: "rgba(187,162,110,0.4)" }] },
      { indent: 1, tokens: [{ text: "embed", color: "rgba(212,164,74,0.55)" }, { text: "=", color: "rgba(187,162,110,0.4)" }, { text: "True", color: "rgba(253,230,138,0.5)" }, { text: ",", color: "rgba(187,162,110,0.4)" }] },
      { indent: 1, tokens: [{ text: "deploy", color: "rgba(212,164,74,0.55)" }, { text: "=", color: "rgba(187,162,110,0.4)" }, { text: "'hf'", color: "rgba(253,230,138,0.5)" }] },
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
    PERSONAL_INFO.typingTexts || ["Generative AI Engineer"],
    80,
  );

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-32 pb-16 gap-12 lg:gap-8">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6 max-w-2xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 w-fit"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-purple-300 text-xs font-mono tracking-wider">
            {HERO_SECTION.badge}
          </span>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            {PERSONAL_INFO.firstName}{" "}
            <span className="gradient-text">{PERSONAL_INFO.lastName}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-3 h-8 flex items-center"
          >
            <span className="text-xl md:text-2xl text-gray-400 font-mono">
              {typedText}
              <span className="animate-typewriter-blink border-r-2 border-purple-400 ml-0.5" />
            </span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-400 text-[15px] leading-relaxed max-w-lg"
        >
          {PERSONAL_INFO.shortSummary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          {HERO_SECTION.ctaButtons.map((btn) => (
            <Link
              key={btn.text}
              href={btn.href}
              className={
                btn.primary
                  ? "px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold text-sm hover:from-purple-500 hover:to-purple-400 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  : "px-6 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 font-semibold text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
              }
            >
              {btn.text}
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-5 pt-2"
        >
          <Link
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-500 hover:text-white transition-colors duration-300"
          >
            <RxGithubLogo size={20} />
          </Link>
          <Link
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
          >
            <RxLinkedinLogo size={20} />
          </Link>
          <Link
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-gray-500 hover:text-purple-400 transition-colors duration-300"
          >
            <HiOutlineGlobeAlt size={20} />
          </Link>
          <span className="text-gray-700 text-xs font-mono">{PERSONAL_INFO.location}</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="hidden lg:flex items-center justify-center"
      >
        <HeroScene />
      </motion.div>
    </div>
  );
};