import { Request, Response } from 'express';

/**
 * Middleware to handle 404 not found errors
 */
export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    error: {
      message: `Route not found: ${req.method} ${req.originalUrl}`,
      code: 'NOT_FOUND'
    },
    timestamp: new Date().toISOString()
  });
}
