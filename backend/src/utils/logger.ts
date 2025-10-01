import { createLogger, format, transports } from 'winston';
import { config } from '../config';

/**
 * @summary
 * Application logger configuration
 */
export const logger = createLogger({
  level: config.logging.level,
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'lista-inteiros-api' },
  transports: [
    // Console transport for all environments
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ level, message, timestamp, ...meta }) => {
          return `${timestamp} ${level}: ${message} ${
            Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
          }`;
        })
      ),
    }),
  ],
});

// Add file transports in production
if (process.env.NODE_ENV === 'production') {
  logger.add(new transports.File({ filename: 'logs/error.log', level: 'error' }));
  logger.add(new transports.File({ filename: 'logs/combined.log' }));
}
