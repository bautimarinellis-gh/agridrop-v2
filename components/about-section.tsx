import Image from "next/image"
import { Download } from "lucide-react"

const results = [
  { gain: "+338", crop: "kg/ha en maíz", detail: "10.813 kg/ha contra 10.475 del testigo" },
  { gain: "+214", crop: "kg/ha en soja", detail: "4.619 kg/ha contra 4.405 del testigo" },
]

const certifications = [
  { name: "ISO 9001", detail: "Sistema de gestión de calidad" },
  { name: "ISO 14001", detail: "Sistema de gestión ambiental" },
]

/** Respaldo técnico: ensayo de INTA y certificaciones. */
export function BackingSection() {
  return (
    <section id="respaldo" className="bg-forest py-20 text-white lg:py-28">
      <div className="container-site">
        <div className="grid gap-x-20 gap-y-12 lg:grid-cols-[1fr_1.6fr] lg:items-end">
          <div>
            <h2 className="heading-section">Medido por INTA</h2>
            <p className="mt-4 text-lg text-haze">
              Rendimiento de grano con Drop Forte frente a un testigo sin
              tratar. INTA EEA Pergamino, campaña 2023/24.
            </p>
            <a
              href="/folletos/forte_folleto.pdf"
              download="ficha-tecnica-drop-forte.pdf"
              className="btn mt-7 border-[1.5px] border-white text-white hover:bg-white hover:text-forest"
            >
              <Download className="h-4 w-4" aria-hidden />
              Ficha técnica de Drop Forte
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {results.map((r) => (
              <div key={r.crop} className="border-t-2 border-lime pt-5">
                <p className="text-[clamp(4rem,9vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-lime">
                  {r.gain}
                </p>
                <p className="mt-3 text-xl font-semibold">{r.crop}</p>
                <p className="mt-1 text-[0.9375rem] text-haze">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-haze">
          Fuente: Ferraris, Gustavo N. Bioestimulantes foliares para cultivos de
          soja y maíz, 2023/2024. INTA EEA Pergamino.
        </p>

        <div className="mt-14 grid gap-5 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr] lg:items-center">
          {certifications.map((c) => (
            <div key={c.name} className="rounded-2xl border border-white/20 px-6 py-5">
              <p className="text-2xl font-bold">{c.name}</p>
              <p className="mt-1 text-[0.9375rem] text-haze">{c.detail}</p>
            </div>
          ))}
          <p className="text-haze sm:col-span-2 lg:col-span-1">
            Trabajamos con sistemas de gestión de calidad y ambiental
            certificados.
          </p>
        </div>
      </div>
    </section>
  )
}

/** Quiénes somos: el galpón y el origen de la empresa. */
export function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[5/2]">
          <Image
            src="/images/galpon-agridrop.jpg"
            alt="Galpón de Agridrop sobre la Ruta 33, en Rufino"
            fill
            className="object-cover object-[50%_80%]"
            sizes="(max-width: 1280px) 100vw, 1240px"
          />
        </div>
        <div className="mt-12 grid gap-x-20 gap-y-6 lg:grid-cols-2">
          <h2 className="heading-section">De Rufino a todo el país</h2>
          <div className="flex flex-col gap-4 text-lg text-moss">
            <p>
              Agridrop fue fundada por la ingeniera agrónoma Belén Bucci junto
              con Quintales Rufino SRL. Desarrollamos coadyuvantes y
              bioestimulantes pensados para las condiciones reales de aplicación.
            </p>
            <p>
              Trabajamos desde nuestro galpón sobre la Ruta 33, km 540, y
              despachamos pedidos a todo el país.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
