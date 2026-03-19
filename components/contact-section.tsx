"use client"

import { MessageCircle } from "lucide-react"

const contactItems = [
  {
    label: "UBICACIÓN",
    value: "Ruta 33, Km 540",
    sub: "Rufino, Santa Fe",
    href: "https://maps.google.com/?q=Ruta+33+km+540,+Rufino,+Santa+Fe,+Argentina",
  },
  {
    label: "E-MAIL",
    value: "quintales.marinelli@gmail.com",
    sub: null,
    href: "quintales.marinelli@gmail.com",
  },
  {
    label: "COMERCIAL",
    value: "+54 3382 405621",
    sub: null,
    href: "tel:+543382405621",
  },
]

export function ContactSection() {
  return (
    <section id="contacto" style={{ backgroundColor: "var(--surface-dim)" }}>

      {/* ── HABLEMOS. block ────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "5.5rem",
          paddingBottom: "2rem",
        }}
      >
        {/* HABLEMOS. — smaller, centered, above the contact row */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            pointerEvents: "none",
            userSelect: "none",
            paddingTop: "2rem",
          }}
        >
          <span
            className="display-heading"
            style={{
              fontSize: "clamp(4.5rem, 14vw, 11rem)",
              color: "rgba(255,255,255,0.08)",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            HABLEMOS.
          </span>
        </div>

        {/* Contact row — floats below HABLEMOS. */}
        <div
          className="mx-auto max-w-7xl px-6"
          style={{ position: "relative", zIndex: 1, paddingTop: "clamp(5rem, 20vw, 10rem)" }}
        >
          <div
            className="flex flex-col sm:flex-row"
            style={{
              borderTop: "1px solid var(--outline-variant)",
              borderBottom: "1px solid var(--outline-variant)",
            }}
          >
            {contactItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex-1 flex flex-col justify-center group ${
                  i < contactItems.length - 1
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r sm:border-white/10"
                    : ""
                }`}
                style={{
                  padding: "1.5rem",
                  textDecoration: "none",
                }}
              >
                <p
                  className="label-style mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  {item.label}
                </p>
                <p
                  className="group-hover:text-primary transition-colors duration-200"
                  style={{
                    color: "#ffffff",
                    fontSize: "1rem",
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                >
                  {item.value}
                </p>
                {item.sub && (
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", marginTop: "0.2rem" }}>
                    {item.sub}
                  </p>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── WhatsApp CTA — full width ──────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6" style={{ paddingTop: "1.4rem", paddingBottom: "5.5rem" }}>
        <a
          href="https://wa.me/543382405621"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="flex w-full items-center justify-center gap-3 transition-all duration-200"
          style={{
            border: "1px solid var(--primary)",
            color: "var(--primary)",
            backgroundColor: "transparent",
            padding: "1.4rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
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
          <MessageCircle className="h-5 w-5" strokeWidth={2} />
          CONTACTAR VÍA WHATSAPP
        </a>
      </div>

    </section>
  )
}
