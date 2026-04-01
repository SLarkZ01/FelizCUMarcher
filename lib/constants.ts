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
  birthdayDate: "2026-04-02",
  
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
    { label: "Mensajes", href: "#mensajes" },
  ],
  
  // Event itinerary
  itinerary: [
    { time: "00:00", title: "¡Arranca el cumple!", description: "Empieza el 2 de abril y comienza la celebración de Alan." },
    { time: "Todo el día", title: "Mensajes y buena vibra", description: "Un día para recordar anécdotas, reír y celebrar juntos." },
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
    { id: 1, url: "/images/yo.webp", title: "Thomas core", alt: "Un bebe random durmiendo", aspect: "portrait", width: 1080, height: 1311 },
    { id: 2, url: "/images/eldarkiel.webp", title: "Como se siente darkiel", alt: "Foto de recuerdo con Darkiel", aspect: "landscape", width: 1079, height: 790 },
    { id: 3, url: "/images/elewualdo.webp", title: "Foto random del edu", alt: "El edu de la vil nada", aspect: "portrait", width: 1200, height: 1600 },
    { id: 4, url: "/images/jorlorenovia.webp", title: "Jor lore", alt: "Jor si es salao mano", aspect: "landscape", width: 1052, height: 788 },
    { id: 5, url: "/images/lagordaesmia.webp", title: "El edu y mondragon cuando ven una gorda", alt: "Edu y mondragon con las gordas", aspect: "landscape", width: 1080, height: 786 },
    { id: 6, url: "/images/lashuntrixyyo.webp", title: "Foto del grupo", alt: "Goku con camisa de las huntrix", aspect: "square", width: 640, height: 640 },
    { id: 7, url: "/images/perritonicolas.webp", title: "Mondragon en R.E.P.O", alt: "Me cago en tu pta madre", aspect: "square", width: 1053, height: 1076 },
    { id: 8, url: "/images/whoisthisguy.webp", title: "Who is this guy?", alt: "Who is this guy?", aspect: "landscape", width: 1080, height: 816 },
    { id: 9, url: "/images/yocondosviejas.webp", title: "Me detonan dos altas en roblox", alt: "Con dos viejas encima", aspect: "landscape", width: 3840, height: 2160 },
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
  
  // Social share text
  shareText: "Feliz cumpleaños Alan: ven a dejar tu mensaje",
  
  // Contact email for RSVP
  contactEmail: "",
  
  // Gift registry message
  giftMessage: "",
} as const

export type Photo = typeof BIRTHDAY_CONFIG.photos[number]
export type VideoClip = typeof BIRTHDAY_CONFIG.videos[number]

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
