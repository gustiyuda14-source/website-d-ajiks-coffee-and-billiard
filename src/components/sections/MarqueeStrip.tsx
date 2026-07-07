const phrases = [
  "Semeton D'Ajiks",
  "Signature Drinks",
  "Billiard Lounge",
  "Coffee & Community",
  "Kendari",
  "Buka Setiap Hari 10.00 – 02.00",
];

/**
 * Scrolling brand ticker. The track holds two identical phrase runs;
 * the marquee keyframe slides -50% so the loop is seamless. Honors
 * reduced-motion by letting the track sit still (content stays visible).
 */
export function MarqueeStrip() {
  const run = phrases.map((phrase) => (
    <span key={phrase} className="flex items-center gap-8 pr-8">
      <span className="whitespace-nowrap font-display text-sm uppercase tracking-[0.3em] text-gold/80">
        {phrase}
      </span>
      <span className="text-gold/40" aria-hidden>
        ✦
      </span>
    </span>
  ));

  return (
    <div className="overflow-hidden border-y border-gold/15 bg-forest-green/25 py-4">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <div className="flex">{run}</div>
        <div className="flex" aria-hidden>
          {run}
        </div>
      </div>
    </div>
  );
}
