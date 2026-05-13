import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Agridrop - Tecnología Agrícola de Precisión',
  description: 'Potenciamos tu campo con ingeniería biológica para el rendimiento máximo. Productos agrícolas de alta calidad.',
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
      <body className={`${barlow.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <WhatsAppFloat />
        <div className="grain" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  )
}
