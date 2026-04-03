"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PERSONAL_INFO, SECTIONS } from "@/constants";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const section = SECTIONS.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setSending(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-3 text-center"
      >
        <span className="text-emerald-400/60 font-mono text-[11px] tracking-[0.2em]">
          {section.label}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight text-center"
      >
        {section.heading}{" "}
        <span className="cursive gradient-text text-5xl md:text-6xl lg:text-7xl">
          {section.accent}
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-400 text-[14px] mb-16 max-w-xl mx-auto leading-relaxed text-center"
      >
        {section.description}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase">
                Primary Signal
              </span>
            </div>
            <Link
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-white text-xl font-mono italic sm:text-2xl md:text-3xl font-bold hover:text-purple-300 transition-colors duration-300 break-all"
            >
              {PERSONAL_INFO.email}
            </Link>
            <div className="h-px bg-white/[0.06] mt-5" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase">
                Direct Line
              </span>
            </div>
            <div className="relative group inline-block">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(PERSONAL_INFO.phone);
                  alert("Phone number copied to clipboard!");
                }}
                className="text-white text-lg sm:text-xl font-semibold hover:text-cyan-300 transition-colors duration-300 cursor-pointer bg-none border-none p-0"
              >
                +91 ******
              </button>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] bg-purple-600/90 text-white px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Click to copy phone number
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase">
                Coordinates
              </span>
            </div>
            <div className="space-y-3">
              <Link
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0c0 1.139-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-[14px] font-medium group-hover:text-blue-300 transition-colors">
                    LinkedIn
                  </p>
                  <p className="text-gray-600 text-[12px] font-mono">
                    {PERSONAL_INFO.linkedinHandle}
                  </p>
                </div>
              </Link>

              <Link
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-500/10 border border-gray-500/20 flex items-center justify-center group-hover:bg-gray-500/20 transition-all duration-300">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-[14px] font-medium group-hover:text-gray-300 transition-colors">
                    GitHub
                  </p>
                  <p className="text-gray-600 text-[12px] font-mono">
                    {PERSONAL_INFO.githubHandle}
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-5"
          >
            <div className="flex items-center gap-3">
              <span className="text-red-400 text-lg">📍</span>
              <div>
                <p className="text-white text-[14px] font-semibold">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-gray-500 text-[11px] font-mono">
                  {PERSONAL_INFO.timezone}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 space-y-6"
          >
            <div>
              <label className="block text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3
                  text-white text-[14px] placeholder:text-gray-600
                  focus:outline-none focus:border-purple-500/40 focus:bg-white/[0.05]
                  transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3
                  text-white text-[14px] placeholder:text-gray-600
                  focus:outline-none focus:border-purple-500/40 focus:bg-white/[0.05]
                  transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about the project or opportunity..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3
                  text-white text-[14px] placeholder:text-gray-600 resize-y min-h-[120px]
                  focus:outline-none focus:border-purple-500/40 focus:bg-white/[0.05]
                  transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500
                text-white font-semibold text-[14px] tracking-wide
                hover:from-purple-500 hover:to-purple-400 hover:shadow-lg hover:shadow-purple-500/25
                active:scale-[0.98] transition-all duration-300
                disabled:opacity-60 disabled:cursor-not-allowed
                flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              {sending ? "Opening Mail..." : "Send Transmission"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};