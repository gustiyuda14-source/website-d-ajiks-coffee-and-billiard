import Link from "next/link";
import Image from "next/image";
import { Bike, Clock, Instagram, MapPin, MessageCircle, Music2 } from "lucide-react";
import { business, navLinks, waLink } from "@/lib/constants";

const socials = [
  {
    href: "instagram" as const,
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "tiktok" as const,
    icon: Music2,
    label: "TikTok",
  },
  {
    href: "grabfood" as const,
    icon: Bike,
    label: "GrabFood",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-forest-deep">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" aria-hidden />

      <div className="container-page relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
        <div className="flex flex-col gap-5">
          <div className="relative h-16 w-40">
            <Image
              src="/brand/logo-gold-full.jpg"
              alt="D'Ajiks Coffee & Billiard"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="max-w-xs font-body text-sm leading-relaxed text-ivory/55">
            {business.tagline}. Coffee &amp; billiard lounge di {business.city} —
            tempat kopi serius dan permainan santai bertemu.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={business.social[href]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-ivory/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="eyebrow">Jelajahi</span>
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex w-fit items-center gap-2 font-body text-sm text-ivory/65 transition-colors hover:text-gold"
              >
                <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" aria-hidden />
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="eyebrow">Kunjungi Kami</span>
          <a
            href={waLink("Halo D'Ajiks Coffee & Billiard!")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-body text-sm text-ivory/65 transition-colors hover:text-gold"
          >
            <MessageCircle size={16} className="text-gold" />
            {business.whatsapp.displayNumber}
          </a>
          <span className="flex items-center gap-3 font-body text-sm text-ivory/65">
            <MapPin size={16} className="text-gold" /> {business.city}, Sulawesi Tenggara
          </span>
          <span className="flex items-center gap-3 font-body text-sm text-ivory/65">
            <Clock size={16} className="text-gold" /> {business.hours[0].time} · Setiap Hari
          </span>
        </div>
      </div>

      <div className="relative border-t border-gold/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="font-body text-xs text-ivory/40">
            © {new Date().getFullYear()} D&apos;Ajiks Coffee &amp; Billiard. All rights reserved.
          </p>
          <p className="font-display text-xs tracking-[0.3em] text-gold/50">
            SEMETON D&apos;AJIKS
          </p>
        </div>
      </div>
    </footer>
  );
}
