import type { Metadata } from "next";
import { WaitlistForm } from "@/components/security/WaitlistForm";

export const metadata: Metadata = {
  title: "Zerelio Security — Coming Soon",
  description:
    "Policy enforcement, vulnerability detection, and runtime security built on the Zerelio Knowledge graph. Join the waitlist.",
};

const featurePreviews = [
  "Policy-as-code enforcement",
  "CVE detection with infrastructure context",
  "Drift detection & alerting",
  "Audit trails & compliance reports",
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: "#0ea5e9" }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-sm font-semibold" style={{ color: "#38bdf8" }}>
              Zerelio Security
            </span>
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
              style={{ background: "rgba(161,161,170,0.1)", color: "#a1a1aa" }}
            >
              Coming soon
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Security that{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
              }}
            >
              knows your infrastructure.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-14 leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#a1a1aa" }}
          >
            Built on the Zerelio Knowledge graph — vulnerability detection,
            policy enforcement, and drift alerting that understands your actual
            topology.
          </p>

          {/* Feature previews (dimmed) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-14">
            {featurePreviews.map((feat) => (
              <div
                key={feat}
                className="relative rounded-xl px-5 py-4 border text-sm text-left overflow-hidden"
                style={{ background: "#111113", borderColor: "#27272a" }}
              >
                {/* Blur overlay to show "coming soon" state */}
                <div className="absolute inset-0 backdrop-blur-[1px] bg-bg-dark/30 rounded-xl" />
                <div className="relative flex items-center gap-2.5" style={{ color: "#52525b" }}>
                  <span>○</span>
                  <span>{feat}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Email capture */}
          <div className="max-w-lg mx-auto">
            <p className="text-sm mb-4" style={{ color: "#71717a" }}>
              Get notified when Security launches
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-10 border-t" style={{ borderColor: "#27272a" }}>
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="text-sm" style={{ color: "#52525b" }}>
            Zerelio Security will be a paid product.{" "}
            <a
              href="/knowledge"
              className="underline underline-offset-2 transition-colors hover:text-[#a1a1aa]"
              style={{ color: "#71717a" }}
            >
              Zerelio Knowledge
            </a>{" "}
            remains free and open-source.
          </p>
        </div>
      </section>
    </>
  );
}
