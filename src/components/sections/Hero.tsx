import Image from "next/image";
import { Clock, MapPin, Trophy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/constants";

const heroFacts = [
  { icon: Clock, text: "Buka Setiap Hari · 10.00 – 02.00" },
  { icon: Trophy, text: "Billiard mulai Rp25K / jam" },
  { icon: MapPin, text: "Kendari, Sulawesi Tenggara" },
];

export function Hero() {
  return (
    <section className="grain relative flex min-h-svh flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/ambiance/hero-bar-counter.jpg"
          alt="Meja bar dan mesin kopi D'Ajiks Coffee & Billiard"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover blur-md scale-110"
        />
      </div>

      {/* Layered cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/70 to-forest-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/70 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="container-page relative z-10 flex flex-col items-start gap-7 pb-28 pt-44">
        <span
          className="eyebrow flex animate-fade-up items-center gap-3"
          style={{ animationDelay: "150ms" }}
        >
          <span className="h-px w-10 bg-gold/70" aria-hidden />
          Coffee &amp; Billiard Lounge — Kendari
        </span>

        <h1
          className="heading-xl max-w-3xl animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          Tempat Semeton{" "}
          <span className="text-gold-gradient">Berkumpul, Ngopi,</span> dan
          Bermain.
        </h1>

        <p
          className="max-w-xl animate-fade-up font-body text-lg font-light leading-relaxed text-ivory/75"
          style={{ animationDelay: "450ms" }}
        >
          Suasana hangat kayu, aroma kopi pilihan, dan meja billiard premium —
          D&apos;Ajiks Coffee &amp; Billiard menyatukan dua dunia dalam satu
          ruang.
        </p>

        <div
          className="flex animate-fade-up flex-wrap gap-4 pt-2"
          style={{ animationDelay: "600ms" }}
        >
          <Button
            href={waLink("Halo D'Ajiks, saya ingin reservasi meja.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservasi via WhatsApp
          </Button>
          <Button href="/menu" variant="outline">
            Lihat Menu
          </Button>
        </div>
      </div>

      {/* Fact strip pinned to the bottom edge of the hero */}
      <div
        className="relative z-10 animate-fade-in border-t border-gold/15 bg-forest-deep/60 backdrop-blur-md"
        style={{ animationDelay: "800ms" }}
      >
        <div className="container-page flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          {heroFacts.map(({ icon: Icon, text }) => (
            <span
              key={text}
              className="flex items-center gap-2.5 font-body text-xs tracking-[0.14em] uppercase text-ivory/60"
            >
              <Icon size={14} className="shrink-0 text-gold" />
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-24 right-8 z-10 hidden animate-fade-in flex-col items-center gap-3 lg:flex"
        style={{ animationDelay: "1100ms" }}
        aria-hidden
      >
        <span className="font-body text-[10px] tracking-[0.35em] uppercase text-ivory/40 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-14 w-px overflow-hidden bg-ivory/10">
          <span className="block h-full w-full animate-scroll-hint bg-gold/80" />
        </span>
      </div>
    </section>
  );
}
