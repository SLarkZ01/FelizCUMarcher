import Image from "next/image"
import { Headphones, Quote, Waves } from "lucide-react"
import { BIRTHDAY_CONFIG, type FriendMessage } from "@/lib/constants"
import { MagicCard } from "@/components/ui/magic-card"
import { Marquee } from "@/components/ui/marquee"
import { Spotlight } from "@/components/ui/spotlight"

const fallbackAccent = "#C9A84C"

function hexToRgb(hex: string) {
  const raw = hex.replace("#", "")
  if (raw.length !== 6) return { r: 201, g: 168, b: 76 }

  return {
    r: parseInt(raw.slice(0, 2), 16),
    g: parseInt(raw.slice(2, 4), 16),
    b: parseInt(raw.slice(4, 6), 16),
  }
}

function withAlpha(hex: string, alpha: number) {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function lightenHex(hex: string, amount: number) {
  const { r, g, b } = hexToRgb(hex)
  const nextR = Math.min(255, r + amount)
  const nextG = Math.min(255, g + amount)
  const nextB = Math.min(255, b + amount)

  return `#${nextR.toString(16).padStart(2, "0")}${nextG.toString(16).padStart(2, "0")}${nextB.toString(16).padStart(2, "0")}`
}

function darkenHex(hex: string, amount: number) {
  const { r, g, b } = hexToRgb(hex)
  const nextR = Math.max(0, r - amount)
  const nextG = Math.max(0, g - amount)
  const nextB = Math.max(0, b - amount)

  return `#${nextR.toString(16).padStart(2, "0")}${nextG.toString(16).padStart(2, "0")}${nextB.toString(16).padStart(2, "0")}`
}

export function FriendsMessages() {
  const peopleByKey = new Map(BIRTHDAY_CONFIG.globePeople.map((person) => [person.key, person]))

  const orderedMessages = [...BIRTHDAY_CONFIG.friendsMessages].sort((a, b) => {
    if (a.friendKey === "thomas") return 1
    if (b.friendKey === "thomas") return -1
    return 0
  })

  const featuredAudio = orderedMessages.find((friend) => friend.friendKey === "eduardo")
  const regularMessages = orderedMessages.filter((friend) => friend.friendKey !== "eduardo")

  return (
    <section id="tilines" className="relative overflow-hidden px-4 py-28" aria-label="Mensajes de los tilines">
      <div className="pointer-events-none absolute inset-0">
        <Spotlight className="-top-56 left-1/2 h-[150%] w-[140%] -translate-x-1/2 opacity-20" fill="#C9A84C" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(201,168,76,0.14),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(148,43,43,0.2),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="font-[var(--font-display)] text-xs uppercase tracking-[0.4em] text-accent">Tilines</span>
          <h2 className="mt-4 text-3xl font-serif text-foreground sm:text-4xl lg:text-5xl">Mensajes de los panas</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            Cada color del globo ahora esta prendido en su propia carta. Aqui estan las palabras del grupo para Alan,
            incluyendo el audio especial de Eduardo.
          </p>
        </div>

        <div className="relative mb-10">
          <Marquee pauseOnHover repeat={5} className="[--duration:30s] [--gap:0.75rem] py-1">
            {orderedMessages.map((friend) => {
              const accent = peopleByKey.get(friend.friendKey)?.color ?? fallbackAccent

              return (
                <span
                  key={`legend-${friend.id}`}
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{
                    borderColor: withAlpha(accent, 0.64),
                    background: `linear-gradient(120deg, ${withAlpha(accent, 0.68)} 0%, ${withAlpha(darkenHex(accent, 58), 0.74)} 100%)`,
                    color: lightenHex(accent, 145),
                    boxShadow: `0 0 0 1px ${withAlpha(accent, 0.2)} inset, 0 4px 10px ${withAlpha(accent, 0.22)}`,
                  }}
                >
                  <span
                    className="inline-flex h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: lightenHex(accent, 28), boxShadow: `0 0 6px ${withAlpha(lightenHex(accent, 18), 0.55)}` }}
                    aria-hidden="true"
                  />
                  {friend.name}
                </span>
              )
            })}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
        </div>

        <div className="grid auto-rows-fr gap-6 lg:grid-cols-3">
          {featuredAudio ? (
            <FriendCard
              friend={featuredAudio}
              accent={peopleByKey.get(featuredAudio.friendKey)?.color ?? fallbackAccent}
              featured
            />
          ) : null}

          {regularMessages.map((friend) => (
            <FriendCard
              key={friend.id}
              friend={friend}
              accent={peopleByKey.get(friend.friendKey)?.color ?? fallbackAccent}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FriendCard({
  friend,
  accent,
  featured = false,
}: {
  friend: FriendMessage
  accent: string
  featured?: boolean
}) {
  return (
    <div className={featured ? "lg:col-span-2" : ""}>
      <MagicCard
        mode="orb"
        glowFrom={accent}
        glowTo={lightenHex(accent, 90)}
        glowOpacity={featured ? 0.42 : 0.3}
        glowBlur={featured ? 58 : 50}
        glowSize={featured ? 510 : 410}
        gradientSize={260}
        gradientFrom={lightenHex(accent, 44)}
        gradientTo={accent}
        className="group relative h-full overflow-hidden border border-border/30 p-0"
      >
        <article
          className="flex h-full flex-col"
          style={{
            background: `linear-gradient(155deg, ${withAlpha(accent, featured ? 0.34 : 0.28)} 0%, rgba(10, 8, 8, 0.94) 34%, rgba(7, 5, 5, 0.99) 100%)`,
            boxShadow: `inset 0 0 0 1px ${withAlpha(accent, featured ? 0.55 : 0.4)}, 0 0 34px ${withAlpha(accent, featured ? 0.33 : 0.22)}`,
          }}
        >
          <div
            className="h-[3px] w-full"
            style={{ background: `linear-gradient(90deg, ${withAlpha(accent, 0)}, ${withAlpha(lightenHex(accent, 36), 0.95)}, ${withAlpha(accent, 0)})` }}
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full blur-3xl"
            style={{ backgroundColor: withAlpha(accent, featured ? 0.35 : 0.22) }}
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full blur-3xl"
            style={{ backgroundColor: withAlpha(lightenHex(accent, 24), 0.2) }}
            aria-hidden="true"
          />

          <header
            className="relative flex items-center gap-4 border-b p-5"
            style={{ borderBottomColor: withAlpha(accent, 0.52), backgroundColor: withAlpha(accent, 0.12) }}
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border bg-black/30" style={{ borderColor: withAlpha(accent, 0.88), boxShadow: `0 0 16px ${withAlpha(accent, 0.5)}` }}>
              <Image
                src={friend.profileImage}
                alt={`Foto de perfil de ${friend.name}`}
                fill
                sizes="56px"
                className={friend.friendKey === "eduardo" ? "object-cover object-[50%_8%]" : "object-cover"}
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-lg font-serif text-foreground" style={{ textShadow: `0 0 14px ${withAlpha(accent, 0.35)}` }}>{friend.name}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em]" style={{ color: withAlpha(lightenHex(accent, 130), 0.92) }}>
                Tilines Mexico
              </p>
            </div>

            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border" style={{ borderColor: withAlpha(accent, 0.9), color: lightenHex(accent, 130), backgroundColor: withAlpha(accent, 0.42) }}>
              {friend.type === "audio" ? <Headphones className="h-3.5 w-3.5" /> : <Quote className="h-3.5 w-3.5" />}
            </span>
          </header>

          <div className="flex-1 space-y-4 p-5">
            {friend.type === "audio" ? (
              <>
                <p className="text-sm leading-relaxed text-foreground/90">{friend.message}</p>

                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em]" style={{ color: withAlpha(lightenHex(accent, 120), 0.95) }}>
                  <Waves className="h-3.5 w-3.5" />
                  Audio real del tilin
                </div>

                <div className="rounded-xl border p-3" style={{ borderColor: withAlpha(accent, 0.88), backgroundColor: withAlpha(accent, 0.26), boxShadow: `0 0 22px ${withAlpha(accent, 0.24)}` }}>
                  <audio controls preload="metadata" className="w-full" aria-label="Mensaje de audio de Eduardo">
                    <source src={friend.audioSrc} type="audio/mpeg" />
                    Tu navegador no soporta la reproduccion de audio.
                  </audio>
                </div>
              </>
            ) : (
              <div className={`${featured ? "" : "max-h-[360px] overflow-y-auto pr-1"}`}>
                <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/95">{friend.message}</p>
              </div>
            )}
          </div>

          <footer className="border-t px-5 py-3" style={{ borderTopColor: withAlpha(accent, 0.58), backgroundColor: withAlpha(accent, 0.18) }}>
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em]" style={{ color: withAlpha(lightenHex(accent, 130), 0.95) }}>
              <span
                className="inline-flex h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: lightenHex(accent, 14), boxShadow: `0 0 12px ${withAlpha(lightenHex(accent, 15), 0.95)}` }}
                aria-hidden="true"
              />
              Color del globo
            </span>
          </footer>
        </article>
      </MagicCard>
    </div>
  )
}
