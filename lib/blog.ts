export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  img: string
  content: string[]
}

export const articles: Article[] = [
  {
    slug: 'dominar-patada-giratoria',
    title: 'Cómo dominar la patada giratoria',
    excerpt: 'La dollyo chagi es una de las técnicas más utilizadas en competición. Aprende la mecánica correcta para ejecutarla con máxima potencia y precisión.',
    category: 'Técnica',
    img: '/images/blog-kicks.png',
    content: [
      'La dollyo chagi, conocida en español como patada circular o giratoria, es el golpe más empleado en competición de taekwondo. Su combinación de velocidad, alcance y potencia la convierte en el arma principal de cualquier atleta, independientemente de su estilo de combate.',
      'La mecánica correcta parte de una posición de guardia estable. El peso debe distribuirse en un 60-40% sobre la pierna de apoyo. El primer movimiento es la elevación de la rodilla: se levanta la pierna plegada hacia el pecho, apuntando la rodilla hacia el objetivo. Esta fase es crucial porque determina la trayectoria del golpe.',
      'A continuación se produce la extensión de la cadera. La cadera pivota hacia adelante mientras la pierna se extiende en arco desde la rodilla. El golpe impacta con el metatarso o el empeine según la zona objetivo: el empeine se usa para la cabeza y el metatarso para el torso, aportando mayor control.',
      'El retorno es tan importante como el golpe. Una patada que no regresa rápidamente deja al atleta en posición vulnerable. La pierna debe volver al mismo camino por el que salió, doblando la rodilla antes de posarla en el suelo.',
      'Para desarrollar potencia, trabaja la fuerza explosiva de cadera con ejercicios como sentadillas con salto y kettlebell swings. La velocidad llega con la repetición: realiza al menos 200 dollyo chagi por sesión, alternando pierna, hasta que el movimiento sea completamente automático.',
      'Un error frecuente es inclinar el tronco hacia atrás al ejecutar la patada. El tronco debe permanecer erguido o ligeramente inclinado hacia adelante para mantener el equilibrio y poder encadenar movimientos. Filmate en vídeo para detectar esta mala costumbre.',
      'En competición, la dollyo chagi se usa tanto en ataque directo como en contraataque. Cuando el oponente avanza, una patada giratoria bien sincronizada puede desviar su impulso y sumar los puntos necesarios para la victoria. La clave es el timing: anticiparte por décimas de segundo marca la diferencia.',
    ],
  },
  {
    slug: 'rutina-flexibilidad-taekwondo',
    title: 'Rutina de flexibilidad esencial para taekwondistas',
    excerpt: 'La flexibilidad es el fundamento invisible del taekwondo. Esta rutina de 30 minutos mejora el rango de movimiento y reduce el riesgo de lesiones.',
    category: 'Entrenamiento',
    img: '/images/blog-training.png',
    content: [
      'La flexibilidad no es un lujo en el taekwondo: es un requisito técnico. Sin una adecuada amplitud de movimiento en caderas, isquiotibiales y flexores, las patadas serán lentas, bajas y fácilmente bloqueables. Dedicar tiempo regular a la movilidad es una inversión directa en tu nivel técnico.',
      'La rutina que presentamos a continuación está diseñada para practicarse al final de cada sesión de entrenamiento, cuando los músculos están calientes. Realizarla en frío aumenta el riesgo de lesión y reduce su efectividad.',
      'Comienza con el estiramiento del flexor de cadera en zancada. Apoya la rodilla en el suelo y lleva la cadera hacia adelante durante 45 segundos por lado. Este músculo es decisivo para elevar la rodilla en la fase inicial de cualquier patada.',
      'Continúa con el estiramiento de isquiotibiales de pie: separa las piernas a la anchura de los hombros, inclínate hacia adelante con la espalda recta y mantén 60 segundos. Evita el clásico error de doblar la espalda; la tensión debe sentirse en la parte posterior del muslo, no en la columna.',
      'El spagat lateral (abertura lateral) es el ejercicio rey para las patadas altas. Desciende lentamente manteniendo la pelvis recta y sin inclinar el tronco. No llegues al dolor; trabaja en el límite del malestar controlado durante 2 minutos.',
      'Para los abductores, practica el estiramiento de la mariposa sentado: une las plantas de los pies y lleva las rodillas hacia el suelo. Las manos en los tobillos y la presión suave de los codos sobre los muslos ayudan a aumentar el rango. Mantén 90 segundos.',
      'Finaliza con el estiramiento del piriforme (músculo profundo de la cadera): cruza un tobillo sobre la rodilla opuesta mientras estás sentado y presiona suavemente la rodilla cruzada hacia abajo. Este músculo, frecuentemente olvidado, es responsable de muchas lesiones en taekwondistas que no lo trabajan.',
      'La constancia es más importante que la intensidad. Cinco minutos diarios de estiramientos específicos producen más mejora que una sesión de 30 minutos una vez a la semana. La flexibilidad se construye lentamente; no la fuerces ni esperes resultados inmediatos.',
    ],
  },
  {
    slug: 'taekwondo-juegos-olimpicos',
    title: 'El taekwondo en los Juegos Olímpicos',
    excerpt: 'Un recorrido completo por la historia del taekwondo olímpico, desde las primeras demostraciones hasta los modernos sistemas electrónicos de puntuación.',
    category: 'Historia',
    img: '/images/blog-olympic.png',
    content: [
      'Pocos deportes pueden presumir de haber protagonizado una transformación tan radical en tan pocas décadas como el taekwondo. De arte marcial regional de la península coreana a deporte olímpico con más de 80 millones de practicantes en el mundo: este es el viaje del taekwondo hacia la gloria olímpica.',
      'Los primeros pasos en el olimpismo llegaron en Seúl 1988, donde el taekwondo fue incluido como deporte de demostración. El público coreano vibró con cada combate, pero las medallas no contaban en el medallero oficial. Era solo un escaparate, pero fue suficiente para despertar el interés del Comité Olímpico Internacional.',
      'Cuatro años después, en Barcelona 1992, el taekwondo volvió a los Juegos como deporte de demostración. Esta vez en suelo español, ante un público mediterráneo que respondió con entusiasmo. El espectáculo de los combates convenció a los últimos escépticos de que este deporte merecía su lugar permanente en los Juegos.',
      'La oficialización llegó en 1994, cuando el COI reconoció al taekwondo como disciplina olímpica de pleno derecho para los Juegos de Sídney 2000. Con cuatro categorías de peso masculinas y cuatro femeninas, el deporte tenía por fin su sitio definitivo junto a la halterofilia, la lucha o el boxeo.',
      'Sídney 2000 fue histórico para España. El taekwondo español celebró su primer metal olímpico, marcando el inicio de una era dorada que se confirmaría en Atenas 2004 con dos medallas de oro en una misma edición de los Juegos, un logro extraordinario que colocó al taekwondo español en el mapa mundial.',
      'La gran revolución técnica llegó con el sistema de puntuación electrónica (PSS), introducido progresivamente entre 2008 y 2012. Los protectores del pecho con sensores de presión eliminaron buena parte de la subjetividad en el arbitraje. Los golpes válidos se registran automáticamente, reduciendo las polémicas y aumentando la credibilidad del deporte ante la audiencia global.',
      'Hoy el taekwondo olímpico sigue evolucionando. Se han introducido cámaras de visión instantánea para revisar acciones polémicas, y los sistemas electrónicos son cada vez más precisos. El reto ahora es mantener el equilibrio entre la efectividad del combate moderno y la esencia técnica y artística que hace del taekwondo algo único.',
    ],
  },
  {
    slug: 'introduccion-poomsae',
    title: 'Introducción al poomsae: el arte de las formas',
    excerpt: 'El poomsae es la expresión más artística y filosófica del taekwondo. Descubre sus orígenes, su significado y las formas más importantes del sistema Taegeuk.',
    category: 'Técnica',
    img: '/images/blog-poomsae.png',
    content: [
      'Mientras el kyorugi atrae a los amantes de la competición y el combate, el poomsae representa la dimensión más profunda y filosófica del taekwondo. Se trata de una secuencia de movimientos técnicos ejecutados en un patrón geométrico definido, en combate imaginario contra uno o varios oponentes invisibles.',
      'La palabra poomsae procede del coreano y se puede traducir aproximadamente como "forma de movimiento". Cada poomsae tiene un nombre y un significado simbólico profundo, generalmente vinculado a la filosofía taoísta, los trigramas del I Ching o la cosmología coreana tradicional.',
      'El sistema más usado en todo el mundo es el de las Taegeuk, ocho formas numeradas que corresponden a los diferentes grados de cinturón de color. Cada Taegeuk está asociado a uno de los trigramas del Trigrama del Libro de los Cambios y a un concepto filosófico: el primero representa el cielo y la luz, el octavo la tierra y la oscuridad.',
      'Para los cinturones negros (dan), el sistema continúa con formas más elaboradas: Koryo, Keumgang, Taebaek, Pyongwon, Sipjin, Jitae, Chonkwon, Hansu y Ilyeo. Cada una exige mayor control, profundidad de posiciones y dominio de las transiciones entre técnicas.',
      'Practicar poomsae aporta beneficios que el sparring no puede ofrecer. Permite trabajar la forma correcta de cada técnica sin la interferencia de un oponente activo. La concentración requerida desarrolla la coordinación motriz, el equilibrio y la conexión mente-cuerpo que caracterizan a los grandes atletas de este deporte.',
      'En competición de poomsae, los jueces evalúan dos componentes: precisión (exactitud de las técnicas, líneas de mirada, dirección de los pasos) y presentación (energía, velocidad, potencia, equilibrio y ki-hap). El atleta completo en ambas dimensiones es quien obtiene las puntuaciones más altas.',
      'Si practicas taekwondo por salud, autodefensa o desarrollo personal y no tienes interés en el combate, el poomsae es la rama perfecta para ti. Algunos de los atletas más respetados del mundo del taekwondo son puramente poomse-ins que nunca han competido en kyorugi y han alcanzado cotas técnicas extraordinarias.',
    ],
  },
  {
    slug: 'nutricion-deportista-taekwondo',
    title: 'Nutrición para el deportista de taekwondo',
    excerpt: 'Lo que comes determina cómo te mueves. Una guía práctica de nutrición adaptada a las demandas energéticas específicas del entrenamiento de taekwondo.',
    category: 'Entrenamiento',
    img: '/images/blog-nutrition.png',
    content: [
      'El taekwondo es un deporte de alta intensidad que combina esfuerzos explosivos cortos con períodos de actividad moderada. Esta naturaleza intermitente tiene implicaciones concretas en la estrategia nutricional del atleta, que no puede limitarse a seguir una dieta genérica de "deportista".',
      'Los carbohidratos son el combustible principal del taekwondo. Las patadas explosivas, los cambios de dirección y los saltos se nutren de glucógeno muscular. Un atleta que entrena dos veces al día necesita entre 5 y 7 gramos de carbohidratos por kilogramo de peso corporal al día para mantener sus depósitos llenos.',
      'Las fuentes de carbohidratos deben ser de calidad: arroz, pasta, avena, patata, pan integral y frutas. Los azúcares simples se reservan para el periodo pre y post entrenamiento, donde tienen un papel concreto en el aporte rápido de energía y la recuperación glucogénica.',
      'La proteína es la protagonista de la recuperación. Con cada sesión de entrenamiento se producen microroturas en las fibras musculares que deben repararse. Los atletas de taekwondo necesitan entre 1.6 y 2 gramos de proteína por kilogramo de peso. Fuentes recomendadas: huevo, pollo, pescado, legumbres y lácteos.',
      'La hidratación merece especial atención porque los atletas que compiten en categorías de peso pueden verse tentados a deshidratarse para bajar kilos. Esta práctica es peligrosa y penaliza directamente el rendimiento: incluso una deshidratación del 2% reduce la fuerza explosiva hasta un 20%.',
      'La dieta mediterránea, tan arraigada en la cultura española, es en realidad un modelo excelente para el taekwondista. El aceite de oliva aporta grasas antiinflamatorias, el pescado azul es fuente de omega-3 que mejora la recuperación, y la abundancia de vegetales y frutas proporciona los micronutrientes necesarios para el metabolismo energético.',
      'La pre-competición merece una estrategia específica. Las 24-48 horas previas a un campeonato deben priorizarse los carbohidratos complejos, moderando las grasas y la fibra para evitar molestias digestivas durante el combate. La noche anterior, una cena rica en arroz o pasta con proteína moderada es la opción clásica y probada.',
    ],
  },
  {
    slug: 'sistema-cinturones-dan',
    title: 'El sistema de cinturones y dan: un camino de por vida',
    excerpt: 'Los cinturones del taekwondo no son solo colores: representan un camino de desarrollo personal, técnico y filosófico que puede durar toda una vida.',
    category: 'Filosofía',
    img: '/images/blog-belt.png',
    content: [
      'Cuando alguien ajeno al taekwondo ve un cinturón negro, a menudo lo interpreta como "experto" o "máximo nivel". Esta es una visión completamente equivocada del sistema de graduaciones. En el taekwondo, el primer dan negro representa el comienzo de la formación real, no su culminación.',
      'El sistema de cinturones modernos fue creado por Jigoro Kano, fundador del judo, a finales del siglo XIX. El taekwondo adoptó esta estructura y la adaptó con sus propios colores y significados. Los grados de color (gup) van del décimo al primero, en orden descendente, y corresponden a los cinturones desde el blanco hasta el rojo o negro con franja roja.',
      'El cinturón blanco simboliza la pureza del principiante: mente abierta, sin conocimiento previo que deba ser desaprendido. El amarillo evoca la tierra donde se siembra la semilla. El verde es el crecimiento. El azul apunta hacia el cielo como objetivo. El rojo advierte al atleta y a su entorno: ya tiene conocimiento suficiente para ser peligroso.',
      'El cinturón negro no es, como decíamos, el final del camino. Es el grado uno de una nueva escala con nueve niveles (dan). Los tres primeros dan se consideran "aprendiz de instructor". Del cuarto al sexto dan, "maestro". Del séptimo al noveno, "gran maestro". El décimo dan, el más alto teóricamente posible, se ha concedido de forma honorífica en contadas ocasiones a lo largo de la historia.',
      'El tiempo entre grados no es arbitrario. Las federaciones establecen períodos mínimos de práctica entre exámenes que se van alargando conforme se asciende. Pasar de primer a segundo dan requiere como mínimo dos años de práctica. De quinto a sexto, cinco años. Estos períodos garantizan que el desarrollo interno acompañe al técnico.',
      'Los exámenes de grado evalúan mucho más que la destreza técnica. La actitud, el comportamiento con compañeros y superiores, la comprensión de la filosofía y el compromiso con el entrenamiento son factores que los maestros examinadores valoran con el mismo rigor que la precisión de las patadas.',
      'Muchos practicantes que alcanzan el primer dan negro sienten una combinación de orgullo y humildad: el orgullo de haber superado años de esfuerzo, y la humildad de entender que el verdadero aprendizaje acaba de comenzar. Esta tensión creativa entre lo logrado y lo que queda por aprender es, según los maestros, la esencia misma del camino del taekwondo.',
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
