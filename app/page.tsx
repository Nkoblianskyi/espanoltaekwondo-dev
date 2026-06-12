import Image from 'next/image'
import Link from 'next/link'

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" aria-label="Portada">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-taekwondo.png"
          alt="Atleta de taekwondo realizando una patada de salto"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="absolute left-8 top-36 bottom-20 w-px bg-primary/40 hidden lg:block" aria-hidden="true" />

      <div className="relative z-10 flex flex-1 items-end max-w-7xl mx-auto px-6 pb-20 pt-36">
        <div className="w-full grid lg:grid-cols-2 gap-10 items-end">
          <div className="flex flex-col gap-6">
            <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary font-medium">
              Arte Marcial · Deporte Olímpico · España
            </p>
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl leading-[0.92] text-foreground text-balance">
              La fuerza del
              <br />
              <span className="text-primary italic">Taekwondo</span>
            </h1>
            <p className="text-base font-sans text-muted-foreground leading-relaxed max-w-md text-pretty">
              Velocidad, disciplina y precisión. El taekwondo español lleva décadas forjando campeones olímpicos y generaciones de deportistas.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <Link
                href="/tecnica"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans hover:bg-primary/90 transition-colors"
              >
                Explorar técnica
              </Link>
              <Link
                href="/historia"
                className="inline-flex items-center text-xs tracking-[0.2em] uppercase font-sans text-foreground hover:text-primary transition-colors border-b border-current pb-0.5"
              >
                Ver historia
              </Link>
            </div>
          </div>

          <div className="flex flex-row lg:flex-col gap-3 lg:items-end">
            {[
              { n: '+60', label: 'años en España' },
              { n: '3', label: 'medallas olímpicas' },
              { n: '8', label: 'cinturones de grado' },
            ].map(({ n, label }) => (
              <div key={label} className="bg-background/80 backdrop-blur-sm border border-border px-5 py-3 flex items-baseline gap-2">
                <span className="font-heading text-2xl text-primary font-bold">{n}</span>
                <span className="text-xs text-muted-foreground tracking-wide uppercase font-sans">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-border bg-primary text-primary-foreground overflow-hidden py-2.5">
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 pr-10 text-xs tracking-[0.25em] uppercase font-sans opacity-90">
              <span>Taekwondo</span>
              <span className="inline-block w-1 h-1 bg-primary-foreground/50 rounded-full" />
              <span>España</span>
              <span className="inline-block w-1 h-1 bg-primary-foreground/50 rounded-full" />
              <span>Arte Marcial</span>
              <span className="inline-block w-1 h-1 bg-primary-foreground/50 rounded-full" />
              <span>Deporte Olímpico</span>
              <span className="inline-block w-1 h-1 bg-primary-foreground/50 rounded-full" />
              <span>Disciplina</span>
              <span className="inline-block w-1 h-1 bg-primary-foreground/50 rounded-full" />
              <span>Competición</span>
              <span className="inline-block w-1 h-1 bg-primary-foreground/50 rounded-full" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechniquePreview() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" aria-labelledby="tecnica-heading">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)' }}>
            <Image
              src="/images/technique-training.png"
              alt="Atleta de taekwondo ejecutando técnica de patada"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="absolute bottom-0 right-0 w-16 h-16 bg-primary"
            style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Técnica</span>
          </div>
          <h2 id="tecnica-heading" className="font-heading text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            Técnica, táctica y entrenamiento
          </h2>
          <p className="text-muted-foreground leading-relaxed font-sans text-pretty">
            Desde los pateos fundamentales hasta las combinaciones de competición, descubre los fundamentos técnicos del taekwondo, planes de entrenamiento y consejos para mejorar tu rendimiento.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {['Pateos y puñetazos', 'Guardias y defensas', 'Poomsae (formas)', 'Entrenamiento físico'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="size-1.5 bg-primary rounded-full shrink-0" aria-hidden="true" />
                <span className="text-sm text-foreground font-sans">{item}</span>
              </div>
            ))}
          </div>
          <Link
            href="/tecnica"
            className="self-start inline-flex items-center gap-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors px-7 py-3 text-xs tracking-[0.2em] uppercase font-sans mt-2"
          >
            Ver técnica completa <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function HistoryPreview() {
  return (
    <section className="bg-secondary py-20 px-6" aria-labelledby="historia-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Historia</span>
          </div>
          <h2 id="historia-heading" className="font-heading text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            Raíces milenarias,<br />
            <em>gloria moderna</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed font-sans text-pretty max-w-lg">
            Del antiguo arte marcial coreano a deporte olímpico reconocido mundialmente, el taekwondo ha recorrido un camino extraordinario. España abrazó esta disciplina con pasión y ha escrito sus propias páginas de historia.
          </p>
          <Link
            href="/historia"
            className="self-start inline-flex items-center gap-3 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors px-7 py-3 text-xs tracking-[0.2em] uppercase font-sans"
          >
            Leer historia completa <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>

        <div className="lg:col-span-2 relative aspect-[3/4] overflow-hidden">
          <Image
            src="/images/history-taekwondo.png"
            alt="Fotografía histórica de maestros de taekwondo"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2">
            <p className="text-xs tracking-widest uppercase font-sans">Desde 1950</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FactsSection1() {
  const facts = [
    {
      num: '01',
      title: 'El arte de las manos y los pies',
      body: 'La palabra "taekwondo" significa literalmente "el camino de los pies y las manos". El 70% de las técnicas de combate se ejecutan con las piernas, haciendo de las patadas su característica más distintiva.',
    },
    {
      num: '02',
      title: 'Velocidad récord',
      body: 'Una patada giratoria de taekwondo puede alcanzar velocidades de hasta 140 km/h. Esta combinación de velocidad y fuerza explosiva convierte al taekwondo en uno de los deportes de combate más espectaculares.',
    },
    {
      num: '03',
      title: 'Deporte olímpico desde 2000',
      body: 'El taekwondo fue incluido como deporte olímpico oficial en los Juegos de Sídney 2000. Antes, había sido deporte de demostración en Seúl 1988 y Barcelona 1992, precisamente en suelo español.',
    },
  ]

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" aria-labelledby="facts1-heading">
      <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
        <h2 id="facts1-heading" className="font-heading text-3xl lg:text-4xl text-foreground leading-tight text-balance">
          Datos que<br />
          <span className="text-primary italic">sorprenden</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xs text-right font-sans text-pretty hidden md:block">
          Tres hechos fundamentales sobre el taekwondo que todo aficionado debería conocer.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-0 border-l border-t border-border">
        {facts.map(({ num, title, body }) => (
          <article key={num} className="border-r border-b border-border p-8 hover:bg-secondary transition-colors">
            <p className="font-heading text-6xl text-primary/20 font-bold mb-6 leading-none">{num}</p>
            <h3 className="font-heading text-xl text-foreground mb-3 leading-snug">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-sans text-pretty">{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function AchievementsSection() {
  const achievements = [
    { year: '2000', event: 'Juegos Olímpicos de Sídney', result: 'Primera medalla olímpica española en taekwondo' },
    { year: '2004', event: 'Juegos Olímpicos de Atenas', result: 'Dos medallas de oro históricas para España' },
    { year: '2012', event: 'Campeonato del Mundo', result: 'España entre los diez mejores países del mundo' },
    { year: '2021', event: 'Juegos Olímpicos de Tokio', result: 'Presencia española en cuatro categorías de peso' },
  ]

  return (
    <section className="py-20 px-6 bg-foreground text-background" aria-labelledby="logros-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Logros</span>
          </div>
          <h2 id="logros-heading" className="font-heading text-4xl lg:text-5xl text-background leading-tight text-balance mb-6">
            España en la<br />
            <span className="text-accent italic">cima del mundo</span>
          </h2>
          <p className="text-background/60 leading-relaxed font-sans text-pretty max-w-md">
            El taekwondo español ha alcanzado cotas históricas en las competiciones más importantes, posicionando a España como referente global en este deporte olímpico.
          </p>
          <div className="relative mt-10 aspect-video overflow-hidden">
            <Image
              src="/images/spain-achievements.png"
              alt="Ceremonia de podio en competición de taekwondo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col divide-y divide-background/10">
          {achievements.map(({ year, event, result }) => (
            <div key={year} className="flex gap-6 py-6">
              <div className="w-14 shrink-0">
                <span className="font-heading text-2xl text-accent font-bold">{year}</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs tracking-widest uppercase text-background/40 font-sans">{event}</p>
                <p className="text-sm text-background/80 font-sans leading-relaxed">{result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FactsSection2() {
  const stats = [
    { value: '80M+', label: 'practicantes en todo el mundo' },
    { value: '210', label: 'países miembros de la WT' },
    { value: '8', label: 'categorías en Juegos Olímpicos' },
    { value: '1973', label: 'fundación de la World Taekwondo' },
    { value: '9', label: 'dan máximo alcanzable' },
    { value: '1952', label: 'primera federación nacional coreana' },
  ]

  return (
    <section className="py-20 px-6 stripe-accent" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="stats-heading" className="font-heading text-2xl text-muted-foreground text-center mb-14 tracking-wide">
          El taekwondo en cifras
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {stats.map(({ value, label }) => (
            <div key={value} className="bg-background p-8 text-center flex flex-col gap-2 items-center">
              <span className="font-heading text-4xl lg:text-5xl text-primary font-bold">{value}</span>
              <span className="text-xs text-muted-foreground tracking-wide uppercase font-sans text-balance text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RulesPreview() {
  const disciplines = [
    { name: 'Kyorugi', desc: 'Combate de competición entre dos atletas con sistema de puntuación electrónica.' },
    { name: 'Poomsae', desc: 'Formas técnicas predefinidas que demuestran dominio de las habilidades fundamentales.' },
    { name: 'Demostración', desc: 'Exhibición artística que combina acrobacias, ruptura de tablas y coreografías.' },
  ]

  return (
    <section className="py-20 px-6 bg-secondary" aria-labelledby="reglas-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/rules-competition.png"
            alt="Combate de taekwondo en competición oficial"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Reglas</span>
          </div>
          <h2 id="reglas-heading" className="font-heading text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            Reglas y<br />disciplinas
          </h2>
          <p className="text-muted-foreground leading-relaxed font-sans text-pretty">
            El taekwondo cuenta con reglamentos precisos que garantizan la seguridad y el fair play. Conoce las modalidades de competición y sus normas fundamentales.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            {disciplines.map(({ name, desc }) => (
              <div key={name} className="flex gap-4 border-b border-border pb-4 last:border-0">
                <div className="size-2 bg-primary mt-1.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-heading text-base text-foreground mb-1">{name}</p>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/reglas"
            className="self-start inline-flex items-center gap-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors px-7 py-3 text-xs tracking-[0.2em] uppercase font-sans mt-2"
          >
            Ver reglamento completo <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function EquipmentPreview() {
  const items = [
    { name: 'Dobok', desc: 'Uniforme oficial blanco con cinturón de grado' },
    { name: 'Hogu', desc: 'Protector de pecho con sistema electrónico de puntuación' },
    { name: 'Casco', desc: 'Protección de cabeza homologada para competición' },
    { name: 'Protectores', desc: 'Espinilleras, antebrazos y protector bucal' },
  ]

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" aria-labelledby="equipamiento-heading">
      <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Equipamiento</span>
          </div>
          <h2 id="equipamiento-heading" className="font-heading text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            El equipo del<br />
            <span className="text-primary italic">taekwondista</span>
          </h2>
        </div>
        <Link
          href="/equipamiento"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-7 py-3 text-xs tracking-[0.2em] uppercase font-sans shrink-0"
        >
          Ver todo el equipamiento
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-border">
        {items.map(({ name, desc }) => (
          <div key={name} className="border-r border-b border-border p-6 hover:bg-secondary transition-colors flex flex-col gap-3">
            <div className="size-10 border-2 border-primary/30 flex items-center justify-center">
              <div className="size-3 bg-primary" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-lg text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed text-pretty">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 relative aspect-[21/6] overflow-hidden">
        <Image
          src="/images/equipment-gear.png"
          alt="Equipamiento completo de taekwondo dispuesto sobre superficie blanca"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}

function BlogPreview() {
  const articles = [
    {
      slug: 'dominar-patada-giratoria',
      title: 'Cómo dominar la patada giratoria',
      excerpt: 'La dollyo chagi es una de las técnicas más utilizadas en competición. Aprende la mecánica correcta para ejecutarla con máxima potencia.',
      category: 'Técnica',
      img: '/images/blog-kicks.png',
    },
    {
      slug: 'rutina-flexibilidad-taekwondo',
      title: 'Rutina de flexibilidad esencial para taekwondistas',
      excerpt: 'La flexibilidad es clave en este deporte. Esta rutina de 30 minutos mejora el rango de movimiento y reduce el riesgo de lesiones.',
      category: 'Entrenamiento',
      img: '/images/blog-training.png',
    },
    {
      slug: 'taekwondo-juegos-olimpicos',
      title: 'El taekwondo en los Juegos Olímpicos',
      excerpt: 'Un recorrido por la historia del taekwondo olímpico, desde los juegos de demostración hasta los modernos sistemas electrónicos de puntuación.',
      category: 'Historia',
      img: '/images/blog-olympic.png',
    },
  ]

  return (
    <section className="py-20 px-6 bg-foreground" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" aria-hidden="true" />
              <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Blog</span>
            </div>
            <h2 id="blog-heading" className="font-heading text-4xl lg:text-5xl text-background leading-tight text-balance">
              Artículos y<br />
              <span className="text-accent italic">recursos</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 border border-background/30 text-background hover:bg-background hover:text-foreground transition-colors px-7 py-3 text-xs tracking-[0.2em] uppercase font-sans shrink-0"
          >
            Ver todos los artículos
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map(({ slug, title, excerpt, category, img }) => (
            <article key={slug} className="flex flex-col group">
              <Link href={`/blog/${slug}`} className="block overflow-hidden mb-4 relative aspect-[16/10]">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground text-xs tracking-widest uppercase font-sans px-2.5 py-1">
                    {category}
                  </span>
                </div>
              </Link>
              <div className="flex flex-col gap-3 flex-1">
                <Link href={`/blog/${slug}`}>
                  <h3 className="font-heading text-xl text-background group-hover:text-accent transition-colors leading-snug">
                    {title}
                  </h3>
                </Link>
                <p className="text-background/50 text-sm font-sans leading-relaxed text-pretty flex-1">{excerpt}</p>
                <Link
                  href={`/blog/${slug}`}
                  className="self-start text-xs tracking-[0.2em] uppercase font-sans text-accent hover:text-background transition-colors border-b border-current pb-px"
                >
                  Leer artículo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechniquePreview />
      <HistoryPreview />
      <FactsSection1 />
      <AchievementsSection />
      <FactsSection2 />
      <RulesPreview />
      <EquipmentPreview />
      <BlogPreview />
    </>
  )
}
