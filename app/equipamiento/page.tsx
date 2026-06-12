import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Equipamiento - Espanol Taekwondo',
  description: 'Guía completa del equipamiento de taekwondo: dobok, hogu, casco, protectores, cinturones y todo lo que necesitas para practicar y competir.',
}

const equipment = [
  {
    id: 'dobok',
    name: 'Dobok',
    subtitle: 'El uniforme oficial',
    desc: 'El dobok es el uniforme tradicional del taekwondo. La palabra coreana significa literalmente "ropa del camino". Se compone de pantalón y chaqueta blancos, confeccionados en algodón o poliéster, diseñados para permitir la máxima amplitud de movimiento sin restricciones. La chaqueta se cruza sobre el pecho y se cierra con el cinturón.',
    details: [
      'Material recomendado: algodón 100% para principiantes, mezcla poliéster-algodón para competición.',
      'Las tallas van de 100 a 200 cm. Se recomienda elegir una talla mayor para cubrir los movimientos amplios.',
      'Para competición, el dobok debe estar homologado por World Taekwondo (WT).',
      'La chaqueta debe tener el logotipo de la federación o del club cosido en la espalda.',
    ],
    img: '/images/equipment-gear.png',
  },
  {
    id: 'hogu',
    name: 'Hogu',
    subtitle: 'Protector de pecho electrónico',
    desc: 'El hogu es el protector de pecho del taekwondo, y en la modalidad olímpica moderna incorpora sensores electrónicos (PSS - Protector Scoring System) que registran automáticamente los impactos válidos. Existen hogus de color rojo (para el combatiente "chong" o azul) y azul (para el "hong" o rojo), que corresponden a las esquinas asignadas en cada combate.',
    details: [
      'El sistema PSS electrónico fue introducido oficialmente en los Juegos Olímpicos de Londres 2012.',
      'Los sensores registran impactos por encima de un umbral de fuerza específico, eliminando subjetividad en el arbitraje.',
      'Para entrenamiento, se usan versiones no electrónicas que ofrecen la misma protección a menor coste.',
      'Tallas desde XS (infantil) hasta XL para adultos de gran envergadura.',
    ],
    img: '/images/equipment-gear.png',
  },
  {
    id: 'casco',
    name: 'Casco',
    subtitle: 'Protección de cabeza homologada',
    desc: 'El casco de taekwondo cubre la zona del cráneo, las sienes y la nuca. Algunos modelos incluyen protección facial mediante una rejilla o escudo transparente. En competición internacional, el casco también incorpora sensores electrónicos en la zona de la cabeza para registrar los impactos en esa área, que puntúan más que los golpes al cuerpo.',
    details: [
      'La zona de la cabeza puntúa 3 o 4 puntos (con giro) frente a 1 o 2 del torso en competición.',
      'Materiales: espuma de polietileno con cubierta de PU. Los modelos competitivos son más ligeros.',
      'Obligatorio en todas las competiciones federadas y recomendado en cualquier sparring.',
      'Debe ajustarse firmemente sin balanceo ni presión excesiva sobre los pómulos.',
    ],
    img: '/images/equipment-gear.png',
  },
  {
    id: 'protectores',
    name: 'Protectores',
    subtitle: 'Espinilleras, pies, guantes y bucal',
    desc: 'El equipamiento de protección del taekwondo incluye varios elementos adicionales: espinilleras y protectores de empeine, guantes de competición (más pequeños que los de boxeo, diseñados para no interferir con las patadas), protector bucal y en categorías masculinas, protector inguinal. Todos estos elementos son obligatorios en competición federada.',
    details: [
      'Las espinilleras protegen la tibia y el tobillo de impactos durante el sparring.',
      'Los protectores de empeine permiten golpear sin lastimarse el pie y reducen el riesgo de lesión en el adversario.',
      'El protector bucal debe moldearse en agua caliente para adaptarse a la dentición de cada atleta.',
      'Los guantes de taekwondo son más finos que los de boxeo para no interferir con las patadas de pie.',
    ],
    img: '/images/equipment-gear.png',
  },
  {
    id: 'cinturon',
    name: 'Cinturón',
    subtitle: 'Símbolo del nivel técnico',
    desc: 'El cinturón del taekwondo no es un mero complemento estético: representa el nivel técnico y filosófico del practicante dentro del sistema de grados. El color del cinturón indica en qué punto del aprendizaje se encuentra el atleta, desde el blanco del principiante hasta el negro y sus nueve niveles de dan. Se ata con un nudo específico que debe quedar a la misma longitud en ambos extremos.',
    details: [
      'Grados de color (gup): blanco, amarillo, naranja, verde, azul, azul oscuro, rojo, rojo-negro.',
      'Grados de dan: del primero (principiante avanzado) al noveno (gran maestro).',
      'El ancho estándar es de 4,5 cm. Los cinturones de color suelen ser de seda o poliéster.',
      'El cinturón negro tiene bordado el nombre del atleta en coreano o español según la federación.',
    ],
    img: '/images/blog-belt.png',
  },
]

const buyingGuide = [
  {
    level: 'Principiante',
    rec: 'Dobok de algodón básico + cinturón blanco. No es necesario invertir en protectores electrónicos hasta al menos 6 meses de práctica.',
  },
  {
    level: 'Intermedio (cinturón color)',
    rec: 'Dobok de calidad media + set completo de protectores (hogu, casco, espinilleras, guantes, bucal). Necesarios para participar en sparring y competiciones locales.',
  },
  {
    level: 'Avanzado (cinturón negro)',
    rec: 'Dobok de competición homologado WT + hogu electrónico PSS + casco con sensores + protectores premium. La inversión se justifica con la frecuencia de uso competitivo.',
  },
]

export default function EquipamientoPage() {
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
            <span className="text-xs tracking-widest uppercase font-sans text-foreground">Equipamiento</span>
          </div>
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground leading-tight text-balance mb-6">
            Equipamiento del <span className="text-primary italic">taekwondista</span>
          </h1>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-2xl text-pretty text-lg">
            Todo lo que necesitas saber sobre el equipo de entrenamiento y competición: materiales, tallas, normativa y consejos para cada nivel.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative aspect-[21/7] overflow-hidden">
        <Image
          src="/images/equipment-gear.png"
          alt="Equipamiento completo de taekwondo"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Equipment sections */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-14">
          <div className="h-px w-12 bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Guia completa</span>
        </div>

        <div className="flex flex-col gap-0 border-t border-border">
          {equipment.map(({ id, name, subtitle, desc, details }, idx) => (
            <section
              key={id}
              className={`py-16 border-b border-border grid lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
              aria-labelledby={`${id}-heading`}
            >
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-primary font-sans mb-2">{subtitle}</p>
                  <h2 id={`${id}-heading`} className="font-heading text-4xl text-foreground leading-tight">
                    {name}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed font-sans text-pretty">{desc}</p>
                <ul className="flex flex-col gap-2 mt-2" aria-label={`Detalles de ${name}`}>
                  {details.map((d, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="size-1.5 bg-primary mt-2 shrink-0" aria-hidden="true" />
                      <span className="text-sm text-foreground/80 font-sans leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={id === 'cinturon' ? '/images/blog-belt.png' : '/images/equipment-gear.png'}
                  alt={`${name} de taekwondo`}
                  fill
                  className="object-cover"
                />
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Buying guide */}
      <div className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Guia de compra</span>
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl text-background mb-12 text-balance">
            Que comprar según tu nivel
          </h2>
          <div className="flex flex-col divide-y divide-background/10">
            {buyingGuide.map(({ level, rec }) => (
              <div key={level} className="flex flex-col md:flex-row gap-6 py-8">
                <div className="md:w-48 shrink-0">
                  <p className="font-heading text-lg text-accent">{level}</p>
                </div>
                <p className="text-background/70 font-sans text-sm leading-relaxed text-pretty flex-1">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-heading text-2xl text-foreground text-balance">
            Conoce también las reglas de competición
          </p>
          <Link
            href="/reglas"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans shrink-0"
          >
            Ver reglamento <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </div>
    </>
  )
}
