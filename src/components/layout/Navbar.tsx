"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out-expo",
        scrolled || open
          ? "border-b border-gold/15 bg-forest-deep/85 shadow-card backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-forest-deep/80 to-transparent"
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between transition-all duration-500 ease-out-expo",
          scrolled ? "h-16" : "h-20 md:h-24"
        )}
      >
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-11 w-14 shrink-0 transition-transform duration-500 ease-out-expo group-hover:scale-105">
            <Image
              src="/brand/logo-gold-mark.png"
              alt="Logo D'Ajiks"
              fill
              className="object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-[0.2em] text-gold-gradient">
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
              data-active={pathname === link.href}
              className={cn(
                "nav-link font-body text-sm tracking-[0.08em] transition-colors duration-300",
                pathname === link.href ? "text-gold" : "text-ivory/75 hover:text-ivory"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-ivory transition-colors hover:border-gold/50 hover:text-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu — slides open with a smooth grid-rows transition */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out-expo md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <nav className="overflow-hidden">
          <div className="flex flex-col gap-1 border-t border-gold/10 bg-forest-deep/95 px-6 py-4 backdrop-blur-xl">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                className={cn(
                  "rounded-lg px-4 py-3 font-body text-sm tracking-[0.08em] transition-all duration-500 ease-out-expo",
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                  pathname === link.href
                    ? "bg-gold/10 text-gold"
                    : "text-ivory/80 hover:bg-gold/5 hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
