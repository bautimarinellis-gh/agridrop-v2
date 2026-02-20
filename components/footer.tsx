import { Droplets } from "lucide-react"

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-primary-foreground">
              Agridrop
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            {'2026 Agridrop. Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
