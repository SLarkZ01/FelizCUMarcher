# Estándares de Código

## TypeScript

- Mantén el código compatible con `strict: true` en `tsconfig.json`.
- Prefiere interfaces/tipos explícitos para datos estructurados.
- Usa `as const` en configuraciones inmutables cuando corresponda.
- Evita `any`; prefiere `unknown` con narrowing.

## Imports y módulos

- Usa imports con alias `@/*`.
- Prioriza imports internos absolutos sobre relativos profundos.
- Orden de imports:
  1. React/Next y framework
  2. Librerías de terceros
  3. Imports internos con alias
  4. Imports locales relativos

## Formato y nombres

- Respeta el estilo del archivo que se modifica.
- Mantén formato compatible con Prettier.
- Componentes y tipos: `PascalCase`.
- Funciones, variables y hooks: `camelCase` (`useX` para hooks).
- Constantes: `UPPER_SNAKE_CASE` cuando sean semánticamente constantes.

## Higiene de Git

- Mantén diffs enfocados.
- No elimines cambios del usuario que no estén relacionados.
- Evita operaciones destructivas de git salvo solicitud explícita.
