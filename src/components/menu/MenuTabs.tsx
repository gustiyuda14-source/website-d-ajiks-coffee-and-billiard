"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { menuCategories, formatPrice, type MenuItem } from "@/lib/menu-data";

export function MenuTabs() {
  const [active, setActive] = useState(menuCategories[0].slug);
  const [lightbox, setLightbox] = useState<MenuItem | null>(null);
  const category = menuCategories.find((c) => c.slug === active)!;

  const withPhoto = category.items.filter((item) => item.image);
  const textOnly = category.items.filter((item) => !item.image);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

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
      <div key={category.slug} className="flex flex-col gap-14">
        {withPhoto.length > 0 && (
          <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {withPhoto.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setLightbox(item)}
                aria-label={`Lihat foto ${item.name}`}
                className="group relative animate-fade-up cursor-zoom-in overflow-hidden rounded-2xl border border-gold/15 bg-forest-green/20 text-left shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-gold-glow"
                style={{ animationDelay: `${i * 70}ms`, animationDuration: "0.6s" }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image!}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                  {item.tag ? (
                    <span className="absolute left-4 top-4 rounded-full bg-gold-sheen px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-near-black shadow-gold-glow">
                      {item.tag}
                    </span>
                  ) : null}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-forest-black/90 via-forest-black/35 to-transparent"
                    aria-hidden
                  />
                </div>
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <span className="font-display text-lg leading-snug text-ivory">
                    {item.name}
                  </span>
                  <span className="whitespace-nowrap font-display tracking-wide text-gold">
                    {formatPrice(item.price)}
                  </span>
                </span>
              </button>
            ))}
          </div>
        )}

        {textOnly.length > 0 && (
          <div className="mx-auto grid w-full max-w-3xl gap-x-12 gap-y-1 sm:grid-cols-2">
            {textOnly.map((item, i) => (
              <div
                key={item.name}
                className="group flex animate-fade-up items-baseline justify-between gap-4 border-b border-gold/10 py-3.5 transition-colors duration-300 hover:border-gold/30"
                style={{
                  animationDelay: `${(withPhoto.length + i) * 45}ms`,
                  animationDuration: "0.5s",
                }}
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
        )}
      </div>

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.name}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-forest-black/90 p-4 backdrop-blur-sm sm:p-8"
          style={{ animationDuration: "0.25s" }}
        >
          <button
            type="button"
            aria-label="Tutup foto"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-forest-black/60 text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <X size={20} />
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full flex-col items-center gap-4"
          >
            <div className="relative overflow-hidden rounded-2xl border border-gold/25 shadow-gold-glow">
              <Image
                src={lightbox.image!}
                alt={lightbox.name}
                width={900}
                height={1200}
                className="h-auto max-h-[75vh] w-auto"
              />
            </div>
            <figcaption className="flex items-baseline gap-4">
              <span className="font-display text-xl text-ivory">{lightbox.name}</span>
              <span className="font-display tracking-wide text-gold">
                {formatPrice(lightbox.price)}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
