import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-gold/50 bg-gold/10 px-3 py-1 font-body text-xs tracking-widest uppercase text-gold",
        className
      )}
    >
      {children}
    </span>
  );
}
