import Image from "next/image"
import { Leaf, Lightbulb, Users } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Investigamos y desarrollamos fórmulas de vanguardia para ofrecer soluciones que realmente marcan la diferencia en el campo.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidad",
    description:
      "Nuestros productos respetan el equilibrio natural del suelo y el ecosistema, promoviendo una agricultura responsable.",
  },
  {
    icon: Users,
    title: "Alianza con el Productor",
    description:
      "Trabajamos codo a codo con los agricultores para entender sus necesidades y brindar acompanamiento tecnico personalizado.",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Nosotros
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Comprometidos con el futuro del agro
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              En Agridrop, creemos que la agricultura del futuro se construye hoy.
              Desde nuestra fundación, hemos apostado por la innovación, la
              investigación científica y el respeto por la naturaleza para
              desarrollar productos que potencien el rendimiento de los cultivos de
              manera sustentable.
            </p>

            <div className="mt-12 flex flex-col gap-8">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary shadow-md">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/nosotros-agridrop.jpg"
              alt="Equipo de Agridrop trabajando en el campo"
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
