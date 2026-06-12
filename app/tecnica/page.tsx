import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Técnica y Entrenamiento - Espanol Taekwondo',
  description: 'Aprende técnica, tácticas, planes de entrenamiento y ejercicios de taekwondo. Guía completa para mejorar tu nivel en el arte marcial olímpico.',
}

const techniques = [
  {
    id: 'pateos',
    label: 'Pateos fundamentales',
    items: [
      { name: 'Dollyo chagi', desc: 'La patada circular o giratoria es la más utilizada en competición. Se ejecuta girando la cadera y extendiendo la pierna en arco. Exige flexibilidad en isquiotibiales y fuerza explosiva en cuádriceps.' },
      { name: 'Dwi chagi', desc: 'Patada trasera. El atleta gira 180° y proyecta el talón hacia el oponente. De las más poderosas, ideal para contrarrestar avances del rival.' },
      { name: 'Ap chagi', desc: 'Patada frontal directa con el metatarso. Sirve para mantener la distancia y perturbar el equilibrio del adversario.' },
      { name: 'Yeop chagi', desc: 'Patada lateral con el borde externo del pie. Requiere excelente control de cadera y es muy efectiva para zonas medias.' },
    ],
  },
  {
    id: 'avanzadas',
    label: 'Técnicas avanzadas',
    items: [
      { name: 'Naeryo chagi', desc: 'Patada descendente con el talón. Se eleva la pierna por encima del nivel de la cabeza del oponente y cae con fuerza. Muy vistosa en poomsae y demostraciones.' },
      { name: 'Twio dollyo chagi', desc: 'Versión en salto de la patada circular. Aporta mayor potencia y altura, ideal para golpear la zona de la cabeza en competición.' },
      { name: 'Twio dwi chagi', desc: 'Patada giratoria trasera en salto. Una de las más espectaculares y potentes del repertorio. Exige coordinación y fuerza explosiva de tren inferior.' },
      { name: 'Bandal chagi', desc: 'Patada semicircular que golpea con la parte interna del empeine. Más rápida que la dollyo chagi, se usa para ataques rápidos al cuerpo.' },
    ],
  },
  {
    id: 'defensas',
    label: 'Defensas y bloqueos',
    items: [
      { name: 'Arae makki', desc: 'Bloqueo bajo para proteger la zona del abdomen e ingle. Se usa contra ataques directos al tronco inferior.' },
      { name: 'Momtong makki', desc: 'Bloqueo medio del antebrazo. Desvía ataques dirigidos al torso. Es la defensa más versátil del taekwondo.' },
      { name: 'Eolgul makki', desc: 'Bloqueo alto para proteger cabeza y cara. El antebrazo sube en diagonal para desviar patadas altas o puñetazos.' },
      { name: 'Sonnal makki', desc: 'Bloqueo con el canto de la mano (knifehand). Aporta mayor alcance y se utiliza también como golpe simultáneo en contraataque.' },
    ],
  },
]

const trainingPlan = [
  { day: 'Lunes', focus: 'Técnica de base', content: 'Calentamiento 10 min, repaso de patadas fundamentales (200 repeticiones por pierna), trabajo de poomsae Taegeuk 1-3, estiramientos 15 min.' },
  { day: 'Martes', focus: 'Acondicionamiento físico', content: 'Carrera continua 20 min, circuito de fuerza (sentadillas, zancadas, saltos), trabajo de abdominales, enfriamiento y estiramientos.' },
  { day: 'Miércoles', focus: 'Sparring y táctica', content: 'Calentamiento dinámico, trabajo de mitts (manoplas) con compañero, sparring ligero 3 asaltos de 2 min, análisis de errores.' },
  { day: 'Jueves', focus: 'Flexibilidad y equilibrio', content: 'Sesión de yoga marcial 30 min, patadas lentas para control y equilibrio, trabajo de saltos y coordinación, meditación 10 min.' },
  { day: 'Viernes', focus: 'Competición simulada', content: 'Calentamiento completo, combates de práctica con reglas oficiales, trabajo de estrategia y puntuación, revisión en vídeo si es posible.' },
  { day: 'Sábado', focus: 'Ruptura y demostración', content: 'Técnicas de rotura (kyukpa) con maderas progresivas, coreografía de demostración, trabajo artístico y expresivo del arte marcial.' },
]

const tips = [
  { num: '01', title: 'Prioriza la técnica sobre la fuerza', body: 'Un movimiento correcto ejecutado lentamente es más valioso que un golpe potente con mala forma. La velocidad llega sola cuando la mecánica es perfecta.' },
  { num: '02', title: 'Trabaja la flexibilidad a diario', body: 'Dedica al menos 15 minutos diarios a estirar isquiotibiales, aductores y flexores de cadera. La flexibilidad determina la altura y velocidad de tus patadas.' },
  { num: '03', title: 'Visualiza antes de ejecutar', body: 'Los deportistas de élite imaginan cada técnica antes de realizarla. La visualización mental activa los mismos circuitos neuronales que el movimiento físico.' },
  { num: '04', title: 'Analiza tus combates', body: 'Grábate en vídeo durante el sparring. Ver tus propios errores desde fuera acelera el aprendizaje más que cualquier corrección verbal de un entrenador.' },
]

export default function TecnicaPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-16 px-6 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="text-xs tracking-widest uppercase font-sans text-muted-foreground hover:text-foreground transition-colors">Inicio</Link>
            <span className="text-border" aria-hidden="true">/</span>
            <span className="text-xs tracking-widest uppercase font-sans text-foreground">Técnica</span>
          </div>
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground leading-tight text-balance mb-6">
            Técnica y<br />
            <span className="text-primary italic">Entrenamiento</span>
          </h1>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-2xl text-pretty text-lg">
            Una guía completa sobre técnica, tácticas de combate, planes de entrenamiento semanales y ejercicios para mejorar en taekwondo, independientemente de tu nivel.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative aspect-[21/7] overflow-hidden">
        <Image
          src="/images/technique-training.png"
          alt="Demostración de técnica de patada de taekwondo"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute bottom-8 left-8 right-8 max-w-2xl">
          <p className="font-heading text-2xl lg:text-3xl text-background italic leading-snug text-balance">
            &ldquo;El dominio técnico no se mide en velocidad, sino en la precisión de cada milímetro de movimiento.&rdquo;
          </p>
        </div>
      </div>

      {/* Techniques */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-14 text-balance">
          Catálogo de técnicas
        </h2>
        <div className="flex flex-col gap-16">
          {techniques.map(({ id, label, items }) => (
            <div key={id}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-border" aria-hidden="true" />
                <h3 className="font-heading text-xl text-foreground uppercase tracking-widest">{label}</h3>
                <div className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <div className="grid md:grid-cols-2 gap-0 border-l border-t border-border">
                {items.map(({ name, desc }) => (
                  <div key={name} className="border-r border-b border-border p-7 hover:bg-secondary transition-colors">
                    <h4 className="font-heading text-lg text-primary mb-2">{name}</h4>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed text-pretty">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training Plan */}
      <div className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Plan semanal</span>
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl text-background mb-10 text-balance">
            Programa de entrenamiento semanal
          </h2>
          <div className="flex flex-col divide-y divide-background/10">
            {trainingPlan.map(({ day, focus, content }) => (
              <div key={day} className="flex flex-col md:flex-row gap-4 md:gap-8 py-6">
                <div className="md:w-28 shrink-0">
                  <p className="font-heading text-xl text-accent">{day}</p>
                  <p className="text-xs tracking-widest uppercase text-background/40 font-sans mt-1">{focus}</p>
                </div>
                <p className="text-background/70 text-sm font-sans leading-relaxed text-pretty flex-1">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-14 text-balance">
          Consejos para progresar más rápido
        </h2>
        <div className="grid md:grid-cols-2 gap-0 border-l border-t border-border">
          {tips.map(({ num, title, body }) => (
            <div key={num} className="border-r border-b border-border p-8 hover:bg-secondary transition-colors">
              <p className="font-heading text-5xl text-primary/15 font-bold mb-5 leading-none">{num}</p>
              <h3 className="font-heading text-xl text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans text-pretty">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-heading text-2xl text-foreground text-balance">
            Explora también la historia del taekwondo
          </p>
          <Link
            href="/historia"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans shrink-0"
          >
            Ver historia <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </div>
    </>
  )
}
