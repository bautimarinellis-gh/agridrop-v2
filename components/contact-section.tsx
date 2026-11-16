import Image from "next/image"
import { MessageCircle } from "lucide-react"
import {
  EMAIL,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_URL,
  WHATSAPP_URL,
} from "@/lib/site"

const contactItems = [
  { label: "Ubicación", value: "Ruta 33, km 540 · Rufino, Santa Fe", href: MAPS_URL, external: true },
  { label: "Teléfono", value: PHONE_DISPLAY, href: PHONE_URL, external: false },
  { label: "Correo", value: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { label: "Instagram", value: "@agridrop", href: INSTAGRAM_URL, external: true },
]

export function ContactSection() {
  return (
    <section id="contacto" className="bg-forest py-20 text-white lg:py-28">
      <div className="container-site grid gap-x-20 gap-y-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
          <Image
            src="/images/pallet-drop-elixir.jpg"
            alt="Pallet de Drop Elixir cargado en una camioneta, listo para entregar"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>

        <div>
          <h2 className="text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-none tracking-[-0.03em]">
            Hablemos de tu próxima aplicación
          </h2>
          <p className="mt-5 max-w-lg text-lg text-haze">
            Te asesoramos por WhatsApp sobre dosis, mezcla y disponibilidad, y
            enviamos el pedido a todo el país.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-8 bg-lime px-8 py-4 text-lg text-forest hover:bg-lime-strong"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Escribir por WhatsApp
          </a>

          <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-2">
            {contactItems.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-haze">{item.label}</dt>
                <dd className="mt-1">
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-block break-words py-1 font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-lime"
                  >
                    {item.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
