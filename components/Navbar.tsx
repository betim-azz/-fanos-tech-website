"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone/95 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl tracking-tight text-navy">
          FANOS <span className="text-ochre">Tech</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink/80 hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-body text-sm font-medium bg-navy text-stone px-5 py-2.5 rounded-sm hover:bg-navy/90 transition-colors"
          >
            Start Your Project
          </Link>
        </nav>

        <button
          className="md:hidden text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-6 border-t border-line">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-ink/80 border-b border-line/60"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 text-center bg-navy text-stone px-5 py-3 rounded-sm"
            onClick={() => setOpen(false)}
          >
            Start Your Project
          </Link>
        </nav>
      )}
    </header>
  );
}
