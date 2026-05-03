"use client"

import { useState } from "react"
import {
  Beaker,
  Blend,
  CheckCircle2,
  Droplets,
  FlaskConical,
  Sprout,
  X,
} from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

/* ── Product icons: Lucide, trazo grueso para leer bien en badges pequeños ── */
const productIconAttrs = {
  "aria-hidden": true as const,
  className: "h-7 w-7 shrink-0 text-white pointer-events-none",
  strokeWidth: 2.25,
}

/** Bioestimulante — germinación / vigor vegetal */
const IconForte = () => (
  <Sprout {...productIconAttrs} strokeLinecap="round" strokeLinejoin="round" />
)

/** Coadyuvante humectante-adherente — cubrimiento foliar por gotas */
const IconThor = () => (
  <Droplets {...productIconAttrs} strokeLinecap="round" strokeLinejoin="round" />
)

/** Compatibilizante — mezcla estable en el tanque */
const IconFlow = () => (
  <Blend {...productIconAttrs} strokeLinecap="round" strokeLinejoin="round" />
)

/** MSO / microemulsión — formulación líquida de laboratorio */
const IconElixir = () => (
  <FlaskConical {...productIconAttrs} strokeLinecap="round" strokeLinejoin="round" />
)

/** Corrector de agua / secuestre — tratamiento del caldo */
const IconQuality = () => (
  <Beaker {...productIconAttrs} strokeLinecap="round" strokeLinejoin="round" />
)

type Product = {
  name: string
  icon: React.ReactNode
  categoryShort: string
  colorHex: string
  description: string
  highlights: string[]
  benefits: string[]
  dose: string | null
  presentation: string | null
  brochureUrl: string | null
}

const products: Product[] = [
  {
    name: "DROP FORTE",
    icon: <IconForte />,
    categoryShort: "Bioestimulante",
    colorHex: "#ff6b2b",
    description: "Bioestimulante de alta concentración que fortalece la estructura celular, incrementando la resistencia del cultivo al estrés.",
    highlights: [],
    benefits: ["Alta concentración", "Estimulación celular"],
    dose: null,
    presentation: null,
    brochureUrl: null,
  },
  {
    name: "DROP THOR",
    icon: <IconThor />,
    categoryShort: "Coadyuvante · Humectante · Adherente",
    colorHex: "#22c55e",
    description: "Coadyuvante con 48% de principio activo. Mejora la cobertura y contacto de agroquímicos sobre la superficie foliar.",
    highlights: [
      "Humectante, penetrante y adherente",
      "Tensión superficial dinámica de 40–45 dinas al impacto",
      "Tecnología antiespumante",
      "Ecológico y biodegradable",
    ],
    benefits: ["48% Act. Activo", "Biodegradable"],
    dose: "25–50 cc / 100 L",
    presentation: "15 botellas de 1 L c/u.",
    brochureUrl: "/folletos/thor_folleto.pdf",
  },
  {
    name: "DROP FLOW",
    icon: <IconFlow />,
    categoryShort: "Coadyuvante · Compatibilizante",
    colorHex: "#06b6d4",
    description: "Compatibiliza caldos de aplicación. Mantiene la estabilidad de mezclas de fitosanitarios en el tanque. Ideal para drones.",
    highlights: [
      "Compatibilizante, dispersante y emulsionante",
      "No alcalinizante: no modifica el pH",
      "Evita cortes de mezcla",
      "Recomendado para drones y bajo volumen",
    ],
    benefits: ["No modifica pH", "Apto drones"],
    dose: "200–400 ml/ha",
    presentation: "Bidón de 10 L.",
    brochureUrl: "/folletos/flow_folleto.pdf",
  },
  {
    name: "DROP ELIXIR",
    icon: <IconElixir />,
    categoryShort: "Coadyuvante · MSO · Microemulsión",
    colorHex: "#d4a017",
    description: "Aceite vegetal modificado (MSO) que disuelve la pared cuticular. Maximiza penetración y translocación. Óptimo en altas temperaturas.",
    highlights: [
      "Maximiza el tándem penetración–translocación",
      "Reduce evaporación y riesgo de lavado por lluvia",
      "Mayor control de malezas estresadas",
      "Excelente capacidad de esparcimiento",
    ],
    benefits: ["Penetración MSO", "Anti-evaporación"],
    dose: "200–400 ml/ha",
    presentation: "Bidón de 10 L.",
    brochureUrl: "/folletos/elixir_folleto.pdf",
  },
  {
    name: "DROP QUALITY",
    icon: <IconQuality />,
    categoryShort: "Corrector de Aguas · Secuestrante",
    colorHex: "#a855f7",
    description: "Corrector de pH con el mayor poder secuestrante del mercado. Corrige el pH al rango ideal 4.5–6.5 para fitosanitarios.",
    highlights: [
      "Mayor poder secuestrante del mercado",
      "Forma quelatos con cationes",
      "Sin acidificantes que generen precipitados",
      "No modifica el pH del caldo",
    ],
    benefits: ["pH 4.5–6.5", "Max. secuestrante"],
    dose: "100 cc / 800 ppm",
    presentation: "Caja con 15 botellas de 1 L c/u.",
    brochureUrl: "/folletos/quality_folleto.pdf",
  },
]

function getBrochureFilename(productName: string) {
  return `ficha-tecnica-${productName.toLowerCase().replace(/\s/g, "-")}.pdf`
}

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section
      id="productos"
      className="py-16 lg:py-32"
      style={{ backgroundColor: "var(--surface-dim)" }}
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section header */}
        <div className="mb-10">
          <p className="mb-4 label-style" style={{ color: "var(--primary)" }}>
            ● PRODUCTOS
          </p>
          <h2
            className="display-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#ffffff", lineHeight: 1 }}
          >
            NUESTRA LÍNEA DE <span style={{ color: "var(--primary)" }}>PRODUCTOS</span>
          </h2>
        </div>

        {/* Product rows */}
        <div className="flex flex-col gap-px">
          {products.map((product) => (
            <ProductRow
              key={product.name}
              product={product}
              onSelect={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {/* Detail dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent
          className="dialog-product max-h-[90vh] overflow-y-auto"
          showCloseButton={false}
          style={{
            backgroundColor: "var(--surface-container)",
            border: `1px solid ${selectedProduct?.colorHex ?? "var(--outline-variant)"}`,
            borderRadius: 0,
            color: "#e8f0ec",
            width: "min(92vw, 720px)",
            maxWidth: "none",
          }}
        >
          {selectedProduct && (
            <>
              <DialogHeader>
                {/* Color accent bar at top — sin X solapada */}
                <div
                  className="dialog-color-bar"
                  style={{
                    height: "3px",
                    backgroundColor: selectedProduct.colorHex,
                    marginBottom: "1.8rem",
                  }}
                />
                <div className="flex items-center gap-5">
                  <div
                    className="flex shrink-0 items-center justify-center"
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: selectedProduct.colorHex,
                    }}
                  >
                    <div style={{ transform: "scale(1.3)" }}>{selectedProduct.icon}</div>
                  </div>
                  <div className="flex-1">
                    <DialogTitle
                      className="display-heading"
                      style={{ color: "#fff", fontSize: "1.8rem", lineHeight: 1 }}
                    >
                      {selectedProduct.name}
                    </DialogTitle>
                    <p
                      className="label-style mt-2"
                      style={{ color: selectedProduct.colorHex, fontSize: "0.65rem" }}
                    >
                      {selectedProduct.categoryShort}
                    </p>
                  </div>

                  {/* Botón cerrar — alineado con el header, sin solapar la barra */}
                  <DialogClose
                    className="shrink-0 flex items-center justify-center transition-opacity hover:opacity-100 opacity-60 focus:outline-none"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Cerrar</span>
                  </DialogClose>
                </div>
              </DialogHeader>

              <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.8rem" }}>

                {/* Descripción */}
                <div>
                  <p className="label-style mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Descripción
                  </p>
                  <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#e8f0ec" }}>
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Características */}
                {selectedProduct.highlights.length > 0 && (
                  <div>
                    <p className="label-style mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                      Características
                    </p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {selectedProduct.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3" style={{ fontSize: "0.95rem", color: "#e8f0ec" }}>
                          <CheckCircle2
                            className="shrink-0"
                            style={{ color: selectedProduct.colorHex, marginTop: "2px", width: "16px", height: "16px" }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Dosis + Presentación */}
                {(selectedProduct.dose || selectedProduct.presentation) && (
                  <div
                    style={{
                      backgroundColor: `${selectedProduct.colorHex}12`,
                      border: `1px solid ${selectedProduct.colorHex}35`,
                      padding: "1.5rem",
                      display: "flex",
                      gap: "2.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {selectedProduct.dose && (
                      <div>
                        <p className="label-style mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          Dosis recomendada
                        </p>
                        <p style={{ fontSize: "1rem", fontWeight: 700, color: "#e8f0ec" }}>
                          {selectedProduct.dose}
                        </p>
                      </div>
                    )}
                    {selectedProduct.presentation && (
                      <div>
                        <p className="label-style mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          Presentación
                        </p>
                        <p style={{ fontSize: "1rem", fontWeight: 700, color: "#e8f0ec" }}>
                          {selectedProduct.presentation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

/* ── Single product row ──────────────────────────────────────────────────── */
function ProductRow({ product, onSelect }: { product: Product; onSelect: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="flex items-center gap-3 sm:gap-6 px-4 py-5 sm:px-8 sm:py-8 transition-all duration-200"
      style={{
        backgroundColor: hovered ? "var(--surface-container)" : "var(--surface-container-low)",
        borderTop: `1px solid ${product.colorHex}`,
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon badge */}
      <div
        className="hidden sm:flex flex-shrink-0 items-center justify-center"
        style={{
          width: "52px",
          height: "52px",
          backgroundColor: product.colorHex,
          boxShadow: hovered ? `0 0 28px ${product.colorHex}55` : "none",
          transition: "box-shadow 0.2s",
        }}
      >
        {product.icon}
      </div>

      {/* Center — category + name + description */}
      <div className="flex-1 min-w-0">
        <p className="label-style mb-1" style={{ color: product.colorHex, fontSize: "0.62rem" }}>
          {product.categoryShort}
        </p>
        <h3
          className="display-heading mb-2"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#ffffff", lineHeight: 1 }}
        >
          {product.name}
        </h3>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.55, maxWidth: "52ch" }}>
          {product.description}
        </p>
      </div>

      {/* Right — pills + dose + button */}
      <div className="hidden lg:flex flex-col items-end flex-shrink-0 gap-3" style={{ minWidth: "240px" }}>
        {/* Pills */}
        <div className="flex flex-wrap justify-end gap-2">
          {product.benefits.map((b) => (
            <span
              key={b}
              className="label-style"
              style={{
                backgroundColor: "var(--surface-container-high)",
                color: "rgba(255,255,255,0.55)",
                padding: "0.3rem 0.7rem",
                fontSize: "0.6rem",
              }}
            >
              {b}
            </span>
          ))}
          {product.dose && (
            <span
              className="label-style"
              style={{
                backgroundColor: "var(--surface-container-high)",
                color: "rgba(255,255,255,0.55)",
                padding: "0.3rem 0.7rem",
                fontSize: "0.6rem",
              }}
            >
              DOSIS: {product.dose}
            </span>
          )}
        </div>

        {/* FICHA TÉCNICA button */}
        <button
          onClick={onSelect}
          className="label-style transition-all duration-200"
          style={{
            border: `1px solid ${product.colorHex}`,
            color: product.colorHex,
            padding: "0.45rem 1.1rem",
            fontSize: "0.62rem",
            background: "transparent",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = product.colorHex
            e.currentTarget.style.color = "#000"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
            e.currentTarget.style.color = product.colorHex
          }}
        >
          FICHA TÉCNICA →
        </button>
      </div>

      {/* Mobile CTA */}
      <div className="flex lg:hidden flex-shrink-0">
        <button
          onClick={onSelect}
          className="label-style"
          style={{
            border: `1px solid ${product.colorHex}`,
            color: product.colorHex,
            padding: "0.4rem 0.7rem",
            fontSize: "0.6rem",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          VER →
        </button>
      </div>
    </article>
  )
}
