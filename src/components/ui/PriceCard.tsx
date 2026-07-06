import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type PriceCardProps = {
  period: string;
  time: string;
  price: number;
  featured?: boolean;
};

export function PriceCard({ period, time, price, featured }: PriceCardProps) {
  const Icon = featured ? Moon : Sun;

  return (
    <div
      className={cn(
        "card-luxe flex flex-col items-center gap-3 p-10 text-center",
        featured && "shadow-gold-glow"
      )}
    >
      {featured ? (
        <span className="absolute -top-3 rounded-full bg-gold-sheen px-4 py-1 font-body text-[10px] font-semibold tracking-[0.25em] uppercase text-near-black">
          Prime Time
        </span>
      ) : null}

      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
        <Icon size={20} />
      </span>

      <span className="eyebrow">{period}</span>

      <span className="font-display text-5xl text-gold-gradient">
        Rp{(price / 1000).toLocaleString("id-ID")}
        <span className="text-3xl">K</span>
      </span>
      <span className="font-body text-sm text-ivory/50">per jam · {time}</span>
    </div>
  );
}
