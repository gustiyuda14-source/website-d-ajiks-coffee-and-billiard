import { business } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function LocationMap({ className }: { className?: string }) {
  return (
    <iframe
      src={business.location.embedSrc}
      title={`Peta lokasi ${business.name}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className={cn("h-full w-full border-0", className)}
    />
  );
}
