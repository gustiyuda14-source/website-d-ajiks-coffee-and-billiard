import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const shots = [
  { src: "/images/ambiance/dining-area.jpg", alt: "Area dining kayu D'Ajiks", label: "Dining Area", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/ambiance/suasana-dajiks.jpg", alt: "Suasana nongkrong D'Ajiks", label: "Suasana", span: "" },
  { src: "/images/ambiance/crew-brewing.jpg", alt: "Crew D'Ajiks meracik kopi", label: "Brew Bar", span: "" },
  { src: "/images/ambiance/billiard-rack.jpg", alt: "Rak bola billiard", label: "Billiard", span: "" },
  { src: "/images/ambiance/billiard-detail.jpg", alt: "Detail bola billiard D'Ajiks", label: "Detail", span: "" },
  { src: "/images/ambiance/billiard-play-action.jpg", alt: "Semeton asik bermain billiard di D'Ajiks", label: "Match Night", span: "" },
  { src: "/images/ambiance/billiard-play-friends.jpg", alt: "Sekelompok teman bermain billiard bersama", label: "Semeton", span: "" },
  { src: "/images/products/coffee-cups-branding.jpg", alt: "Kopi D'Ajiks dengan branding emas", label: "Signature Cup", span: "" },
];

export function AmbianceGallery() {
  return (
    <section className="relative bg-forest-deep py-28">
      <div className="container-page flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Ambiance"
            title="Rasakan Suasananya"
            titleAccent="Sebelum Datang"
            description="Kayu hangat, cahaya temaram, dan meja billiard yang selalu siap — inilah wajah asli D'Ajiks, bukan sekadar foto promosi."
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {shots.map((shot, i) => (
            <Reveal key={shot.src} delay={i * 70} className={shot.span}>
              <div className="group relative aspect-square h-full w-full overflow-hidden rounded-2xl border border-gold/10">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 translate-y-3 font-body text-xs tracking-[0.25em] uppercase text-gold-light opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                  {shot.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Button href="/gallery" variant="ghost" className="group self-start">
            Lihat Galeri Lengkap
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
