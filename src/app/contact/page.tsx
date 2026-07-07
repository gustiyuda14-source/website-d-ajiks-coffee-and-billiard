import type { Metadata } from "next";
import { Clock, Instagram, MapPin, MessageCircle, Music2, Navigation } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { LocationMap } from "@/components/ui/LocationMap";
import { business, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — D'Ajiks Coffee & Billiard",
  description: "Hubungi D'Ajiks Coffee & Billiard via WhatsApp, Instagram, atau TikTok.",
};

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: business.whatsapp.displayNumber,
    href: waLink("Halo D'Ajiks, saya ingin bertanya."),
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@d.ajikscoffeenbiliard",
    href: business.social.instagram,
  },
  {
    icon: Music2,
    label: "TikTok",
    value: "@d_ajikscoffeenbil",
    href: business.social.tiktok,
  },
];

export default function ContactPage() {
  return (
    <section className="pb-28">
      <PageHeader
        eyebrow="Hubungi Kami"
        title="Sampai Jumpa di"
        titleAccent="D'Ajiks"
      />

      <div className="container-page flex flex-col items-center gap-12 pt-12">
        <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
          {channels.map(({ icon: Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 100} className="h-full">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-luxe flex h-full flex-col items-center gap-3 p-8 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                  <Icon size={20} />
                </span>
                <span className="eyebrow">{label}</span>
                <span className="break-all font-body text-sm text-ivory/80">
                  {value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="w-full max-w-3xl">
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-gold/15 bg-forest-green/10 px-8 py-6 text-center sm:flex-row sm:gap-10 sm:text-left">
            <span className="flex items-center gap-3 font-body text-sm text-ivory/70">
              <MapPin size={18} className="shrink-0 text-gold" />
              {business.address}
            </span>
            <span className="hidden h-6 w-px bg-gold/20 sm:block" aria-hidden />
            <span className="flex items-center gap-3 font-body text-sm text-ivory/70">
              <Clock size={18} className="shrink-0 text-gold" />
              {business.hours[0].time} Setiap Hari
            </span>
          </div>
        </Reveal>

        <Reveal className="w-full max-w-3xl">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-gold/15 shadow-card">
            <LocationMap />
          </div>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-4">
          <Button
            href={waLink("Halo D'Ajiks, saya ingin reservasi.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat Sekarang
          </Button>
          <Button
            href={business.location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="group"
          >
            <Navigation size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            Petunjuk Arah
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
