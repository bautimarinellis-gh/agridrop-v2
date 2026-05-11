"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Beaker,
  Blend,
  CheckCircle2,
  Download,
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
  tagline: string
  description: string
  highlights: string[]
  benefits: string[]
  dose: string | null
  presentation: string | null
  brochureUrl: string | null
  imageUrl: string
}

const products: Product[] = [
  {
    name: "DROP FORTE",
    icon: <IconForte />,
    categoryShort: "Fertilizante Foliar · Bioestimulante",
    colorHex: "#ff6b2b",
    tagline: "Bioestimulante foliar que activa defensas, estimula el crecimiento y aumenta el rendimiento.",
    description: "Fertilizante foliar bioestimulante formulado a base de metabolitos secundarios de fermentaciones específicas, micronutrientes quelatados, fitohormonas naturales (isómeros específicos post hidrólisis enzimática), laminados de algas y extractos vegetales. Activa mecanismos de defensa, estimula el desarrollo vegetal y aumenta el rendimiento.",
    highlights: [
      "Activa mecanismos de defensa naturales del cultivo",
      "Estimula el crecimiento y desarrollo",
      "Mejora la sanidad vegetal",
      "Aumenta el rendimiento y la calidad",
      "Ensayos INTA: +338 kg/ha en maíz · +214 kg/ha en soja",
    ],
    benefits: ["Avales INTA", "ISO 9001 · 14001"],
    dose: "100 cc / 800 ppm de dureza en 100 L",
    presentation: "Caja con 15 botellas de 1 L c/u.",
    brochureUrl: "/folletos/forte_folleto.pdf",
    imageUrl: "/imagenes_productos/forte_bidon.png",
  },
  {
    name: "DROP THOR",
    icon: <IconThor />,
    categoryShort: "Coadyuvante · Humectante · Adherente",
    colorHex: "#22c55e",
    tagline: "Coadyuvante humectante-adherente con 48% de principio activo para máxima cobertura foliar.",
    description: "Coadyuvante humectante, adherente y biodegradable de concentrado soluble. Formulado a base de alcohol lineal etoxilado de alta cadena de carbono y silicona. Excelente tensioactivo que mejora la cobertura y contacto de agroquímicos sobre la superficie foliar. Concentración del 48% de principio activo, muy por encima de la media del mercado.",
    highlights: [
      "Humectante, penetrante y adherente",
      "Tensión superficial dinámica de 40–45 dinas al impacto de la gota, asegurando rápida distribución foliar",
      "Cobertura uniforme sobre la superficie foliar — tecnología antiespumante",
      "Ecológico, biodegradable — contiene componentes siliconados",
    ],
    benefits: ["48% Princ. Activo", "Biodegradable"],
    dose: "25–50 cc / 100 L",
    presentation: "Caja con 15 botellas de 1 L c/u.",
    brochureUrl: "/folletos/drop_folleto.pdf",
    imageUrl: "/imagenes_productos/thor_botella.png",
  },
  {
    name: "DROP FLOW",
    icon: <IconFlow />,
    categoryShort: "Coadyuvante · Compatibilizante",
    colorHex: "#06b6d4",
    tagline: "Compatibilizante que estabiliza mezclas de fitosanitarios en el tanque. Ideal para drones.",
    description: "Coadyuvante preventivo que compatibiliza caldos de aplicación. Compuesto por mezclas de emulsionantes que mantienen la estabilidad de herbicidas, fungicidas, insecticidas y fertilizantes foliares en el tanque. Ideal para aplicaciones con drones y pulverizaciones de bajo volumen. Evita cortes de mezcla e incrustaciones en la pulverizadora.",
    highlights: [
      "Excelente capacidad estabilizante en combinaciones estratégicas de herbicidas",
      "Permite obtener mezclas totalmente estables — evita costos por descarte o ineficacia",
      "Reduce el riesgo de incrustaciones de productos en la pulverizadora",
      "No alcalinizante: no modifica el pH ni afecta la residualidad de productos",
      "Recomendado para drones y aviones de bajo volumen (~10 L/ha)",
    ],
    benefits: ["No modifica pH", "Apto drones"],
    dose: "200–400 ml/ha",
    presentation: "Caja con 15 botellas de 1 L c/u.",
    brochureUrl: "/folletos/flow_folleto.pdf",
    imageUrl: "/imagenes_productos/flow_bidon.png",
  },
  {
    name: "DROP ELIXIR",
    icon: <IconElixir />,
    categoryShort: "Coadyuvante · MSO · Microemulsión",
    colorHex: "#d4a017",
    tagline: "MSO en microemulsión que maximiza la penetración y translocación de agroquímicos.",
    description: "Coadyuvante MSO que forma una microemulsión estable sin separación de fases. El aceite vegetal modificado disuelve la pared cuticular mientras la organosilicona brinda gran afinidad de las gotas con la cera cuticular. Optimiza el mojado, maximiza penetración y translocación, y mejora el control de malezas difíciles o estresadas.",
    highlights: [
      "Microemulsión estable: mezcla sin separación de fases",
      "Maximiza el tándem penetración–translocación",
      "Reduce la evaporación — mayor viscosidad por cantidad de micelas por gota",
      "Óptima tensión superficial dinámica al momento del impacto de la gota",
      "Garantiza mayor velocidad e incremento en el porcentaje de control",
      "Hace más eficientes las aplicaciones con bajo volumen",
      "Disminuye el riesgo de lavado por lluvia",
      "Aumenta la eficiencia en malezas estresadas o difíciles",
      "Eficaz en condiciones de baja humedad relativa",
      "Máxima penetración — excelente capacidad de esparcimiento sobre el blanco",
    ],
    benefits: ["Penetración MSO", "Anti-evaporación"],
    dose: "200–400 ml/ha",
    presentation: "Caja con 15 botellas de 1 L c/u.",
    brochureUrl: "/folletos/elixir_folleto.pdf",
    imageUrl: "/imagenes_productos/elixir_bidon.png",
  },
  {
    name: "DROP QUALITY",
    icon: <IconQuality />,
    categoryShort: "Corrector de pH · Buffer · Secuestrante",
    colorHex: "#a855f7",
    tagline: "Corrector de pH y secuestrante catiónico para optimizar el agua de aplicación.",
    description: "Corrector de pH con poder buffer y secuestrante catiónico. Tecnología superior que garantiza alta calidad de formulación: corrige el agua según su dureza y asegura un pH final de 4,5 a 6,5 — el rango óptimo para la mayoría de los fitosanitarios. Mejora las condiciones de aplicación de productos agroquímicos.",
    highlights: [
      "Excelente poder buffer que mejora las condiciones de aplicación de agroquímicos",
      "Mayor poder secuestrante del mercado (700/800 ppm CaCO₃ y Mg)",
      "Forma quelatos con cationes, evitando precipitación del material secuestrado",
      "Sin acidificantes que generen precipitados o insolubilización de principios activos",
      "No modifica el pH del caldo de aplicación — cada fitosanitario trabaja en su rango óptimo",
    ],
    benefits: ["pH 4.5–6.5", "Máx. secuestrante"],
    dose: "100 cc / 800 ppm de dureza en 100 L · mín. 25 cc/100 L en aguas <200 ppm",
    presentation: "Caja con 15 botellas de 1 L c/u.",
    brochureUrl: "/folletos/quality_folleto.pdf",
    imageUrl: "/imagenes_productos/quality_botella.png",
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
            width: "min(92vw, 860px)",
            maxWidth: "none",
          }}
        >
          {selectedProduct && (
            <>
              <DialogHeader>
                {/* Color accent bar */}
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
                  <DialogClose
                    className="shrink-0 flex items-center justify-center transition-opacity hover:opacity-100 opacity-60 focus:outline-none"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Cerrar</span>
                  </DialogClose>
                </div>
              </DialogHeader>

              {/* Two-column body: image left, content right */}
              <div
                className="flex flex-col sm:flex-row gap-6"
                style={{ marginTop: "2rem" }}
              >
                {/* Imagen del envase */}
                <div
                  className="relative shrink-0 self-start"
                  style={{
                    width: "100%",
                    maxWidth: "260px",
                    height: "300px",
                    backgroundColor: "var(--surface-container)",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    src={selectedProduct.imageUrl}
                    alt={`Envase ${selectedProduct.name}`}
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    sizes="260px"
                  />
                  {/* Vignette radial: disuelve el fondo blanco en el bg oscuro */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(ellipse at center, transparent 38%, var(--surface-container) 78%)`,
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Contenido textual */}
                <div className="flex-1 flex flex-col" style={{ gap: "1.8rem" }}>

                  {/* Descripción */}
                  <div>
                    <p className="label-style mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                      Descripción
                    </p>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#e8f0ec" }}>
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Características */}
                  {selectedProduct.highlights.length > 0 && (
                    <div>
                      <p className="label-style mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                        Características
                      </p>
                      <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                        {selectedProduct.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3" style={{ fontSize: "0.88rem", color: "#e8f0ec" }}>
                            <CheckCircle2
                              className="shrink-0"
                              style={{ color: selectedProduct.colorHex, marginTop: "2px", width: "15px", height: "15px" }}
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
                        padding: "1.25rem",
                        display: "flex",
                        gap: "2rem",
                        flexWrap: "wrap",
                      }}
                    >
                      {selectedProduct.dose && (
                        <div>
                          <p className="label-style mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                            Dosis recomendada
                          </p>
                          <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e8f0ec" }}>
                            {selectedProduct.dose}
                          </p>
                        </div>
                      )}
                      {selectedProduct.presentation && (
                        <div>
                          <p className="label-style mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                            Presentación
                          </p>
                          <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e8f0ec" }}>
                            {selectedProduct.presentation}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Botón descarga folleto */}
                  {selectedProduct.brochureUrl && (
                    <div style={{ paddingTop: "0.25rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <a
                        href={selectedProduct.brochureUrl}
                        download={getBrochureFilename(selectedProduct.name)}
                        className="label-style inline-flex items-center gap-2 transition-all duration-200"
                        style={{
                          border: `1px solid ${selectedProduct.colorHex}`,
                          color: selectedProduct.colorHex,
                          padding: "0.55rem 1.2rem",
                          fontSize: "0.62rem",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget
                          el.style.backgroundColor = selectedProduct.colorHex
                          el.style.color = "#000"
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget
                          el.style.backgroundColor = "transparent"
                          el.style.color = selectedProduct.colorHex
                        }}
                      >
                        <Download className="h-3.5 w-3.5 shrink-0" />
                        DESCARGAR FOLLETO TÉCNICO
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Precarga silenciosa de imágenes en tamaño popup */}
      <div aria-hidden style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0, pointerEvents: "none" }}>
        {products.map((p) => (
          <Image
            key={p.name}
            src={p.imageUrl}
            alt=""
            width={260}
            height={300}
            priority
            sizes="260px"
          />
        ))}
      </div>
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
      {/* Product image badge */}
      <div
        className="hidden sm:relative sm:flex shrink-0"
        style={{
          width: "72px",
          height: "72px",
          boxShadow: hovered ? `0 0 28px ${product.colorHex}55` : "none",
          transition: "box-shadow 0.2s",
          maskImage: "radial-gradient(ellipse at center, black 38%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 38%, transparent 78%)",
        }}
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          priority
          style={{ objectFit: "contain", objectPosition: "center" }}
          sizes="72px"
        />
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
          {product.tagline}
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
