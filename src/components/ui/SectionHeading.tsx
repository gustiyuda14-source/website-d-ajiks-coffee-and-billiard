import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  /** Optional trailing part of the title rendered in liquid-gold gradient */
  titleAccent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow flex items-center gap-3")}>
          {!centered && <span className="h-px w-8 bg-gold/60" />}
          {eyebrow}
          {centered && null}
        </span>
      ) : null}

      <h2 className="heading-lg max-w-3xl">
        {title}
        {titleAccent ? (
          <>
            {" "}
            <span className="text-gold-gradient">{titleAccent}</span>
          </>
        ) : null}
      </h2>

      {centered ? (
        <span className="ornament" aria-hidden>
          <span className="ornament-diamond" />
        </span>
      ) : (
        <div className="divider-gold" />
      )}

      {description ? (
        <p className="max-w-2xl font-body text-base leading-relaxed text-ivory/65">
          {description}
        </p>
      ) : null}
    </div>
  );
}
