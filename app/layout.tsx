import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AgriDrop srl | Bioestimulantes y Coadyuvantes Agrícolas",
  description:
    "Desarrollo tecnológico superior para tu cultivo. Soluciones de formulación avanzada: Bioestimulantes y Coadyuvantes diseñados para maximizar el rendimiento agrícola.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/gota_agua.png",
        type: "image/png",
      },
    ],
    shortcut: "/gota_agua.png",
    apple: "/gota_agua.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0f0f1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
