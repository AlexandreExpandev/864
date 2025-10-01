import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

/**
 * @summary
 * Global error handling middleware
 *
 * @middleware errorMiddleware
 */
export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Log the error
  logger.error('Error occurred', {
    path: req.path,
    method: req.method,
    statusCode,
    message,
    stack: err.stack,
  });

  // Send error response
  res.status(statusCode).json({
    success: false,
    error: {
      message,
      code: err.code || 'INTERNAL_ERROR',
    },
    timestamp: new Date().toISOString(),
  });
}
