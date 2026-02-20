"use client"

import { Download } from "lucide-react"

const products = [
  {
    name: "Drop Forte",
    color: "#e97316",
    description:
      "Bioestimulante de alta concentración que fortalece la estructura celular de los cultivos, incrementando su resistencia a condiciones de estrés.",
  },
  {
    name: "Drop Flow",
    color: "#06b6d4",
    description:
      "Coadyuvante agrícola que mejora la absorción y distribución de nutrientes, optimizando la eficiencia de tus aplicaciones foliares.",
  },
  {
    name: "Drop Elixir",
    color: "#eab308",
    description:
      "Fórmula enriquecida con micronutrientes esenciales que potencia la fotosíntesis y el metabolismo vegetal para un crecimiento excepcional.",
  },
  {
    name: "Drop Thor",
    color: "#22c55e",
    description:
      "Protector biológico que refuerza las defensas naturales del cultivo frente a enfermedades y plagas, promoviendo un desarrollo saludable.",
  },
  {
    name: "Drop Quality",
    color: "#a855f7",
    description:
      "Mejorador de calidad diseñado para potenciar las características organolépticas de frutas y hortalizas en las etapas finales de desarrollo.",
  },
]

export function ProductsSection() {
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
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${product.color}15` }}
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
                  <h3 className="text-lg font-bold text-card-foreground">
                    {product.name}
                  </h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <button
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors"
                  style={{
                    borderColor: product.color,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.backgroundColor = product.color
                    el.style.color = "#0f172a"
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
