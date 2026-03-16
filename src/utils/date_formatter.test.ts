import { formatDate, formatRelative, isValidDate } from './date_formatter';

describe('formatDate', () => {
  const date = new Date(2026, 2, 16, 9, 5, 3); // 2026-03-16 09:05:03

  test('formats full date-time', () => {
    expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2026-03-16 09:05:03');
  });

  test('formats date only', () => {
    expect(formatDate(date, 'DD.MM.YYYY')).toBe('16.03.2026');
  });

  test('formats time only', () => {
    expect(formatDate(date, 'HH:mm')).toBe('09:05');
  });

  test('zero-pads single-digit months and days', () => {
    const jan = new Date(2026, 0, 5); // January 5
    expect(formatDate(jan, 'MM-DD')).toBe('01-05');
  });

  test('handles December 31', () => {
    const dec31 = new Date(2026, 11, 31, 23, 59, 59);
    expect(formatDate(dec31, 'YYYY-MM-DD HH:mm:ss')).toBe('2026-12-31 23:59:59');
  });
});

describe('formatRelative', () => {
  const now = new Date(2026, 2, 16, 12, 0, 0);

  test('returns "только что" for less than 60 seconds', () => {
    const date = new Date(now.getTime() - 30 * 1000);
    expect(formatRelative(date, now)).toBe('только что');
  });

  test('returns minutes ago', () => {
    const date = new Date(now.getTime() - 5 * 60 * 1000);
    expect(formatRelative(date, now)).toBe('5 минут назад');
  });

  test('returns hours ago', () => {
    const date = new Date(now.getTime() - 2 * 60 * 60 * 1000);
    expect(formatRelative(date, now)).toBe('2 часа назад');
  });

  test('returns "вчера" for 1 day ago', () => {
    const date = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    expect(formatRelative(date, now)).toBe('вчера');
  });

  test('returns days ago for 2-6 days', () => {
    const date = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
    expect(formatRelative(date, now)).toBe('3 дня назад');
  });

  test('returns formatted date for 7+ days ago', () => {
    const date = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000);
    expect(formatRelative(date, now)).toBe('06.03.2026');
  });
});

describe('isValidDate', () => {
  test('returns true for valid Date', () => {
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate(new Date(2026, 0, 1))).toBe(true);
  });

  test('returns false for invalid Date', () => {
    expect(isValidDate(new Date('invalid'))).toBe(false);
  });

  test('returns false for non-Date values', () => {
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate(undefined)).toBe(false);
    expect(isValidDate('2026-01-01')).toBe(false);
    expect(isValidDate(1234567890)).toBe(false);
    expect(isValidDate({})).toBe(false);
  });
});