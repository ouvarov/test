export interface EmailValidationResult {
  isValid: boolean;
  error?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MAX_EMAIL_LENGTH = 254;

export function validateEmail(email: string): EmailValidationResult {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    return { isValid: false, error: 'Email exceeds maximum length of 254 characters' };
  }

  const trimmed = email.trim();
  if (trimmed !== email) {
    return { isValid: false, error: 'Email must not have leading or trailing whitespace' };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { isValid: false, error: 'Email format is invalid' };
  }

  const [localPart, domain] = email.split('@');

  if (localPart.length > 64) {
    return { isValid: false, error: 'Local part exceeds maximum length of 64 characters' };
  }

  if (localPart.startsWith('.') || localPart.endsWith('.')) {
    return { isValid: false, error: 'Local part must not start or end with a dot' };
  }

  if (localPart.includes('..')) {
    return { isValid: false, error: 'Local part must not contain consecutive dots' };
  }

  if (domain.startsWith('-') || domain.endsWith('-')) {
    return { isValid: false, error: 'Domain must not start or end with a hyphen' };
  }

  return { isValid: true };
}

export function isValidEmail(email: string): boolean {
  return validateEmail(email).isValid;
}