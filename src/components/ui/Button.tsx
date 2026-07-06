import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-medium tracking-[0.12em] uppercase transition-all duration-300 ease-out-expo";

const variants = {
  solid:
    "btn-sheen bg-gold-sheen text-near-black shadow-gold-glow hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0",
  outline:
    "border border-gold/50 text-ivory backdrop-blur-sm hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 hover:text-gold-light active:translate-y-0",
  ghost: "px-0 py-0 text-ivory/80 hover:text-gold",
};

export function Button({
  href,
  variant = "solid",
  className,
  children,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
