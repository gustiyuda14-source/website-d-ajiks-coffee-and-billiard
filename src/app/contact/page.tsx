import type { Metadata } from "next";
import { Clock, Instagram, MapPin, MessageCircle, Music2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { business, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — D'Ajiks Coffee & Billiard",
  description: "Hubungi D'Ajiks Coffee & Billiard via WhatsApp, Instagram, atau TikTok.",
};

export default function ContactPage() {
  return (
    <section className="py-24">
      <div className="container-page flex flex-col items-center gap-12 text-center">
        <SectionHeading
          align="center"
          eyebrow="Hubungi Kami"
          title="Sampai Jumpa di D'Ajiks"
          className="mx-auto"
        />

        <div className="grid w-full max-w-xl gap-4">
          <a
            href={waLink("Halo D'Ajiks, saya ingin bertanya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border border-gold/20 bg-forest-green/20 px-6 py-4 font-body text-ivory/90 hover:border-gold/60"
          >
            <MessageCircle size={18} className="text-gold" />
            {business.whatsapp.displayNumber}
          </a>
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border border-gold/20 bg-forest-green/20 px-6 py-4 font-body text-ivory/90 hover:border-gold/60"
          >
            <Instagram size={18} className="text-gold" />
            @d.ajikscoffeenbiliard
          </a>
          <a
            href={business.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border border-gold/20 bg-forest-green/20 px-6 py-4 font-body text-ivory/90 hover:border-gold/60"
          >
            <Music2 size={18} className="text-gold" />
            @d_ajikscoffeenbil
          </a>
          <div className="flex items-center justify-center gap-3 rounded-xl border border-gold/10 px-6 py-4 font-body text-ivory/70">
            <MapPin size={18} className="text-gold" />
            {business.city}, Sulawesi Tenggara
          </div>
          <div className="flex items-center justify-center gap-3 rounded-xl border border-gold/10 px-6 py-4 font-body text-ivory/70">
            <Clock size={18} className="text-gold" />
            {business.hours[0].time} Setiap Hari
          </div>
        </div>

        <Button
          href={waLink("Halo D'Ajiks, saya ingin reservasi.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat Sekarang
        </Button>
      </div>
    </section>
  );
}
