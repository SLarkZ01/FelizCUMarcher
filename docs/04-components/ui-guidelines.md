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
- Magic UI:
  - `SparklesText` para énfasis del nombre.
  - `MagicCard` para tarjetas de cualidades/mensajes.
  - `Marquee` para frases en loop.
  - `ConfettiButton` como interacción celebratoria explícita.

## Criterios de uso

- No sobrecargar una misma sección con demasiados efectos animados.
- Mantener contraste legible en texto sobre fondos oscuros.
- Priorizar animaciones en `transform` y `opacity` para mejor rendimiento.

## Convenciones de nombres

- Componentes: archivos y símbolos en `PascalCase`.
- Hooks: nombres en `camelCase` con prefijo `use`.
