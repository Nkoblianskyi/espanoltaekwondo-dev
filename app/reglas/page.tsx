import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Reglas y Disciplinas - Espanol Taekwondo',
  description: 'Reglamento completo del taekwondo: kyorugi, poomsae, categorías de peso, sistema de puntuación electrónica y disciplinas de competición.',
}

const disciplines = [
  {
    name: 'Kyorugi',
    subtitle: 'Combate de competición',
    desc: 'El kyorugi es el combate uno contra uno bajo reglas oficiales. Los atletas ganan puntos al golpear zonas válidas del oponente con patadas y puñetazos. El torso y la cabeza son las zonas puntuables, con diferentes valores según la dificultad del golpe.',
    rules: [
      'El combate consta de 3 asaltos de 2 minutos con 1 minuto de descanso.',
      'Las patadas a la cabeza valen 3 puntos, las patadas giratorias a la cabeza 4 puntos.',
      'Los puñetazos al torso valen 1 punto; las patadas al torso, 2 puntos.',
      'Las patadas giratorias al cuerpo valen 4 puntos, con salto y giro, 5 puntos.',
      'Los golpes prohibidos incluyen ataques por debajo de la cintura y golpes a la espalda.',
    ],
  },
  {
    name: 'Poomsae',
    subtitle: 'Formas técnicas',
    desc: 'Las poomsae son secuencias de técnicas predefinidas que simulan combates imaginarios. Los jueces evalúan la precisión técnica, la potencia, la velocidad y el espíritu marcial (ki-hap). Existen categorías individuales, por parejas y por equipos.',
    rules: [
      'Se compite en categorías según el cinturón (dan) del atleta.',
      'Los jueces puntúan de 6.0 a 10.0 en precisión y de 4.0 a 6.0 en presentación.',
      'Las poomsae olímpicas son las Taegeuk (para cinturones de color) y las Koryo, Keumgang, etc. (para dan).',
      'Se penalizan las caídas, los pasos extras y las técnicas fuera de la forma oficial.',
    ],
  },
  {
    name: 'Demostración',
    subtitle: 'Arte y espectáculo',
    desc: 'Las demostraciones combinan rotura de tablas, acrobacias, kicking performativo y coreografías artísticas. No tienen la restricción de las formas oficiales, por lo que los atletas pueden mostrar su creatividad junto con su nivel técnico.',
    rules: [
      'Los equipos de demostración suelen constar de 5 a 12 personas.',
      'Se evalúa la precisión, la coordinación grupal, la dificultad y el impacto visual.',
      'La rotura de tablas a gran altura requiere plataformas elevadas de hasta 3 metros.',
      'Es habitual en ceremonias de apertura, eventos culturales y exhibiciones internacionales.',
    ],
  },
]

const weightCategories = {
  masculino: [
    { cat: '-58 kg', name: 'Fin' },
    { cat: '-68 kg', name: 'Pluma' },
    { cat: '-80 kg', name: 'Ligero' },
    { cat: '+80 kg', name: 'Pesado' },
  ],
  femenino: [
    { cat: '-49 kg', name: 'Fin' },
    { cat: '-57 kg', name: 'Pluma' },
    { cat: '-67 kg', name: 'Ligero' },
    { cat: '+67 kg', name: 'Pesado' },
  ],
}

const infractions = [
  { type: 'Kyong-go (advertencia)', examples: ['Pisar la línea de salida', 'Dar la espalda al oponente', 'Hablar durante el combate', 'Agarrar al adversario', 'Golpear debajo de la cintura'] },
  { type: 'Gam-jeom (penalización)', examples: ['Derribar intencionalmente al oponente', 'Golpear la cabeza del oponente caído', 'Atacar la espalda del adversario', 'Conducta antideportiva grave'] },
]

const belts = [
  { color: 'Blanco', dan: '10.° Gup', bg: 'bg-background border border-border' },
  { color: 'Amarillo', dan: '9.° - 8.° Gup', bg: 'bg-yellow-100 border border-yellow-300' },
  { color: 'Naranja', dan: '7.° Gup', bg: 'bg-orange-100 border border-orange-300' },
  { color: 'Verde', dan: '6.° - 5.° Gup', bg: 'bg-green-100 border border-green-300' },
  { color: 'Azul', dan: '4.° - 3.° Gup', bg: 'bg-blue-100 border border-blue-300' },
  { color: 'Rojo', dan: '2.° - 1.° Gup', bg: 'bg-red-100 border border-red-300' },
  { color: 'Negro', dan: '1.° - 9.° Dan', bg: 'bg-foreground border border-foreground text-background' },
]

export default function ReglasPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-16 px-6 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="text-xs tracking-widest uppercase font-sans text-muted-foreground hover:text-foreground transition-colors">Inicio</Link>
            <span className="text-border" aria-hidden="true">/</span>
            <span className="text-xs tracking-widest uppercase font-sans text-foreground">Reglas</span>
          </div>
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground leading-tight text-balance mb-6">
            Reglas y<br />
            <span className="text-primary italic">Disciplinas</span>
          </h1>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-2xl text-pretty text-lg">
            El reglamento del taekwondo define cómo se compite, cómo se puntúa y qué conductas son sancionables. Conoce todas las disciplinas y sus normas específicas.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-[21/7] overflow-hidden">
        <Image
          src="/images/rules-competition.png"
          alt="Combate oficial de taekwondo con árbitro y jueces"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-foreground/35" />
      </div>

      {/* Disciplines */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Modalidades</span>
        </div>
        <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-14 text-balance">
          Disciplinas de competición
        </h2>
        <div className="flex flex-col gap-14">
          {disciplines.map(({ name, subtitle, desc, rules }) => (
            <div key={name} className="grid lg:grid-cols-5 gap-8 border-b border-border pb-14 last:border-0 last:pb-0">
              <div className="lg:col-span-2">
                <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">{subtitle}</span>
                <h3 className="font-heading text-3xl text-foreground mt-2 mb-4">{name}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed text-pretty text-sm">{desc}</p>
              </div>
              <div className="lg:col-span-3">
                <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans mb-4">Normas principales</p>
                <ul className="flex flex-col gap-3" role="list">
                  {rules.map((rule, i) => (
                    <li key={i} className="flex gap-3 text-sm font-sans text-foreground leading-relaxed">
                      <span className="font-heading text-primary mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-pretty">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weight Categories */}
      <div className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Categorías</span>
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl text-background mb-10 text-balance">
            Categorías de peso olímpicas
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-xs tracking-widest uppercase text-background/40 font-sans mb-6">División masculina</p>
              <div className="flex flex-col divide-y divide-background/10">
                {weightCategories.masculino.map(({ cat, name }) => (
                  <div key={cat} className="flex items-center justify-between py-4">
                    <span className="font-heading text-xl text-accent">{cat}</span>
                    <span className="text-xs tracking-widest uppercase text-background/50 font-sans">{name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-background/40 font-sans mb-6">División femenina</p>
              <div className="flex flex-col divide-y divide-background/10">
                {weightCategories.femenino.map(({ cat, name }) => (
                  <div key={cat} className="flex items-center justify-between py-4">
                    <span className="font-heading text-xl text-accent">{cat}</span>
                    <span className="text-xs tracking-widest uppercase text-background/50 font-sans">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infractions */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-14 text-balance">
          Infracciones y sanciones
        </h2>
        <div className="grid md:grid-cols-2 gap-0 border-l border-t border-border">
          {infractions.map(({ type, examples }) => (
            <div key={type} className="border-r border-b border-border p-8">
              <h3 className="font-heading text-xl text-foreground mb-5">{type}</h3>
              <ul className="flex flex-col gap-2" role="list">
                {examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2 text-sm font-sans text-muted-foreground">
                    <div className="size-1.5 bg-primary rounded-full mt-2 shrink-0" aria-hidden="true" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground font-sans mt-4 text-pretty">
          Dos kyong-go equivalen a un gam-jeom. Cada gam-jeom suma un punto al marcador del adversario.
        </p>
      </div>

      {/* Belt System */}
      <div className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Grados</span>
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-10 text-balance">
            Sistema de cinturones
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {belts.map(({ color, dan, bg }) => (
              <div key={color} className={`${bg} p-4 flex flex-col gap-2 items-center text-center`}>
                <div className={`w-full h-2 ${color === 'Negro' ? 'bg-background' : 'bg-foreground'} opacity-20`} aria-hidden="true" />
                <p className="font-heading text-sm font-semibold">{color}</p>
                <p className="text-xs font-sans opacity-60">{dan}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-heading text-2xl text-foreground text-balance">
            Descubre el equipamiento necesario para competir
          </p>
          <Link
            href="/equipamiento"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans shrink-0"
          >
            Ver equipamiento <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </div>
    </>
  )
}
