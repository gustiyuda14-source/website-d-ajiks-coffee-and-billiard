import { Coffee, Trophy, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    icon: Coffee,
    title: "Kopi Racikan Sendiri",
    description:
      "Dari espresso klasik hingga signature drink khas D'Ajiks — diseduh langsung, bukan sachetan.",
  },
  {
    icon: Trophy,
    title: "Meja Billiard Standar CPBA",
    description:
      "Meja berkualitas turnamen dengan tarif ramah, buka dari siang hingga tengah malam.",
  },
  {
    icon: Users,
    title: "Ruang untuk Semeton",
    description:
      "Tempat yang dirancang untuk berkumpul lama — kerja, main, atau sekadar melepas penat bareng teman.",
  },
];

export function ValueProps() {
  return (
    <section className="bg-forest-green/20 py-24">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          align="center"
          eyebrow="Kenapa D'Ajiks"
          title="Dibangun untuk Semeton yang Betah Berlama-lama"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 rounded-2xl border border-gold/10 bg-forest-black/40 p-8 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Icon size={22} />
              </span>
              <h3 className="font-display text-xl text-ivory">{title}</h3>
              <p className="font-body text-sm text-ivory/60">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
