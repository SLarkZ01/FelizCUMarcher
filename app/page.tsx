import { Suspense, lazy } from "react"

// Lazy load sections for better performance
const Navigation = lazy(() => import("@/components/birthday/sections/layout/Navigation").then(m => ({ default: m.Navigation })))
const Hero = lazy(() => import("@/components/birthday/sections/hero/Hero").then(m => ({ default: m.Hero })))
const Tribute = lazy(() => import("@/components/birthday/sections/content/Tribute").then(m => ({ default: m.Tribute })))
const Gallery = lazy(() => import("@/components/birthday/sections/content/Gallery").then(m => ({ default: m.Gallery })))
const FriendshipGlobe = lazy(() => import("@/components/birthday/sections/content/FriendshipGlobe").then(m => ({ default: m.FriendshipGlobe })))
const FriendsMessages = lazy(() => import("@/components/birthday/sections/content/FriendsMessages").then(m => ({ default: m.FriendsMessages })))
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
      <Suspense fallback={null}>
        <Navigation />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Tribute />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FriendshipGlobe />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FriendsMessages />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <WishWall />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </main>
  )
}
