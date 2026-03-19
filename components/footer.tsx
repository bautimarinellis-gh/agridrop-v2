"use client"

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--surface-container-low)",
        borderTop: "0.5px solid rgba(110, 255, 192, 0.30)",
        padding: "2.8rem 0",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo wordmark */}
          <a
            href="#inicio"
            style={{
              color: "var(--primary)",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            AGRIDROP
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-7" aria-label="Footer">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="label-style transition-colors duration-200"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p
            className="label-style"
            style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.6rem" }}
          >
            © 2026 AGRIDROP
          </p>
        </div>
      </div>
    </footer>
  )
}
