"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, X } from "lucide-react"

const WA_URL = "https://wa.me/543382405621"

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Cerrar al hacer clic fuera
  useEffect(() => {
    if (!open) return
    function handleOutside(e: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutside)
    return () => document.removeEventListener("mousedown", handleOutside)
  }, [open])

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "0.75rem",
      }}
    >
      {/* Panel expandido */}
      {open && (
        <div
          ref={panelRef}
          style={{
            backgroundColor: "var(--surface-container)",
            border: "1px solid rgba(0, 226, 158, 0.25)",
            padding: "1.25rem 1.5rem",
            width: "260px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.72rem",
              lineHeight: 1.5,
              marginBottom: "1rem",
              letterSpacing: "0.01em",
            }}
          >
            ¿Querés mejorar el rendimiento de tu campo? Hablá con nosotros por WhatsApp y te asesoramos.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              width: "100%",
              padding: "0.55rem 0",
              backgroundColor: "var(--primary)",
              color: "var(--on-primary)",
              fontWeight: 700,
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <MessageCircle className="h-3.5 w-3.5 shrink-0" />
            Abrir WhatsApp
          </a>
        </div>
      )}

      {/* Botón toggle */}
      <button
        ref={toggleRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? "Cerrar chat de WhatsApp" : "Contactar por WhatsApp"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.65rem 1.1rem",
          backgroundColor: "var(--primary)",
          color: "var(--on-primary)",
          border: "none",
          cursor: "pointer",
          fontWeight: 700,
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          boxShadow: "0 4px 24px rgba(0, 226, 158, 0.35)",
          transition: "opacity 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {open ? (
          <X className="h-4 w-4 shrink-0" />
        ) : (
          <MessageCircle className="h-4 w-4 shrink-0" />
        )}
        WhatsApp
      </button>
    </div>
  )
}
