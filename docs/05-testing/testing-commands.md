# Comandos de Testing

## Estado actual

- No existe script `test` definido en `package.json`.
- No hay configuraciones de Jest, Vitest ni Playwright.

## Qué hacer actualmente

- Si se solicita ejecutar tests, informa que no hay runner configurado.
- Si se agregan tests con Bun, prueba con `bun test`.

## Validación usada hoy en el proyecto

- Build de verificación: `bun run build`
- Lint disponible: `bun run lint`
- Desarrollo local: `bun run dev`

En ausencia de tests automatizados, la validación mínima para cambios UI es:

- `bun run build` sin errores.
- Revisión manual en desktop y móvil de secciones visibles (`hero`, `mensaje`, `galería`, `mensajes`).

## Patrones para ejecutar una sola prueba

- Bun por archivo: `bun test path/to/file.test.ts`
- Bun por nombre: `bun test -t "fragmento del nombre del test"`
- Vitest por archivo (si se agrega): `bunx vitest run path/to/file.test.ts`
- Vitest por nombre (si se agrega): `bunx vitest run -t "fragmento del nombre del test"`
- Jest por archivo (si se agrega): `bunx jest path/to/file.test.ts`
- Jest por nombre (si se agrega): `bunx jest -t "fragmento del nombre del test"`
- Playwright spec única (si se agrega): `bunx playwright test tests/example.spec.ts`

## Scripts recomendados al agregar tests

- `"test": "..."`
- `"test:watch": "..."`
- `"test:single": "..."`
