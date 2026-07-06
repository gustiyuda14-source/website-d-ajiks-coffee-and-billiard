"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { menuCategories, formatPrice } from "@/lib/menu-data";

export function MenuTabs() {
  const [active, setActive] = useState(menuCategories[0].slug);
  const category = menuCategories.find((c) => c.slug === active)!;

  return (
    <div className="flex flex-col gap-12">
      <div
        className="flex flex-wrap justify-center gap-2.5"
        role="tablist"
        aria-label="Kategori menu"
      >
        {menuCategories.map((c) => (
          <button
            key={c.slug}
            role="tab"
            aria-selected={active === c.slug}
            onClick={() => setActive(c.slug)}
            className={cn(
              "rounded-full border px-5 py-2.5 font-body text-sm tracking-[0.06em] transition-all duration-300 ease-out-expo",
              active === c.slug
                ? "border-gold bg-gold-sheen text-near-black shadow-gold-glow"
                : "border-gold/25 text-ivory/65 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
            )}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* key retriggers the fade animation on every category switch */}
      <div
        key={category.slug}
        className="mx-auto grid w-full max-w-3xl gap-x-12 gap-y-1 sm:grid-cols-2"
      >
        {category.items.map((item, i) => (
          <div
            key={item.name}
            className="group flex animate-fade-up items-baseline justify-between gap-4 border-b border-gold/10 py-3.5 transition-colors duration-300 hover:border-gold/30"
            style={{ animationDelay: `${i * 45}ms`, animationDuration: "0.5s" }}
          >
            <span className="font-body text-ivory/85 transition-colors duration-300 group-hover:text-ivory">
              {item.name}
            </span>
            <span className="flex-1 -translate-y-1 border-b border-dotted border-ivory/15" aria-hidden />
            <span className="whitespace-nowrap font-display tracking-wide text-gold">
              {formatPrice(item.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
