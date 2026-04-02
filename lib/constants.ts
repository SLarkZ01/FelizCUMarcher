// Birthday Configuration
// Edit this file to personalize the celebration website

export const BIRTHDAY_CONFIG = {
  // The name of the person being celebrated
  name: "Alan",
  age: 22,
  
  // Event subtitle
  eventTitle: "Feliz Cumple",
  eventHighlight: "Alan",
  eventSubtitle: "22 años",
  
  // Birthday date (format: YYYY-MM-DD)
  birthdayDate: "2026-04-02T00:00:00-05:00",
  
  // Event time
  eventTime: "00:00",
  
  // Venue details
  venue: {
    name: "",
    address: "",
    city: "",
    mapUrl: "https://maps.google.com",
  },
  
  // Dress code
  dressCode: "",
  
  // Personal tribute message
  message: "Mano real gracias por ser ese amigo que nos saca una sonrisa en los momentos mas random. Real sin vos en el grupo las cosas no se sienten igual, sos como el rafael de las tortugas ninja. Sin vos se va esa chispa que nos hace reir a todos.",
  
  // Quote for the message section
  quote: "Que este nuevo año saques el pc, te llegue una vieja mas buena que un kevab y que te caiga plata como un bellako.",
  quoteAuthor: "Los reales",
  
  // From whom the celebration is
  from: "Los Tilines Mexico",
  
  // Navigation items
  navigation: [
    { label: "Inicio", href: "#hero" },
    { label: "Mensaje", href: "#mensaje" },
    { label: "Galería", href: "#galeria" },
    { label: "Conexión", href: "#conexion" },
    { label: "Tilines", href: "#tilines" },
    { label: "Mensajes", href: "#mensajes" },
  ],
  
  // Event itinerary
  itinerary: [
    { time: "00:00", title: "¡Arranca el cumple!", description: "Empieza el 2 de abril y comienza la celebración de Alan." },
    { time: "Todo el día", title: "Mensajes y buena", description: "Un día para recordar anécdotas, reír y celebrar juntos." },
  ],
  
  // Qualities/traits to celebrate
  qualities: [
    { title: "Lealtad", description: "Siempre firme pa su gente, a no ser de que el Edu se ponga hanzo en over" },
    { title: "Humor", description: "A esa gonorrea siempre saca una risa justo cuando hace falta." },
    { title: "Determinación", description: "Ese marica es como Toji Fushiguro, no puede vivir sin chamba" },
    { title: "Gran corazón", description: "'Ni para ligar sirvo, tiro mas hate que cariño' Fuentes? De Ortiz" },
  ],
  
  // Gallery photos
  photos: [
    { id: 1, url: "/images/tilines/Alan.webp", title: "Alan en su prime", alt: "Foto de Alan", caption: "Una cosa barbara", aspect: "portrait", width: 1024, height: 1536 },
    { id: 2, url: "/images/eldarkiel.webp", title: "Como se siente darkiel", alt: "Foto de recuerdo con Darkiel", caption: "Darkiel en over con el over con el gato", aspect: "landscape", width: 1079, height: 790 },
    { id: 3, url: "/images/elewualdo.webp", title: "Foto random del edu", alt: "El edu de la vil nada", caption: "Enserio alguien lee esto?", aspect: "portrait", width: 1200, height: 1600 },
    { id: 4, url: "/images/jorlorenovia.webp", title: "Jor lore", alt: "Jor si es salao mano", caption: "Jor si es salao mano", aspect: "landscape", width: 1052, height: 788 },
    { id: 5, url: "/images/lagordaesmia.webp", title: "El edu y mondragon cuando ven una gorda", alt: "Edu y mondragon con las gordas", caption: "Estos dos hpta apenas ven una de 8 de elixir", aspect: "landscape", width: 1080, height: 786 },
    { id: 6, url: "/images/lashuntrixyyo.webp", title: "Foto del grupo", alt: "Goku con camisa de las huntrix", caption: "Goku con camisa de las huntrix", aspect: "square", width: 640, height: 640 },
    { id: 7, url: "/images/perritonicolas.webp", title: "Mondragon en R.E.P.O", alt: "Me cago en tu pta madre", caption: "Me cago en tu pta madre", aspect: "square", width: 1053, height: 1076 },
    { id: 8, url: "/images/whoisthisguy.webp", title: "Who is this guy?", alt: "Who is this guy?", caption: "El darkiel con los permisos elevados en cualquier juego:", aspect: "landscape", width: 1080, height: 816 },
    { id: 9, url: "/images/yocondosviejas.webp", title: "Me detonan dos altas en roblox", alt: "Con dos viejas encima", caption: "El anticoños finalboss", aspect: "landscape", width: 3840, height: 2160 },
  ],

  // Gallery videos
  videos: [
    { id: 1, url: "/videos/anorexicasedetonaperuana.webm", title: "anorexica se detona peruana", poster: "/images/yo.webp", width: 848, height: 478 },
    { id: 2, url: "/videos/archeresquisoover.webm", title: "archer esquisofrenico en el over", poster: "/images/eldarkiel.webp", width: 848, height: 478 },
    { id: 3, url: "/videos/archersedetonarandomover.webm", title: "archer no perdona nada", poster: "/images/elewualdo.webp", width: 848, height: 478 },
    { id: 4, url: "/videos/archersedotonaaledu.webm", title: "archer se dotona al edu", poster: "/images/jorlorenovia.webp", width: 848, height: 478 },
    { id: 5, url: "/videos/eldarkiel.webm", title: "el darkiel despues de tirarle ulti a mi novia", poster: "/images/lagordaesmia.webp", width: 720, height: 1280 },
    { id: 6, url: "/videos/mecai.webm", title: "Lesbiana se cae sola y es grabada en directo", poster: "/images/lashuntrixyyo.webp", width: 1920, height: 1080 },
    { id: 7, url: "/videos/mexicoprime.webm", title: "mexico cuando se tumbaron al mencho", poster: "/images/perritonicolas.webp", width: 474, height: 850 },
    { id: 8, url: "/videos/sedetonanaldarkiel.webm", title: "se detonan al darkiel los 3 spidemarmans", poster: "/images/whoisthisguy.webp", width: 1280, height: 720 },
  ],

  globePeople: [
    {
      key: "alan",
      name: "Archer-Alan",
      city: "Cancun, Mexico",
      color: "#942B2B",
      lat: 21.1614,
      lng: -86.8248,
    },
    {
      key: "jorge",
      name: "Jorge",
      city: "Los Reyes Acaquilpan, Edo. de Mexico",
      color: "#000000",
      lat: 19.3606,
      lng: -98.98,
    },
    {
      key: "eduardo",
      name: "Eduardo",
      city: "Cosamaloapan, Mexico",
      color: "#ED21AF",
      lat: 18.28,
      lng: -95.93,
    },
    {
      key: "darkiel",
      name: "Dariel (Darkiel)",
      city: "Dallas, Texas",
      color: "#780BF4",
      lat: 32.7767,
      lng: -96.797,
    },
    {
      key: "mondragon",
      name: "Nicolas Mondragon",
      city: "Cali, Colombia",
      color: "#960202",
      lat: 3.4516,
      lng: -76.532,
    },
    {
      key: "thomas",
      name: "Thomas",
      city: "Timbio, Colombia",
      color: "#33C8FF",
      lat: 2.3528,
      lng: -76.6819,
    },
  ],

  globeConnections: [
    {
      order: 1,
      label: "Alan (CDMX) - Jorge (Guadalajara)",
      startPerson: "alan",
      endPerson: "jorge",
      startLat: 19.4326,
      startLng: -99.1332,
      endLat: 20.6597,
      endLng: -103.3496,
      arcAlt: 0.2,
      color: "#000000",
      startColor: "#942B2B",
      endColor: "#000000",
    },
    {
      order: 2,
      label: "Alan (CDMX) - Eduardo (Monterrey)",
      startPerson: "alan",
      endPerson: "eduardo",
      startLat: 19.4326,
      startLng: -99.1332,
      endLat: 25.6866,
      endLng: -100.3161,
      arcAlt: 0.25,
      color: "#ED21AF",
      startColor: "#942B2B",
      endColor: "#ED21AF",
    },
    {
      order: 3,
      label: "Alan (CDMX) - Darkiel (Dallas)",
      startPerson: "alan",
      endPerson: "darkiel",
      startLat: 19.4326,
      startLng: -99.1332,
      endLat: 32.7767,
      endLng: -96.797,
      arcAlt: 0.32,
      color: "#780BF4",
      startColor: "#942B2B",
      endColor: "#780BF4",
    },
    {
      order: 4,
      label: "Alan (CDMX) - Mondragon (Cali)",
      startPerson: "alan",
      endPerson: "mondragon",
      startLat: 19.4326,
      startLng: -99.1332,
      endLat: 3.4516,
      endLng: -76.532,
      arcAlt: 0.36,
      color: "#960202",
      startColor: "#942B2B",
      endColor: "#960202",
    },
    {
      order: 5,
      label: "Alan (CDMX) - Thomas (Popayan)",
      startPerson: "alan",
      endPerson: "thomas",
      startLat: 19.4326,
      startLng: -99.1332,
      endLat: 2.4448,
      endLng: -76.6147,
      arcAlt: 0.34,
      color: "#33C8FF",
      startColor: "#942B2B",
      endColor: "#33C8FF",
    },
    {
      order: 6,
      label: "Mondragon (Cali) - Thomas (Timbio)",
      startPerson: "mondragon",
      endPerson: "thomas",
      startLat: 3.4516,
      startLng: -76.532,
      endLat: 2.3528,
      endLng: -76.6147,
      arcAlt: 0.12,
      color: "#960202",
      startColor: "#960202",
      endColor: "#33C8FF",
    },
  ],

  friendsMessages: [
    {
      id: "jorge",
      friendKey: "jorge",
      name: "Jorge",
      profileImage: "/images/tilines/Jorge.webp",
      type: "text",
      message:
        "ola Alan la neta feliz cumpleanos we, espero que tengas un dia chingon y que te la pases a toda madre hoy, eres mi mejor amigo y neta espero que puedas conseguir esa lap que tanto quieres para que puedas usarla bien a gusto y obviamente una chamba que te quede como anillo al dedo y te vaya re bien, te quiero we (no homo)",
    },
    {
      id: "eduardo",
      friendKey: "eduardo",
      name: "Eduardo",
      profileImage: "/images/tilines/eledu.webp",
      type: "audio",
      audioSrc: "/audio/AudioEduardo.mp3",
      message: "Un mensaje en audio del Eduardo para Alan.",
    },
    {
      id: "darkiel",
      friendKey: "darkiel",
      name: "Darkiel",
      profileImage: "/images/tilines/darkiel.webp",
      type: "text",
      message:
        "Hola Alan feliz cumpleanos, espero que no le des mucha importancia y que no te desanimes por tu desempleo tu sabes muy bien que nosotros siempre estaremos para ti en tus momentos bueno y malos tilin, no queremos que te pongas mal en un dia tan especial para ti como para nosotros porque estamos muy felices de que podamos pasar este cumpleanos juntos aunque sea atraves de una pantalla, espero que pronto todos nos podamos encontrar en un lugar y reir juntos compartiendo momentos, esperamos que salgas adelante y que rompas esos limites que tu mismo te pones, queremos lo mejor para ti como para todo el grupo y te veo como un hermano mas, aunque suene muy raro te quiero mucho tilin y queremos verte y ver triunfar a cada uno de los del grupo (menos zomber) seria tremendo gusto y honor ser uno de los amigos q apoyo desde un inicio, tu puedes conseguir mas cosas de las que prometes, espero que la pases super bien rodeado de los que te quieren tilin y no te olvides que estaremos juntos en todo lo malo te queremos mucho brochacho attm:dariel",
    },
    {
      id: "nicolas-mondragon",
      friendKey: "mondragon",
      name: "Nicolas Mondragon",
      profileImage: "/images/tilines/NicolasMondragon.webp",
      type: "text",
      message:
        "Hola archer, en este dia especial quiero felicitarte por darle una vuelta mas al sil, no llevamos mucho de conocernos, puede que quizas nunca nos lleguemos a ver pero realmente aprecio tu amistad, sos un crack por la manera en la que tenes tus metas fijas y como te esforzas para alcanzarlas, a pesar de que seas una gorda tetona te queremos asi, te aprecio mucho y espero que podamos seguir siendo amigos muchos anos mas, que podas cumplir tus suenos y todo lo que tengas en mente para tu vida.\n\nAtt: tu supp favorito",
    },
    {
      id: "thomas",
      friendKey: "thomas",
      name: "Thomas",
      profileImage: "/images/tilines/Thomas.webp",
      type: "text",
      message:
        "Hola mano, la verdad queria darte un feliz cumpleanos como corresponde. Puede ser que vivo en Colombia y no tenga el dinero para celebrar algo asi, que la verdad, si fuera por mi, los invitaria a todos a un lugar abierto donde pudieramos gozarla, con comida, paisajes, de todo la verdad. Tal vez en un futuro podamos reunirnos todos en algun lugar para celebrar un evento tan especial como este. La verdad queria darte las gracias por todo lo que me has dado, que son cosas incluso monetarias que la verdad aprecio con mucho carino. Todo esto es lo menos que podia hacer. Con respecto a tu trabajo, no te preocupes. Sinceramente he visto que sos una persona hechada para adelante, que no importa que la vida te ponga obstaculos, vos mismo te has demostrado que podes pasarlos sin problema. De todo corazon, te deseo un feliz cumpleanos y que te vaya bien en tu vida en general, tanto con salud, monetariamente, con viejas, con tu familia. Con todo y todos. He visto como sos una persona muy resiliente, mientras tengas un objetivo claro no me cabe duda que vas a estar dandole hasta conseguirlo. La verdad espero que la pases bien el dia de hoy. Ademas, perdoname por no contestarte, creo que puedes ver que realmente estaba ocupado. Y no queria arruinar la sorpresa.",
    },
  ],
  
  // Social share text
  shareText: "Feliz cumpleaños Alan: ven a dejar tu mensaje",
  
  // Contact email for RSVP
  contactEmail: "",
  
  // Gift registry message
  giftMessage: "",
} as const

export type Photo = typeof BIRTHDAY_CONFIG.photos[number]
export type VideoClip = typeof BIRTHDAY_CONFIG.videos[number]
export type FriendMessage = typeof BIRTHDAY_CONFIG.friendsMessages[number]

export interface Wish {
  id: string
  name: string
  message: string
  date: string
}

export interface RSVPData {
  name: string
  email: string
  attending: boolean
  guests: number
  dietaryRestrictions?: string
  message?: string
}

// Initial wishes for demonstration
export const INITIAL_WISHES: Wish[] = [
  {
    id: "1",
    name: "Fer",
    message: "Feliz cumple, Alan. Que estos 22 vengan con pura cosa buena y muchas metas cumplidas.",
    date: "2026-03-31",
  },
  {
    id: "2", 
    name: "Iván",
    message: "Hermano, gracias por tantas risas y aventuras. Vamos por otro año épico.",
    date: "2026-04-01",
  },
  {
    id: "3",
    name: "Sofía",
    message: "Te mereces un cumpleaños increíble. Disfruta mucho tu día, Alan.",
    date: "2026-04-01",
  },
]
