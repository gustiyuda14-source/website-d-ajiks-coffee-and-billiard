import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CommunitySection() {
  return (
    <section className="bg-forest-black py-24">
      <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-6 md:order-2">
          <SectionHeading
            eyebrow="Semeton D'Ajiks"
            title="Lebih dari Sekadar Nongkrong"
            description="Semeton — dalam bahasa Bali berarti saudara, kerabat, keluarga. Di sinilah komunitas billiard dan pecinta kopi Kendari berkumpul, adu skor, dan berbagi cerita hingga larut."
          />
          <ul className="flex flex-col gap-3 font-body text-sm text-ivory/70">
            <li>— Turnamen &amp; keseruan billiard rutin bersama komunitas</li>
            <li>— Ruang terbuka untuk nongkrong santai maupun serius main</li>
            <li>— Buka setiap hari 10.00 – 02.00, teman begadangmu</li>
          </ul>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/15 md:order-1">
          <Image
            src="/images/ambiance/billiard-rack.jpg"
            alt="Komunitas billiard D'Ajiks"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
