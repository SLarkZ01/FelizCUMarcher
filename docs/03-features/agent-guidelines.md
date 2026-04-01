# Guía de Funcionalidades y Agentes

## Funcionalidades actuales

- Hero con countdown a `2026-04-02`, encabezado principal y CTA de scroll.
- Sección de mensaje/tributo con cualidades y cita.
- Galería con assets reales de `public/images/` y `public/videos/`.
- Sección de imágenes:
  - móvil: card destacada + grilla tocable,
  - desktop: layout tipo focus cards con expansión por hover/focus,
  - todas las imágenes abren modal ampliado con título y caption.
- Sección de videos:
  - reproductor principal responsive,
  - selector rápido en carrusel sticky para desktop,
  - selector en carrusel también en móvil (sin grilla legacy).
- Muro de mensajes con formulario local y lista dinámica de deseos.
- Interacciones visuales añadidas: `Spotlight`, `SparklesText`, `MagicCard`, `Marquee`, `ConfettiButton`.

## Personalización principal

- Datos de contenido centralizados en `lib/constants.ts`.
- En `lib/constants.ts` las fotos y videos incluyen `width` y `height` reales para respetar proporciones.
- En `lib/constants.ts` las fotos incluyen `caption` para mostrar texto en el modal ampliado.
- Si se cambia persona/fecha/copy/firma, prioriza editar `lib/constants.ts` antes que hardcodear textos.
- Anchors de navegación vigentes: `#hero`, `#mensaje`, `#galeria`, `#mensajes`.

## React y Next.js

- Mantén los componentes cliente enfocados y con estado local.
- Mantén efectos secundarios en `useEffect` con limpieza de timers/listeners.
- Conserva la carga diferida por secciones (`lazy` + `Suspense`) en `app/page.tsx`.

## Manejo de errores

- Valida entradas de usuario de forma temprana (`trim`, campos obligatorios).
- Mantén feedback visual claro en estados de envío/carga.
- Evita silencios en errores de integraciones visuales; registra contexto mínimo si aplica.
