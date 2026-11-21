"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm"
        style={{
          background: "rgba(34,197,94,0.08)",
          borderColor: "rgba(34,197,94,0.25)",
          color: "#22c55e",
        }}
      >
        ✓ You&apos;re on the list — we&apos;ll notify you when Security launches.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        required
        className="flex-1 px-4 py-3 rounded-lg text-sm outline-none transition-all"
        style={{
          background: "#111113",
          border: "1px solid #27272a",
          color: "#fafafa",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "rgba(14,165,233,0.4)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#27272a";
        }}
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90"
        style={{ background: "#0ea5e9" }}
      >
        Notify me
      </button>
    </form>
  );
}
