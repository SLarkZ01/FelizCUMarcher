"use client"

import { MapPin, Clock, Sparkles } from "lucide-react"
import { BIRTHDAY_CONFIG } from "@/lib/constants"
import { formatDateFull } from "@/lib/date-utils"

export function EventDetails() {
  const formattedDate = formatDateFull(BIRTHDAY_CONFIG.birthdayDate)

  return (
    <section 
      id="details"
      className="relative py-32 px-4 overflow-hidden"
      aria-label="Detalles del evento"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-[var(--font-display)]">
            Los Detalles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mt-4 text-balance">
            Te Invitamos a Celebrar
          </h2>
        </div>

        {/* Details grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Date */}
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-accent/30 
                          flex items-center justify-center
                          group-hover:border-accent/60 transition-colors duration-500">
              <Sparkles className="w-6 h-6 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-[var(--font-display)]">
              Fecha
            </h3>
            <p className="text-lg sm:text-xl font-serif text-foreground capitalize">
              {formattedDate}
            </p>
          </div>

          {/* Time */}
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-accent/30 
                          flex items-center justify-center
                          group-hover:border-accent/60 transition-colors duration-500">
              <Clock className="w-6 h-6 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-[var(--font-display)]">
              Hora
            </h3>
            <p className="text-lg sm:text-xl font-serif text-foreground">
              {BIRTHDAY_CONFIG.eventTime} hrs
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {BIRTHDAY_CONFIG.dressCode}
            </p>
          </div>

          {/* Location */}
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-accent/30 
                          flex items-center justify-center
                          group-hover:border-accent/60 transition-colors duration-500">
              <MapPin className="w-6 h-6 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-[var(--font-display)]">
              Lugar
            </h3>
            <p className="text-lg sm:text-xl font-serif text-foreground">
              {BIRTHDAY_CONFIG.venue.name}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {BIRTHDAY_CONFIG.venue.address}
            </p>
            <a
              href={BIRTHDAY_CONFIG.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs text-accent hover:text-foreground 
                        tracking-[0.2em] uppercase transition-colors duration-300"
            >
              Ver Mapa
            </a>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-20">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-border" />
          <div className="w-2 h-2 rotate-45 border border-accent/50" />
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  )
}
