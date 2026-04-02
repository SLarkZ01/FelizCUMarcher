"use client"

import { useEffect, useState } from "react"
import { BIRTHDAY_CONFIG } from "@/lib/constants"
import { Heart, Mail, MessageCircle, Send } from "lucide-react"

export function Footer() {
  const [shareUrl, setShareUrl] = useState("")
  const shareText = `${BIRTHDAY_CONFIG.shareText} - ${BIRTHDAY_CONFIG.name}`

  useEffect(() => {
    setShareUrl(window.location.href)
  }, [])
  
  return (
    <footer className="relative py-20 px-4 border-t border-border/30">
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
        <div className="w-20 h-px bg-accent/50" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Share section */}
        <div className="mb">
        </div>
        {/* Message */}
        <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-8">
          Gracias por ver la web de Alan.
          Cada mensaje suma para su cumpleaños.
        </p>

        {/* Signature */}
        <div className="flex items-center justify-center gap-2 text-accent mb-8">
          <span className="text-sm italic font-serif">Con cariño,</span>
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
          Feliz cumpleaños {BIRTHDAY_CONFIG.name} • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
