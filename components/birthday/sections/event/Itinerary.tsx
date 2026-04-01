"use client"

import { BIRTHDAY_CONFIG } from "@/lib/constants"

export function Itinerary() {
  return (
    <section 
      id="itinerary"
      className="relative py-32 px-4 bg-surface/30"
      aria-label="Itinerario del evento"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-[var(--font-display)]">
            La Velada
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mt-4">
            Itinerario
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {BIRTHDAY_CONFIG.itinerary.map((item, index) => (
            <div 
              key={item.time}
              className={`relative flex items-start gap-8 mb-16 last:mb-0
                         ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Time badge - centered on line */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 
                            w-10 h-10 rounded-full bg-background border border-accent/40
                            flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
              }`}>
                <span className="inline-block text-accent text-lg font-serif mb-2">
                  {item.time}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
