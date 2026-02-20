import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <Image
        src="/images/inicio-agridrop.jpg"
        alt="Modern agriculture field with advanced technology"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
          Soluciones Agrícolas del Futuro
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Potenciamos tu rendimiento con tecnología y sustentabilidad
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Desarrollamos productos innovadores que optimizan el crecimiento de tus
          cultivos, respetando el medio ambiente y maximizando tu productividad.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#productos"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            Explorar Productos
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#nosotros"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            Conoce Más
          </a>
        </div>
      </div>
    </section>
  )
}
