import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cormorant_Garamond, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://felizcumalan.vercel.app'),
  title: 'Feliz cumpleaños Alan | Los Tilines Mexico',
  description: 'Una página especial para celebrar los 22 años de Alan con mensajes, recuerdos y muchas risas.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Feliz cumpleaños Alan | Los Tilines Mexico',
    description: 'Una página especial para celebrar los 22 años de Alan con mensajes, recuerdos y muchas risas.',
    url: 'https://felizcumalan.vercel.app',
    siteName: 'Los Tilines Mexico',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/tilines/Alan.webp',
        width: 1200,
        height: 630,
        alt: 'Alan celebrando su cumpleaños con Los Tilines',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feliz cumpleaños Alan | Los Tilines Mexico',
    description: 'Una página especial para celebrar los 22 años de Alan con mensajes, recuerdos y muchas risas.',
    images: ['/images/tilines/Alan.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/images/tilines/Alan.webp',
        type: 'image/webp',
      },
    ],
    shortcut: '/images/tilines/Alan.webp',
    apple: '/images/tilines/Alan.webp',
  },
}

export const viewport: Viewport = {
  themeColor: '#080505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${cormorant.variable} ${cinzel.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics mode="production" />
      </body>
    </html>
  )
}
