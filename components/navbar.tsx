"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--surface-container-low)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        {/* Flex: logo | nav (absolute center) | cta */}
        <div className="relative flex items-center justify-between px-4 md:px-8 py-4">
          {/* Logo — far left */}
          <a
            href="#inicio"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                color: "var(--primary)",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              AGRIDROP
            </span>
          </a>

          {/* Desktop nav — truly centered via absolute */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors"
                style={{
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "0.68rem",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right slot: CTA desktop + burger mobile */}
          <div className="flex items-center">
            <a
              href="#contacto"
              className="hidden md:inline-flex items-center transition-all duration-200"
              style={{
                border: "1px solid var(--primary)",
                color: "var(--primary)",
                padding: "0.35rem 1.1rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.68rem",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary)"
                e.currentTarget.style.color = "var(--on-primary)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
                e.currentTarget.style.color = "var(--primary)"
              }}
            >
              CONTACTO
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center p-2 md:hidden"
              aria-label="Abrir menú"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col"
          style={{ backgroundColor: "var(--surface-dim)" }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4">
            <span
              style={{
                color: "var(--primary)",
                fontWeight: 800,
                fontSize: "1.1rem",
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
              }}
            >
              ▸ AGRIDROP
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2"
              aria-label="Cerrar menú"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col justify-center px-8 gap-8" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontWeight: 800,
                  fontSize: "2rem",
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center mt-4 transition-all"
              style={{
                border: "1px solid var(--primary)",
                color: "var(--primary)",
                borderRadius: 0,
                padding: "0.8rem 2rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.7rem",
                alignSelf: "flex-start",
              }}
            >
              Contactanos
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
