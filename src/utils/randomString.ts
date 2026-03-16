const DEFAULT_LENGTH = 16;
const ALPHANUMERIC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

interface RandomStringOptions {
  length?: number;
  charset?: string;
}

export function generateRandomString(options: RandomStringOptions = {}): string {
  const { length = DEFAULT_LENGTH, charset = ALPHANUMERIC } = options;

  if (length <= 0) {
    throw new RangeError('Length must be a positive number');
  }

  if (charset.length === 0) {
    throw new Error('Charset must not be empty');
  }

  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);

  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset[bytes[i] % charset.length];
  }

  return result;
}