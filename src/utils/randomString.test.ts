import { generateRandomString } from './randomString';

describe('generateRandomString', () => {
  it('returns a string of default length 16', () => {
    const result = generateRandomString();
    expect(result).toHaveLength(16);
  });

  it('returns a string of specified length', () => {
    const result = generateRandomString({ length: 32 });
    expect(result).toHaveLength(32);
  });

  it('uses only characters from the default alphanumeric charset', () => {
    const result = generateRandomString({ length: 1000 });
    expect(result).toMatch(/^[A-Za-z0-9]+$/);
  });

  it('uses only characters from a custom charset', () => {
    const result = generateRandomString({ length: 100, charset: 'abc' });
    expect(result).toMatch(/^[abc]+$/);
  });

  it('throws RangeError for length <= 0', () => {
    expect(() => generateRandomString({ length: 0 })).toThrow(RangeError);
    expect(() => generateRandomString({ length: -5 })).toThrow(RangeError);
  });

  it('throws Error for empty charset', () => {
    expect(() => generateRandomString({ charset: '' })).toThrow('Charset must not be empty');
  });

  it('generates different strings on successive calls', () => {
    const results = new Set(Array.from({ length: 10 }, () => generateRandomString()));
    expect(results.size).toBeGreaterThan(1);
  });
});