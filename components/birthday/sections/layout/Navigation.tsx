"use client"

import { useState, useEffect } from "react"
import { BIRTHDAY_CONFIG } from "@/lib/constants"
import { formatDateShort } from "@/lib/date-utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const formattedDate = formatDateShort(BIRTHDAY_CONFIG.birthdayDate)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-background/90 backdrop-blur-xl border-b border-border/20 shadow-lg shadow-black/20" 
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#"
          className="font-[var(--font-display)] text-accent text-sm tracking-[0.3em] uppercase
                     opacity-0 animate-fade-in animation-delay-100"
        >
          Feliz cumple, {BIRTHDAY_CONFIG.name}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {BIRTHDAY_CONFIG.navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-foreground/80 hover:text-accent text-xs tracking-[0.25em] uppercase
                         transition-colors duration-300
                         opacity-0 animate-fade-in`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Date Badge */}
        <a
          href="#mensajes"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-accent/40
                     text-accent text-xs tracking-[0.2em] uppercase
                     hover:bg-accent/10 hover:border-accent transition-all duration-300
                     opacity-0 animate-fade-in animation-delay-500"
        >
          <span>Ir al final</span>
          {formattedDate ? (
            <>
              <span className="text-foreground/60">—</span>
              <span>{formattedDate}</span>
            </>
          ) : null}
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-accent p-2"
          aria-label="Menu"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className={`w-full h-px bg-accent transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`} />
            <span className={`w-full h-px bg-accent transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`} />
            <span className={`w-full h-px bg-accent transition-transform duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass border-t border-border/30
                    transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {BIRTHDAY_CONFIG.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-accent text-sm tracking-[0.2em] uppercase
                        transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#mensajes"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 
                       border border-accent/40 text-accent text-sm tracking-[0.2em] uppercase
                       hover:bg-accent/10 transition-all duration-300"
          >
            <span>
              Ir al final
              {formattedDate ? ` - ${formattedDate}` : ""}
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
