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

## Notas de arquitectura

- Prioriza composición sobre componentes monolíticos.
- Usa Server Components por defecto; agrega `"use client"` solo cuando sea necesario.
- Sigue el patrón existente de `Suspense` + `lazy` en `app/page.tsx` para cargar secciones.
