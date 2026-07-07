import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Gallery — D'Ajiks Coffee & Billiard",
  description: "Galeri suasana, meja billiard, dan sudut-sudut D'Ajiks Coffee & Billiard di Kendari.",
};

const ambiance = [
  { src: "/images/ambiance/hero-bar-counter.jpg", alt: "Bar counter D'Ajiks", label: "Bar Counter" },
  { src: "/images/ambiance/crew-brewing.jpg", alt: "Crew D'Ajiks meracik kopi", label: "Brew Bar" },
  { src: "/images/products/coffee-cups-branding.jpg", alt: "Kopi D'Ajiks dengan branding emas", label: "Signature Cup" },
  { src: "/images/ambiance/dining-area.jpg", alt: "Area dining D'Ajiks", label: "Dining Area" },
  { src: "/images/ambiance/billiard-rack.jpg", alt: "Rak bola billiard D'Ajiks", label: "Billiard" },
  { src: "/images/ambiance/billiard-detail.jpg", alt: "Detail bola billiard D'Ajiks", label: "Detail" },
  { src: "/images/ambiance/suasana-nongki.jpg", alt: "Nongkrong santai di gazebo D'Ajiks malam hari", label: "Nongki" },
  { src: "/images/ambiance/suasana-outdoor.jpg", alt: "Area outdoor D'Ajiks di siang hari", label: "Outdoor" },
  { src: "/images/ambiance/barista.jpg", alt: "Barista D'Ajiks menuang kopi", label: "Barista" },
  { src: "/images/products/coffee-cup-branding.jpg", alt: "Kopi D'Ajiks", label: "Coffee" },
  { src: "/images/products/produk-literan.jpg", alt: "Produk sharing seliter D'Ajiks", label: "Sharing Seliter" },
];

export default function GalleryPage() {
  return (
    <section className="pb-28">
      <PageHeader
        eyebrow="Gallery"
        title="Sudut-Sudut"
        titleAccent="D'Ajiks"
        description="Dokumentasi asli venue — bukan stok foto."
      />

      <div className="container-page pt-12">
        <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {ambiance.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 80} className="break-inside-avoid">
              <div className="group relative overflow-hidden rounded-2xl border border-gold/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 translate-y-3 font-body text-xs tracking-[0.25em] uppercase text-gold-light opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                  {img.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
