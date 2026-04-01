# Runbook para Agentes

## Reglas de documentación

- Toda la documentación del proyecto debe vivir en `docs/`.
- Organiza la documentación en subcarpetas numeradas del `00` al `08`.
- Usa archivos Markdown concisos, orientados a tareas y con nombres descriptivos.
- Enlaza documentos relacionados con rutas relativas.
- Actualiza la documentación en el mismo PR cuando cambie el comportamiento.

## Flujo operativo recomendado

1. Revisar `lib/constants.ts` y `app/page.tsx` para confirmar el estado funcional vigente.
2. Si hay nuevos componentes UI instalados, documentarlos en:
   - `docs/02-architecture/source-layout.md`
   - `docs/04-components/ui-guidelines.md`
3. Si cambia la UX o navegación, actualizar:
   - `docs/03-features/agent-guidelines.md`
   - `docs/06-deploy/quality-gates.md`
4. Si cambia la galería (imágenes/videos/modales), actualizar además:
   - `docs/04-components/ui-guidelines.md`
   - `docs/05-testing/testing-commands.md`
5. Cerrar con validación mínima reportable:
   - `bun run build`
   - chequeo manual de la home.
