import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Historia del Taekwondo - Espanol Taekwondo',
  description: 'Descubre la historia completa del taekwondo: desde los antiguos artes marciales coreanos hasta su inclusión en los Juegos Olímpicos y su desarrollo en España.',
}

const timeline = [
  {
    period: 'Antigüedad',
    years: 'Antes del s. XX',
    title: 'Las raíces del arte marcial',
    body: 'Los orígenes del taekwondo se remontan a los antiguos artes marciales coreanos como el Subak y el Taekkyeon, practicados durante el período de los Tres Reinos (57 a.C. - 668 d.C.). Murales y pinturas del período Goguryeo muestran figuras en poses de combate que recuerdan a las técnicas actuales.',
  },
  {
    period: 'Siglo XX',
    years: '1945 - 1955',
    title: 'Renacimiento tras la independencia',
    body: 'Tras la liberación de Corea del dominio japonés en 1945, los maestros comenzaron a sistematizar y unificar las tradiciones marciales bajo el término "Taekwondo". El general Choi Hong Hi fue uno de los principales impulsores de esta codificación, fundando en 1955 las bases del arte marcial moderno.',
  },
  {
    period: 'Fundación',
    years: '1973',
    title: 'Creación de la World Taekwondo',
    body: 'En 1973 se fundó en Seúl la World Taekwondo Federation (hoy World Taekwondo), el organismo internacional que establece las reglas y promueve el deporte a nivel global. Ese mismo año se celebró el primer Campeonato Mundial con la participación de 19 países.',
  },
  {
    period: 'Olimpismo',
    years: '1988 - 1992',
    title: 'Deporte de demostración olímpica',
    body: 'El taekwondo fue deporte de demostración en los Juegos Olímpicos de Seúl 1988 y Barcelona 1992. Precisamente en suelo español, el mundo pudo contemplar este arte marcial en el mayor escaparate deportivo del planeta, sentando las bases para su inclusión definitiva.',
  },
  {
    period: 'Oficialización',
    years: '2000',
    title: 'Deporte olímpico oficial',
    body: 'En los Juegos Olímpicos de Sídney 2000, el taekwondo debutó como disciplina olímpica oficial. Con cuatro categorías masculinas y cuatro femeninas, el deporte alcanzaba su máximo reconocimiento internacional. España conquistó su primera medalla olímpica en este deporte ese mismo año.',
  },
  {
    period: 'Modernización',
    years: '2010 - presente',
    title: 'La era del sistema electrónico',
    body: 'La introducción del sistema de puntuación electrónica (PSS) en los protectores del pecho transformó la forma de competir y de arbitrar. Los resultados se volvieron más objetivos y transparentes, dotando al deporte de mayor credibilidad ante la audiencia televisiva mundial.',
  },
]

const spainHistory = [
  { year: '1975', text: 'Llegada del taekwondo a España a través de masters coreanos que se establecieron en las principales ciudades.' },
  { year: '1983', text: 'Fundación de la Real Federación Española de Taekwondo, que organiza y regula la práctica del deporte en todo el territorio nacional.' },
  { year: '1992', text: 'Participación española en el taekwondo de demostración de los Juegos Olímpicos de Barcelona, ante el público propio.' },
  { year: '2000', text: 'Primera medalla olímpica española en taekwondo en los Juegos de Sídney, marcando el inicio de la era dorada.' },
  { year: '2004', text: 'Año histórico con dos medallas de oro en Atenas, colocando a España entre las grandes potencias mundiales del taekwondo.' },
  { year: '2016+', text: 'Consolidación del modelo español como referencia en la formación de atletas de alto rendimiento a nivel europeo e internacional.' },
]

export default function HistoriaPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-16 px-6 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="text-xs tracking-widest uppercase font-sans text-muted-foreground hover:text-foreground transition-colors">Inicio</Link>
            <span className="text-border" aria-hidden="true">/</span>
            <span className="text-xs tracking-widest uppercase font-sans text-foreground">Historia</span>
          </div>
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground leading-tight text-balance mb-6">
            Historia del<br />
            <span className="text-primary italic">Taekwondo</span>
          </h1>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-2xl text-pretty text-lg">
            De los antiguos guerreros coreanos a los estadios olímpicos. El taekwondo es una de las artes marciales con mayor proyección histórica y cultural del mundo.
          </p>
        </div>
      </div>

      {/* Hero */}
      <div className="relative aspect-[21/7] overflow-hidden">
        <Image
          src="/images/history-taekwondo.png"
          alt="Fotografía histórica de maestros de taekwondo en formación ceremonial"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute bottom-8 right-8 max-w-sm text-right">
          <p className="font-heading text-xl text-background italic leading-snug">
            &ldquo;El taekwondo es más que un deporte. Es un código de vida.&rdquo;
          </p>
        </div>
      </div>

      {/* World Timeline */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Cronología mundial</span>
        </div>
        <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-14 text-balance">
          Hitos históricos del taekwondo
        </h2>

        <div className="relative flex flex-col gap-0">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" aria-hidden="true" />
          {timeline.map(({ period, years, title, body }, idx) => (
            <div key={period} className="flex flex-col md:flex-row gap-6 py-10 border-b border-border last:border-0 md:pl-10">
              <div className="md:w-44 shrink-0 flex flex-col gap-1">
                {/* Dot on timeline */}
                <div className="absolute -left-2 mt-1 size-4 border-2 border-primary bg-background rounded-full hidden md:block" style={{ top: `${idx * 0}px` }} aria-hidden="true" />
                <span className="text-xs tracking-widest uppercase font-sans text-primary">{period}</span>
                <span className="font-heading text-lg text-muted-foreground">{years}</span>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="font-heading text-2xl text-foreground leading-snug">{title}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed text-pretty">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spain History */}
      <div className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" aria-hidden="true" />
              <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">España</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl text-background mb-6 text-balance">
              El taekwondo llega a España
            </h2>
            <p className="text-background/60 font-sans leading-relaxed text-pretty">
              España tiene una historia única en el taekwondo. Fue sede de los primeros Juegos Olímpicos donde el deporte se mostró al mundo moderno, y más tarde se convirtió en potencia olímpica con varios títulos mundiales en su palmarés.
            </p>

            <div className="relative mt-10 aspect-video overflow-hidden">
              <Image
                src="/images/spain-achievements.png"
                alt="Podio de competición de taekwondo en España"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col divide-y divide-background/10">
            {spainHistory.map(({ year, text }) => (
              <div key={year} className="flex gap-6 py-5">
                <span className="font-heading text-xl text-accent font-bold w-14 shrink-0">{year}</span>
                <p className="text-background/70 text-sm font-sans leading-relaxed text-pretty">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-0 border-l border-t border-border">
          {[
            { title: 'Cortesía', body: 'El taekwondista saluda antes y después de cada práctica y combate. El respeto al oponente, al entrenador y al arte es parte inseparable de la formación.' },
            { title: 'Integridad', body: 'La honestidad y la moral son pilares del taekwondo. Un atleta íntegro reconoce sus errores, acepta la derrota y compite con lealtad absoluta.' },
            { title: 'Perseverancia', body: 'El taekwondo enseña a no rendirse nunca. Los cinturones no se conceden; se conquistan con miles de horas de práctica constante y disciplinada.' },
            { title: 'Autocontrol', body: 'La capacidad de controlar impulsos, emociones y reacciones es fundamental tanto en el tatami como fuera de él. Es el mayor de los triunfos.' },
            { title: 'Espíritu indomable', body: 'Cuando el cuerpo quiere parar, la mente del taekwondista sigue adelante. Este espíritu forja no solo deportistas, sino personas resilientes.' },
            { title: 'Tenacidad', body: 'Las derrotas son lecciones, no fracasos. La mentalidad de seguir adelante ante la adversidad es el sello distintivo del auténtico taekwondista.' },
          ].map(({ title, body }) => (
            <div key={title} className="border-r border-b border-border p-8 hover:bg-secondary transition-colors">
              <h3 className="font-heading text-lg text-primary mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed text-pretty">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-heading text-2xl text-foreground text-balance">
            Conoce las reglas y disciplinas del taekwondo
          </p>
          <Link
            href="/reglas"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans shrink-0"
          >
            Ver reglas <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </div>
    </>
  )
}
