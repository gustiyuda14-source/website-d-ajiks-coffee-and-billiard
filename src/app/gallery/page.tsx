import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery — D'Ajiks Coffee & Billiard",
  description: "Galeri suasana, meja billiard, dan sudut-sudut D'Ajiks Coffee & Billiard di Kendari.",
};

const ambiance = [
  { src: "/images/ambiance/hero-bar-counter.jpg", alt: "Bar counter D'Ajiks" },
  { src: "/images/ambiance/crew-brewing.jpg", alt: "Crew D'Ajiks meracik kopi" },
  { src: "/images/products/coffee-cups-branding.jpg", alt: "Kopi D'Ajiks dengan branding emas" },
  { src: "/images/ambiance/dining-area.jpg", alt: "Area dining D'Ajiks" },
  { src: "/images/ambiance/billiard-rack.jpg", alt: "Rak bola billiard D'Ajiks" },
  { src: "/images/ambiance/billiard-detail.jpg", alt: "Detail bola billiard D'Ajiks" },
  { src: "/images/products/coffee-cup-branding.jpg", alt: "Kopi D'Ajiks" },
  { src: "/images/products/produk-literan.jpg", alt: "Produk sharing seliter D'Ajiks" },
];

export default function GalleryPage() {
  return (
    <section className="py-24">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          align="center"
          eyebrow="Gallery"
          title="Sudut-Sudut D'Ajiks"
          description="Dokumentasi asli venue — bukan stok foto."
          className="mx-auto"
        />

        <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {ambiance.map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-xl border border-gold/10 break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
