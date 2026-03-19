const stats = [
  { value: "48%", label: "Concentración Activa" },
  { value: "ISO 9001", label: "Calidad Certificada" },
  { value: "5 LÍNEAS", label: "Completa Portfolio" },
]

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden py-20 lg:py-40"
      style={{
        backgroundColor: "var(--surface-container-low)",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-stretch gap-0">

          {/* Left col — AGRIDROP vertical decorative text */}
          <div
            aria-hidden="true"
            className="hidden lg:flex flex-shrink-0 items-center justify-center pointer-events-none select-none"
            style={{ width: "120px", marginRight: "5rem" }}
          >
            <span
              style={{
                color: "rgba(255,255,255,0.07)",
                fontWeight: 800,
                fontSize: "10rem",
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              AGRIDROP
            </span>
          </div>

          {/* Right col — content */}
          <div className="flex-1">
            {/* Overline */}
            <p className="mb-6 label-style" style={{ color: "var(--primary)" }}>
              ● NOSOTROS
            </p>

            {/* Headline */}
            <h2
              className="display-heading mb-8"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                lineHeight: 0.95,
              }}
            >
              <span className="block" style={{ color: "#ffffff" }}>
                INGENIERÍA BIOLÓGICA PARA
              </span>
              <span className="block" style={{ color: "var(--primary)" }}>
                EL RENDIMIENTO MÁXIMO.
              </span>
            </h2>

            {/* Body paragraph */}
            <p
              className="mb-14 max-w-2xl"
              style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "1.05rem" }}
            >
              Desarrollamos bioestimulantes y fertilizantes de alta tecnología
              diseñados bajo estándares industriales únicos. Nuestra misión es
              optimizar cada gota aplicada, reduciendo el impacto ambiental y
              maximizando la rentabilidad del productor agrícola moderno.
            </p>

            {/* Stats row */}
            <div
              className="mb-16 flex flex-wrap"
              style={{
                borderTop: "1px solid var(--outline-variant)",
                borderBottom: "1px solid var(--outline-variant)",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.value}
                  className="flex flex-col justify-center py-8"
                  style={{
                    flex: "1 1 0",
                    minWidth: "100px",
                    paddingRight: "1.5rem",
                    borderRight:
                      i < stats.length - 1 ? "1px solid var(--outline-variant)" : "none",
                    paddingLeft: i > 0 ? "1.5rem" : 0,
                  }}
                >
                  <span
                    className="display-heading"
                    style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#ffffff" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="label-style mt-2"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
