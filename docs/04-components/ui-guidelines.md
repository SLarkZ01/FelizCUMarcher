# Guía de UI y Estilos

## Reglas de estilos

- Usa utilidades de Tailwind y las variables/tokens CSS existentes.
- Reutiliza `cn()` desde `@/lib/utils` para clases condicionales.
- Prioriza componentes existentes en `components/ui/*` antes de crear nuevos controles base.
- Conserva el lenguaje visual actual salvo que se pida rediseño explícito.
- Mantén comportamiento responsive funcional en móvil y escritorio.

## Dirección visual vigente

- Tema oscuro cálido con acento principal `#942B2B` y acentos dorados.
- Tipografía serif predominante (`Playfair Display`, `Cinzel`, `Cormorant Garamond`).
- Estilo actual: elegante + celebratorio, con animaciones suaves y overlays sutiles.

## Componentes externos ya integrados

- Aceternity: `Spotlight` para profundidad en hero.
- Aceternity: `Globe` para sección de conexión global.
- Magic UI:
  - `SparklesText` para énfasis del nombre.
  - `MagicCard` para tarjetas de cualidades/mensajes.
  - `Marquee` para frases en loop.
  - `ConfettiButton` como interacción celebratoria explícita.
- Overlay UI:
  - `components/ui/overlays/dialog.tsx` (Radix Dialog envuelto con estilos del proyecto).

## Criterios de uso

- No sobrecargar una misma sección con demasiados efectos animados.
- Mantener contraste legible en texto sobre fondos oscuros.
- Priorizar animaciones en `transform` y `opacity` para mejor rendimiento.

## Z-index y superposiciones

- La navegación usa una capa alta (`z-[100]`).
- Los modales deben renderizar por encima del navbar para no bloquear el cierre.
- `Dialog` quedó configurado con capas elevadas:
  - overlay: `z-[220]`
  - contenido: `z-[230]`
- Si se agrega otro overlay global (drawer, popover full-screen), mantener una escala consistente por encima de `z-[100]`.

## Galería de medios (criterio visual actual)

- Imágenes y videos deben conservar su relación de aspecto real (`width/height` desde `lib/constants.ts`).
- Para evitar recortes no deseados, usar `object-contain` en vistas ampliadas o en contenedores de ratio dinámica.
- En modales de imagen:
  - limitar altura con `max-h` relativo al viewport,
  - permitir scroll vertical del contenido,
  - mantener botón de cierre siempre visible y con contraste.
- En desktop, la galería de imágenes prioriza layout tipo focus cards (paneles flexibles por hover/focus).
- En móvil, la galería de imágenes mantiene grilla de 2 columnas para tap targets estables.
- En selector de videos:
  - usar miniaturas homogéneas (`aspect-video`) para evitar saltos visuales por media vertical,
  - usar carrusel en desktop y móvil para consistencia de interacción.

## Sección Globe (`#conexion`)

- Usar `components/ui/globe.tsx` con `dynamic(..., { ssr: false })` para evitar errores de `window` en build SSR.
- Mantener fondo oscuro y paleta dorado/burdeos para coherencia con el resto del sitio.
- Definir conexiones de amistades en `lib/constants.ts` y evitar hardcodear coordenadas en el componente.
- Acompañar el canvas 3D con texto de apoyo (rutas/listado) para reforzar accesibilidad.

## Convenciones de nombres

- Componentes: archivos y símbolos en `PascalCase`.
- Hooks: nombres en `camelCase` con prefijo `use`.
