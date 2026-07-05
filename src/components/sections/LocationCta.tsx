import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { business, waLink } from "@/lib/constants";

export function LocationCta() {
  return (
    <section className="bg-gradient-to-b from-forest-green/30 to-forest-black py-24">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <h2 className="heading-lg max-w-2xl">
          Sudah Siap Jadi Bagian dari Semeton D&apos;Ajiks?
        </h2>
        <div className="flex flex-wrap justify-center gap-6 font-body text-sm text-ivory/70">
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-gold" /> {business.city}, Indonesia
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-gold" /> {business.hours[0].time} Setiap Hari
          </span>
        </div>
        <Button
          href={waLink("Halo D'Ajiks, saya ingin tanya-tanya dulu.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat via WhatsApp
        </Button>
      </div>
    </section>
  );
}
