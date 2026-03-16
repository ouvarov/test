import { validateEmail, isValidEmail } from './email_validator';

describe('validateEmail', () => {
  describe('valid emails', () => {
    const validEmails = [
      'user@example.com',
      'user.name@example.com',
      'user+tag@example.com',
      'user123@example.co.uk',
      'first.last@subdomain.example.com',
      'user%special@example.org',
      'a@b.co',
    ];

    it.each(validEmails)('should accept "%s"', (email) => {
      const result = validateEmail(email);
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });
  });

  describe('empty/missing input', () => {
    it('should reject empty string', () => {
      const result = validateEmail('');
      expect(result).toEqual({ isValid: false, error: 'Email is required' });
    });
  });

  describe('whitespace', () => {
    it('should reject leading whitespace', () => {
      const result = validateEmail(' user@example.com');
      expect(result.isValid).toBe(false);
      expect(result.error).toContain('whitespace');
    });

    it('should reject trailing whitespace', () => {
      const result = validateEmail('user@example.com ');
      expect(result.isValid).toBe(false);
      expect(result.error).toContain('whitespace');
    });
  });

  describe('invalid format', () => {
    const invalidEmails = [
      'plaintext',
      '@example.com',
      'user@',
      'user@.com',
      'user@com',
      'user@@example.com',
      'user @example.com',
    ];

    it.each(invalidEmails)('should reject "%s"', (email) => {
      expect(validateEmail(email).isValid).toBe(false);
    });
  });

  describe('local part rules', () => {
    it('should reject local part starting with dot', () => {
      const result = validateEmail('.user@example.com');
      expect(result.isValid).toBe(false);
    });

    it('should reject local part ending with dot', () => {
      const result = validateEmail('user.@example.com');
      expect(result.isValid).toBe(false);
    });

    it('should reject consecutive dots in local part', () => {
      const result = validateEmail('user..name@example.com');
      expect(result.isValid).toBe(false);
    });

    it('should reject local part longer than 64 characters', () => {
      const longLocal = 'a'.repeat(65);
      const result = validateEmail(`${longLocal}@example.com`);
      expect(result.isValid).toBe(false);
      expect(result.error).toContain('64');
    });
  });

  describe('domain rules', () => {
    it('should reject domain starting with hyphen', () => {
      const result = validateEmail('user@-example.com');
      expect(result.isValid).toBe(false);
    });
  });

  describe('length limit', () => {
    it('should reject email exceeding 254 characters', () => {
      const longEmail = 'a'.repeat(243) + '@example.com';
      expect(longEmail.length).toBeGreaterThan(254);
      const result = validateEmail(longEmail);
      expect(result.isValid).toBe(false);
      expect(result.error).toContain('254');
    });
  });
});

describe('isValidEmail', () => {
  it('should return true for valid email', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  it('should return false for invalid email', () => {
    expect(isValidEmail('invalid')).toBe(false);
  });
});