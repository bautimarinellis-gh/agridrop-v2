import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Agridrop — Coadyuvantes y bioestimulantes',
  description:
    'Coadyuvantes y bioestimulantes desarrollados en Rufino, Santa Fe: Drop Quality, Drop Flow, Drop Thor, Drop Elixir y Drop Forte. Ensayos de INTA, ISO 9001 y 14001. Envíos a todo el país.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${archivo.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
