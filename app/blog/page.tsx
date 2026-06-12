import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/lib/blog'

export const metadata = {
  title: 'Blog - Espanol Taekwondo',
  description: 'Artículos sobre técnica, entrenamiento, historia y filosofía del taekwondo. Todo el contenido que un practicante o aficionado necesita.',
}

export default function BlogPage() {
  const [featured, ...rest] = articles

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
            <span className="text-xs tracking-widest uppercase font-sans text-foreground">Blog</span>
          </div>
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground leading-tight text-balance mb-6">
            Blog &amp; <span className="text-primary italic">Artículos</span>
          </h1>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-2xl text-pretty text-lg">
            Técnica, entrenamiento, historia y filosofía. Todo lo que necesitas saber sobre el taekwondo en un solo lugar.
          </p>
        </div>
      </div>

      {/* Featured article */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10" aria-labelledby="destacado-heading">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Artículo destacado</span>
        </div>
        <Link
          href={`/blog/${featured.slug}`}
          className="grid lg:grid-cols-2 gap-0 border border-border hover:border-primary transition-colors group"
          aria-labelledby="destacado-heading"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={featured.img}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col justify-between p-10 bg-foreground text-background">
            <div className="flex flex-col gap-5">
              <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">{featured.category}</span>
              <h2
                id="destacado-heading"
                className="font-heading text-3xl lg:text-4xl text-background leading-tight text-balance"
              >
                {featured.title}
              </h2>
              <p className="text-background/60 font-sans text-sm leading-relaxed text-pretty">
                {featured.excerpt}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8 pt-8 border-t border-background/10">
              <span className="text-xs tracking-[0.2em] uppercase font-sans text-accent">
                Leer artículo completo
              </span>
              <span className="text-accent" aria-hidden="true">&#8594;</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Article grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20" aria-label="Todos los artículos">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Todos los artículos</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-border">
          {rest.map((article) => (
            <article key={article.slug} className="border-r border-b border-border group">
              <Link href={`/blog/${article.slug}`} className="flex flex-col h-full">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-sans px-3 py-1">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-6 flex-1 hover:bg-secondary transition-colors">
                  <h3 className="font-heading text-xl text-foreground leading-snug text-balance">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed text-pretty flex-1">
                    {article.excerpt}
                  </p>
                  <span className="text-xs tracking-[0.2em] uppercase font-sans text-primary mt-2">
                    Leer articulo <span aria-hidden="true">&#8594;</span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
