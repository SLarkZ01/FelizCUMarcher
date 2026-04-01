"use client"

import { useMemo } from "react"
import dynamic from "next/dynamic"
import { BIRTHDAY_CONFIG } from "@/lib/constants"

const WorldNoSSR = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
})

const globeConfig = {
  pointSize: 5,
  globeColor: "#0E0909",
  showAtmosphere: true,
  atmosphereColor: "#E7C77D",
  atmosphereAltitude: 0.18,
  emissive: "#3A1919",
  emissiveIntensity: 0.3,
  shininess: 0.85,
  polygonColor: "rgba(238,212,141,0.35)",
  ambientLight: "#f5e5c3",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffefd0",
  pointLight: "#942B2B",
  arcTime: 850,
  arcLength: 0.82,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 17, lng: -92 },
  autoRotate: true,
  autoRotateSpeed: 0.55,
} as const

function toVisibleColor(hex: string) {
  const raw = hex.replace("#", "")
  if (raw.length !== 6) return hex

  const r = parseInt(raw.slice(0, 2), 16)
  const g = parseInt(raw.slice(2, 4), 16)
  const b = parseInt(raw.slice(4, 6), 16)

  const brightness = 0.299 * r + 0.587 * g + 0.114 * b
  const boost = brightness < 70 ? 95 : brightness < 120 ? 65 : 35

  const nr = Math.min(255, r + boost)
  const ng = Math.min(255, g + boost)
  const nb = Math.min(255, b + boost)

  return `#${nr.toString(16).padStart(2, "0")}${ng.toString(16).padStart(2, "0")}${nb.toString(16).padStart(2, "0")}`
}

export function FriendshipGlobe() {
  const network = useMemo(() => {
    const people = BIRTHDAY_CONFIG.globePeople
    const entries: Array<{
      order: number
      label: string
      startLat: number
      startLng: number
      endLat: number
      endLng: number
      arcAlt: number
      color: string
      startColor: string
      endColor: string
    }> = []

    let order = 1

    for (let i = 0; i < people.length; i++) {
      for (let j = i + 1; j < people.length; j++) {
        const personA = people[i]
        const personB = people[j]
        const isEvenOrder = order % 2 === 0
        const from = isEvenOrder ? personB : personA
        const to = isEvenOrder ? personA : personB

        entries.push({
          order,
          label: `${from.name} - ${to.name}`,
          startLat: from.lat,
          startLng: from.lng,
          endLat: to.lat,
          endLng: to.lng,
          arcAlt: 0.16 + (order % 4) * 0.05,
          color: toVisibleColor(to.color),
          startColor: toVisibleColor(from.color),
          endColor: toVisibleColor(to.color),
        })

        order += 1
      }
    }

    return entries
  }, [])

  return (
    <section id="conexion" className="relative py-28 px-4 bg-surface/40" aria-label="Conexion del grupo en el mundo">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-[var(--font-display)]">Conexion</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mt-4">Aunque lejos, siempre unidos</h2>
          <p className="max-w-3xl mx-auto mt-5 text-muted-foreground leading-relaxed">
            Vivimos en ciudades distintas, pero la distancia nunca nos quito la amistad. Mexico, Texas y Colombia siguen conectados por la misma banda.
          </p>
        </div>

        <div className="relative overflow-hidden border border-border/40 bg-background/55">
          <div className="h-[440px] md:h-[560px] lg:h-[620px]">
            <WorldNoSSR data={network} globeConfig={globeConfig} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm text-muted-foreground">
          {BIRTHDAY_CONFIG.globePeople.map((person) => (
            <div key={person.key} className="flex items-center gap-3 border border-border/35 bg-background/45 px-4 py-3">
              <span
                className="inline-flex h-3.5 w-3.5 rounded-full border border-white/20"
                style={{ backgroundColor: person.color }}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="truncate text-foreground">{person.name}</p>
                <p className="truncate text-[11px] sm:text-xs uppercase tracking-[0.14em] text-muted-foreground">{person.city}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm text-muted-foreground">
          {network.map((connection) => (
            <div key={connection.order} className="border border-border/35 bg-background/45 px-4 py-3">
              {connection.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
