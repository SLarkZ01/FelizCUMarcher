"use client"

import { BIRTHDAY_CONFIG } from "@/lib/constants"
import { Heart, Mail, MessageCircle, Send } from "lucide-react"

export function Footer() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `${BIRTHDAY_CONFIG.shareText} - ${BIRTHDAY_CONFIG.name}`

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
    },
    {
      name: "Telegram",
      icon: Send,
      href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodeURIComponent(`Celebracion de ${BIRTHDAY_CONFIG.name}`)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
    },
  ]

  return (
    <footer className="relative py-20 px-4 border-t border-border/30">
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
        <div className="w-20 h-px bg-accent/50" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Share section */}
        <div className="mb-12">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-[var(--font-display)]">
            Comparte la Celebracion
          </span>
          
          <div className="flex items-center justify-center gap-6 mt-6">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border/50 
                         flex items-center justify-center
                         text-muted-foreground hover:text-accent hover:border-accent/50
                         transition-all duration-300"
                aria-label={`Compartir en ${link.name}`}
              >
                <link.icon className="w-5 h-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Message */}
        <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-8">
          Gracias por ser parte de esta celebracion tan especial. 
          Tu presencia hace este momento aun mas memorable.
        </p>

        {/* Signature */}
        <div className="flex items-center justify-center gap-2 text-accent mb-8">
          <span className="text-sm italic font-serif">Con amor,</span>
          <span className="text-sm font-serif">{BIRTHDAY_CONFIG.from}</span>
        </div>

        {/* Heart decoration */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-border" />
          <Heart className="w-4 h-4 text-primary" fill="currentColor" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-border" />
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground/50 text-xs tracking-wider">
          Una celebracion para {BIRTHDAY_CONFIG.name} • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
