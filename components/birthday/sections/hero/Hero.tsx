"use client"

import { ChevronDown } from "lucide-react"
import { BIRTHDAY_CONFIG } from "@/lib/constants"
import { useCountdown } from "@/hooks/useCountdown"
import { Spotlight } from "@/components/ui/spotlight"
import { SparklesText } from "@/components/ui/sparkles-text"

export function Hero() {
  const { days, hours, minutes } = useCountdown(BIRTHDAY_CONFIG.birthdayDate)

  const scrollToDetails = () => {
    document.getElementById("mensaje")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4
                 overflow-hidden noise-overlay"
      aria-label="Hero"
    >
      <Spotlight
        className="hidden md:block -top-28 left-1/4 h-[169%] w-[84%]"
        fill="hsl(356 55% 37%)"
      />
      <div className="pointer-events-none absolute inset-0 md:hidden">
        <div className="absolute left-1/2 top-[46%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute left-1/2 top-[46%] h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[88px]" />
      </div>

      {/* Ambient glow effects */}
      <div className="absolute hidden md:block top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-glow-pulse" />
      <div className="absolute hidden md:block bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl animate-glow-pulse animation-delay-500" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto pt-20">
        {/* Celebration label */}
        <p 
          className="text-accent font-[var(--font-display)] text-xs sm:text-sm uppercase tracking-[0.5em] mb-12
                     opacity-0 animate-fade-in animation-delay-200"
        >
          2 de abril de 2026
        </p>
        
        {/* Main title - dramatic typography like the reference */}
        <div className="mb-16">
          <h1 className="opacity-0 animate-fade-up animation-delay-300">
            <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-foreground mb-4 tracking-tight">
              {BIRTHDAY_CONFIG.eventTitle}
            </span>
          </h1>
          <h1 className="opacity-0 animate-fade-up animation-delay-400">
            <SparklesText
              sparklesCount={7}
              colors={{ first: "#C9A84C", second: "#FDF6EC" }}
              className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-serif italic text-primary tracking-tight"
            >
              {BIRTHDAY_CONFIG.eventHighlight}
            </SparklesText>
          </h1>
          <h1 className="opacity-0 animate-fade-up animation-delay-500">
            <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-foreground mt-4 tracking-tight">
              {BIRTHDAY_CONFIG.eventSubtitle}
            </span>
          </h1>
        </div>
        
        {/* Minimal countdown - like reference image */}
        <div 
          className="flex items-center justify-center gap-8 sm:gap-12 mb-16
                     opacity-0 animate-fade-in animation-delay-700"
        >
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-serif text-foreground">
              {String(days).padStart(2, "0")}
            </span>
            <span className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.3em] mt-1">
              Días
            </span>
          </div>
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-serif text-foreground">
              {String(hours).padStart(2, "0")}
            </span>
            <span className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.3em] mt-1">
              Hrs
            </span>
          </div>
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-serif text-foreground">
              {String(minutes).padStart(2, "0")}
            </span>
            <span className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.3em] mt-1">
              Min
            </span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={scrollToDetails}
        className="absolute bottom-12 left-1/2 z-10
                   text-foreground/40 hover:text-accent transition-colors duration-500
                   opacity-0 animate-fade-in animation-delay-1000
                   animate-bounce-subtle"
        aria-label="Desplazar hacia abajo"
      >
        <ChevronDown className="w-6 h-6" strokeWidth={1} />
      </button>
      
      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 
                   bg-gradient-to-t from-background to-transparent
                   pointer-events-none z-10"
      />
    </section>
  )
}
