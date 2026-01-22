"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Droplet, Mail } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Droplet className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">AgriDrop</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-smooth hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button size="sm" asChild className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="mailto:ventas@agridrop.com.ar">
              <Mail className="h-4 w-4" />
              Contactar
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-smooth hover:bg-card hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full gap-2 bg-primary text-primary-foreground">
              <a href="mailto:ventas@agridrop.com.ar">
                <Mail className="h-4 w-4" />
                Contactar
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
