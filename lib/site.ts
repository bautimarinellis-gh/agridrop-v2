/** Datos de contacto de Agridrop, en un solo lugar. */
export const WHATSAPP_NUMBER = "543382679467"
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const PHONE_DISPLAY = "+54 3382 679467"
export const PHONE_URL = `tel:+${WHATSAPP_NUMBER}`
export const EMAIL = "contacto.agridrop@gmail.com"
export const ADDRESS = "Ruta 33, km 540 · Rufino, Santa Fe"
export const MAPS_URL =
  "https://maps.google.com/?q=Ruta+33+km+540,+Rufino,+Santa+Fe,+Argentina"
export const INSTAGRAM_URL = "https://www.instagram.com/agridrop/"

/** Arma el link de WhatsApp con un mensaje ya escrito. */
export function whatsappLink(message?: string) {
  return message
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL
}
