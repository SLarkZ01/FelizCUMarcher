"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { Play, Expand, ChevronLeft, ChevronRight } from "lucide-react"
import { BIRTHDAY_CONFIG } from "@/lib/constants"
import { MagicCard } from "@/components/ui/magic-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/data/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/overlays/dialog"

export function Gallery() {
  const [activeVideoId, setActiveVideoId] = useState<number>(BIRTHDAY_CONFIG.videos[0]?.id ?? 1)
  const [thumbsApi, setThumbsApi] = useState<CarouselApi>()
  const [mobileThumbsApi, setMobileThumbsApi] = useState<CarouselApi>()
  const [activePhotoId, setActivePhotoId] = useState<number>(BIRTHDAY_CONFIG.photos[1]?.id ?? BIRTHDAY_CONFIG.photos[0]?.id ?? 1)

  const activeVideo = useMemo(
    () => BIRTHDAY_CONFIG.videos.find((video) => video.id === activeVideoId) ?? BIRTHDAY_CONFIG.videos[0],
    [activeVideoId]
  )
  const activeVideoIndex = useMemo(
    () => Math.max(0, BIRTHDAY_CONFIG.videos.findIndex((video) => video.id === activeVideoId)),
    [activeVideoId]
  )

  useEffect(() => {
    if (!thumbsApi) return
    thumbsApi.scrollTo(activeVideoIndex)
  }, [thumbsApi, activeVideoIndex])

  useEffect(() => {
    if (!mobileThumbsApi) return
    mobileThumbsApi.scrollTo(activeVideoIndex)
  }, [mobileThumbsApi, activeVideoIndex])

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
            Galeria
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
                <div className="relative h-[360px] sm:h-[420px] md:h-[460px] lg:h-[500px]">
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

          <div className="hidden md:flex h-[460px] gap-3">
            {galleryPhotos.map((photo) => {
              const isActive = activePhotoId === photo.id

              return (
                <Dialog key={photo.id}>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      onMouseEnter={() => setActivePhotoId(photo.id)}
                      onFocus={() => setActivePhotoId(photo.id)}
                      className={`group relative min-w-0 overflow-hidden border border-border/40 bg-background/40 text-left transition-all duration-500 ${
                        isActive ? "flex-[2.2]" : "flex-1"
                      }`}
                      aria-label={`Ampliar imagen: ${photo.title}`}
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={photo.url}
                          alt={photo.alt}
                          fill
                          className={`object-contain bg-black/30 transition-all duration-500 ${
                            isActive ? "scale-100 opacity-100" : "scale-[0.96] opacity-80"
                          }`}
                          sizes="(max-width: 1280px) 24vw, 16vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent" />
                      </div>

                      <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/50 bg-background/70 text-accent">
                        <Expand className="h-4 w-4" />
                      </span>

                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-accent">{photo.title}</p>
                        <p
                          className={`mt-2 text-xs leading-relaxed text-muted-foreground transition-all duration-300 ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {photo.caption}
                        </p>
                      </div>
                    </button>
                  </DialogTrigger>

                  <DialogContent
                    showCloseButton
                    className="w-[min(1100px,96vw)] max-w-none max-h-[92vh] overflow-y-auto border-border/60 bg-background/95 p-4 sm:p-6 [&_[data-slot=dialog-close]]:top-3 [&_[data-slot=dialog-close]]:right-3 [&_[data-slot=dialog-close]]:opacity-100 [&_[data-slot=dialog-close]]:border [&_[data-slot=dialog-close]]:border-accent/50 [&_[data-slot=dialog-close]]:bg-background/85 [&_[data-slot=dialog-close]]:text-accent"
                  >
                    <div className="space-y-4">
                      <DialogTitle className="font-serif text-xl sm:text-2xl text-foreground">{photo.title}</DialogTitle>

                      <div className="flex justify-center overflow-hidden border border-border/50 bg-black/40 p-2 sm:p-3">
                        <Image
                          src={photo.url}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          className="h-auto max-h-[70vh] w-auto max-w-full object-contain"
                          sizes="(max-width: 1200px) 96vw, 1100px"
                        />
                      </div>

                      <DialogDescription className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {photo.caption}
                      </DialogDescription>
                    </div>
                  </DialogContent>
                </Dialog>
              )
            })}
          </div>

          <div className="grid md:hidden grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryPhotos.map((photo) => (
              <Dialog key={photo.id}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative overflow-hidden border border-border/35 bg-background/40 text-left"
                    aria-label={`Ampliar imagen: ${photo.title}`}
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
                        sizes="50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <span className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent/50 bg-background/70 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Expand className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                      <p className="text-[11px] sm:text-xs tracking-[0.18em] uppercase text-accent">{photo.title}</p>
                    </div>
                  </button>
                </DialogTrigger>

                <DialogContent
                  showCloseButton
                  className="w-[min(1100px,96vw)] max-w-none max-h-[92vh] overflow-y-auto border-border/60 bg-background/95 p-4 sm:p-6 [&_[data-slot=dialog-close]]:top-3 [&_[data-slot=dialog-close]]:right-3 [&_[data-slot=dialog-close]]:opacity-100 [&_[data-slot=dialog-close]]:border [&_[data-slot=dialog-close]]:border-accent/50 [&_[data-slot=dialog-close]]:bg-background/85 [&_[data-slot=dialog-close]]:text-accent"
                >
                  <div className="space-y-4">
                    <DialogTitle className="font-serif text-xl sm:text-2xl text-foreground">{photo.title}</DialogTitle>

                    <div className="flex justify-center overflow-hidden border border-border/50 bg-black/40 p-2 sm:p-3">
                      <Image
                        src={photo.url}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        className="h-auto max-h-[70vh] w-auto max-w-full object-contain"
                        sizes="(max-width: 1200px) 96vw, 1100px"
                      />
                    </div>

                    <DialogDescription className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {photo.caption}
                    </DialogDescription>
                  </div>
                </DialogContent>
              </Dialog>
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
            <div className="hidden md:block sticky top-24 z-20">
              <div className="border border-border/50 bg-background/85 backdrop-blur-sm p-3">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs tracking-[0.2em] uppercase text-accent">Selector rapido</p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => thumbsApi?.scrollPrev()}
                      className="inline-flex h-8 w-8 items-center justify-center border border-border/60 text-muted-foreground hover:text-accent hover:border-accent/60 transition-colors"
                      aria-label="Ver videos anteriores"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => thumbsApi?.scrollNext()}
                      className="inline-flex h-8 w-8 items-center justify-center border border-border/60 text-muted-foreground hover:text-accent hover:border-accent/60 transition-colors"
                      aria-label="Ver videos siguientes"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <Carousel
                  setApi={setThumbsApi}
                  opts={{ align: "start", dragFree: true }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2">
                    {BIRTHDAY_CONFIG.videos.map((video) => {
                      const isActive = video.id === activeVideo.id

                      return (
                        <CarouselItem key={video.id} className="pl-2 basis-[28%] lg:basis-[22%] xl:basis-[18%]">
                          <button
                            type="button"
                            onClick={() => setActiveVideoId(video.id)}
                            aria-label={`Seleccionar ${video.title}`}
                            className={`group relative w-full overflow-hidden border text-left transition-all duration-300 ${
                              isActive
                                ? "border-accent bg-background/80"
                                : "border-border/40 bg-background/40 hover:border-accent/50"
                            }`}
                          >
                            <div className="relative aspect-video bg-black/35">
                              <Image
                                src={video.poster}
                                alt={`Miniatura ${video.title}`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 1280px) 24vw, 18vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent" />
                              <span className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-accent/60 bg-background/70 text-accent">
                                <Play className="h-3 w-3" />
                              </span>
                            </div>
                            <div className="px-2 py-2">
                              <p className="truncate text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{video.title}</p>
                            </div>
                          </button>
                        </CarouselItem>
                      )
                    })}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>

            <MagicCard
              className="relative overflow-hidden border border-border/40 bg-background/60 p-0"
              gradientFrom="#C9A84C"
              gradientTo="#942B2B"
              gradientColor="#1B0F0F"
              gradientOpacity={0.35}
              gradientSize={260}
            >
              <div
                className="relative w-full overflow-hidden md:hidden"
                style={{ aspectRatio: `${activeVideo.width} / ${activeVideo.height}` }}
              >
                <video
                  key={`${activeVideo.id}-mobile`}
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

              <div className="hidden md:flex w-full h-[72vh] items-center justify-center overflow-hidden bg-black/40 p-3 lg:p-4">
                <video
                  key={`${activeVideo.id}-desktop`}
                  controls
                  playsInline
                  preload="metadata"
                  poster={activeVideo.poster}
                  className="max-h-full max-w-full h-auto w-auto object-contain"
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

            <div className="relative md:hidden border border-border/50 bg-background/80 p-2">
              <Carousel
                setApi={setMobileThumbsApi}
                opts={{ align: "start", dragFree: true }}
                className="w-full"
              >
                <CarouselContent className="-ml-2">
                  {BIRTHDAY_CONFIG.videos.map((video) => {
                    const isActive = video.id === activeVideo.id

                    return (
                      <CarouselItem key={video.id} className="pl-2 basis-[72%] sm:basis-[55%]">
                        <button
                          type="button"
                          onClick={() => setActiveVideoId(video.id)}
                          className={`group relative w-full overflow-hidden border transition-all duration-300 ${
                            isActive
                              ? "border-accent bg-background/80"
                              : "border-border/40 bg-background/40"
                          }`}
                          aria-label={`Seleccionar ${video.title}`}
                        >
                          <div className="relative aspect-video bg-black/35">
                            <Image
                              src={video.poster}
                              alt={`Miniatura ${video.title}`}
                              fill
                              className="object-contain"
                              sizes="70vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                            <span className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent/60 bg-background/70 text-accent">
                              <Play className="h-3 w-3" />
                            </span>
                          </div>

                          <div className="px-3 py-2 text-left">
                            <p className="truncate text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{video.title}</p>
                          </div>
                        </button>
                      </CarouselItem>
                    )
                  })}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
