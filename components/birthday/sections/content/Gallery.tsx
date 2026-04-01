"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { BIRTHDAY_CONFIG } from "@/lib/constants"
import { MagicCard } from "@/components/ui/magic-card"

export function Gallery() {
  const [activeVideoId, setActiveVideoId] = useState<number>(BIRTHDAY_CONFIG.videos[0]?.id ?? 1)

  const activeVideo = useMemo(
    () => BIRTHDAY_CONFIG.videos.find((video) => video.id === activeVideoId) ?? BIRTHDAY_CONFIG.videos[0],
    [activeVideoId]
  )

  const featuredPhoto = BIRTHDAY_CONFIG.photos[0]
  const galleryPhotos = BIRTHDAY_CONFIG.photos.slice(1)

  return (
    <section
      id="galeria"
      className="relative py-32 px-4 bg-surface/30"
      aria-label="Galeria de fotos"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-[var(--font-display)]">
            Galeria random
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mt-4">
            Con los panas
          </h2>
        </div>

        <div className="mb-10 flex items-center justify-between gap-4">
          <h3 className="text-lg sm:text-xl tracking-[0.2em] uppercase text-accent">Imagenes</h3>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {BIRTHDAY_CONFIG.photos.length} recuerdos
          </span>
        </div>

        <div className="mb-20 space-y-4">
          {featuredPhoto ? (
            <MagicCard
              className="relative overflow-hidden border border-border/40 bg-background/50 p-0"
              gradientFrom="#C9A84C"
              gradientTo="#942B2B"
              gradientColor="#1B0F0F"
              gradientOpacity={0.3}
              gradientSize={220}
            >
              <div className="grid md:grid-cols-[1.5fr_1fr] items-stretch">
                <div
                  className="relative md:min-h-[380px]"
                  style={{ aspectRatio: `${featuredPhoto.width} / ${featuredPhoto.height}` }}
                >
                  <Image
                    src={featuredPhoto.url}
                    alt={featuredPhoto.alt}
                    fill
                    className="object-contain bg-black/25"
                    sizes="(max-width: 768px) 100vw, 70vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent md:hidden" />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 border-t md:border-t-0 md:border-l border-border/40 bg-background/70">
                  <p className="text-xs tracking-[0.25em] uppercase text-accent">Destacada</p>
                  <h4 className="mt-2 text-2xl sm:text-3xl font-serif text-foreground">{featuredPhoto.title}</h4>
                  <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Un recuerdo que abre la galeria y marca el tono de toda la celebracion.
                  </p>
                </div>
              </div>
            </MagicCard>
          ) : null}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryPhotos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                className="group relative overflow-hidden border border-border/35 bg-background/40 text-left"
                aria-label={photo.title}
              >
                <div
                  className="relative"
                  style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                >
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    fill
                    className="object-contain bg-black/25 transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <p className="text-[11px] sm:text-xs tracking-[0.18em] uppercase text-accent">{photo.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-10 flex items-center justify-between gap-4">
          <h3 className="text-lg sm:text-xl tracking-[0.2em] uppercase text-accent">Videos</h3>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {BIRTHDAY_CONFIG.videos.length} clips
          </span>
        </div>

        {activeVideo ? (
          <div className="space-y-6">
            <MagicCard
              className="relative overflow-hidden border border-border/40 bg-background/60 p-0"
              gradientFrom="#C9A84C"
              gradientTo="#942B2B"
              gradientColor="#1B0F0F"
              gradientOpacity={0.35}
              gradientSize={260}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: `${activeVideo.width} / ${activeVideo.height}` }}
              >
                <video
                  key={activeVideo.id}
                  controls
                  playsInline
                  preload="metadata"
                  poster={activeVideo.poster}
                  className="h-full w-full object-contain bg-black/40"
                  aria-label={`Video ${activeVideo.title}`}
                >
                  <source src={activeVideo.url} type="video/webm" />
                  Tu navegador no soporta la reproduccion de video.
                </video>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-border/40 bg-background/80 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-accent">Reproduciendo</p>
                  <p className="mt-1 text-sm sm:text-base text-foreground">{activeVideo.title}</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <Play className="w-3.5 h-3.5" />
                  Haz click para cambiar de clip
                </div>
              </div>
            </MagicCard>

            <div className="relative">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {BIRTHDAY_CONFIG.videos.map((video) => {
                  const isActive = video.id === activeVideo.id

                  return (
                    <button
                      key={video.id}
                      type="button"
                      onClick={() => setActiveVideoId(video.id)}
                      className={`group relative overflow-hidden border transition-all duration-300 ${
                        isActive
                          ? "border-accent bg-background/80"
                          : "border-border/40 bg-background/40 hover:border-accent/50"
                      }`}
                      aria-label={`Seleccionar ${video.title}`}
                    >
                      <div
                        className="relative"
                        style={{ aspectRatio: `${video.width} / ${video.height}` }}
                      >
                        <Image
                          src={video.poster}
                          alt={`Miniatura ${video.title}`}
                          fill
                          className="object-contain bg-black/25 transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                        <span className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent/60 bg-background/70 text-accent">
                          <Play className="w-3 h-3" />
                        </span>
                      </div>

                      <div className="px-3 py-2 text-left">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Video</p>
                        <p className="mt-0.5 text-xs sm:text-sm text-foreground">{video.title}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
