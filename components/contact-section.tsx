import { MapPin, Globe, Mail, Droplet, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contacto" className="border-t border-border px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* CTA Card */}
        <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/20 to-primary/5 p-8 lg:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              Optimiza tu próxima campaña
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nuestro equipo técnico está listo para asesorarte en la elección del producto ideal para tu cultivo.
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild className="gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                <a href="mailto:ventas@agridrop.com.ar">
                  <Mail className="h-5 w-5" />
                  Enviar Email
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Company */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Droplet className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-semibold tracking-tight text-foreground">AgriDrop</span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Desarrollo y fabricación de coadyuvantes y bioestimulantes para la agricultura moderna.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground">
                  ISO 9001
                </span>
                <span className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                  ISO 14001
                </span>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Productos</h3>
              <div className="mt-4 flex flex-col gap-3">
                {[
                  { name: "Drop Forte", color: "bg-orange-400" },
                  { name: "Drop Flow", color: "bg-cyan-400" },
                  { name: "Drop Elixir", color: "bg-amber-400" },
                  { name: "Drop Thor", color: "bg-green-400" },
                  { name: "Drop Quality", color: "bg-violet-400" },
                ].map((product) => (
                  <a
                    key={product.name}
                    href="#productos"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-smooth hover:text-foreground"
                  >
                    <span className={`h-2 w-2 rounded-full ${product.color}`} />
                    {product.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Contacto</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Ruta 33 km. 540, Rufino, Santa Fe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 shrink-0 text-primary" />
                  <a href="https://www.agridrop.com.ar" className="transition-smooth hover:text-foreground">
                    www.agridrop.com.ar
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:ventas@agridrop.com.ar" className="transition-smooth hover:text-foreground">
                    ventas@agridrop.com.ar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 AgriDrop SRL. Todos los derechos reservados.
            </p>
            <div className="flex gap-2">
              {["bg-orange-400", "bg-cyan-400", "bg-amber-400", "bg-green-400", "bg-violet-400"].map((color, i) => (
                <div key={i} className={`h-2 w-2 rounded-full ${color}`} />
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
