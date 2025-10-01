import { z } from 'zod';

/**
 * Common Zod validation types for reuse across the application
 */

// String validations
export const zString = z.string().min(1, 'Field is required');
export const zNullableString = z.string().nullable();
export const zName = z.string().min(1, 'Name is required').max(100, 'Name is too long');
export const zNullableDescription = z.string().max(500, 'Description is too long').nullable();

// Number validations
export const zNumber = z.number();
export const zPositiveNumber = z.number().positive('Number must be positive');
export const zNonNegativeNumber = z.number().min(0, 'Number must be non-negative');
export const zInteger = z.number().int('Value must be an integer');
export const zPositiveInteger = z.number().int('Value must be an integer').positive('Value must be positive');

// Boolean validations
export const zBit = z.boolean();

// ID validations
export const zFK = z.number().int('ID must be an integer').positive('ID must be positive');
export const zNullableFK = z.number().int('ID must be an integer').positive('ID must be positive').nullable();

// Date validations
export const zDate = z.date();
export const zDateString = z.string().refine((val) => !isNaN(Date.parse(val)), {
  message: 'Invalid date format'
});
export const zNullableDateString = z.string().refine((val) => val === null || !isNaN(Date.parse(val)), {
  message: 'Invalid date format'
}).nullable();
