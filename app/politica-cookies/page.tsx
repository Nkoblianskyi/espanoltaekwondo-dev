import Link from 'next/link'

export const metadata = {
  title: 'Política de Cookies - Espanol Taekwondo',
  description: 'Política de cookies de Espanol Taekwondo. Información sobre los tipos de cookies que utilizamos y cómo gestionarlas.',
}

const sections = [
  {
    heading: 'Que son las cookies',
    body: 'Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita un sitio web. Permiten que el sitio recuerde información sobre la visita, como las preferencias de idioma y otras opciones de configuración. Esto hace que la próxima visita sea más fácil y que el sitio resulte más útil.',
  },
  {
    heading: 'Tipos de cookies que utilizamos',
    body: 'Este sitio web utiliza únicamente cookies técnicas necesarias para el funcionamiento básico de la página, como recordar si el usuario ha aceptado o rechazado la política de cookies (cookie de sesión). No utilizamos cookies de seguimiento, publicidad, análisis de terceros ni redes sociales.',
  },
  {
    heading: 'Cookies de sesión',
    body: 'Las cookies de sesión se eliminan automáticamente cuando el usuario cierra el navegador. Utilizamos una cookie de sesión para recordar la preferencia de aceptación de cookies durante la visita activa al sitio.',
  },
  {
    heading: 'Cookies de preferencias',
    body: 'Almacenamos en el almacenamiento local del navegador (localStorage) un indicador que recuerda si el usuario ha aceptado o rechazado la política de cookies. Este dato no se envía a ningún servidor externo y se puede borrar manualmente desde la configuración del navegador.',
  },
  {
    heading: 'Como desactivar las cookies',
    body: 'El usuario puede configurar su navegador para rechazar todas las cookies, para recibir una advertencia cuando se envía una cookie, o para aceptar solo ciertos tipos de cookies. Tenga en cuenta que si desactiva las cookies, es posible que algunas partes del sitio web no funcionen correctamente.',
  },
  {
    heading: 'Navegadores mas populares',
    body: 'La mayoría de los navegadores modernos permiten gestionar las cookies desde las opciones de configuración. En Google Chrome: Configuración > Privacidad y seguridad > Cookies. En Firefox: Opciones > Privacidad y seguridad. En Safari: Preferencias > Privacidad. En Microsoft Edge: Configuración > Privacidad, búsqueda y servicios.',
  },
  {
    heading: 'Actualizaciones de esta política',
    body: 'Esta política de cookies puede actualizarse para reflejar cambios en la tecnología, la legislación o la operación del sitio web. Le recomendamos que revise esta página periódicamente para mantenerse informado sobre cómo utilizamos las cookies.',
  },
  {
    heading: 'Contacto',
    body: 'Si tiene alguna pregunta sobre nuestra política de cookies, puede ponerse en contacto con nosotros a través de la página Sobre Nosotros o enviando un correo electrónico a info@espanoltaekwondo.com.',
  },
]

export default function PoliticaCookiesPage() {
  return (
    <>
      <div className="pt-32 pb-16 px-6 bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="text-xs tracking-widest uppercase font-sans text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </Link>
            <span className="text-border" aria-hidden="true">/</span>
            <span className="text-xs tracking-widest uppercase font-sans text-foreground">Política de Cookies</span>
          </div>
          <h1 className="font-heading text-4xl lg:text-6xl text-foreground leading-tight text-balance mb-4">
            Política de <span className="text-primary italic">Cookies</span>
          </h1>
          <p className="text-muted-foreground font-sans text-sm">Última actualización: junio de 2026</p>
        </div>
      </div>

      <div className="py-16 px-6 max-w-4xl mx-auto">
        <div className="flex flex-col gap-0 border-t border-border">
          {sections.map(({ heading, body }) => (
            <section key={heading} className="py-10 border-b border-border">
              <h2 className="font-heading text-xl text-foreground mb-4">{heading}</h2>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed text-pretty">{body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 flex gap-4 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors px-7 py-3 text-xs tracking-[0.2em] uppercase font-sans"
          >
            <span aria-hidden="true">&#8592;</span> Volver al inicio
          </Link>
          <Link
            href="/politica-privacidad"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-7 py-3 text-xs tracking-[0.2em] uppercase font-sans"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </>
  )
}
