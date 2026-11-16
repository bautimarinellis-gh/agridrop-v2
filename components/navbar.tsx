"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, MessageCircle, X } from "lucide-react"
import { ADDRESS, PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from "@/lib/site"

const navLinks = [
  { label: "Productos", href: "/#productos" },
  { label: "Respaldo técnico", href: "/#respaldo" },
  { label: "Quiénes somos", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
  { label: "Privacidad", href: "/privacidad" },
]

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="/#inicio"
      className={`flex items-center gap-2.5 text-white no-underline ${className}`}
    >
      <Image
        src="/images/isotipo-agridrop.png"
        alt=""
        width={34}
        height={41}
        className="h-10 w-auto"
        priority
      />
      <span className="text-2xl font-bold tracking-tight">Agridrop</span>
    </a>
  )
}

/**
 * Menú fijo. `solid` lo deja siempre con fondo verde (para páginas sin foto
 * arriba, como Privacidad); si no, es transparente sobre la foto del inicio
 * y se vuelve verde al bajar.
 */
export function Navbar({ solid = false }: { solid?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Con el menú del celular abierto, que no se mueva la página de atrás
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const filled = solid || scrolled

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
          filled ? "bg-forest shadow-[0_1px_0_rgba(255,255,255,0.08)]" : "bg-transparent"
        }`}
      >
        {/* Barra superior: dirección y teléfono (solo en pantallas grandes) */}
        <div
          className={`hidden overflow-hidden border-b border-white/15 text-[0.8125rem] text-haze transition-[max-height,opacity] duration-300 md:block ${
            scrolled ? "max-h-0 border-b-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="container-site flex justify-between gap-8 py-2">
            <span>{ADDRESS}</span>
            <span>
              Envíos a todo el país ·{" "}
              <a href={PHONE_URL} className="text-haze no-underline hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </span>
          </div>
        </div>

        <div className="container-site flex items-center justify-between gap-6 py-3.5">
          <Logo />

          <nav
            className="hidden items-center gap-8 text-[0.9375rem] font-medium lg:flex"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-white no-underline decoration-lime decoration-2 underline-offset-8 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn hidden min-h-11 bg-lime px-5 py-2.5 text-[0.9375rem] text-forest hover:bg-lime-strong sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Menú a pantalla completa en celular */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-forest text-white lg:hidden">
          <div className="container-site flex items-center justify-between py-3.5">
            <Logo />
            <button
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center text-white"
              aria-label="Cerrar menú"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav
            className="container-site flex flex-1 flex-col justify-center gap-2 pb-16"
            aria-label="Navegación móvil"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-3xl font-extrabold tracking-tight text-white no-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-6 self-start bg-lime text-forest"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Escribir por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
