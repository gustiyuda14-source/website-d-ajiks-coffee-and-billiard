import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { billiardPricing, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Billiard — D'Ajiks Coffee & Billiard",
  description: "Meja billiard standar turnamen di D'Ajiks Coffee & Billiard, Kendari. Tarif Rp25.000/jam siang dan Rp40.000/jam malam.",
};

export default function BilliardPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image
          src="/images/ambiance/billiard-rack.jpg"
          alt="Meja billiard D'Ajiks"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-black via-forest-black/70 to-forest-black/20" />
        <div className="container-page relative z-10 pb-16">
          <span className="eyebrow">Billiard Lounge</span>
          <h1 className="heading-xl mt-3">Adu Skor di Meja Standar Turnamen</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page flex flex-col items-center gap-12 text-center">
          <SectionHeading align="center" eyebrow="Tarif" title="Satu Harga, Sepanjang Waktu Main" />

          <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
            {billiardPricing.map((tier) => (
              <div
                key={tier.period}
                className="flex flex-col gap-2 rounded-2xl border border-gold/20 bg-forest-green/20 p-8"
              >
                <span className="eyebrow">{tier.period}</span>
                <span className="font-display text-4xl text-gold">
                  Rp{tier.price.toLocaleString("id-ID")}
                  <span className="font-body text-base text-ivory/60"> /jam</span>
                </span>
                <span className="font-body text-sm text-ivory/60">{tier.time}</span>
              </div>
            ))}
          </div>

          <ul className="flex flex-col gap-2 font-body text-sm text-ivory/60">
            <li>— Reservasi meja via WhatsApp untuk memastikan ketersediaan</li>
            <li>— Perlengkapan (stik, bola, kapur) disediakan di tempat</li>
            <li>— Cocok untuk santai maupun latihan serius</li>
          </ul>

          <Button
            href={waLink("Halo D'Ajiks, saya ingin reservasi meja billiard.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservasi Meja Sekarang
          </Button>
        </div>
      </section>
    </>
  );
}
