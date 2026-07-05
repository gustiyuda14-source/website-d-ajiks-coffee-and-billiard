import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { menuCategories, formatPrice } from "@/lib/menu-data";

export function MenuHighlight() {
  const signature = menuCategories.find((c) => c.slug === "signature")!;

  return (
    <section className="bg-forest-green/20 py-24">
      <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/15">
          <Image
            src="/images/products/coffee-cup-branding.jpg"
            alt="Kopi D'Ajiks dengan branding emas"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Menu"
            title={signature.title}
            description="Racikan andalan yang paling banyak dicari — perpaduan rasa nusantara dengan sentuhan modern."
          />

          <ul className="flex flex-col divide-y divide-gold/10">
            {signature.items.map((item) => (
              <li key={item.name} className="flex items-center justify-between py-3">
                <span className="font-body text-ivory/90">{item.name}</span>
                <span className="font-display text-gold">{formatPrice(item.price)}</span>
              </li>
            ))}
          </ul>

          <Button href="/menu" className="self-start">
            Lihat Menu Lengkap
          </Button>
        </div>
      </div>
    </section>
  );
}
