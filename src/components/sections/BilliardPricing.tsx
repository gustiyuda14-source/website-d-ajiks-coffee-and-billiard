import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PriceCard } from "@/components/ui/PriceCard";
import { billiardPricing, waLink } from "@/lib/constants";

export function BilliardPricing() {
  return (
    <section className="bg-forest-deep py-28">
      <div className="container-page flex flex-col items-center gap-12 text-center">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Billiard"
            title="Satu Tarif,"
            titleAccent="Sepanjang Hari Bermain"
          />
        </Reveal>

        <div className="grid w-full max-w-2xl gap-6 pt-2 md:grid-cols-2">
          {billiardPricing.map((tier, i) => (
            <Reveal key={tier.period} delay={i * 130} className="h-full">
              <PriceCard
                period={tier.period}
                time={tier.time}
                price={tier.price}
                featured={tier.period === "Malam"}
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Button
            href={waLink("Halo D'Ajiks, saya ingin reservasi meja billiard.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservasi Meja
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
