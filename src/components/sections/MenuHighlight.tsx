import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { menuCategories, formatPrice } from "@/lib/menu-data";

export function MenuHighlight() {
  const signature = menuCategories.find((c) => c.slug === "signature")!;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-deep via-forest-green/15 to-forest-deep py-28">
      <div className="container-page grid gap-14 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative">
            {/* Offset gold frame behind the photo */}
            <div
              className="absolute -inset-3 translate-x-4 translate-y-4 rounded-2xl border border-gold/25"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/15 shadow-card">
              <Image
                src="/images/products/coffee-cup-branding.jpg"
                alt="Kopi D'Ajiks dengan branding emas"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out-expo hover:scale-[1.04]"
              />
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              eyebrow="Menu Andalan"
              title="Signature"
              titleAccent="Drinks"
              description="Racikan andalan yang paling banyak dicari — perpaduan rasa nusantara dengan sentuhan modern."
            />
          </Reveal>

          <ul className="flex flex-col">
            {signature.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 60}>
                <li className="group flex items-baseline justify-between gap-4 border-b border-gold/10 py-4 transition-colors duration-300 hover:border-gold/30">
                  <span className="font-body text-ivory/85 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ivory">
                    {item.name}
                  </span>
                  <span className="flex-1 -translate-y-1 border-b border-dotted border-ivory/15" aria-hidden />
                  <span className="font-display tracking-wide text-gold">
                    {formatPrice(item.price)}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <Button href="/menu" className="self-start">
              Lihat Menu Lengkap
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
