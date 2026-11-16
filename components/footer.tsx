import { Logo } from "@/components/navbar"
import { ADDRESS, INSTAGRAM_URL } from "@/lib/site"

const footerLinks = [
  { label: "Productos", href: "/#productos" },
  { label: "Respaldo técnico", href: "/#respaldo" },
  { label: "Quiénes somos", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "Política de privacidad", href: "/privacidad" },
]

export function Footer() {
  return (
    <footer className="bg-forest-deep pb-24 pt-12 text-haze">
      <div className="container-site flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Logo />
        <nav className="flex flex-wrap gap-x-7 gap-y-1 text-[0.9375rem]" aria-label="Pie de página">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-haze no-underline hover:text-white hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container-site mt-8 border-t border-white/15 pt-6 text-sm">
        © 2026 Agridrop SRL · {ADDRESS}
      </div>
    </footer>
  )
}
