"use client";

import { motion } from "framer-motion";

const tiles = [
  {
    emoji: "🏠",
    title: "Self-hosted",
    description:
      "Your infrastructure data never leaves your environment. No SaaS, no telemetry, no vendor lock-in.",
  },
  {
    emoji: "🔌",
    title: "Extensible",
    description:
      "Plugin architecture means you can discover any resource type. Write a plugin in Go and ship it.",
  },
  {
    emoji: "🌍",
    title: "Community-first",
    description:
      "Apache 2.0 licensed. No feature gates, no paid tiers for core functionality.",
  },
];

export function OpenSourceSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why open source?
          </h2>
          <p className="text-lg" style={{ color: "#a1a1aa" }}>
            Because infrastructure data is too important to trust to a vendor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              className="rounded-2xl p-8 border"
              style={{ background: "#111113", borderColor: "#27272a" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-3xl mb-5 block">{tile.emoji}</span>
              <h3 className="text-lg font-bold text-white mb-3">{tile.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                {tile.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
