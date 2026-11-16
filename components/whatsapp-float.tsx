import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/site"

/** Botón de WhatsApp siempre a mano, abajo a la derecha. */
export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="btn fixed bottom-5 right-5 z-40 bg-lime px-5 text-forest shadow-[0_6px_24px_rgba(8,30,24,0.35)] hover:bg-lime-strong"
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
