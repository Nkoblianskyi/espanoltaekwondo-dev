"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('et_cookies')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('et_cookies', '1')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('et_cookies', '0')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-background px-6 py-5 border-t-2 border-primary"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm font-sans text-background/80 leading-relaxed max-w-xl">
          Este sitio utiliza cookies para mejorar la experiencia de navegación. Al continuar, aceptas nuestra{' '}
          <Link
            href="/politica-cookies"
            className="underline text-accent hover:text-background transition-colors"
          >
            política de cookies
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-xs uppercase tracking-widest text-background/50 hover:text-background transition-colors font-sans px-3 py-2"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="text-xs uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-sans px-5 py-2"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
