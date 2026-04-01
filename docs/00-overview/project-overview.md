# Resumen del Proyecto

## Panorama general

- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.
- Enfoque de UI: secciones modulares en `components/birthday/sections/` + base de componentes en `components/ui/`.
- Gestor de paquetes: Bun (`bun@1.2.0`).
- Entrada principal de la página: `app/page.tsx`.
- Layout global y metadatos: `app/layout.tsx`.
- Configuración compartida: `lib/constants.ts`.
- Utilidades comunes: `lib/utils.ts`, `lib/date-utils.ts`.

## Propósito

Este repositorio contiene una web de cumpleaños personalizada para Alan, con tono cálido, navegación por secciones y foco visual en hero + mensajes + galería.

## Estado funcional actual

- La página activa incluye: `Navigation`, `Hero`, `Tribute`, `Gallery`, `WishWall` y `Footer`.
- Secciones retiradas del flujo principal: `EventDetails`, `Itinerary`, `RSVPSection`.
- Fecha objetivo del countdown: `2026-04-02` (inicio del día).
- Firma del sitio: `Los Tilines Mexico`.
- Color principal de marca: `#942B2B`.
- Integraciones visuales recientes:
  - Aceternity UI: `Spotlight`.
  - Magic UI: `SparklesText`, `MagicCard`, `ConfettiButton`, `Marquee`.
- Estado actual de galería:
  - Imágenes y videos reales servidos desde `public/images/` y `public/videos/`.
  - Metadatos de media (`width/height`, captions y posters) centralizados en `lib/constants.ts`.
  - Imágenes con modal ampliado (overlay global por encima del navbar).
  - Videos con reproductor principal y selector por carrusel en desktop y móvil.
