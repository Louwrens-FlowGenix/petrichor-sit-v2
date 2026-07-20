"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-green-950/10 bg-stone-50/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Petrichor Consulting — home">
          <Image
            src="/images/logo-mark.png"
            alt="Petrichor Consulting"
            width={80}
            height={80}
            className="h-9 w-auto"
            priority
          />
          <span className="hidden font-display text-lg text-green-900 sm:inline">
            Petrichor Consulting
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-green-900/80 transition-colors hover:text-green-950"
            >
              {n.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary !py-2.5 text-sm">
            Book a consultation
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-green-950" fill="none" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-green-950/10 bg-stone-50 md:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-green-900 hover:bg-green-800/5"
              >
                {n.label}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Book a consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
