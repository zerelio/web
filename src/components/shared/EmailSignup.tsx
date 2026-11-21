"use client";

import { useState, FormEvent } from "react";

export function EmailSignup({ source, variant = "default" }: { source: string; variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "newsletter", email, source_page: source, website: "" }),
      });
      if (res.ok) {
        setStatus("success");
        setMsg("Thanks! You're on the list.");
        setEmail("");
      } else {
        setStatus("error");
        setMsg("Something went wrong. Try again?");
      }
    } catch {
      setStatus("error");
      setMsg("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-green-400 font-medium">
        Thanks! You&apos;re on the list.
      </p>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 min-w-0 px-3 py-1.5 text-sm rounded-lg bg-bg-card border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-500"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-500 disabled:opacity-50 transition-colors whitespace-nowrap"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <p className="text-sm font-medium text-text-primary">Stay updated</p>
      <p className="text-xs text-text-secondary">Get the latest on infrastructure discovery and Zerelio.</p>
      <div className="flex gap-2">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg bg-bg-card border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-500"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-500 disabled:opacity-50 transition-colors"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && <p className="text-xs text-red-400">{msg}</p>}
    </form>
  );
}
