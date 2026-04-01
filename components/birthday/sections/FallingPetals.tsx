"use client"

import { useState, useEffect } from "react"

interface Petal {
  id: number
  left: string
  delay: string
  duration: string
  size: number
  rotation: number
}

// Seeded random for consistent values
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000
  return x - Math.floor(x)
}

export function FallingPetals() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate petals with seeded random for consistency
  const petals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${seededRandom(i * 1) * 100}%`,
    delay: `${seededRandom(i * 2) * 8}s`,
    duration: `${12 + seededRandom(i * 3) * 8}s`,
    size: 8 + seededRandom(i * 4) * 8,
    rotation: seededRandom(i * 5) * 360,
  }))

  if (!mounted) {
    return null
  }

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal animate-petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: `${petal.duration}, 4s`,
            width: petal.size,
            height: petal.size,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        />
      ))}
    </div>
  )
}
