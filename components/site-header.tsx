"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

function EtLogo() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      {/* Outer diamond/shield */}
      <path
        d="M21 2L39 12.5V29.5L21 40L3 29.5V12.5L21 2Z"
        fill="oklch(0.42 0.19 22)"
      />
      {/* Gold accent stripe — horizontal band */}
      <path
        d="M3 18H39V24H3Z"
        fill="oklch(0.72 0.14 75)"
        opacity="0.35"
      />
      {/* Fighter silhouette — stylised kicking figure */}
      {/* Body torso */}
      <rect x="19.5" y="14" width="3" height="8" rx="1.5" fill="white" />
      {/* Head */}
      <circle cx="21" cy="11.5" r="2.5" fill="white" />
      {/* Back leg — grounded */}
      <path
        d="M20 22 L16 32"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Kicking leg — raised high diagonal */}
      <path
        d="M22 22 L31 16"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Front arm — punch/guard */}
      <path
        d="M22 17 L28 20"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Back arm */}
      <path
        d="M20 17 L14 19"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Small gold star accent bottom center */}
      <path
        d="M21 35 L21.7 33 L23 33.5 L21.7 32 L22 30 L21 31.5 L20 30 L20.3 32 L19 33.5 L20.3 33 Z"
        fill="oklch(0.72 0.14 75)"
      />
    </svg>
  )
}

const navLinks = [
  { href: '/tecnica', label: 'Técnica' },
  { href: '/historia', label: 'Historia' },
  { href: '/reglas', label: 'Reglas' },
  { href: '/equipamiento', label: 'Equipamiento' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + Wordmark */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Espanol Taekwondo inicio">
          <EtLogo />
          <span className="font-heading text-foreground text-xs sm:text-sm font-bold tracking-widest uppercase leading-none flex flex-col gap-0 min-w-0">
            <span className="text-primary truncate">Espanol</span>
            <span className="text-foreground/70 text-[10px] sm:text-xs tracking-[0.22em] truncate">Taekwondo</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-sans transition-colors duration-200 tracking-wide uppercase',
                pathname === link.href || pathname?.startsWith(link.href + '/')
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span
            className={cn(
              'block w-6 h-0.5 bg-foreground transition-all duration-300 origin-center',
              menuOpen && 'rotate-45 translate-y-2'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-foreground transition-all duration-300',
              menuOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-foreground transition-all duration-300 origin-center',
              menuOpen && '-rotate-45 -translate-y-2'
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border px-6 py-6 flex flex-col gap-4"
          aria-label="Menú móvil"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-base font-sans transition-colors tracking-wide uppercase py-1',
                pathname === link.href ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
