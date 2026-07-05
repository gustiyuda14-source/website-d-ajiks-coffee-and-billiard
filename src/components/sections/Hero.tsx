import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src="/images/ambiance/hero-bar-counter.jpg"
        alt="Bar counter D'Ajiks Coffee & Billiard"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-black via-forest-black/80 to-forest-black/40" />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="container-page relative z-10 flex flex-col items-start gap-6 py-24">
        <span className="eyebrow">Coffee &amp; Billiard Lounge — Kendari</span>
        <h1 className="heading-xl max-w-3xl">
          Tempat Semeton Berkumpul, Ngopi, dan Bermain.
        </h1>
        <p className="max-w-xl font-body text-lg text-ivory/70">
          Suasana hangat kayu, aroma kopi pilihan, dan meja billiard premium —
          D&apos;Ajiks Coffee &amp; Billiard menyatukan dua dunia dalam satu ruang.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button href={waLink("Halo D'Ajiks, saya ingin reservasi meja.")} target="_blank" rel="noopener noreferrer">
            Reservasi via WhatsApp
          </Button>
          <Button href="/menu" variant="outline">
            Lihat Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
