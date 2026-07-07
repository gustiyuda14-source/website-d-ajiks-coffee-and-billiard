import { Clock, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LocationMap } from "@/components/ui/LocationMap";
import { business, waLink } from "@/lib/constants";

export function LocationCta() {
  return (
    <section className="grain relative overflow-hidden bg-gradient-to-b from-forest-deep via-forest-green/25 to-forest-deep py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="ornament justify-center" aria-hidden>
            <span className="ornament-diamond" />
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="heading-lg max-w-2xl">
            Sudah Siap Jadi Bagian dari{" "}
            <span className="text-gold-gradient">Semeton D&apos;Ajiks?</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-6 font-body text-sm text-ivory/65">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-gold" /> {business.address}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-gold" /> {business.hours[0].time} Setiap Hari
            </span>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href={waLink("Halo D'Ajiks, saya ingin tanya-tanya dulu.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat via WhatsApp
            </Button>
            <Button
              href={business.location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="group"
            >
              <Navigation size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              Buka di Google Maps
            </Button>
          </div>
        </Reveal>

        <Reveal delay={400} className="w-full max-w-3xl">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-gold/20 shadow-card sm:aspect-[21/9]">
            <LocationMap />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
