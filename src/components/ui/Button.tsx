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
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm tracking-wide uppercase transition-colors duration-200";

const variants = {
  solid: "bg-gold text-near-black hover:bg-gold-light",
  outline: "border border-gold/60 text-ivory hover:border-gold hover:bg-gold/10",
  ghost: "text-ivory/80 hover:text-gold",
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
