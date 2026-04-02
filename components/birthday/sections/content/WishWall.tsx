"use client"

import { useEffect, useRef, useState } from "react"
import { Camera, RefreshCcw, Sparkles } from "lucide-react"

import { BIRTHDAY_CONFIG } from "@/lib/constants"
import { ConfettiButton } from "@/components/ui/confetti"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid"

export function WishWall() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [hasEnteredSection, setHasEnteredSection] = useState(false)
  const [cameraState, setCameraState] = useState<
    "idle" | "requesting" | "ready" | "denied"
  >("idle")
  const [webcamSessionId, setWebcamSessionId] = useState(0)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        if (!entry.isIntersecting) {
          return
        }

        setHasEnteredSection(true)
        setCameraState(current =>
          current === "idle" ? "requesting" : current
        )
        observer.disconnect()
      },
      {
        threshold: 0.35,
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const retryCamera = () => {
    setCameraState("requesting")
    setWebcamSessionId(current => current + 1)
  }

  return (
    <section
      ref={sectionRef}
      id="mensajes"
      className="relative isolate h-screen min-h-[100svh] overflow-hidden"
      aria-label="Experiencia inmersiva de cumpleaños"
    >
      <div className="absolute inset-0">
        {hasEnteredSection ? (
          <WebcamPixelGrid
            key={webcamSessionId}
            gridCols={60}
            gridRows={40}
            maxElevation={50}
            motionSensitivity={0.25}
            elevationSmoothing={0.2}
            colorMode="webcam"
            backgroundColor="#030303"
            mirror
            gapRatio={0.05}
            invertColors={false}
            darken={0.6}
            borderColor="#ffffff"
            borderOpacity={0.06}
            onWebcamReady={() => setCameraState("ready")}
            onWebcamError={() => setCameraState("denied")}
          />
        ) : (
          <div className="h-full w-full bg-[#140d0d]" />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/65" />

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="w-full max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 font-[var(--font-display)] text-[11px] tracking-[0.22em] text-white/80 uppercase backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Cierre del cumple
          </span>

          <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            Feliz Cumpleaños, {BIRTHDAY_CONFIG.name}
          </h2>

          {cameraState === "ready" ? (
            <TextGenerateEffect
              className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg"
              words="Gracias por ser de esos amigos que cambian el ambiente apenas aparecen. Que este nuevo año te traiga salud, plata, metas cumplidas y muchas risas con los reales"
              duration={0.45}
            />
          ) : (
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              {cameraState === "idle" &&
                "Desliza hasta aqui para ver el cierre interactivo."}
              {cameraState === "requesting" &&
                "Esperando permiso de camara... apenas lo aceptes, se activa el mensaje especial."}
              {cameraState === "denied" &&
                "No pudimos acceder a la camara. Puedes reintentar y seguir celebrando con confeti mientras tanto."}
            </p>
          )}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ConfettiButton
              aria-label="Tirar confeti para Alan"
              className="h-12 min-w-[200px] rounded-full bg-white px-8 text-xs tracking-[0.24em] uppercase text-black hover:bg-white/90"
              options={{
                particleCount: 140,
                spread: 95,
                startVelocity: 46,
                scalar: 1.05,
                origin: { y: 0.72 },
              }}
            >
              Tirar confeti
            </ConfettiButton>

            {cameraState !== "ready" && (
              <button
                type="button"
                onClick={retryCamera}
                className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/8 px-6 text-xs tracking-[0.2em] text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/14"
              >
                {cameraState === "denied" ? (
                  <RefreshCcw className="h-4 w-4" />
                ) : (
                  <Camera className="h-4 w-4" />
                )}
                {cameraState === "denied"
                  ? "Reintentar camara"
                  : "Activar camara"}
              </button>
            )}
          </div>

          <p className="mt-6 text-[11px] tracking-[0.14em] text-white/45 uppercase">
            El fondo es interactivo, mueve tu mano frente a la camara para ver el efecto. Tranquilos, no los voy a doxear ni nada parecido.
          </p>
        </div>
      </div>
    </section>
  )
}
