import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/constants";

export function WhatsAppFloatButton() {
  return (
    <a
      href={waLink("Halo D'Ajiks Coffee & Billiard, saya ingin bertanya/reservasi.")}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gold-sheen px-5 py-3.5 font-body text-sm font-semibold tracking-wide text-near-black shadow-gold-glow transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:brightness-110"
      aria-label="Chat via WhatsApp"
    >
      <span
        className="absolute inset-0 -z-10 rounded-full bg-gold/60 animate-pulse-ring"
        aria-hidden
      />
      <MessageCircle size={18} strokeWidth={2.2} />
      <span className="hidden sm:inline">Reservasi</span>
    </a>
  );
}
