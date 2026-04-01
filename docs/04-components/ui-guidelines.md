# Guía de UI y Estilos

## Reglas de estilos

- Usa utilidades de Tailwind y las variables/tokens CSS existentes.
- Reutiliza `cn()` desde `@/lib/utils` para clases condicionales.
- Prioriza componentes existentes en `components/ui/*` antes de crear nuevos controles base.
- Conserva el lenguaje visual actual salvo que se pida rediseño explícito.
- Mantén comportamiento responsive funcional en móvil y escritorio.

## Convenciones de nombres

- Componentes: archivos y símbolos en `PascalCase`.
- Hooks: nombres en `camelCase` con prefijo `use`.
