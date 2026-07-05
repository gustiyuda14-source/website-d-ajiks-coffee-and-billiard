import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/constants";

export function WhatsAppFloatButton() {
  return (
    <a
      href={waLink("Halo D'Ajiks Coffee & Billiard, saya ingin bertanya/reservasi.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-body text-sm font-medium text-near-black shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-105"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={18} strokeWidth={2.2} />
      <span className="hidden sm:inline">Reservasi</span>
    </a>
  );
}
