"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const TICKER_TEXT = "DROP THOR · DROP FLOW · DROP ELIXIR · DROP QUALITY · DROP FORTE · "

export function HeroSection() {
  const repeated = TICKER_TEXT.repeat(6)

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/inicio-agridrop.jpg"
        alt="Campo agrícola con tecnología avanzada"
        fill
        className="object-cover"
        priority
        quality={100}
        sizes="100vw"
        style={{ filter: "brightness(0.35)" }}
      />

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, var(--surface-dim) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-36">
          {/* Overline */}
          <p
            className="mb-5 label-style"
            style={{ color: "var(--primary)" }}
          >
            TECNOLOGÍA AGRÍCOLA DE PRECISIÓN
          </p>

          {/* Headline */}
          <h1
            className="mb-6 display-heading"
            style={{
              fontSize: "clamp(2.5rem, 11vw, 10rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
            }}
          >
            <span className="block" style={{ color: "#ffffff" }}>
              POTENCIAMOS
            </span>
            <span
              className="block"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.3)",
              }}
            >
              TU CAMPO.
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="mb-10 max-w-xl"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            Desarrollamos bioestimulantes y coadyuvantes de alta precisión
            diseñados para maximizar cada gota aplicada.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#productos"
              className="inline-flex items-center gap-2 transition-all duration-200 hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary), var(--primary-container))",
                color: "var(--on-primary)",
                padding: "0.7rem 1.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                boxShadow: "0 40px 80px rgba(0, 226, 158, 0.06)",
              }}
            >
              EXPLORAR PRODUCTOS
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center gap-2 transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                padding: "0.7rem 1.8rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.75rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"
              }}
            >
              CONOCE MÁS
            </a>
          </div>
        </div>

        {/* Marquee ticker */}
        <div
          className="relative w-full overflow-hidden py-3"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="marquee-track">
            <span
              className="label-style whitespace-nowrap px-4"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              {repeated}
            </span>
            <span
              className="label-style whitespace-nowrap px-4"
              style={{ color: "rgba(255,255,255,0.2)" }}
              aria-hidden="true"
            >
              {repeated}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
