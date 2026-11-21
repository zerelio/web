"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Docs", href: "/docs" },
];

const PRODUCTS = [
  {
    label: "Knowledge",
    href: "/knowledge",
    badge: "GA",
    badgeColor: "#22c55e",
    description: "Infrastructure discovery & graph",
  },
  {
    label: "Security",
    href: "/security",
    badge: "Soon",
    badgeColor: "#a1a1aa",
    description: "Policy enforcement & vulnerability detection",
  },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg-dark/80 backdrop-blur-xl border-b border-border-subtle"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/logo.svg?v=3" alt="Zerelio" className="h-9 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Products dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setProductsOpen((v) => !v)}
                onMouseEnter={() => setProductsOpen(true)}
                aria-expanded={productsOpen}
              >
                Products
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    productsOpen ? "rotate-180" : "",
                  )}
                />
              </button>

              {productsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-xl border border-[#27272a] shadow-xl overflow-hidden"
                  style={{ background: "#111113" }}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="flex flex-col px-4 py-3.5 hover:bg-white/5 transition-colors"
                      onClick={() => setProductsOpen(false)}
                    >
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-semibold text-white">
                          {p.label}
                        </span>
                        <span
                          className="text-[10px] font-medium px-1.5 py-0.5 rounded-full"
                          style={{
                            background: `${p.badgeColor}22`,
                            color: p.badgeColor,
                          }}
                        >
                          {p.badge}
                        </span>
                      </div>
                      <span className="text-xs" style={{ color: "#71717a" }}>
                        {p.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://github.com/zerelio/knowledge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/knowledge"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "#6c5ce7" }}
            >
              Get started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-dark/95 backdrop-blur-xl border-b border-border-subtle">
          <nav className="flex flex-col px-4 py-4 gap-1">
            <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "#52525b" }}>
              Products
            </div>
            {PRODUCTS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="flex items-center justify-between px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span>{p.label}</span>
                <span
                  className="text-[10px] font-medium px-1.5 py-0.5 rounded-full"
                  style={{ background: `${p.badgeColor}22`, color: p.badgeColor }}
                >
                  {p.badge}
                </span>
              </Link>
            ))}
            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/zerelio/knowledge"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              GitHub ↗
            </a>
            <div className="pt-4 border-t border-border-subtle mt-2">
              <a
                href="/knowledge"
                className="flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold text-sm text-white"
                style={{ background: "#6c5ce7" }}
                onClick={() => setMobileOpen(false)}
              >
                Get started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
