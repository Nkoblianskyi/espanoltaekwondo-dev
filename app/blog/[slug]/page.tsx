import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles, getArticle } from '@/lib/blog'

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: `${article.title} - Espanol Taekwondo`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const others = articles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-16 px-6 bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="text-xs tracking-widest uppercase font-sans text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </Link>
            <span className="text-border" aria-hidden="true">/</span>
            <Link href="/blog" className="text-xs tracking-widest uppercase font-sans text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <span className="text-border" aria-hidden="true">/</span>
            <span className="text-xs tracking-widest uppercase font-sans text-foreground truncate max-w-[200px]">
              {article.title}
            </span>
          </div>
          <span className="inline-block bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-sans px-3 py-1 mb-5">
            {article.category}
          </span>
          <h1 className="font-heading text-4xl lg:text-6xl text-foreground leading-tight text-balance mb-6">
            {article.title}
          </h1>
          <p className="text-muted-foreground font-sans leading-relaxed text-lg text-pretty max-w-2xl">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative aspect-[21/8] overflow-hidden">
        <Image
          src={article.img}
          alt={article.title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-foreground/25" />
      </div>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-20" aria-label={article.title}>
        <div className="flex flex-col gap-8">
          {article.content.map((paragraph, i) => (
            <p key={i} className="font-sans text-base lg:text-lg leading-relaxed text-foreground/85 text-pretty">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-14">
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <div className="size-2 bg-primary" aria-hidden="true" />
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors px-7 py-3 text-xs tracking-[0.2em] uppercase font-sans"
        >
          <span aria-hidden="true">&#8592;</span> Volver al blog
        </Link>
      </article>

      {/* More articles */}
      {others.length > 0 && (
        <section className="bg-secondary border-t border-border py-16 px-6" aria-label="Más artículos">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-12 bg-primary" aria-hidden="true" />
              <span className="text-xs tracking-[0.25em] uppercase text-primary font-sans">Seguir leyendo</span>
            </div>
            <div className="grid md:grid-cols-3 gap-0 border-l border-t border-border">
              {others.map((other) => (
                <article key={other.slug} className="border-r border-b border-border group">
                  <Link href={`/blog/${other.slug}`} className="flex flex-col h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={other.img}
                        alt={other.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-6 hover:bg-background transition-colors">
                      <span className="text-xs tracking-[0.2em] uppercase font-sans text-primary">{other.category}</span>
                      <h3 className="font-heading text-lg text-foreground leading-snug text-balance">{other.title}</h3>
                      <span className="text-xs text-muted-foreground font-sans">
                        Leer articulo <span aria-hidden="true">&#8594;</span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
