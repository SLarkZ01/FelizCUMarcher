# Guía de Funcionalidades y Agentes

## React y Next.js

- Mantén los componentes cliente enfocados y con estado local.
- Mantén los efectos secundarios dentro de `useEffect` y limpia timers/listeners.
- Usa HTML semántico y etiquetas/ARIA accesibles para controles interactivos.

## Manejo de errores

- Valida entradas de usuario de forma temprana.
- Falla de forma controlada en UI con retroalimentación clara.
- No ocultes errores silenciosamente; registra contexto útil cuando sea necesario.
- Usa flujos asíncronos explícitos (`try/catch/finally`) cuando aplique.
