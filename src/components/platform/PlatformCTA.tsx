"use client";

import { motion } from "framer-motion";

export function PlatformCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(108,92,231,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to understand your infrastructure?
          </h2>
          <p className="text-lg mb-10" style={{ color: "#a1a1aa" }}>
            Self-hosted, open-source, and production-ready. Deploy Zerelio
            Knowledge in minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/docs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white text-sm transition-all duration-200 hover:opacity-90"
              style={{ background: "#6c5ce7" }}
            >
              Deploy in minutes
            </a>
            <a
              href="https://github.com/zerelio/knowledge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fafafa" }}
            >
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
