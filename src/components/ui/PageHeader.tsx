import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  className?: string;
};

/**
 * Shared header for inner pages: centered serif title over a faint
 * gold radial glow, with the brand's diamond ornament.
 */
export function PageHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden pb-4 pt-32 md:pt-40",
        className
      )}
    >
      <div className="absolute inset-0 bg-radial-fade" aria-hidden />
      <div className="container-page relative flex flex-col items-center gap-5 text-center">
        <span className="eyebrow animate-fade-up">{eyebrow}</span>
        <h1
          className="heading-xl max-w-3xl animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          {title}
          {titleAccent ? (
            <>
              {" "}
              <span className="text-gold-gradient">{titleAccent}</span>
            </>
          ) : null}
        </h1>
        <span
          className="ornament animate-fade-up"
          style={{ animationDelay: "220ms" }}
          aria-hidden
        >
          <span className="ornament-diamond" />
        </span>
        {description ? (
          <p
            className="max-w-2xl animate-fade-up font-body text-base leading-relaxed text-ivory/65"
            style={{ animationDelay: "300ms" }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
