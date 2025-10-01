/**
 * @summary
 * Logger utility for consistent application logging
 */
import winston from 'winston';
import { config } from '../../config';

// Define log format
const logFormat = winston.format.combine(winston.format.timestamp(), winston.format.json());

// Create logger instance
export const logger = winston.createLogger({
  level: config.logging.level,
  format: logFormat,
  defaultMeta: { service: 'lista-inteiros-api' },
  transports: [
    // Console transport for all environments
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
    // File transport for production
    ...(process.env.NODE_ENV === 'production'
      ? [
          new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
          new winston.transports.File({ filename: 'logs/combined.log' }),
        ]
      : []),
  ],
});

/**
 * Generate a correlation ID for request tracking
 */
export function generateCorrelationId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
}

/**
 * Sanitize sensitive data from logs
 * @param data Data to sanitize
 */
export function sanitizeLogData(data: any): any {
  if (!data) return data;

  // Create a copy to avoid modifying the original
  const sanitized = { ...data };

  // List of sensitive fields to mask
  const sensitiveFields = ['password', 'token', 'authorization', 'secret'];

  // Recursively sanitize objects
  Object.keys(sanitized).forEach((key) => {
    if (sensitiveFields.some((field) => key.toLowerCase().includes(field))) {
      sanitized[key] = '[REDACTED]';
    } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeLogData(sanitized[key]);
    }
  });

  return sanitized;
}
