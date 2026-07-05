"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-forest-black/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-12 w-16 shrink-0">
            <Image
              src="/brand/logo-gold-mark.png"
              alt="Logo D'Ajiks"
              fill
              className="object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-[0.2em] text-gold">
              D&apos;AJIKS
            </span>
            <span className="font-body text-[10px] tracking-[0.35em] text-ivory/60">
              COFFEE &amp; BILLIARD
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-wide text-ivory/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="text-ivory md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        className={cn(
          "flex flex-col gap-1 border-t border-gold/10 bg-forest-black px-6 py-4 md:hidden",
          open ? "block" : "hidden"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-3 font-body text-sm tracking-wide text-ivory/80 hover:bg-gold/10 hover:text-gold"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
