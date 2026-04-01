# Despliegue y Puertas de Calidad

## Verificaciones obligatorias antes de finalizar

- Ejecuta `bun run lint` después de cambios de código relevantes.
- Ejecuta `bun run build` cuando el cambio pueda afectar runtime o compilación.
- Si hay tests configurados, ejecuta los comandos relevantes y al menos una prueba individual.
- Reporta qué se ejecutó y qué limitaciones hubo.

## Ejecución en producción

- Comando de inicio en producción: `bun run start`.
