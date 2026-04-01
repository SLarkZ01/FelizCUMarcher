// Birthday Configuration
// Edit this file to personalize the celebration website

export const BIRTHDAY_CONFIG = {
  // The name of the person being celebrated
  name: "Victoria",
  
  // Event subtitle
  eventTitle: "Una Velada de",
  eventHighlight: "Intima",
  eventSubtitle: "Grandeza",
  
  // Birthday date (format: YYYY-MM-DD)
  birthdayDate: "2025-06-15",
  
  // Event time
  eventTime: "20:00",
  
  // Venue details
  venue: {
    name: "Palacio de Cristal",
    address: "Avenida de los Sueños 123",
    city: "Madrid",
    mapUrl: "https://maps.google.com",
  },
  
  // Dress code
  dressCode: "Elegante Formal",
  
  // Personal tribute message
  message: "Una persona extraordinaria cuya luz ilumina cada rincon. Tu presencia transforma los momentos ordinarios en memorias preciosas. Hoy celebramos no solo tu cumpleanos, sino la bendicion que eres para todos los que te conocen.",
  
  // Quote for the message section
  quote: "La vida no se mide por las veces que respiras, sino por los momentos que te dejan sin aliento.",
  quoteAuthor: "Anonymous",
  
  // From whom the celebration is
  from: "Tu Familia",
  
  // Navigation items
  navigation: [
    { label: "Detalles", href: "#details" },
    { label: "Itinerario", href: "#itinerary" },
    { label: "R.S.V.P", href: "#rsvp" },
  ],
  
  // Event itinerary
  itinerary: [
    { time: "20:00", title: "Recepcion", description: "Coctel de bienvenida y musica en vivo" },
    { time: "21:00", title: "Cena", description: "Menu de degustacion de cinco tiempos" },
    { time: "22:30", title: "Brindis", description: "Palabras especiales y champagne" },
    { time: "23:00", title: "Pastel", description: "El momento mas dulce de la noche" },
    { time: "23:30", title: "Baile", description: "Musica y celebracion hasta el amanecer" },
  ],
  
  // Qualities/traits to celebrate
  qualities: [
    { title: "Bondad", description: "Un corazon que siempre da sin esperar nada a cambio" },
    { title: "Alegria", description: "Una sonrisa que ilumina incluso los dias mas grises" },
    { title: "Fortaleza", description: "La valentia de enfrentar cada desafio con gracia" },
    { title: "Amor", description: "El regalo mas grande que compartes con todos" },
  ],
  
  // Gallery photos
  photos: [
    { id: 1, url: "https://picsum.photos/seed/elegant1/800/1000", title: "Momentos Preciosos", aspect: "portrait" },
    { id: 2, url: "https://picsum.photos/seed/elegant2/800/600", title: "Sonrisas Eternas", aspect: "landscape" },
    { id: 3, url: "https://picsum.photos/seed/elegant3/800/800", title: "Aventuras Juntos", aspect: "square" },
    { id: 4, url: "https://picsum.photos/seed/elegant4/800/600", title: "Celebraciones", aspect: "landscape" },
    { id: 5, url: "https://picsum.photos/seed/elegant5/800/1000", title: "Recuerdos Dorados", aspect: "portrait" },
    { id: 6, url: "https://picsum.photos/seed/elegant6/800/800", title: "Amor Infinito", aspect: "square" },
  ],
  
  // Social share text
  shareText: "Celebremos juntos este dia especial",
  
  // Contact email for RSVP
  contactEmail: "rsvp@celebracion.com",
  
  // Gift registry message
  giftMessage: "Tu presencia es el mejor regalo. Si deseas contribuir a nuestros suenos, hemos preparado una lista especial.",
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
    name: "Maria Garcia",
    message: "Que este nuevo ano de vida te traiga infinitas bendiciones y momentos de felicidad.",
    date: "2025-06-10",
  },
  {
    id: "2", 
    name: "Carlos Rodriguez",
    message: "Feliz cumpleanos! Tu alegria es contagiosa y tu bondad inspira a todos.",
    date: "2025-06-12",
  },
  {
    id: "3",
    name: "Ana Martinez",
    message: "Celebro tu existencia y todo lo que representas para quienes te queremos.",
    date: "2025-06-14",
  },
]
