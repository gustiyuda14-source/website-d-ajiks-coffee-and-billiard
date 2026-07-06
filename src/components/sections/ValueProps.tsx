import { Coffee, Trophy, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

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
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-deep via-forest-green/15 to-forest-deep py-28">
      <div className="container-page flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Kenapa D'Ajiks"
            title="Dibangun untuk Semeton yang"
            titleAccent="Betah Berlama-lama"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 120} className="h-full">
              <div className="card-luxe group flex h-full flex-col items-center gap-5 p-10 text-center">
                <span className="flex h-14 w-14 rotate-45 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition-all duration-500 ease-out-expo group-hover:bg-gold group-hover:text-near-black">
                  <Icon size={22} className="-rotate-45" />
                </span>
                <h3 className="font-display text-xl tracking-wide text-ivory">
                  {title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-ivory/55">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
