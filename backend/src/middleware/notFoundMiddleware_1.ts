/**
 * @summary
 * Middleware for handling 404 Not Found errors
 */
import { Request, Response, NextFunction } from 'express';

/**
 * Handles requests for non-existent routes
 */
export function notFoundMiddleware(req: Request, res: Response, next: NextFunction): void {
  res.status(404).json({
    success: false,
    error: {
      code: 'notFound',
      message: 'The requested resource was not found',
    },
    timestamp: new Date().toISOString(),
  });
}
