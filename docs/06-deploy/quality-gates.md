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

## Ejecución en producción

- Comando de inicio en producción: `bun run start`.
