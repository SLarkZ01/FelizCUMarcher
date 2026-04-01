# Estructura del Código Fuente

## Directorios principales

- `app/`: rutas de Next.js, layout principal y CSS global.
- `components/birthday/sections/`: secciones funcionales de la página de cumpleaños (hero, contenido, layout).
- `components/ui/`: componentes base reutilizables (shadcn/ui + componentes instalados de Aceternity/Magic UI).
- `hooks/`: hooks personalizados.
- `lib/`: constantes, tipos y utilidades compartidas.
- `public/`: archivos estáticos.
- `docs/`: documentación del proyecto y reglas operativas.

## Secciones activas de la home

- `components/birthday/sections/layout/Navigation.tsx`
- `components/birthday/sections/hero/Hero.tsx`
- `components/birthday/sections/content/Tribute.tsx`
- `components/birthday/sections/content/Gallery.tsx`
- `components/birthday/sections/content/WishWall.tsx`
- `components/birthday/sections/layout/Footer.tsx`

`app/page.tsx` orquesta estas secciones con `lazy` + `Suspense`.

## Componentes UI añadidos recientemente

- `components/ui/spotlight.tsx` (Aceternity)
- `components/ui/sparkles-text.tsx` (Magic UI)
- `components/ui/magic-card.tsx` (Magic UI)
- `components/ui/confetti.tsx` (Magic UI)
- `components/ui/marquee.tsx` (Magic UI)
- `components/ui/overlays/dialog.tsx` (shadcn/radix wrapper para modales)

## Media assets activos

- Imágenes de galería en `public/images/`.
- Videos de galería en `public/videos/`.
- Capturas de referencia manual en `public/image/`.
- Metadatos de medios (título, alt/caption, poster, `width/height`) centralizados en `lib/constants.ts`.

## Galería actual (implementación)

- `components/birthday/sections/content/Gallery.tsx` contiene:
  - bloque destacado de imagen en móvil,
  - carrusel tipo focus para imágenes en desktop,
  - modal de imagen por item (Dialog),
  - selector rápido de videos con carrusel sticky en desktop,
  - selector de videos por carrusel también en móvil,
  - reproductor principal de video con layout responsive por breakpoint.

## Notas de arquitectura

- Prioriza composición sobre componentes monolíticos.
- Usa Server Components por defecto; agrega `"use client"` solo cuando sea necesario.
- Sigue el patrón existente de `Suspense` + `lazy` en `app/page.tsx` para cargar secciones.
