/**
 * @summary
 * Common Zod validation schemas and utilities
 */
import { z } from 'zod';

// Common validation schemas
export const zString = z.string().min(1, 'Field cannot be empty');
export const zNullableString = z.string().nullable();
export const zNumber = z.number();
export const zPositiveNumber = z.number().positive('Number must be positive');
export const zNonNegativeNumber = z.number().min(0, 'Number cannot be negative');
export const zInteger = z.number().int('Value must be an integer');
export const zPositiveInteger = z
  .number()
  .int('Value must be an integer')
  .positive('Number must be positive');
export const zNonNegativeInteger = z
  .number()
  .int('Value must be an integer')
  .min(0, 'Number cannot be negative');
export const zBoolean = z.boolean();
export const zDate = z.date();
export const zEmail = z.string().email('Invalid email format');

// Specific validation schemas for the number conversion feature
export const zNumberRange = z
  .number()
  .int('Value must be an integer')
  .min(1, 'Number must be at least 1')
  .max(10, 'Number cannot exceed 10');

/**
 * Validates that a value is a valid number in the range 1-10
 * @param value The value to validate
 */
export function validateNumberInRange(value: any): { valid: boolean; error?: string } {
  try {
    const num = Number(value);
    if (isNaN(num)) {
      return { valid: false, error: 'Value is not a number' };
    }
    if (!Number.isInteger(num)) {
      return { valid: false, error: 'Value must be an integer' };
    }
    if (num < 1 || num > 10) {
      return { valid: false, error: 'Number must be between 1 and 10' };
    }
    return { valid: true };
  } catch (error) {
    return { valid: false, error: 'Invalid value' };
  }
}
