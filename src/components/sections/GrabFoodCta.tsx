import { Bike } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { business } from "@/lib/constants";

export function GrabFoodCta() {
  return (
    <section className="bg-forest-green/10 py-20">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <span className="eyebrow flex items-center gap-2">
          <Bike size={16} className="text-gold" /> Pesan Antar
        </span>
        <h2 className="heading-lg max-w-2xl">
          Nggak Sempat Mampir? Pesan Lewat GrabFood
        </h2>
        <p className="max-w-xl font-body text-sm text-ivory/60">
          Kopi dan menu andalan D&apos;Ajiks siap diantar langsung ke tempatmu — tinggal buka
          GrabFood dan cari D&apos;Ajiks Coffee &amp; Billiard - Baruga.
        </p>
        <Button href={business.social.grabfood} target="_blank" rel="noopener noreferrer">
          Pesan di GrabFood
        </Button>
      </div>
    </section>
  );
}
