# Guía de Funcionalidades y Agentes

## Funcionalidades actuales

- Hero con countdown a `2026-04-02`, encabezado principal y CTA de scroll.
- Al llegar a `00:00:00`, el hero muestra "Ya es el cumple" y dispara confeti automático en pantalla.
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
- Sección de conexión global (`#conexion`) con `GitHub Globe` (Aceternity):
  - visualiza amistades entre México, Texas y Colombia,
  - arcos generados automáticamente desde `lib/constants.ts` (`globePeople`),
  - lista textual de rutas para accesibilidad y contexto.
- Muro de mensajes con formulario local y lista dinámica de deseos.
- Interacciones visuales añadidas: `Spotlight`, `SparklesText`, `MagicCard`, `Marquee`, `ConfettiButton`.

## Personalización principal

- Datos de contenido centralizados en `lib/constants.ts`.
- En `lib/constants.ts` las fotos y videos incluyen `width` y `height` reales para respetar proporciones.
- En `lib/constants.ts` las fotos incluyen `caption` para mostrar texto en el modal ampliado.
- En `lib/constants.ts` la red global usa `globePeople`; las rutas del globo se derivan en `FriendshipGlobe.tsx`.
- Si se cambia persona/fecha/copy/firma, prioriza editar `lib/constants.ts` antes que hardcodear textos.
- Anchors de navegación vigentes: `#hero`, `#mensaje`, `#galeria`, `#conexion`, `#mensajes`.

## React y Next.js

- Mantén los componentes cliente enfocados y con estado local.
- Mantén efectos secundarios en `useEffect` con limpieza de timers/listeners.
- Conserva la carga diferida por secciones (`lazy` + `Suspense`) en `app/page.tsx`.

## Manejo de errores

- Valida entradas de usuario de forma temprana (`trim`, campos obligatorios).
- Mantén feedback visual claro en estados de envío/carga.
- Evita silencios en errores de integraciones visuales; registra contexto mínimo si aplica.
