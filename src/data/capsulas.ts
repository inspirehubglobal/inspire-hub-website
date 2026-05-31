export interface Capsula {
  n: number;
  slug: string;
  titulo: string;
  framing: string;
  audio: string;
  reflexion: string;
}

export const capsulas: Capsula[] = [
  {
    n: 1,
    slug: "senales-silenciosas-de-agotamiento-7d79",
    titulo: "Señales silenciosas de agotamiento",
    framing:
      "No es sobre estar en crisis. Es sobre esas señales que tu cuerpo y tu mente ya te están dando, aunque todo se vea bien por fuera.",
    audio: "/audios/capsulas/capsula-1.mp3",
    reflexion:
      "¿En qué áreas de tu vida estás operando por inercia más que por convicción?"
  },
  {
    n: 2,
    slug: "este-momento-no-es-un-error-7e36",
    titulo: "Este momento no es un error",
    framing:
      "Lo que necesitas escuchar cuando estás en pausa y no sabes si eso está bien.",
    audio: "/audios/capsulas/capsula-2.mp3",
    reflexion:
      "Si confiaras un poco más en ti, sin necesitar que todo esté claro primero, ¿qué primer movimiento harías hoy?"
  },
  {
    n: 3,
    slug: "tres-preguntas-para-decidir-4252",
    titulo: "Tres preguntas para decidir con claridad",
    framing:
      "A veces no necesitas más respuestas. Necesitas mejores preguntas.",
    audio: "/audios/capsulas/capsula-3.mp3",
    reflexion:
      "De las tres preguntas que escuchaste, ¿cuál te costó más? Esa es la que más información tiene para ti."
  },
  {
    n: 4,
    slug: "aceptar-para-avanzar-0d96",
    titulo: "Aceptar para avanzar",
    framing:
      "No es resignarse. Cuando dejas de resistir lo que ya fue, recuperas la energía que necesitas para lo que viene.",
    audio: "/audios/capsulas/capsula-4.mp3",
    reflexion:
      "¿Qué parte de tu historia estás lista para aceptar y dejar de pelear?"
  },
  {
    n: 5,
    slug: "elegir-sin-ver-el-camino-617a",
    titulo: "Elegir sin ver todo el camino",
    framing:
      "Una visualización guiada. Escúchala en un lugar tranquilo, con los ojos cerrados si puedes.",
    audio: "/audios/capsulas/capsula-5.mp3",
    reflexion:
      "¿Qué camino elegirías si supieras que vas a estar bien sin importar cuál elijas?"
  }
];
