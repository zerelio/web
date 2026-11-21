"use client";

import { motion } from "framer-motion";

function GraphIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="8" r="4" stroke="#6c5ce7" strokeWidth="1.5" fill="rgba(108,92,231,0.15)" />
      <circle cx="6" cy="24" r="4" stroke="#6c5ce7" strokeWidth="1.5" fill="rgba(108,92,231,0.15)" />
      <circle cx="26" cy="24" r="4" stroke="#6c5ce7" strokeWidth="1.5" fill="rgba(108,92,231,0.15)" />
      <line x1="16" y1="12" x2="6" y2="20" stroke="#6c5ce7" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="16" y1="12" x2="26" y2="20" stroke="#6c5ce7" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="10" y1="24" x2="22" y2="24" stroke="#6c5ce7" strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 3L5 8v8c0 6.627 4.925 12.822 11 14 6.075-1.178 11-7.373 11-14V8L16 3z"
        stroke="#0ea5e9"
        strokeWidth="1.5"
        fill="rgba(14,165,233,0.1)"
      />
      <path
        d="M11 16l3.5 3.5 7-7"
        stroke="#0ea5e9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProductCards() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Two products. One platform.
          </h2>
          <p className="text-lg" style={{ color: "#a1a1aa" }}>
            Purpose-built tools for infrastructure teams who want control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Knowledge Card */}
          <motion.div
            className="relative rounded-2xl p-8 flex flex-col border transition-all duration-300 hover:border-[#6c5ce7]/40"
            style={{ background: "#111113", borderColor: "#27272a" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Subtle purple glow top-left */}
            <div
              className="absolute top-0 left-0 w-56 h-56 rounded-full blur-[80px] opacity-10 pointer-events-none"
              style={{ background: "#6c5ce7" }}
            />

            <div className="relative flex items-start justify-between mb-6">
              <div
                className="p-3 rounded-xl"
                style={{ background: "rgba(108,92,231,0.1)" }}
              >
                <GraphIcon />
              </div>
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e" }}
              >
                GA
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Zerelio Knowledge
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#a1a1aa" }}>
              Discover, map, and understand every resource in your infrastructure.
              Auto-discovery across AWS, GCP, Azure, GitHub, Kubernetes, and more.
              Graph-powered search, compliance rules, and AI-generated documentation.
            </p>

            <ul className="space-y-2.5 mb-8 flex-1">
              {[
                "20+ discovery plugins",
                "Graph-based resource relationships",
                "Compliance findings & rules engine",
                "AI documentation generation",
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-2.5 text-sm" style={{ color: "#d4d4d8" }}>
                  <span className="text-[#6c5ce7] font-bold">✓</span>
                  {feat}
                </li>
              ))}
            </ul>

            <a
              href="/knowledge"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "#6c5ce7" }}
            >
              Explore Knowledge →
            </a>
          </motion.div>

          {/* Security Card */}
          <motion.div
            className="relative rounded-2xl p-8 flex flex-col border transition-all duration-300 hover:border-[#0ea5e9]/40"
            style={{ background: "#111113", borderColor: "#27272a" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Subtle teal glow top-left */}
            <div
              className="absolute top-0 left-0 w-56 h-56 rounded-full blur-[80px] opacity-10 pointer-events-none"
              style={{ background: "#0ea5e9" }}
            />

            <div className="relative flex items-start justify-between mb-6">
              <div
                className="p-3 rounded-xl"
                style={{ background: "rgba(14,165,233,0.1)" }}
              >
                <ShieldIcon />
              </div>
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(161,161,170,0.1)", color: "#a1a1aa" }}
              >
                Coming soon
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Zerelio Security
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#a1a1aa" }}>
              Policy enforcement, vulnerability detection, and runtime security for
              your infrastructure. Built on the Knowledge graph — security that
              understands your actual topology.
            </p>

            <ul className="space-y-2.5 mb-8 flex-1">
              {[
                "Policy-as-code enforcement",
                "Vulnerability detection & prioritization",
                "Drift detection & alerting",
                "Audit trails & compliance reports",
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-2.5 text-sm" style={{ color: "#71717a" }}>
                  <span style={{ color: "#52525b" }}>○</span>
                  {feat}
                </li>
              ))}
            </ul>

            <a
              href="/security"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-[#0ea5e9]/5"
              style={{
                border: "1px solid rgba(14,165,233,0.3)",
                color: "#0ea5e9",
              }}
            >
              Join waitlist
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
