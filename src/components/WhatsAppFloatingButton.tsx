import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK_GENERAL } from "@/lib/constants";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_LINK_GENERAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan bize yazın"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">7/24 WhatsApp</span>
    </a>
  );
}
