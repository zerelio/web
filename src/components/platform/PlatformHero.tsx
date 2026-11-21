"use client";

import { motion } from "framer-motion";

export function PlatformHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Gradient blobs */}
      <div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 animate-pulse"
        style={{ background: "#6c5ce7" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
        style={{ background: "#0ea5e9", animationDelay: "1s" }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium rounded-full border"
            style={{ background: "rgba(108,92,231,0.1)", color: "#a78bfa", borderColor: "rgba(108,92,231,0.25)" }}>
            Open-source · Self-hosted · Apache 2.0
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Infrastructure intelligence,
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #6c5ce7 0%, #0ea5e9 100%)",
            }}
          >
            open and self-hosted.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#a1a1aa" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Know every resource in your infrastructure. Understand how it
          connects. Act on what matters.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="/knowledge"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "#6c5ce7" }}
          >
            Explore Knowledge →
          </a>
          <a
            href="https://github.com/zerelio/knowledge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white text-sm border transition-all duration-200 hover:bg-white/5"
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fafafa" }}
          >
            ⭐ Star on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
