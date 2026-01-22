import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Gradient Orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-32 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Tecnología Agro de Alta Precisión</span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-7xl">
          Desarrollo Tecnológico{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Superior
          </span>{" "}
          para tu Cultivo
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl">
          Soluciones de formulación avanzada: Bioestimulantes y Coadyuvantes diseñados 
          para maximizar el rendimiento agrícola.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90">
            Ver Productos
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-border bg-transparent px-8 text-foreground hover:bg-card">
            Contactar
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "500+", label: "Productores" },
            { value: "5", label: "Productos" },
            { value: "ISO 9001", label: "Certificado" },
            { value: "ISO 14001", label: "Ambiental" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-card/50 p-4">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
