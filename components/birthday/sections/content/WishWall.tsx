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
      className="relative isolate overflow-hidden px-4 py-28"
      aria-label="Experiencia inmersiva de cumpleaños"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,168,76,0.22),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(148,43,43,0.26),transparent_44%)]" />

      <div className="absolute inset-0">
        {hasEnteredSection ? (
          <WebcamPixelGrid
            key={webcamSessionId}
            gridCols={58}
            gridRows={42}
            maxElevation={13}
            motionSensitivity={0.42}
            elevationSmoothing={0.14}
            colorMode="webcam"
            backgroundColor="#140d0d"
            borderColor="#f0dfb4"
            borderOpacity={0.12}
            gapRatio={0.14}
            darken={0.08}
            onWebcamReady={() => setCameraState("ready")}
            onWebcamError={() => setCameraState("denied")}
          />
        ) : (
          <div className="h-full w-full bg-[#140d0d]" />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/55 via-background/40 to-background/80" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-background/35 px-6 py-10 text-center shadow-[0_30px_120px_-50px_rgba(0,0,0,0.9)] backdrop-blur-md sm:px-10 sm:py-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-[var(--font-display)] text-[11px] tracking-[0.22em] text-accent uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            Momento final
          </span>

          <h2 className="mt-6 text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Esta parte es para vos, {BIRTHDAY_CONFIG.name}
          </h2>

          {cameraState === "ready" ? (
            <TextGenerateEffect
              className="mx-auto mt-6 max-w-2xl font-serif text-base leading-relaxed text-foreground/90 sm:text-lg"
              words="Feliz cumpleaños, Alan. Gracias por ser de esos amigos que cambian el ambiente apenas aparecen. Que este nuevo año te traiga salud, calma, metas cumplidas y muchas risas con los Tilines."
              duration={0.45}
            />
          ) : (
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
              {cameraState === "idle" &&
                "Desliza hasta aqui para activar la experiencia inmersiva."}
              {cameraState === "requesting" &&
                "Esperando permiso de camara... apenas lo aceptes, se activa el mensaje especial."}
              {cameraState === "denied" &&
                "No pudimos acceder a la camara. Puedes reintentar y seguir celebrando con confeti mientras tanto."}
            </p>
          )}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ConfettiButton
              aria-label="Tirar confeti para Alan"
              className="h-12 min-w-[200px] border border-accent/55 bg-accent/15 px-8 text-xs tracking-[0.24em] uppercase text-accent hover:bg-accent/30"
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
                className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 border border-border/70 bg-background/45 px-6 text-xs tracking-[0.2em] text-foreground/85 uppercase transition-colors hover:bg-background/65"
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

          <p className="mt-6 text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
            Fondo interactivo con webcam pixel grid + mensaje animado en tiempo real
          </p>
        </div>
      </div>
    </section>
  )
}
