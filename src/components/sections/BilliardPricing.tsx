import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { billiardPricing, waLink } from "@/lib/constants";

export function BilliardPricing() {
  return (
    <section className="bg-forest-black py-24">
      <div className="container-page flex flex-col items-center gap-10 text-center">
        <SectionHeading
          align="center"
          eyebrow="Billiard"
          title="Satu Tarif, Sepanjang Hari Bermain"
        />

        <div className="grid w-full max-w-2xl gap-6 md:grid-cols-2">
          {billiardPricing.map((tier) => (
            <div
              key={tier.period}
              className="flex flex-col gap-2 rounded-2xl border border-gold/20 bg-forest-green/20 p-8"
            >
              <span className="eyebrow">{tier.period}</span>
              <span className="font-display text-4xl text-gold">
                Rp{tier.price.toLocaleString("id-ID")}
                <span className="font-body text-base text-ivory/60"> /jam</span>
              </span>
              <span className="font-body text-sm text-ivory/60">{tier.time}</span>
            </div>
          ))}
        </div>

        <Button
          href={waLink("Halo D'Ajiks, saya ingin reservasi meja billiard.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservasi Meja
        </Button>
      </div>
    </section>
  );
}
