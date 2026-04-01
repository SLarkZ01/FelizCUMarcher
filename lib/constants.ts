// Birthday Configuration
// Edit this file to personalize the celebration website

export const BIRTHDAY_CONFIG = {
  // The name of the person being celebrated
  name: "Alan",
  age: 22,
  
  // Event subtitle
  eventTitle: "Feliz Cumple",
  eventHighlight: "Alan",
  eventSubtitle: "22 años contigo",
  
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
  message: "Alan, gracias por ser ese amigo que siempre suma, que hace reir en los dias pesados y que convierte cualquier plan sencillo en un recuerdo enorme. Hoy celebramos tus 22 y todo lo bueno que traes a nuestras vidas.",
  
  // Quote for the message section
  quote: "Que este nuevo año te regale salud, aventuras, risas y metas cumplidas. Te mereces todo lo mejor, hermano.",
  quoteAuthor: "Tus amigos",
  
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
    { title: "Lealtad", description: "Siempre firme para su gente, en las buenas y en las complicadas." },
    { title: "Humor", description: "Tiene ese talento para sacar una risa justo cuando hace falta." },
    { title: "Determinación", description: "Cuando se propone algo, lo pelea hasta conseguirlo." },
    { title: "Gran corazón", description: "Está pendiente de los suyos y siempre apoya de verdad." },
  ],
  
  // Gallery photos
  photos: [
    { id: 1, url: "https://picsum.photos/seed/alan-cumple-1/800/1000", title: "Pura Buena Vibra", aspect: "portrait" },
    { id: 2, url: "https://picsum.photos/seed/alan-cumple-2/800/600", title: "Risas de Siempre", aspect: "landscape" },
    { id: 3, url: "https://picsum.photos/seed/alan-cumple-3/800/800", title: "Momentos Legendarios", aspect: "square" },
    { id: 4, url: "https://picsum.photos/seed/alan-cumple-4/800/600", title: "Celebrando a Alan", aspect: "landscape" },
    { id: 5, url: "https://picsum.photos/seed/alan-cumple-5/800/1000", title: "Compas y Recuerdos", aspect: "portrait" },
    { id: 6, url: "https://picsum.photos/seed/alan-cumple-6/800/800", title: "Otro Año Inolvidable", aspect: "square" },
  ],
  
  // Social share text
  shareText: "Feliz cumpleaños Alan: ven a dejar tu mensaje",
  
  // Contact email for RSVP
  contactEmail: "",
  
  // Gift registry message
  giftMessage: "",
} as const

export type Photo = typeof BIRTHDAY_CONFIG.photos[number]

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
