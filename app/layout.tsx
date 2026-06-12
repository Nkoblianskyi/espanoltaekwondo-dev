import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Espanol Taekwondo - Arte Marcial y Deporte Olímpico en España',
    template: '%s - Espanol Taekwondo',
  },
  description:
    'Todo sobre el taekwondo en España: técnica, historia, reglas, equipamiento, logros olímpicos y más. El recurso definitivo en español sobre este arte marcial olímpico.',
  keywords: ['taekwondo', 'España', 'arte marcial', 'deporte olímpico', 'técnica', 'historia', 'reglas', 'cinturones'],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Espanol Taekwondo',
    description: 'Arte marcial y deporte olímpico. Información completa sobre el taekwondo en España.',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: { canonical: 'https://espanoltaekwondo.com' },
}

export const viewport: Viewport = {
  themeColor: '#f5f0e8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  )
}
