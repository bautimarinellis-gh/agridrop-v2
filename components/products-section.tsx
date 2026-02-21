"use client"

import { useState } from "react"
import { Download, Info, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type Product = {
  name: string
  category: string
  color: string
  description: string
  highlights: string[]
  dose: string | null
  presentation: string | null
  brochureUrl: string | null
}

const products: Product[] = [
  {
    name: "Drop Forte",
    category: "Bioestimulante",
    color: "#d4782e",
    description:
      "Bioestimulante de alta concentración que fortalece la estructura celular de los cultivos, incrementando su resistencia a condiciones de estrés.",
    highlights: [],
    dose: null,
    presentation: null,
    brochureUrl: null,
  },
  {
    name: "Drop Thor",
    category: "Coadyuvante · Humectante · Adherente · Biodegradable",
    color: "#2d9d5c",
    description:
      "Coadyuvante formulado a base de alcohol lineal etoxilado con alta cadena de carbono y una suma equilibrada de silicona. Excelente tensioactivo y humectante que mejora la cobertura y contacto de agroquímicos sobre la superficie foliar. Concentración del 48% en principio activo, diferenciándose del resto de su categoría.",
    highlights: [
      "Humectante, penetrante y adherente",
      "Tensión superficial dinámica de 40–45 dinas al impacto",
      "Tecnología antiespumante",
      "Ecológico y biodegradable",
    ],
    dose: "25–50 cc cada 100 L de agua o caldo a pulverizar",
    presentation: "15 botellas de 1 L c/u.",
    brochureUrl: "/folletos/thor_folleto.pdf",
  },
  {
    name: "Drop Flow",
    category: "Coadyuvante · Compatibilizante · Dispersante",
    color: "#0d9db8",
    description:
      "Coadyuvante preventivo que compatibiliza caldos de aplicación. Compuesto por mezclas de emulsionantes que ejercen acciones de dispersión y mantienen la estabilidad de mezclas de fitosanitarios (herbicidas, fungicidas, insecticidas y fertilizantes foliares) dentro del tanque. Excelente para herbicidas residuales.",
    highlights: [
      "Compatibilizante, dispersante y emulsionante",
      "No alcalinizante: no modifica el pH",
      "Evita cortes de mezcla y costos por ineficacia",
      "Recomendado para drones y aplicaciones de bajo volumen",
    ],
    dose: "200–400 ml/ha",
    presentation: "Bidón de 10 L.",
    brochureUrl: "/folletos/flow_folleto.pdf",
  },
  {
    name: "Drop Elixir",
    category: "Coadyuvante · MSO · Microemulsión",
    color: "#c9a82e",
    description:
      "Coadyuvante con aceite vegetal modificado (MSO) que disuelve la pared cuticular, y organosilicona que brinda gran afinidad de las gotas con la cera, generando una combinación perfecta. Forma una microemulsión estable sin separación de fases. Óptimo en altas temperaturas.",
    highlights: [
      "Maximiza el tándem penetración–translocación",
      "Reduce evaporación y riesgo de lavado por lluvia",
      "Mayor control de malezas estresadas o difíciles",
      "Excelente capacidad de esparcimiento sobre el blanco",
    ],
    dose: "200–400 ml/ha",
    presentation: "Bidón de 10 L.",
    brochureUrl: "/folletos/elixir_folleto.pdf",
  },
  {
    name: "Drop Quality",
    category: "Corrector de Aguas · Secuestrante Catiónico",
    color: "#8b6bb8",
    description:
      "Corrector de pH con poder buffer y secuestrante de cationes de muy alta performance que mejora la calidad del agua en pulverizaciones agrícolas. Corrige el pH al rango de 4,5 a 6,5, el más adecuado para la mayoría de los fitosanitarios. Posee el mayor poder secuestrante del mercado (700/800 ppm Ca CO₃ y Mg).",
    highlights: [
      "Mayor poder secuestrante del mercado",
      "Forma quelatos con cationes, evitando precipitación",
      "Sin acidificantes que generen precipitados",
      "No modifica el pH del caldo de aplicación",
    ],
    dose: "100 cc cada 800 ppm de dureza en 100 L de agua",
    presentation: "Caja con 15 botellas de 1 L c/u.",
    brochureUrl: "/folletos/quality_folleto.pdf",
  },
]

function getBrochureFilename(productName: string) {
  return `ficha-tecnica-${productName.toLowerCase().replace(/\s/g, "-")}.pdf`
}

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleDownloadBrochure = (product: Product) => {
    if (!product.brochureUrl) return
    const link = document.createElement("a")
    link.href = product.brochureUrl
    link.download = getBrochureFilename(product.name)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="productos" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Productos
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Nuestra línea de productos
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Soluciones especializadas para cada etapa del ciclo productivo,
            formuladas con la mejor tecnología.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div
                className="h-1.5"
                style={{ backgroundColor: product.color }}
              />
              <div className="flex flex-1 flex-col p-6">
                {/* Header */}
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${product.color}18` }}
                  >
                    <svg
                      className="h-5 w-5"
                      fill={product.color}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-snug mt-0.5">
                      {product.category}
                    </p>
                  </div>
                </div>

                {/* Descripción breve */}
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3 flex-1">
                  {product.description}
                </p>

                {/* Botones */}
                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors"
                    style={{ borderColor: product.color }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget
                      el.style.backgroundColor = product.color
                      el.style.color = "#fff"
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.backgroundColor = "transparent"
                      el.style.color = "#0f172a"
                    }}
                  >
                    <Info className="h-4 w-4" />
                    Ver información
                  </button>
                  {product.brochureUrl && (
                    <button
                      onClick={() => handleDownloadBrochure(product)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors"
                      style={{ borderColor: product.color }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget
                        el.style.backgroundColor = product.color
                        el.style.color = "#fff"
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget
                        el.style.backgroundColor = "transparent"
                        el.style.color = "#0f172a"
                      }}
                    >
                      <Download className="h-4 w-4" />
                      Descargar Ficha Técnica
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Popup de información detallada */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto sm:max-w-xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 pr-8">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${selectedProduct.color}20` }}
                  >
                    <svg
                      className="h-6 w-6"
                      fill={selectedProduct.color}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <div>
                    <DialogTitle className="text-xl">{selectedProduct.name}</DialogTitle>
                    <p className="text-sm text-muted-foreground mt-0.5">{selectedProduct.category}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-5 pt-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Descripción</h4>
                  <p className="text-sm leading-relaxed text-foreground">{selectedProduct.description}</p>
                </div>

                {selectedProduct.highlights.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Características</h4>
                    <ul className="space-y-2">
                      {selectedProduct.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2
                            className="h-4 w-4 shrink-0 mt-0.5"
                            style={{ color: selectedProduct.color }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(selectedProduct.dose || selectedProduct.presentation) && (
                  <div
                    className="rounded-lg p-4 space-y-3"
                    style={{ backgroundColor: `${selectedProduct.color}12` }}
                  >
                    {selectedProduct.dose && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">Dosis recomendada</p>
                        <p className="text-sm font-medium text-foreground">{selectedProduct.dose}</p>
                      </div>
                    )}
                    {selectedProduct.presentation && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">Presentación</p>
                        <p className="text-sm font-medium text-foreground">{selectedProduct.presentation}</p>
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