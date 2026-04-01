import { Suspense, lazy } from "react"

// Lazy load sections for better performance
const Navigation = lazy(() => import("@/components/birthday/sections/layout/Navigation").then(m => ({ default: m.Navigation })))
const Hero = lazy(() => import("@/components/birthday/sections/hero/Hero").then(m => ({ default: m.Hero })))
const EventDetails = lazy(() => import("@/components/birthday/sections/event/EventDetails").then(m => ({ default: m.EventDetails })))
const Itinerary = lazy(() => import("@/components/birthday/sections/event/Itinerary").then(m => ({ default: m.Itinerary })))
const Tribute = lazy(() => import("@/components/birthday/sections/content/Tribute").then(m => ({ default: m.Tribute })))
const Gallery = lazy(() => import("@/components/birthday/sections/content/Gallery").then(m => ({ default: m.Gallery })))
const RSVPSection = lazy(() => import("@/components/birthday/sections/event/RSVPSection").then(m => ({ default: m.RSVPSection })))
const WishWall = lazy(() => import("@/components/birthday/sections/content/WishWall").then(m => ({ default: m.WishWall })))
const Footer = lazy(() => import("@/components/birthday/sections/layout/Footer").then(m => ({ default: m.Footer })))

function SectionLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border border-accent/30 border-t-accent rounded-full animate-spin" />
        <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Cargando</span>
      </div>
    </div>
  )
}

export default function BirthdayPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation - always visible */}
      <Suspense fallback={null}>
        <Navigation />
      </Suspense>
      
      {/* Hero with countdown */}
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>
      
      {/* Event details */}
      <Suspense fallback={<SectionLoader />}>
        <EventDetails />
      </Suspense>
      
      {/* Itinerary timeline */}
      <Suspense fallback={<SectionLoader />}>
        <Itinerary />
      </Suspense>
      
      {/* Tribute / Qualities */}
      <Suspense fallback={<SectionLoader />}>
        <Tribute />
      </Suspense>
      
      {/* Photo gallery */}
      <Suspense fallback={<SectionLoader />}>
        <Gallery />
      </Suspense>
      
      {/* RSVP form */}
      <Suspense fallback={<SectionLoader />}>
        <RSVPSection />
      </Suspense>
      
      {/* Wishes wall */}
      <Suspense fallback={<SectionLoader />}>
        <WishWall />
      </Suspense>
      
      {/* Footer */}
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </main>
  )
}
