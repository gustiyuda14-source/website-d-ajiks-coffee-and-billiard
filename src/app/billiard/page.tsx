import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PriceCard } from "@/components/ui/PriceCard";
import { billiardPricing, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Billiard — D'Ajiks Coffee & Billiard",
  description: "Meja billiard standar turnamen di D'Ajiks Coffee & Billiard, Kendari. Tarif Rp25.000/jam siang dan Rp40.000/jam malam.",
};

const notes = [
  "Reservasi meja via WhatsApp untuk memastikan ketersediaan",
  "Perlengkapan (stik, bola, kapur) disediakan di tempat",
  "Cocok untuk santai maupun latihan serius",
];

export default function BilliardPage() {
  return (
    <>
      <section className="grain relative flex min-h-[70vh] items-end overflow-hidden">
        <Image
          src="/images/ambiance/billiard-rack.jpg"
          alt="Meja billiard D'Ajiks"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep/20" />
        <div className="container-page relative z-10 pb-20">
          <span
            className="eyebrow flex animate-fade-up items-center gap-3"
            style={{ animationDelay: "150ms" }}
          >
            <span className="h-px w-10 bg-gold/70" aria-hidden />
            Billiard Lounge
          </span>
          <h1
            className="heading-xl mt-4 max-w-3xl animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            Adu Skor di Meja{" "}
            <span className="text-gold-gradient">Standar Turnamen</span>
          </h1>
        </div>
      </section>

      <section className="py-28">
        <div className="container-page flex flex-col items-center gap-12 text-center">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Tarif"
              title="Satu Harga,"
              titleAccent="Sepanjang Waktu Main"
            />
          </Reveal>

          <div className="grid w-full max-w-2xl gap-6 pt-2 sm:grid-cols-2">
            {billiardPricing.map((tier, i) => (
              <Reveal key={tier.period} delay={i * 130} className="h-full">
                <PriceCard
                  period={tier.period}
                  time={tier.time}
                  price={tier.price}
                  featured={tier.period === "Malam"}
                />
              </Reveal>
            ))}
          </div>

          <ul className="flex flex-col items-start gap-3">
            {notes.map((text, i) => (
              <Reveal key={text} delay={i * 90}>
                <li className="flex items-start gap-3 text-left font-body text-sm leading-relaxed text-ivory/60">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden />
                  {text}
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <Button
              href={waLink("Halo D'Ajiks, saya ingin reservasi meja billiard.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservasi Meja Sekarang
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
