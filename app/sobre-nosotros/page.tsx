'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const team = [
  {
    name: 'Carlos Moreno',
    role: 'Editor jefe',
    bio: 'Cinturón negro 4.o dan con 20 años de experiencia en taekwondo competitivo. Ex-seleccionador regional y apasionado divulgador del arte marcial en España.',
  },
  {
    name: 'Elena Vásquez',
    role: 'Especialista en técnica',
    bio: 'Entrenadora certificada por la Real Federación Española de Taekwondo. Campeona nacional junior en 2014 y autora de varios programas de formación.',
  },
  {
    name: 'Marcos Ruiz',
    role: 'Historiador y filósofo del deporte',
    bio: 'Doctor en Ciencias del Deporte por la Universidad de Madrid. Investiga los fundamentos filosóficos y culturales de las artes marciales asiáticas en Europa.',
  },
]

const values = [
  { label: 'Rigor', body: 'Toda la información publicada está revisada por expertos practicantes y entrenadores certificados.' },
  { label: 'Accesibilidad', body: 'El conocimiento del taekwondo debe estar al alcance de todos, desde el principiante hasta el maestro.' },
  { label: 'Pasión', body: 'Cada artículo está escrito con el amor genuino al arte marcial que nos mueve a seguir entrenando cada día.' },
  { label: 'Independencia', body: 'Somos un proyecto editorial independiente, sin afiliación comercial con marcas ni federaciones.' },
]

function ContactDialog({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.nombre.trim()) e.nombre = 'El nombre es obligatorio.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Introduce un email válido.'
    if (!form.mensaje.trim() || form.mensaje.length < 10) e.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSent(true)
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative bg-background border border-border w-full max-w-lg">
        {/* Top accent */}
        <div className="h-1 bg-primary w-full" />

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-primary font-sans mb-2">Contacto</p>
              <h2 id="dialog-title" className="font-heading text-2xl text-foreground">
                Escríbenos
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cerrar formulario de contacto"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {sent ? (
            <div className="py-10 text-center flex flex-col gap-4 items-center">
              <div className="size-12 bg-primary/10 flex items-center justify-center">
                <div className="size-4 bg-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl text-foreground">Mensaje enviado</h3>
              <p className="text-sm text-muted-foreground font-sans text-pretty max-w-xs">
                Gracias por contactar con nosotros. Responderemos a tu consulta en un plazo de 48 horas.
              </p>
              <button
                onClick={onClose}
                className="mt-4 text-xs tracking-[0.2em] uppercase font-sans text-primary hover:text-foreground transition-colors border-b border-current pb-0.5"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nombre" className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  aria-invalid={!!errors.nombre}
                  aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                  className="border border-border bg-background text-foreground px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-primary transition-colors"
                  autoComplete="name"
                />
                {errors.nombre && (
                  <p id="nombre-error" className="text-xs text-destructive font-sans" role="alert">{errors.nombre}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="border border-border bg-background text-foreground px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-primary transition-colors"
                  autoComplete="email"
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-destructive font-sans" role="alert">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensaje" className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={5}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  aria-invalid={!!errors.mensaje}
                  aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
                  className="border border-border bg-background text-foreground px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-primary transition-colors resize-none"
                />
                {errors.mensaje && (
                  <p id="mensaje-error" className="text-xs text-destructive font-sans" role="alert">{errors.mensaje}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-sans py-3.5 hover:bg-primary/90 transition-colors mt-2"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default function SobreNosotrosPage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-16 px-6 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="text-xs tracking-widest uppercase font-sans text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </Link>
            <span className="text-border" aria-hidden="true">/</span>
            <span className="text-xs tracking-widest uppercase font-sans text-foreground">Sobre Nosotros</span>
          </div>
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground leading-tight text-balance mb-6">
            Sobre <span className="text-primary italic">Nosotros</span>
          </h1>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-2xl text-pretty text-lg">
            Somos un equipo de practicantes, entrenadores e investigadores apasionados por el taekwondo. Nuestro objetivo es crear el recurso en español más completo y riguroso sobre este arte marcial olímpico.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 px-6 max-w-7xl mx-auto" aria-labelledby="mision-heading">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" aria-hidden="true" />
              <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Nuestra misión</span>
            </div>
            <h2 id="mision-heading" className="font-heading text-4xl lg:text-5xl text-foreground leading-tight text-balance">
              Divulgar el taekwondo<br />
              <em>con rigor y pasión</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed font-sans text-pretty">
              Espanol Taekwondo nació en 2018 como respuesta a la escasez de contenido de calidad en español sobre este deporte. Demasiadas webs ofrecían información superficial, desactualizada o copiada sin criterio. Decidimos construir algo diferente: una plataforma editorial donde cada artículo fuera revisado por expertos reales.
            </p>
            <p className="text-muted-foreground leading-relaxed font-sans text-pretty">
              Hoy contamos con más de 200 artículos publicados sobre técnica, historia, reglamento, equipamiento y filosofía del taekwondo. Todo el contenido es de carácter informativo y educativo, sin vínculos comerciales ni patrocinadores que influyan en nuestra línea editorial.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/technique-training.png"
              alt="Entrenamiento de taekwondo en sala"
              fill
              className="object-cover"
            />
            <div
              className="absolute top-0 right-0 w-14 h-14 bg-primary"
              style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-secondary" aria-labelledby="valores-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Valores</span>
          </div>
          <h2 id="valores-heading" className="font-heading text-3xl lg:text-4xl text-foreground mb-12 text-balance">
            Lo que nos guía
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-border">
            {values.map(({ label, body }) => (
              <div key={label} className="border-r border-b border-border p-8 hover:bg-background transition-colors">
                <div className="size-8 bg-primary/10 border border-primary/30 mb-5 flex items-center justify-center">
                  <div className="size-2.5 bg-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">{label}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed text-pretty">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 max-w-7xl mx-auto" aria-labelledby="equipo-heading">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">El equipo</span>
        </div>
        <h2 id="equipo-heading" className="font-heading text-3xl lg:text-4xl text-foreground mb-12 text-balance">
          Quiénes somos
        </h2>
        <div className="flex flex-col divide-y divide-border">
          {team.map(({ name, role, bio }) => (
            <div key={name} className="flex flex-col md:flex-row gap-6 py-8">
              <div className="md:w-64 shrink-0 flex flex-col gap-1">
                <p className="font-heading text-xl text-foreground">{name}</p>
                <p className="text-xs tracking-widest uppercase text-primary font-sans">{role}</p>
              </div>
              <p className="text-muted-foreground font-sans leading-relaxed text-pretty flex-1">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-foreground text-background" aria-labelledby="contacto-heading">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" aria-hidden="true" />
              <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Contacto</span>
            </div>
            <h2 id="contacto-heading" className="font-heading text-3xl lg:text-4xl text-background leading-tight text-balance">
              Tienes algo que decirnos?
            </h2>
            <p className="text-background/60 font-sans leading-relaxed text-pretty">
              Errores, sugerencias, colaboraciones o simplemente quieres saludar. Escríbenos y responderemos en menos de 48 horas. También puedes mandarnos un correo directamente a{' '}
              <a href="mailto:info@espanoltaekwondo.com" className="text-accent underline hover:text-background transition-colors">
                info@espanoltaekwondo.com
              </a>
              .
            </p>
          </div>
          <button
            onClick={() => setDialogOpen(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-10 py-4 text-xs tracking-[0.2em] uppercase font-sans shrink-0"
          >
            Abrir formulario de contacto
          </button>
        </div>
      </section>

      {dialogOpen && <ContactDialog onClose={() => setDialogOpen(false)} />}
    </>
  )
}
