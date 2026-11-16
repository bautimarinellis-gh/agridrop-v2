import Image from "next/image"
import { WHATSAPP_URL } from "@/lib/site"

const facts = [
  { value: "ISO 9001 · 14001", label: "Gestión de calidad y ambiental certificadas" },
  { value: "Ensayos INTA", label: "EEA Pergamino, campaña 2023/24" },
  { value: "5 productos", label: "Del agua de aplicación al cultivo" },
  { value: "Todo el país", label: "Despachamos desde Rufino, Santa Fe" },
]

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[min(100svh,56rem)] flex-col overflow-hidden bg-forest text-white"
    >
      <Image
        src="/images/campo-sembradora.jpg"
        alt="Sembradora trabajando en un lote"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_40%]"
      />
      {/* Velo verde oscuro para que el texto se lea sobre la foto */}
      <div aria-hidden className="absolute inset-0 bg-forest-deep/65" />

      <div className="container-site relative flex flex-1 flex-col justify-end pb-12 pt-40 md:pb-16 md:pt-48">
        <h1 className="max-w-4xl text-balance text-[clamp(2.75rem,7.2vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
          Que la aplicación llegue a la hoja.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mist md:text-xl">
          Coadyuvantes y bioestimulantes desarrollados en Rufino, Santa Fe, para
          cuidar cada paso: el agua, la mezcla, la gota y el cultivo.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#productos" className="btn bg-lime text-forest hover:bg-lime-strong">
            Ver los productos
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-[1.5px] border-white text-white hover:bg-white hover:text-forest"
          >
            Hablar con un asesor
          </a>
        </div>
      </div>

      {/* Datos de respaldo, a la vista desde el primer momento */}
      <div className="relative border-t border-white/20 bg-forest-deep/55">
        <dl className="container-site grid grid-cols-2 gap-x-6 gap-y-5 py-6 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.value}>
              <dt className="text-lg font-bold leading-tight md:text-xl">{fact.value}</dt>
              <dd className="mt-1 text-sm text-haze">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
