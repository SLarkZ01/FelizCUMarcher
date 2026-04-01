# Estructura del Código Fuente

## Directorios principales

- `app/`: rutas de Next.js, layout principal y CSS global.
- `components/birthday/sections/`: secciones funcionales de la página de cumpleaños.
- `components/ui/`: componentes base reutilizables.
- `hooks/`: hooks personalizados.
- `lib/`: constantes, tipos y utilidades compartidas.
- `public/`: archivos estáticos.
- `docs/`: documentación del proyecto y reglas operativas.

## Notas de arquitectura

- Prioriza composición sobre componentes monolíticos.
- Usa Server Components por defecto; agrega `"use client"` solo cuando sea necesario.
- Sigue el patrón existente de `Suspense` + `lazy` en `app/page.tsx` para cargar secciones.
