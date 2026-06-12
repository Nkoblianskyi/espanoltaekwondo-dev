import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidad - Espanol Taekwondo',
  description: 'Política de privacidad de Espanol Taekwondo. Cómo recogemos, usamos y protegemos tus datos personales.',
}

const sections = [
  {
    heading: 'Responsable del tratamiento',
    body: 'El responsable del tratamiento de los datos personales recogidos a través de este sitio web es Espanol Taekwondo, con dirección de contacto en info@espanoltaekwondo.com. Esta política de privacidad se aplica exclusivamente a los datos personales que el usuario proporciona voluntariamente a través del formulario de contacto.',
  },
  {
    heading: 'Datos que recogemos',
    body: 'Únicamente recogemos los datos que el usuario introduce voluntariamente en el formulario de contacto: nombre, dirección de correo electrónico y el contenido del mensaje. No recogemos datos de navegación, no utilizamos cookies de seguimiento y no integramos herramientas de análisis de terceros que procesen datos personales.',
  },
  {
    heading: 'Finalidad del tratamiento',
    body: 'Los datos personales facilitados a través del formulario de contacto se utilizan exclusivamente para responder a la consulta o solicitud del usuario. No se utilizan para envíos de marketing, boletines informativos ni comunicaciones no solicitadas.',
  },
  {
    heading: 'Base legal del tratamiento',
    body: 'La base legal para el tratamiento de los datos facilitados voluntariamente es el consentimiento del propio usuario, expresado al enviar el formulario de contacto. El usuario puede retirar este consentimiento en cualquier momento solicitando la eliminación de sus datos.',
  },
  {
    heading: 'Plazo de conservación',
    body: 'Los datos de contacto se conservan durante el tiempo estrictamente necesario para gestionar la consulta y, como máximo, durante un período de 12 meses desde la última comunicación. Transcurrido este plazo, los datos son eliminados de forma segura.',
  },
  {
    heading: 'Cesión de datos a terceros',
    body: 'Este sitio web no cede, vende ni transfiere los datos personales de los usuarios a terceros, salvo obligación legal. Los datos no se transmiten fuera del Espacio Económico Europeo.',
  },
  {
    heading: 'Derechos del usuario',
    body: 'El usuario tiene derecho a acceder a sus datos personales, rectificarlos, suprimirlos, oponerse al tratamiento, solicitar la limitación del mismo y la portabilidad de los datos. Para ejercer cualquiera de estos derechos, puede contactar con nosotros en info@espanoltaekwondo.com indicando el derecho que desea ejercer y adjuntando copia de un documento que acredite su identidad.',
  },
  {
    heading: 'Seguridad de los datos',
    body: 'Adoptamos las medidas técnicas y organizativas necesarias para proteger los datos personales frente a accesos no autorizados, pérdida, destrucción o divulgación. Este sitio web utiliza conexión HTTPS para cifrar las comunicaciones entre el navegador del usuario y el servidor.',
  },
  {
    heading: 'Reclamaciones',
    body: 'Si considera que el tratamiento de sus datos personales no se ajusta a la normativa vigente, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), accesible en www.aepd.es.',
  },
  {
    heading: 'Cambios en esta política',
    body: 'Esta política de privacidad puede ser actualizada para reflejar cambios en nuestra operación o en la normativa aplicable. En caso de cambios sustanciales, se lo comunicaremos de forma visible en el sitio web. La fecha de la última actualización siempre figura al inicio de este documento.',
  },
]

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <div className="pt-32 pb-16 px-6 bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="text-xs tracking-widest uppercase font-sans text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </Link>
            <span className="text-border" aria-hidden="true">/</span>
            <span className="text-xs tracking-widest uppercase font-sans text-foreground">Política de Privacidad</span>
          </div>
          <h1 className="font-heading text-4xl lg:text-6xl text-foreground leading-tight text-balance mb-4">
            Política de <span className="text-primary italic">Privacidad</span>
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
            href="/politica-cookies"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-7 py-3 text-xs tracking-[0.2em] uppercase font-sans"
          >
            Política de cookies
          </Link>
        </div>
      </div>
    </>
  )
}
