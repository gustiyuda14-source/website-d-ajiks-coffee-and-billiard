"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { menuCategories, formatPrice } from "@/lib/menu-data";

export function MenuTabs() {
  const [active, setActive] = useState(menuCategories[0].slug);
  const category = menuCategories.find((c) => c.slug === active)!;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-center gap-3">
        {menuCategories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setActive(c.slug)}
            className={cn(
              "rounded-full border px-5 py-2 font-body text-sm tracking-wide transition-colors",
              active === c.slug
                ? "border-gold bg-gold text-near-black"
                : "border-gold/30 text-ivory/70 hover:border-gold/60 hover:text-gold"
            )}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-3xl gap-x-10 gap-y-2 sm:grid-cols-2">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="flex items-baseline justify-between gap-4 border-b border-gold/10 py-3"
          >
            <span className="font-body text-ivory/90">{item.name}</span>
            <span className="flex-1 border-b border-dotted border-ivory/20 translate-y-[-4px]" />
            <span className="font-display text-gold whitespace-nowrap">
              {formatPrice(item.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
