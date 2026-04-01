"use client"

import { useState } from "react"
import { BIRTHDAY_CONFIG, INITIAL_WISHES, type Wish } from "@/lib/constants"
import { formatDateCompact } from "@/lib/date-utils"
import { Heart, Quote } from "lucide-react"
import { MagicCard } from "@/components/ui/magic-card"
import { Marquee } from "@/components/ui/marquee"
import { ConfettiButton } from "@/components/ui/confetti"

export function WishWall() {
  const [wishes, setWishes] = useState<Wish[]>(INITIAL_WISHES)
  const [newWish, setNewWish] = useState({ name: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newWish.name.trim() || !newWish.message.trim()) return
    
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const wish: Wish = {
      id: Date.now().toString(),
      name: newWish.name,
      message: newWish.message,
      date: new Date().toISOString().split("T")[0],
    }
    
    setWishes(prev => [wish, ...prev])
    setNewWish({ name: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section 
      id="mensajes"
      className="relative py-32 px-4 bg-surface/30"
      aria-label="Muro de deseos"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-[var(--font-display)]">
            Cumple de Alan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mt-4">
            Mensajes para {BIRTHDAY_CONFIG.name}
          </h2>
        </div>

        <Marquee pauseOnHover className="mb-12 [--duration:24s] [--gap:0.75rem]">
          {[
            "Feliz cumple, Alan",
            "22 años de pura buena vibra",
            "Los Tilines Mexico presente",
            "Que se cumplan todas tus metas",
          ].map((line) => (
            <span
              key={line}
              className="inline-flex items-center rounded-full border border-border/50 bg-background/40 px-4 py-2 text-xs tracking-[0.2em] uppercase text-accent"
            >
              {line}
            </span>
          ))}
        </Marquee>

        <div className="mb-10 text-center">
          <ConfettiButton
            aria-label="Lanzar confeti para Alan"
            className="border border-accent/50 bg-accent/10 px-8 py-3 text-xs tracking-[0.2em] uppercase text-accent hover:bg-accent/20"
            options={{
              particleCount: 90,
              spread: 80,
              startVelocity: 40,
              origin: { y: 0.7 },
            }}
          >
            Celebrar a Alan
          </ConfettiButton>
        </div>

        {/* Wish form */}
        <form 
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto mb-20 p-8 border border-border/50 relative"
        >
          <div className="ornament-corner top-left" />
          <div className="ornament-corner bottom-right" />
          
          <h3 className="text-center text-accent text-xs tracking-[0.3em] uppercase mb-8">
            Deja tu mensaje
          </h3>
          
          <div className="space-y-6">
            <div>
              <input
                type="text"
                value={newWish.name}
                onChange={(e) => setNewWish(s => ({ ...s, name: e.target.value }))}
                placeholder="Tu nombre"
                className="w-full bg-transparent border-b border-border py-3 text-foreground
                         focus:border-accent focus:outline-none transition-colors text-center"
              />
            </div>
            <div>
              <textarea
                value={newWish.message}
                onChange={(e) => setNewWish(s => ({ ...s, message: e.target.value }))}
                placeholder="Tu mensaje de felicitacion..."
                rows={3}
                className="w-full bg-transparent border-b border-border py-3 text-foreground
                         focus:border-accent focus:outline-none transition-colors resize-none text-center"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting || !newWish.name.trim() || !newWish.message.trim()}
                className="inline-flex items-center gap-2 px-8 py-3 
                         border border-accent text-accent
                         text-xs tracking-[0.2em] uppercase
                         hover:bg-accent/10 transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3 h-3 border border-accent/30 border-t-accent 
                                   rounded-full animate-spin" />
                    Enviando
                  </>
                ) : (
                  <>
                    <Heart className="w-3 h-3" />
                    Enviar Deseo
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Wishes grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish) => (
            <MagicCard
              key={wish.id}
              className="group relative p-8 bg-background/50 border border-border/30"
              gradientSize={220}
              gradientFrom="#C9A84C"
              gradientTo="#942B2B"
              gradientColor="#251313"
              gradientOpacity={0.35}
            >
              {/* Quote icon */}
              <Quote 
                className="absolute top-4 right-4 w-6 h-6 text-accent/20 
                          group-hover:text-accent/40 transition-colors duration-500"
                strokeWidth={1}
              />
              
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                {'"'}{wish.message}{'"'}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-accent text-sm font-serif">
                  {wish.name}
                </span>
                <span className="text-muted-foreground/50 text-xs">
                  {formatDateCompact(wish.date)}
                </span>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  )
}
