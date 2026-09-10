"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Search } from "lucide-react";

const navLinks = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Rent", href: "/rent" },
  { label: "Listings", href: "/properties" },
  { label: "Communities", href: "/communities" },
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Insights", href: "/insights" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-warm-white)]/95 backdrop-blur-md border-b border-[var(--color-border)] py-3"
            : "bg-[var(--color-warm-white)] py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-3 group" aria-label="Global Group Realty Home">
            <span
              className={`font-serif tracking-[0.2em] font-medium transition-all duration-300 text-[var(--color-charcoal)] ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              GLOBAL GROUP
            </span>
            <span className="hidden sm:inline-block text-[0.65rem] tracking-[0.3em] uppercase text-[var(--color-text-muted)] border-l border-[var(--color-border)] pl-3">
              Realty
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] transition-colors px-2"
            >
              <Search size={14} strokeWidth={1.5} />
              Search
            </Link>
            <Link href="/contact" className="btn-primary text-xs">
              Contact Us
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+13055550123"
              className="p-2 text-[var(--color-charcoal)]"
              aria-label="Call Global Group Realty"
            >
              <Phone size={20} strokeWidth={1.5} />
            </a>
            <Link
              href="/properties"
              className="p-2 text-[var(--color-charcoal)]"
              aria-label="Search properties"
            >
              <Search size={20} strokeWidth={1.5} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="p-2 text-[var(--color-charcoal)]"
              aria-label="Open navigation menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[var(--color-warm-white)] shadow-2xl transition-transform duration-400 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
            <span className="font-serif tracking-[0.2em] text-base">GLOBAL GROUP</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-[var(--color-charcoal)]"
              aria-label="Close navigation menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="p-6 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 font-serif text-xl text-[var(--color-charcoal)] border-b border-[var(--color-border)] last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 py-6 space-y-3 mt-auto">
            <Link
              href="/properties"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full"
            >
              Find a Property
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-secondary w-full"
            >
              Contact Us
            </Link>
            <a
              href="tel:+13055550123"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium tracking-[0.1em] uppercase text-[var(--color-text-secondary)] border-t border-[var(--color-border)] mt-4"
            >
              <Phone size={14} strokeWidth={1.5} />
              (305) 555-0123
            </a>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className={`transition-all duration-300 ${scrolled ? "h-[56px]" : "h-[76px]"}`} />
    </>
  );
}
