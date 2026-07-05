import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const shots = [
  { src: "/images/ambiance/dining-area.jpg", alt: "Area dining kayu D'Ajiks", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/ambiance/crew-brewing.jpg", alt: "Crew D'Ajiks meracik kopi", span: "" },
  { src: "/images/ambiance/billiard-rack.jpg", alt: "Rak bola billiard", span: "" },
  { src: "/images/ambiance/billiard-detail.jpg", alt: "Detail bola billiard D'Ajiks", span: "" },
  { src: "/images/products/coffee-cups-branding.jpg", alt: "Kopi D'Ajiks dengan branding emas", span: "" },
];

export function AmbianceGallery() {
  return (
    <section className="bg-forest-black py-24">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading
          eyebrow="Ambiance"
          title="Rasakan Suasananya Sebelum Datang"
          description="Kayu hangat, cahaya temaram, dan meja billiard yang selalu siap — inilah wajah asli D'Ajiks, bukan sekadar foto promosi."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
          {shots.map((shot) => (
            <div
              key={shot.src}
              className={`relative aspect-square overflow-hidden rounded-xl border border-gold/10 ${shot.span}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <Button href="/gallery" variant="ghost" className="self-start px-0">
          Lihat Galeri Lengkap →
        </Button>
      </div>
    </section>
  );
}
