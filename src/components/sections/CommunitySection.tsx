import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  "Turnamen & keseruan billiard rutin bersama komunitas",
  "Ruang terbuka untuk nongkrong santai maupun serius main",
  "Buka setiap hari 10.00 – 02.00, teman begadangmu",
];

export function CommunitySection() {
  return (
    <section className="bg-forest-deep py-28">
      <div className="container-page grid gap-14 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-8 md:order-2">
          <Reveal>
            <SectionHeading
              eyebrow="Semeton D'Ajiks"
              title="Lebih dari Sekadar"
              titleAccent="Nongkrong"
              description="Semeton — dalam bahasa Bali berarti saudara, kerabat, keluarga. Di sinilah komunitas billiard dan pecinta kopi Kendari berkumpul, adu skor, dan berbagi cerita hingga larut."
            />
          </Reveal>

          <ul className="flex flex-col gap-4">
            {highlights.map((text, i) => (
              <Reveal key={text} delay={i * 90}>
                <li className="flex items-start gap-4 font-body text-sm leading-relaxed text-ivory/70">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden />
                  {text}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="md:order-1">
          <div className="relative">
            <div
              className="absolute -inset-3 -translate-x-4 translate-y-4 rounded-2xl border border-gold/25"
              aria-hidden
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/15 shadow-card">
              <Image
                src="/images/ambiance/billiard-rack.jpg"
                alt="Komunitas billiard D'Ajiks"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out-expo hover:scale-[1.04]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
