"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Connect",
    description:
      "Install Zerelio and configure plugins for your cloud providers. AWS, GCP, Azure, Kubernetes, GitHub, and more.",
  },
  {
    num: "02",
    title: "Discover",
    description:
      "Automatic scanning finds and indexes every resource and relationship across your entire infrastructure.",
  },
  {
    num: "03",
    title: "Understand",
    description:
      "Search, graph, compliance, and AI docs give full infrastructure visibility — always current, always complete.",
  },
];

export function PlatformHowItWorks() {
  return (
    <section className="py-20 md:py-24">
      {/* Subtle divider line */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-lg" style={{ color: "#a1a1aa" }}>
            Up and running in under 30 minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="absolute top-10 left-[16.66%] right-[16.66%] h-px hidden md:block"
            style={{ background: "linear-gradient(to right, #6c5ce7, #0ea5e9)" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 text-2xl font-bold relative z-10"
                style={{
                  background: "#111113",
                  border: "2px solid #27272a",
                  color: i === 0 ? "#6c5ce7" : i === 2 ? "#0ea5e9" : "#a78bfa",
                }}
              >
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
