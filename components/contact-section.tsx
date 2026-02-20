import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const contactCards = [
  {
    icon: Phone,
    text: "+54 11 5555-0123",
    subtext: "Teléfono",
    href: "tel:+541155550123",
    ariaLabel: "Llamar a Agridrop",
  },
  {
    icon: Mail,
    text: "agridrop@gmail.com",
    subtext: "Escríbenos",
    href: "mailto:agridrop@gmail.com",
    ariaLabel: "Enviar email a Agridrop",
  },
  {
    icon: MapPin,
    text: "Ruta 33 km 540, Rufino",
    subtext: "Santa Fe, Argentina",
    href: "https://maps.google.com/?q=Ruta+33+km+540,+Rufino,+Santa+Fe,+Argentina",
    ariaLabel: "Ver ubicación en mapa",
  },
] as const

export function ContactSection() {
  return (
    <section id="contacto" className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Contacto
          </p>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nuestro equipo está listo para asesorarte y encontrar la solución ideal
            para tus cultivos.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3">
          {contactCards.map(({ icon: Icon, text, subtext, href, ariaLabel }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={ariaLabel}
              className="group flex flex-row items-center justify-start gap-4 rounded-xl border border-border bg-card p-4 shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:aspect-square sm:flex-col sm:items-center sm:justify-center sm:gap-2"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15 sm:h-10 sm:w-10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1 text-left sm:w-full sm:flex-none sm:text-center">
                <p className="break-words text-sm font-semibold text-foreground">{text}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{subtext}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-center text-sm font-medium text-foreground sm:text-base">
            La forma más rápida de comunicarte con nosotros
          </p>
          <a
            href="https://wa.me/5491155550123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatear por WhatsApp con Agridrop"
            className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2} />
            Chatear por WhatsApp
          </a>
          <p className="text-center text-sm text-muted-foreground">
            Horario de atención: Lunes a Sábado de 8:00 a 19:00
          </p>
        </div>
      </div>
    </section>
  )
}
