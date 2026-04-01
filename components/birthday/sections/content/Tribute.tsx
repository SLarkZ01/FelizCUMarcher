"use client"

import { BIRTHDAY_CONFIG } from "@/lib/constants"
import { Heart } from "lucide-react"

export function Tribute() {
  return (
    <section 
      className="relative py-32 px-4 overflow-hidden"
      aria-label="Tributo"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 border border-accent/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-60 h-60 border border-primary/10 rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-[var(--font-display)]">
            Celebrando
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mt-4">
            Lo Que Amamos de {BIRTHDAY_CONFIG.name}
          </h2>
        </div>

        {/* Qualities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BIRTHDAY_CONFIG.qualities.map((quality, index) => (
            <div 
              key={quality.title}
              className="group relative p-8 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Corner ornaments */}
              <div className="ornament-corner top-left group-hover:opacity-60 transition-opacity" />
              <div className="ornament-corner bottom-right group-hover:opacity-60 transition-opacity" />
              
              <div className="mb-4">
                <Heart 
                  className="w-8 h-8 mx-auto text-primary/70 group-hover:text-primary 
                            transition-colors duration-500" 
                  strokeWidth={1}
                />
              </div>
              
              <h3 className="text-lg font-serif text-accent mb-3">
                {quality.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {quality.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote section */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <div className="relative py-12 px-8">
            {/* Quote marks */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4
                           text-6xl text-accent/20 font-serif leading-none">
              {'"'}
            </span>
            
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif text-foreground italic leading-relaxed">
              {BIRTHDAY_CONFIG.quote}
            </blockquote>
            
            <footer className="mt-6 text-accent text-sm tracking-[0.2em] uppercase">
              — {BIRTHDAY_CONFIG.quoteAuthor}
            </footer>
          </div>
        </div>
      </div>
    </section>
  )
}
