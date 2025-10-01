import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

/**
 * Global error handling middleware
 */
export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
  // Log the error
  logger.error('Error occurred', {
    path: req.path,
    method: req.method,
    error: err.message,
    stack: err.stack
  });

  // Determine status code
  const statusCode = err.statusCode || 500;

  // Send error response
  res.status(statusCode).json({
    success: false,
    error: {
      message: statusCode === 500 ? 'Internal server error' : err.message,
      code: err.code || 'SERVER_ERROR'
    },
    timestamp: new Date().toISOString()
  });
}
