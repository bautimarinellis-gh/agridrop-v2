import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de privacidad - Agridrop",
  description:
    "Cómo Agridrop S.R.L. recopila, usa y protege los datos personales de quienes nos contactan.",
}

const CONTACT_EMAIL = "contacto.agridrop@gmail.com"

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Quién es responsable de tus datos",
    body: (
      <p>
        Agridrop S.R.L., con domicilio en Ruta 33 km 540, Rufino, Santa Fe,
        Argentina, es responsable del tratamiento de los datos personales que
        nos dejás a través de este sitio, de nuestros formularios en Facebook e
        Instagram y de WhatsApp.
      </p>
    ),
  },
  {
    title: "2. Qué datos recopilamos",
    body: (
      <ul>
        <li>Nombre y apellido.</li>
        <li>Número de teléfono y, si lo indicás, correo electrónico.</li>
        <li>
          Datos sobre tu actividad que completás en el formulario: tipo de
          actividad, provincia y cantidad aproximada de hectáreas.
        </li>
        <li>Los mensajes que nos enviás por WhatsApp, correo o redes sociales.</li>
      </ul>
    ),
  },
  {
    title: "3. Para qué los usamos",
    body: (
      <ul>
        <li>Responder tu consulta y enviarte precios o asesoramiento técnico.</li>
        <li>Contactarte por WhatsApp, teléfono o correo por el pedido que hiciste.</li>
        <li>Llevar un registro interno de consultas y mejorar nuestra atención.</li>
      </ul>
    ),
  },
  {
    title: "4. Formularios en Facebook e Instagram",
    body: (
      <p>
        Cuando completás un formulario de Agridrop dentro de Facebook o
        Instagram, Meta Platforms recopila esos datos y nos los entrega. El uso
        que Meta hace de tu información se rige por su propia política de
        privacidad. Nosotros usamos esos datos únicamente para los fines
        indicados en el punto 3.
      </p>
    ),
  },
  {
    title: "5. Con quién los compartimos",
    body: (
      <p>
        No vendemos ni cedemos tus datos a terceros. Solo acceden a ellos las
        personas de Agridrop que atienden tu consulta y los proveedores que nos
        prestan el servicio de mensajería, correo y alojamiento del sitio.
        Podemos entregarlos a una autoridad si una norma nos obliga.
      </p>
    ),
  },
  {
    title: "6. Cuánto tiempo los guardamos",
    body: (
      <p>
        Conservamos tus datos mientras dure la relación comercial o mientras
        sean necesarios para responder tu consulta. Podés pedirnos que los
        eliminemos en cualquier momento.
      </p>
    ),
  },
  {
    title: "7. Tus derechos",
    body: (
      <>
        <p>
          Podés acceder a tus datos, pedir que los corrijamos, actualicemos o
          eliminemos, y dejar de recibir comunicaciones nuestras. Para hacerlo,
          escribinos a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
        <p>
          La Agencia de Acceso a la Información Pública, en su carácter de
          órgano de control de la Ley N.º 25.326, tiene la atribución de atender
          las denuncias y reclamos de quienes resulten afectados en sus derechos
          por incumplimiento de las normas vigentes en materia de protección de
          datos personales.
        </p>
      </>
    ),
  },
  {
    title: "8. Cambios en esta política",
    body: (
      <p>
        Si modificamos esta política, publicaremos la nueva versión en esta
        misma página con su fecha de actualización.
      </p>
    ),
  },
]

export default function PrivacidadPage() {
  return (
    <main
      style={{
        backgroundColor: "var(--surface)",
        color: "var(--foreground)",
        minHeight: "100vh",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          href="/"
          className="label-style"
          style={{ color: "var(--primary)", textDecoration: "none" }}
        >
          ← Volver al inicio
        </Link>

        <h1
          className="mt-8 text-4xl font-extrabold md:text-5xl"
          style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}
        >
          Política de privacidad
        </h1>
        <p className="mt-4" style={{ color: "rgba(255,255,255,0.55)" }}>
          Última actualización: 14 de noviembre de 2026
        </p>

        <div className="privacy-body mt-12 flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.title} className="flex flex-col gap-3">
              <h2 className="text-xl font-bold" style={{ color: "#ffffff" }}>
                {section.title}
              </h2>
              <div
                className="flex flex-col gap-3 [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2"
                style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}
              >
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
