"use client"

import Image from "next/image"
import { BIRTHDAY_CONFIG } from "@/lib/constants"

export function Gallery() {
  return (
    <section 
      id="galeria"
      className="relative py-32 px-4 bg-surface/30"
      aria-label="Galeria de fotos"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-[var(--font-display)]">
            Recuerdos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mt-4">
            Momentos con Alan
          </h2>
        </div>

        {/* Bento grid gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {BIRTHDAY_CONFIG.photos.map((photo, index) => {
            // Create bento-style layout
            const spanClasses = [
              "col-span-2 row-span-2", // Large
              "col-span-1 row-span-1", // Small
              "col-span-1 row-span-1", // Small
              "col-span-2 row-span-1", // Wide
              "col-span-1 row-span-2", // Tall
              "col-span-1 row-span-1", // Small
            ]
            
            return (
              <div 
                key={photo.id}
                className={`relative overflow-hidden group ${spanClasses[index % spanClasses.length]}`}
              >
                <div className="relative w-full h-full min-h-[200px] md:min-h-[250px]">
                  <Image
                    src={photo.url}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 
                             group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6
                                translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-accent text-xs tracking-[0.2em] uppercase">
                      {photo.title}
                    </span>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-accent/0 
                                group-hover:border-accent/40 transition-colors duration-500" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
