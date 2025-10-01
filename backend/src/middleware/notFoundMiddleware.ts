import { Request, Response } from 'express';

/**
 * @summary
 * Middleware to handle 404 Not Found errors
 *
 * @middleware notFoundMiddleware
 */
export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    error: {
      message: 'Resource not found',
      code: 'NOT_FOUND',
    },
    timestamp: new Date().toISOString(),
  });
}
