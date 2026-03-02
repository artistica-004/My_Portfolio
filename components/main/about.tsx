"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PERSONAL_INFO, EDUCATION } from "@/constants";

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
  return (
    <section
      id="about-me"
      className="relative py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <span className="text-purple-400/70 font-mono text-[11px] tracking-[0.2em]">
          {"// 01. ABOUT"}
        </span>
      </motion.div>

      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight"
      >
        Exploring the{" "}
        <span className="cursive gradient-text text-5xl md:text-6xl lg:text-7xl">
          Digital Cosmos
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
        {/* Left - About text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-gray-300 leading-relaxed text-[15px]">
            I&apos;m a Full Stack Developer with{" "}
            <strong className="text-white">4+ years of experience</strong>{" "}
            building production-grade web applications that scale. Currently at{" "}
            <strong className="text-white">
              Futurense (Aditya Birla Group)
            </strong>
            , leading frontend architecture and shipping Generative AI features
            into real products.
          </p>

          <p className="text-gray-300 leading-relaxed text-[15px]">
            My stack spans React, Next.js, Node.js, Python, and FastAPI — with
            deep experience integrating LLM workflows via LangChain, building
            AI-powered document analysis, multimedia responses, and real-time
            data dashboards. I&apos;ve delivered solutions for{" "}
            <strong className="text-white">
              KPMG, RBL, Vodafone, Indian Oil, American Express, Croma,
            </strong>{" "}
            and <strong className="text-white">Asian Paints</strong>.
          </p>

          <p className="text-gray-300 leading-relaxed text-[15px]">
            I&apos;ve published open-source NPM packages (
            <Link
              href="https://www.npmjs.com/package/secured-storage-web"
              target="_blank"
              className="text-purple-400 underline underline-offset-2 hover:text-purple-300 transition-colors font-mono text-sm"
            >
              secured-storage-web
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.npmjs.com/package/npm-profiler"
              target="_blank"
              className="text-purple-400 underline underline-offset-2 hover:text-purple-300 transition-colors font-mono text-sm"
            >
              npm-profiler
            </Link>
            ), and I&apos;m passionate about performance optimization, mentoring
            teams, and pushing the boundaries of what the web can do.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Mumbai, Maharashtra
            </span>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              BCA · Integral University, Lucknow
            </span>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 0H4v24h16V0zm-1 23H5V1h14v22zm-4-7H9v-1h6v1zm0-2H9v-1h6v1zm-3-2V7l3 2.5L12 12z" />
              </svg>
              2 NPM Packages Published
            </span>
          </div>
        </motion.div>

        {/* Right - Stats + Packages */}
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="4+" label="Years Experience" delay={0.2} />
            <StatCard value="8+" label="Enterprise Clients" delay={0.3} />
            <StatCard value="50%" label="Bundle Size Reduction" delay={0.4} />
            <StatCard value="8" label="GPA · BCA" delay={0.5} />
          </div>

          {/* Published Packages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass-card p-6"
          >
            <h4 className="text-xs uppercase tracking-wider text-purple-400 font-mono mb-4">
              Published Packages
            </h4>
            <div className="space-y-3">
              {EDUCATION.npmPackages.map((pkg) => (
                <Link
                  key={pkg.name}
                  href={pkg.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="text-purple-400">•</span>
                  <span className="font-mono text-sm group-hover:text-purple-300 transition-colors">
                    {pkg.name}
                  </span>
                  <svg
                    className="w-3 h-3 text-gray-600 group-hover:text-purple-400 transition-colors ml-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
