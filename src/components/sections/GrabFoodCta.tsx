import Image from "next/image";
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
              <div className="group relative w-52 overflow-hidden rounded-2xl border border-gold/20 shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-gold/50 sm:w-64">
                <Image
                  src="/images/partners/grab-emblem.jpg"
                  alt="Grab — pesan antar D'Ajiks lewat GrabFood"
                  width={783}
                  height={391}
                  className="h-auto w-full transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
              </div>
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
