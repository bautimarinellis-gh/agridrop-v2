"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Check, Download, MessageCircle, X } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { products, slug, type Product } from "@/components/products-data"
import { whatsappLink } from "@/lib/site"

export function ProductsSection() {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <section id="productos" className="bg-mist py-20 lg:py-28">
      <div className="container-site">
        <div className="mb-12 max-w-2xl">
          <h2 className="heading-section">Un producto para cada paso de la aplicación</h2>
          <p className="mt-4 text-lg text-moss">
            En cada paso se puede perder eficacia: el agua, la mezcla en el
            tanque, la gota sobre la hoja y el cultivo. Todos tienen ficha
            técnica y etiqueta para descargar.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              onSelect={() => setSelected(product)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-h-[90vh] w-[min(94vw,56rem)] max-w-none gap-0 overflow-y-auto rounded-2xl border-0 p-0 sm:max-w-none"
        >
          {selected && <ProductDetail product={selected} />}
        </DialogContent>
      </Dialog>
    </section>
  )
}

/* ── Tarjeta de producto ─────────────────────────────────────────────────── */
function ProductCard({ product, onSelect }: { product: Product; onSelect: () => void }) {
  return (
    <article className="group relative flex flex-col rounded-2xl bg-white p-6 transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(12,43,34,0.10)]">
      <p className="text-sm font-semibold" style={{ color: product.color }}>
        Paso {product.step} · {product.stepLabel}
      </p>

      <div className="relative my-5 h-48">
        <Image
          src={product.imageUrl}
          alt={`Envase de ${product.name}`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 18vw"
        />
      </div>

      <h3 className="text-2xl font-bold tracking-tight">{product.name}</h3>
      <p className="mt-1 text-sm text-moss">{product.categoryShort}</p>
      <p className="mt-3 flex-1 text-[0.9375rem]">{product.tagline}</p>

      {/* El botón cubre toda la tarjeta: se puede tocar en cualquier parte */}
      <button
        onClick={onSelect}
        className="mt-5 inline-flex min-h-11 cursor-pointer items-center gap-2 border-t border-line pt-4 text-left font-bold text-leaf after:absolute after:inset-0 after:rounded-2xl"
      >
        Ver ficha técnica
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </button>
    </article>
  )
}

/* ── Ficha del producto (ventana) ────────────────────────────────────────── */
function ProductDetail({ product }: { product: Product }) {
  return (
    <>
      <DialogHeader className="sticky top-0 z-10 flex-row items-start justify-between gap-4 border-b border-line bg-white px-6 py-5 text-left sm:px-8">
        <div>
          <p className="text-sm font-semibold" style={{ color: product.color }}>
            Paso {product.step} · {product.stepLabel}
          </p>
          <DialogTitle className="mt-1 text-3xl font-extrabold tracking-tight">
            {product.name}
          </DialogTitle>
          <DialogDescription className="mt-1 text-moss">
            {product.categoryShort}
          </DialogDescription>
        </div>
        <DialogClose className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-mist text-forest hover:bg-line">
          <X className="h-5 w-5" />
          <span className="sr-only">Cerrar</span>
        </DialogClose>
      </DialogHeader>

      <div className="grid gap-8 px-6 py-7 sm:px-8 md:grid-cols-[15rem_1fr]">
        <div className="relative mx-auto h-64 w-full max-w-60 rounded-xl bg-mist md:h-72">
          <Image
            src={product.imageUrl}
            alt={`Envase de ${product.name}`}
            fill
            className="object-contain p-5"
            sizes="240px"
          />
        </div>

        <div className="flex flex-col gap-7">
          <p className="text-[1.0625rem]">{product.description}</p>

          {product.highlights.length > 0 && (
            <div>
              <h4 className="mb-3 font-bold">Características</h4>
              <ul className="flex flex-col gap-2.5">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[0.9375rem]">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0"
                      style={{ color: product.color }}
                      aria-hidden
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(product.dose || product.presentation) && (
            <dl className="grid gap-5 rounded-xl bg-mist p-5 sm:grid-cols-2">
              {product.dose && (
                <div>
                  <dt className="text-sm text-moss">Dosis recomendada</dt>
                  <dd className="mt-1 whitespace-pre-line font-semibold">{product.dose}</dd>
                </div>
              )}
              {product.presentation && (
                <div>
                  <dt className="text-sm text-moss">Presentación</dt>
                  <dd className="mt-1 font-semibold">{product.presentation}</dd>
                </div>
              )}
            </dl>
          )}

          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink(`Hola, quiero consultar por ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-forest text-white hover:bg-leaf"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Consultar por WhatsApp
            </a>
            {product.brochureUrl && (
              <a
                href={product.brochureUrl}
                download={`ficha-tecnica-${slug(product.name)}.pdf`}
                className="btn border-[1.5px] border-forest text-forest hover:bg-mist"
              >
                <Download className="h-4 w-4" aria-hidden />
                Ficha técnica
              </a>
            )}
            {product.labelUrl && (
              <a
                href={product.labelUrl}
                download={`etiqueta-${slug(product.name)}.pdf`}
                className="btn border-[1.5px] border-forest text-forest hover:bg-mist"
              >
                <Download className="h-4 w-4" aria-hidden />
                Etiqueta
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
