/**
 * Utility functions for date formatting.
 */

/**
 * Formats a Date object according to a format string.
 *
 * Supported tokens:
 * - YYYY — full year (e.g. 2026)
 * - MM   — month, zero-padded (01–12)
 * - DD   — day, zero-padded (01–31)
 * - HH   — hours, zero-padded (00–23)
 * - mm   — minutes, zero-padded (00–59)
 * - ss   — seconds, zero-padded (00–59)
 */
export function formatDate(date: Date, format: string): string {
  const pad = (n: number): string => String(n).padStart(2, '0');

  return format
    .replace('YYYY', String(date.getFullYear()))
    .replace('MM', pad(date.getMonth() + 1))
    .replace('DD', pad(date.getDate()))
    .replace('HH', pad(date.getHours()))
    .replace('mm', pad(date.getMinutes()))
    .replace('ss', pad(date.getSeconds()));
}

/**
 * Returns a human-readable relative time string.
 *
 * Examples: "только что", "5 минут назад", "2 часа назад",
 *           "вчера", "3 дня назад", or a formatted date for older values.
 */
export function formatRelative(date: Date, now: Date = new Date()): string {
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 60) {
    return 'только что';
  }
  if (diffMinutes < 60) {
    return `${diffMinutes} минут назад`;
  }
  if (diffHours < 24) {
    return `${diffHours} часа назад`;
  }
  if (diffDays === 1) {
    return 'вчера';
  }
  if (diffDays < 7) {
    return `${diffDays} дня назад`;
  }

  return formatDate(date, 'DD.MM.YYYY');
}

/**
 * Type guard — checks whether a value is a valid Date instance.
 */
export function isValidDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}