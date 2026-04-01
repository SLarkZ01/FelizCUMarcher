// Date formatting utilities that work consistently on server and client
// Using manual formatting to avoid locale-specific hydration mismatches

const MONTHS_ES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
]

const MONTHS_SHORT_ES = [
  "ene", "feb", "mar", "abr", "may", "jun",
  "jul", "ago", "sep", "oct", "nov", "dic"
]

const WEEKDAYS_ES = [
  "domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"
]

/**
 * Format date as "15.06" (day.month)
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString + "T12:00:00")
  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0")
  return `${day}.${month}`
}

/**
 * Format date as "domingo, 15 de junio de 2025"
 */
export function formatDateFull(dateString: string): string {
  const date = new Date(dateString + "T12:00:00")
  const weekday = WEEKDAYS_ES[date.getDay()]
  const day = date.getDate()
  const month = MONTHS_ES[date.getMonth()]
  const year = date.getFullYear()
  return `${weekday}, ${day} de ${month} de ${year}`
}

/**
 * Format date as "15 jun"
 */
export function formatDateCompact(dateString: string): string {
  const date = new Date(dateString + "T12:00:00")
  const day = date.getDate()
  const month = MONTHS_SHORT_ES[date.getMonth()]
  return `${day} ${month}`
}
