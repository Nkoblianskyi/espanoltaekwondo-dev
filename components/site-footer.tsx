import Link from 'next/link'

const navLinks = [
  { href: '/tecnica', label: 'Técnica' },
  { href: '/historia', label: 'Historia' },
  { href: '/reglas', label: 'Reglas' },
  { href: '/equipamiento', label: 'Equipamiento' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      <div className="h-1 bg-primary w-full" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-background/10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-3" aria-label="Espanol Taekwondo inicio">
              <span className="flex items-center justify-center size-8 bg-primary text-primary-foreground font-heading font-bold text-base leading-none" aria-hidden="true">
                ET
              </span>
              <span className="font-heading text-background text-sm font-semibold tracking-widest uppercase">
                <span className="text-accent">espanol</span> taekwondo
              </span>
            </Link>
            <p className="text-background/50 text-xs leading-relaxed max-w-xs font-sans">
              Información general sobre el taekwondo en España. Arte marcial, deporte y disciplina olímpica.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-background/30 text-xs tracking-widest uppercase font-sans mb-4">Secciones</p>
            <nav aria-label="Navegación del pie de página" className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/60 hover:text-background text-xs tracking-wide uppercase transition-colors font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="text-background/30 text-xs tracking-widest uppercase font-sans mb-4">Legal</p>
            <div className="flex flex-col gap-2">
              <Link href="/politica-cookies" className="text-background/60 hover:text-background text-xs tracking-wide transition-colors font-sans">
                Política de Cookies
              </Link>
              <Link href="/politica-privacidad" className="text-background/60 hover:text-background text-xs tracking-wide transition-colors font-sans">
                Política de Privacidad
              </Link>
              <a
                href="mailto:info@espanoltaekwondo.com"
                className="text-background/60 hover:text-accent text-xs tracking-wide transition-colors font-sans"
              >
                info@espanoltaekwondo.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-background/30 text-xs font-sans tracking-wide">
            &copy; 2026 espanol taekwondo &mdash; todo el contenido es de caracter informativo
          </p>
          <p className="text-background/20 text-xs font-sans tracking-widest uppercase">
            Arte marcial olímpica
          </p>
        </div>
      </div>
    </footer>
  )
}
