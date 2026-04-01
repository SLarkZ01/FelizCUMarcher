# Despliegue y Puertas de Calidad

## Verificaciones obligatorias antes de finalizar

- Ejecuta `bun run lint` después de cambios de código relevantes.
- Ejecuta `bun run build` cuando el cambio pueda afectar runtime o compilación.
- Si hay tests configurados, ejecuta los comandos relevantes y al menos una prueba individual.
- Reporta qué se ejecutó y qué limitaciones hubo.

## Criterios UI específicos del proyecto

- Verifica que la navegación apunte a anclas existentes: `#hero`, `#mensaje`, `#galeria`, `#mensajes`.
- Verifica que el hero no tenga artefactos visuales sobre el navbar.
- Confirma legibilidad de texto en fondos oscuros (contraste suficiente).
- Si se introducen nuevos componentes visuales, validar carga y render en `bun run build`.
- Si hay modales/overlays, validar que queden por encima del navbar y que el botón de cierre sea visible en móvil y desktop.
- En galería de medios, verificar que fotos y videos no se recorten (ratio dinámico respetado).
- Probar al menos una imagen panorámica y una vertical en modal para confirmar `object-contain` + límites de viewport.
- En selector de videos, validar paridad de UX entre desktop y móvil (ambos en carrusel).
- En miniaturas del selector de videos, validar homogeneidad visual (misma altura/ratio de card).

## Ejecución en producción

- Comando de inicio en producción: `bun run start`.
