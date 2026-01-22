"use client"

import { Download, TrendingUp, Droplets, Leaf, Beaker, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Drop Forte",
    type: "Bioestimulante Foliar",
    description: "Formulado con metabolitos, micronutrientes y fitohormonas. Activa mecanismos de defensa y aumenta el rendimiento en Soja y Maíz.",
    badge: "+Rendimiento",
    color: "orange",
    icon: TrendingUp,
  },
  {
    name: "Drop Flow",
    type: "Coadyuvante de Compatibilidad",
    description: "Evita que las mezclas se corten. Emulsionante y dispersante. Ideal para aplicaciones con Drones y bajo volumen.",
    badge: "Estabilidad Total",
    color: "cyan",
    icon: Plane,
    pdfFile: "flow_folleto.pdf",
  },
  {
    name: "Drop Elixir",
    type: "Coadyuvante Premium",
    description: "Microemulsión con aceite metilado y organosilicona. Reduce la evaporación y mejora la penetración en altas temperaturas.",
    badge: "Anti-evaporante",
    color: "gold",
    icon: Droplets,
    pdfFile: "elixir_folleto.pdf",
  },
  {
    name: "Drop Thor",
    type: "Coadyuvante Ecológico",
    description: "Biodegradable y súper concentrado (48% activos). Máxima adherencia y humectación con tecnología antiespumante.",
    badge: "Eco-Friendly",
    color: "green",
    icon: Leaf,
    pdfFile: "thor_folleto.pdf",
  },
  {
    name: "Drop Quality",
    type: "Corrector de Aguas",
    description: "Secuestrante de cationes y corrector de pH. Poder buffer que asegura un rango de pH 4.5-6.5.",
    badge: "Calidad de Aplicación",
    color: "purple",
    icon: Beaker,
    pdfFile: "quality_folleto.pdf",
  },
]

const colorStyles: Record<string, { border: string; glow: string; badge: string; text: string }> = {
  orange: {
    border: "border-orange-500/50 hover:border-orange-400",
    glow: "hover:glow-orange",
    badge: "bg-orange-500/20 text-orange-400",
    text: "text-orange-400",
  },
  cyan: {
    border: "border-cyan-500/50 hover:border-cyan-400",
    glow: "hover:glow-cyan",
    badge: "bg-cyan-500/20 text-cyan-400",
    text: "text-cyan-400",
  },
  gold: {
    border: "border-amber-500/50 hover:border-amber-400",
    glow: "hover:glow-gold",
    badge: "bg-amber-500/20 text-amber-400",
    text: "text-amber-400",
  },
  green: {
    border: "border-green-500/50 hover:border-green-400",
    glow: "hover:glow-green",
    badge: "bg-green-500/20 text-green-400",
    text: "text-green-400",
  },
  purple: {
    border: "border-violet-500/50 hover:border-violet-400",
    glow: "hover:glow-purple",
    badge: "bg-violet-500/20 text-violet-400",
    text: "text-violet-400",
  },
}

export function ProductsSection() {
  const handleDownload = (pdfFileName: string) => {
    const link = document.createElement("a")
    link.href = `/${pdfFileName}`
    link.download = pdfFileName
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="productos" className="border-t border-border px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">Nuestra Línea</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Productos de Alta Performance
          </h2>
          <p className="mt-4 text-muted-foreground">
            Soluciones especializadas para cada necesidad agronómica
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const styles = colorStyles[product.color]
            const Icon = product.icon
            return (
              <div
                key={product.name}
                className={`group flex flex-col rounded-xl border bg-card/50 p-6 backdrop-blur-sm transition-smooth ${styles.border} ${styles.glow}`}
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${styles.badge}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}>
                    {product.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                <p className={`mt-1 text-sm font-medium ${styles.text}`}>{product.type}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                {/* Download Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6 w-full gap-2 border-border bg-transparent text-foreground hover:bg-card"
                  onClick={() => product.pdfFile && handleDownload(product.pdfFile)}
                  disabled={!product.pdfFile}
                >
                  <Download className="h-4 w-4" />
                  Descargar Ficha Técnica
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
