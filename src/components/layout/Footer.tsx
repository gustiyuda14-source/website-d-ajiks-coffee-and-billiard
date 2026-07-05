import Link from "next/link";
import Image from "next/image";
import { Bike, Instagram, MapPin, MessageCircle, Music2 } from "lucide-react";
import { business, navLinks, waLink } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-forest-black">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="relative h-16 w-40">
            <Image
              src="/brand/logo-gold-full.jpg"
              alt="D'Ajiks Coffee & Billiard"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="max-w-xs font-body text-sm text-ivory/60">
            {business.tagline}. Coffee &amp; billiard lounge di {business.city}.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow">Jelajahi</span>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ivory/70 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow">Terhubung</span>
          <a
            href={waLink("Halo D'Ajiks Coffee & Billiard!")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm text-ivory/70 hover:text-gold"
          >
            <MessageCircle size={16} /> {business.whatsapp.displayNumber}
          </a>
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm text-ivory/70 hover:text-gold"
          >
            <Instagram size={16} /> Instagram
          </a>
          <a
            href={business.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm text-ivory/70 hover:text-gold"
          >
            <Music2 size={16} /> TikTok
          </a>
          <a
            href={business.social.grabfood}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm text-ivory/70 hover:text-gold"
          >
            <Bike size={16} /> GrabFood
          </a>
          <span className="flex items-center gap-2 font-body text-sm text-ivory/70">
            <MapPin size={16} /> {business.city}, Indonesia
          </span>
        </div>
      </div>

      <div className="border-t border-gold/10 py-6">
        <p className="container-page font-body text-xs text-ivory/40">
          © {new Date().getFullYear()} D&apos;Ajiks Coffee &amp; Billiard. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
