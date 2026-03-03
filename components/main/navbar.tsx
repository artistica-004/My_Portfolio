"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { NAV_LINKS, SOCIALS, PERSONAL_INFO } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className={`w-full fixed top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "h-[56px] bg-[#030014]/80 backdrop-blur-xl shadow-lg shadow-black/20"
            : "h-[64px] bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-5 md:px-10 lg:px-16">
          <Link href="#about-me" className="flex items-center gap-2.5 group">
            <div
              className={`flex items-center justify-center
                transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]
                ${scrolled ? "w-8 h-8" : "w-9 h-9"}`}
            >
              <svg viewBox="0 0 40 40" className="w-full h-full animate-[spin_20s_linear_infinite]">
                <circle cx="20" cy="20" r="18" fill="none" stroke="url(#logoGrad1)" strokeWidth="1.5" opacity="0.8" />
                <circle cx="20" cy="20" r="12" fill="none" stroke="url(#logoGrad2)" strokeWidth="1.5" opacity="0.7" transform="rotate(60,20,20)" />
                <ellipse cx="20" cy="20" rx="16" ry="8" fill="none" stroke="url(#logoGrad3)" strokeWidth="1.2" opacity="0.6" transform="rotate(-30,20,20)" />
                <circle cx="20" cy="20" r="3" fill="url(#logoCenterGrad)" />
                <circle cx="20" cy="2" r="2" fill="#8b5cf6" />
                <circle cx="32" cy="20" r="1.5" fill="#06b6d4" />
                <circle cx="8" cy="24" r="1.5" fill="#f59e0b" />
                <circle cx="28" cy="32" r="1.8" fill="#10b981" />
                <defs>
                  <linearGradient id="logoGrad1" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="logoGrad2" x1="0" y1="40" x2="40" y2="0">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="logoGrad3" x1="0" y1="20" x2="40" y2="20">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <radialGradient id="logoCenterGrad">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <span
              className={`hidden md:block font-semibold text-gray-200 font-space tracking-tight
                transition-all duration-300 ${scrolled ? "text-sm" : "text-[15px]"}`}
            >
              {PERSONAL_INFO.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center">
            <div
              className={`flex items-center gap-0.5 rounded-full border transition-all duration-500 ${
                scrolled
                  ? "border-white/[0.06] bg-white/[0.03] px-1.5 py-1"
                  : "border-transparent bg-transparent px-1 py-1"
              }`}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  className="relative px-3.5 py-1.5 text-[13px] text-gray-400
                    hover:text-white transition-colors duration-300 rounded-full
                    hover:bg-white/[0.05] font-medium"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="p-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <Icon className="h-4 w-4 text-gray-500 group-hover:text-purple-400 transition-colors duration-300" />
              </Link>
            ))}
          </div>

          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block h-[1.5px] w-5 bg-gray-300 transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-gray-300 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-gray-300 transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[56px] z-40 bg-[#030014]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full -mt-16 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.link}
                    className="block px-8 py-3 text-lg text-gray-300 hover:text-white
                      transition-colors duration-300 text-center font-medium tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-5 mt-8 pt-6 border-t border-white/[0.06]"
              >
                {SOCIALS.map(({ link, name, icon: Icon }) => (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    key={name}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]
                      hover:border-purple-500/30 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5 text-gray-400 hover:text-purple-400 transition-colors" />
                  </Link>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};