import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Zerelio Knowledge — Infrastructure Discovery & Knowledge Graph`,
  description:
    "Automatically discover your entire infrastructure across clouds, Kubernetes, SaaS, and on-prem. Build a living knowledge graph — then search, analyze, and document it.",
  openGraph: {
    title: `Zerelio Knowledge — Every resource. Every relationship.`,
    description:
      "Open-source infrastructure discovery and knowledge graph. 20+ plugins, BM25 + semantic search, compliance rules, AI documentation.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const features = [
  {
    title: "Auto-Discovery",
    description:
      "20+ plugins for AWS, Azure, GCP, GitHub, Kubernetes, Grafana, PagerDuty, Slack, DNS, and more. Schedule discovery or trigger on-demand.",
    icon: "🔍",
  },
  {
    title: "Knowledge Graph",
    description:
      "Resources and relationships stored as a graph. Query with Cypher, visualize with the interactive explorer, understand blast radius in seconds.",
    icon: "🕸️",
  },
  {
    title: "Search & Analysis",
    description:
      "BM25 + semantic vector search over all discovered resources. Filter, facet, export. Find anything in seconds.",
    icon: "🔎",
  },
  {
    title: "Compliance Rules",
    description:
      "5 built-in rules (public buckets, missing tags, overpowered IAM, TLS config, stale secrets). Write custom rules in YAML.",
    icon: "✅",
  },
];

const plugins = [
  { name: "AWS", color: "#FF9900", bg: "#FF990020" },
  { name: "GCP", color: "#4285F4", bg: "#4285F420" },
  { name: "Azure", color: "#0078D4", bg: "#0078D420" },
  { name: "GitHub", color: "#f0f6fc", bg: "#f0f6fc15" },
  { name: "Kubernetes", color: "#326CE5", bg: "#326CE520" },
  { name: "Grafana", color: "#F46800", bg: "#F4680020" },
  { name: "PagerDuty", color: "#06AC38", bg: "#06AC3820" },
  { name: "Slack", color: "#4A154B", bg: "#E01E5A20" },
  { name: "DNS", color: "#a1a1aa", bg: "#a1a1aa15" },
];

const quickstart = `# Docker Compose
curl -o docker-compose.yml \\
  https://raw.githubusercontent.com/zerelio/knowledge/main/docker-compose.yml
docker compose up -d
# Open http://localhost:8080`;

export default function KnowledgePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none"
          style={{ background: "#6c5ce7" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span
              className="text-sm font-semibold"
              style={{ color: "#a78bfa" }}
            >
              Zerelio Knowledge
            </span>
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(34,197,94,0.15)",
                color: "#22c55e",
              }}
            >
              GA
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Every resource.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #6c5ce7 0%, #a78bfa 100%)",
              }}
            >
              Every relationship.
            </span>
            <br />
            Fully discovered.
          </h1>

          <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto" style={{ color: "#a1a1aa" }}>
            Zerelio Knowledge automatically discovers your entire infrastructure
            across clouds, Kubernetes, SaaS, and on-prem. Build a living knowledge
            graph — then search, analyze, and document it.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/zerelio/knowledge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white text-sm transition-all duration-200 hover:opacity-90"
              style={{ background: "#6c5ce7" }}
            >
              Get started
            </a>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fafafa" }}
            >
              Live demo
            </a>
          </div>
        </div>
      </section>

      {/* Feature Tiles */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything you need to understand your infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl p-8 border transition-all duration-300 hover:border-[#6c5ce7]/30"
                style={{ background: "#111113", borderColor: "#27272a" }}
              >
                <span className="text-3xl mb-5 block">{feat.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plugin Showcase */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">
              20+ discovery plugins
            </h2>
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
              Connect to any cloud, platform, or service.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {plugins.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium"
                style={{
                  background: p.bg,
                  borderColor: `${p.color}30`,
                  color: p.color,
                }}
              >
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
                  style={{ background: p.color, color: "#fff" }}
                >
                  {p.name[0]}
                </span>
                {p.name}
              </div>
            ))}
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium"
              style={{
                background: "rgba(108,92,231,0.08)",
                borderColor: "rgba(108,92,231,0.2)",
                color: "#a78bfa",
              }}
            >
              + more →
            </div>
          </div>
        </div>
      </section>

      {/* Quickstart */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">
              Up and running in minutes
            </h2>
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
              No cloud account needed. Runs entirely on your infrastructure.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "#27272a" }}
          >
            {/* Faux terminal titlebar */}
            <div
              className="flex items-center gap-2 px-5 py-3.5 border-b"
              style={{ background: "#0d0d0f", borderColor: "#27272a" }}
            >
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs" style={{ color: "#52525b" }}>
                terminal
              </span>
            </div>
            <pre
              className="p-6 text-sm leading-relaxed overflow-x-auto font-mono"
              style={{ background: "#0a0a0c", color: "#d4d4d8" }}
            >
              {quickstart}
            </pre>
          </div>
        </div>
      </section>

      {/* Architecture Note */}
      <section className="py-16 border-t" style={{ borderColor: "#27272a" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "PostgreSQL + pgvector",
                desc: "Resource storage and semantic vector search over all discovered assets.",
              },
              {
                title: "Apache AGE",
                desc: "Graph engine built on PostgreSQL. Query resource relationships with Cypher.",
              },
              {
                title: "Apache 2.0",
                desc: "Fully open source. Self-hosted. No telemetry, no license servers, no surprises.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-6 border text-center"
                style={{ background: "#111113", borderColor: "#27272a" }}
              >
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm" style={{ color: "#a1a1aa" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t" style={{ borderColor: "#27272a" }}>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-5">
            Ready to map your infrastructure?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#a1a1aa" }}>
            Deploy in minutes. Free and open-source forever.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/zerelio/knowledge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white text-sm hover:opacity-90 transition-opacity"
              style={{ background: "#6c5ce7" }}
            >
              ⭐ Star on GitHub
            </a>
            <a
              href="/docs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border hover:bg-white/5 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fafafa" }}
            >
              Read the docs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
