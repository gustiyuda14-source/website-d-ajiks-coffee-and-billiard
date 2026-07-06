import { Bike } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/lib/constants";

export function GrabFoodCta() {
  return (
    <section className="bg-forest-deep py-20">
      <div className="container-page">
        <Reveal>
          <div className="card-luxe relative overflow-hidden px-8 py-14 text-center md:px-16">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col items-center gap-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                <Bike size={24} />
              </span>
              <h2 className="heading-lg max-w-2xl">
                Nggak Sempat Mampir?{" "}
                <span className="text-gold-gradient">Pesan Lewat GrabFood</span>
              </h2>
              <p className="max-w-xl font-body text-sm leading-relaxed text-ivory/60">
                Kopi dan menu andalan D&apos;Ajiks siap diantar langsung ke tempatmu —
                tinggal buka GrabFood dan cari D&apos;Ajiks Coffee &amp; Billiard - Baruga.
              </p>
              <Button
                href={business.social.grabfood}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pesan di GrabFood
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
