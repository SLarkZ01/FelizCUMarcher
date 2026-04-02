import Image from "next/image"
import { Headphones, Quote } from "lucide-react"
import { BIRTHDAY_CONFIG } from "@/lib/constants"
import { MagicCard } from "@/components/ui/magic-card"
import { Marquee } from "@/components/ui/marquee"
import { Spotlight } from "@/components/ui/spotlight"

const fallbackAccent = "#C9A84C"

export function FriendsMessages() {
  const peopleByKey = new Map(BIRTHDAY_CONFIG.globePeople.map((person) => [person.key, person]))

  const orderedMessages = [...BIRTHDAY_CONFIG.friendsMessages].sort((a, b) => {
    if (a.friendKey === "thomas") return 1
    if (b.friendKey === "thomas") return -1
    return 0
  })

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
            Cada color del globo ahora tiene voz propia. Aqui estan las palabras del grupo para Alan, incluyendo el
            audio especial de Eduardo.
          </p>
        </div>

        <Marquee pauseOnHover className="mb-10 [--duration:26s] [--gap:0.75rem]">
          {orderedMessages.map((friend) => {
            const accent = peopleByKey.get(friend.friendKey)?.color ?? fallbackAccent

            return (
              <span
                key={`pill-${friend.id}`}
                className="inline-flex items-center gap-2 rounded-full border bg-background/55 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                style={{ borderColor: `${accent}80` }}
              >
                <span className="inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: accent }} aria-hidden="true" />
                {friend.name}
              </span>
            )
          })}
        </Marquee>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {orderedMessages.map((friend) => {
            const accent = peopleByKey.get(friend.friendKey)?.color ?? fallbackAccent

            return (
              <MagicCard
                key={friend.id}
                className="group relative h-full border border-border/45 bg-background/55 p-0"
                gradientSize={240}
                gradientFrom="#C9A84C"
                gradientTo="#942B2B"
                gradientColor="#1D1313"
                gradientOpacity={0.32}
              >
                <article className="flex h-full flex-col">
                  <header className="flex items-center gap-4 border-b border-border/40 p-5" style={{ borderBottomColor: `${accent}4a` }}>
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/20 bg-black/20">
                      <Image
                        src={friend.profileImage}
                        alt={`Foto de perfil de ${friend.name}`}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-lg font-serif text-foreground">{friend.name}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Tilines Mexico</p>
                    </div>

                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border text-muted-foreground" style={{ borderColor: `${accent}88` }}>
                      {friend.type === "audio" ? <Headphones className="h-3.5 w-3.5" /> : <Quote className="h-3.5 w-3.5" />}
                    </span>
                  </header>

                  <div className="flex-1 space-y-4 p-5">
                    {friend.type === "audio" ? (
                      <>
                        <p className="text-sm leading-relaxed text-muted-foreground">{friend.message}</p>
                        <div className="rounded-xl border border-border/50 bg-black/20 p-3" style={{ borderColor: `${accent}6e` }}>
                          <audio controls preload="metadata" className="w-full" aria-label="Mensaje de audio de Eduardo">
                            <source src={friend.audioSrc} type="audio/mpeg" />
                            Tu navegador no soporta la reproduccion de audio.
                          </audio>
                        </div>
                      </>
                    ) : (
                      <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/92">{friend.message}</p>
                    )}
                  </div>

                  <footer className="border-t border-border/35 px-5 py-3">
                    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: accent }} aria-hidden="true" />
                      Color del globo
                    </span>
                  </footer>
                </article>
              </MagicCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
