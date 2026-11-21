"use client";
import { useState } from "react";
import { Header } from "@/components/layout/Header";

function getInitialAuth(): boolean {
  if (typeof window !== "undefined" && localStorage.getItem("kt_console_auth") === "true") return true;
  return false;
}

export default function ConsolePage() {
  const [authenticated, setAuthenticated] = useState(getInitialAuth);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [tab, setTab] = useState<"licenses" | "settings">("licenses");
  const [newEmail, setNewEmail] = useState("");
  const [newTier, setNewTier] = useState("team");
  const [newDays, setNewDays] = useState("365");
  const [generatedKey, setGeneratedKey] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Simple password — change this to whatever you want
    if (password === "f1V;INhy%k9/f2A4d\"~6$bqr]uw[jU:J1HbTp=Fv}]|cW>0N1}") {
      setAuthenticated(true);
      localStorage.setItem("kt_console_auth", "true");
      setAuthError("");
    } else {
      setAuthError("Wrong password");
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("kt_console_auth");
    localStorage.removeItem("kt_console_key");
  }

  async function handleGenerate() {
    if (!newEmail.trim()) return;
    setLoading(true);
    setGeneratedKey("");
    try {
      const res = await fetch("https://license.zerelio.dev/api/v1/admin/license/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Admin-Key": localStorage.getItem("kt_console_key") || "" },
        body: JSON.stringify({ customer: newEmail, tier: newTier, days: parseInt(newDays) }),
      });
      const data = await res.json();
      if (data.license) setGeneratedKey(data.license);
      else alert("Failed: " + (data.error || "unknown"));
    } catch (e: unknown) {
      alert("Error: " + (e instanceof Error ? e.message : String(e)));
    }
    setLoading(false);
  }

  function copyKey() {
    navigator.clipboard.writeText(generatedKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-bg-dark text-text-primary flex items-center justify-center">
        <form onSubmit={handleLogin} className="w-full max-w-sm mx-auto p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-accent-purple flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-lg font-bold">KT</span>
            </div>
            <h1 className="text-xl font-semibold">License Console</h1>
            <p className="text-sm text-text-secondary mt-1">Authenticate to continue</p>
          </div>
          {authError && (
            <div className="mb-4 px-4 py-3 rounded-lg bg-red-900/20 border border-red-900/40 text-sm text-red-400">{authError}</div>
          )}
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}
            placeholder="Console password" autoFocus
            className="w-full px-3 py-2 bg-white/5 border border-border-subtle rounded-lg text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary-600/50 mb-4" />
          <button type="submit" className="w-full py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl text-sm font-medium transition-all">
            Sign in
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary">
      <Header />
      <div className="mx-auto max-w-4xl px-4 pt-28 pb-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold">License Console</h1>
            <p className="text-text-secondary mt-2">Generate and manage license keys for Zerelio customers.</p>
          </div>
          <button onClick={handleLogout} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-text-secondary hover:text-text-primary border border-border-subtle">
            Sign out
          </button>
        </div>

        <div className="flex gap-1 mb-8 p-1 rounded-xl bg-white/5 border border-border-subtle w-fit">
          {["licenses", "settings"].map((t) => (
            <button key={t} onClick={() => setTab(t as "licenses" | "settings")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${tab === t ? "bg-primary-600 text-white" : "text-text-secondary hover:text-text-primary"}`}>
              {t === "licenses" ? "Generate License" : "Settings"}
            </button>
          ))}
        </div>

        {tab === "licenses" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-border-subtle bg-bg-card/50 p-6">
              <h2 className="text-lg font-semibold mb-1">New License</h2>
              <p className="text-sm text-text-secondary mb-6">Create a signed license key for a customer.</p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-xs text-text-secondary block mb-1.5">Customer email</label>
                  <input type="email" value={newEmail} onChange={e => setNewEmail(e.target.value)}
                    placeholder="customer@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-border-subtle text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary-600/50" />
                </div>
                <div>
                  <label className="text-xs text-text-secondary block mb-1.5">Tier</label>
                  <select value={newTier} onChange={e => setNewTier(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-border-subtle text-sm text-text-primary focus:outline-none">
                    <option value="team">Team</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-text-secondary block mb-1.5">Valid days</label>
                  <input type="number" value={newDays} onChange={e => setNewDays(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-border-subtle text-sm text-text-primary focus:outline-none focus:border-primary-600/50" />
                </div>
              </div>
              <button onClick={handleGenerate} disabled={loading || !newEmail.trim()}
                className="px-5 py-2 bg-primary-600 hover:bg-primary-500 disabled:opacity-50 text-white rounded-lg text-sm font-medium transition-all">
                {loading ? "Generating..." : "Generate License Key"}
              </button>
            </div>
            {generatedKey && (
              <div className="rounded-xl border border-border-subtle bg-bg-card/50 p-6 animate-fade-in">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold">License Key</h3>
                  <button onClick={copyKey} className="text-xs px-3 py-1.5 rounded-lg bg-primary-600/10 text-primary-400 hover:bg-primary-600/20 transition-all">
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="bg-black/30 rounded-lg p-4 break-all font-mono text-xs text-text-secondary select-all">{generatedKey}</div>
                <p className="text-xs text-text-secondary mt-3">Give this key to the customer. They paste it in their Zerelio Admin → License.</p>
              </div>
            )}
          </div>
        )}

        {tab === "settings" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-border-subtle bg-bg-card/50 p-6">
              <h2 className="text-lg font-semibold mb-1">Settings</h2>
              <p className="text-sm text-text-secondary mb-6">Configure your admin API key for license generation.</p>
              <div className="mb-6">
                <label className="text-xs text-text-secondary block mb-1.5">Admin API Key</label>
                <input type="password" defaultValue={typeof window !== "undefined" ? localStorage.getItem("kt_console_key") || "" : ""}
                  onChange={e => localStorage.setItem("kt_console_key", e.target.value)}
                  placeholder="Enter your KT_ADMIN_KEY"
                  className="w-full max-w-md px-3 py-2 rounded-lg bg-white/5 border border-border-subtle text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary-600/50" />
              </div>
              <h3 className="text-base font-semibold mb-1">License Server</h3>
              <p className="text-sm text-text-secondary mb-4">The public license server validates keys for all Zerelio instances.</p>
              <div className="space-y-2 text-sm">
                <div><span className="text-text-secondary">Endpoint:</span> <code className="ml-2 px-2 py-0.5 rounded bg-black/30 text-xs">https://license.zerelio.dev/api/v1/license</code></div>
                <div><span className="text-text-secondary">Status:</span> <span className="ml-2 text-green-400">● Live</span></div>
                <div><span className="text-text-secondary">Security:</span> <span className="ml-2 text-text-secondary">Ed25519 JWTs · rate limited · no data stored</span></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
