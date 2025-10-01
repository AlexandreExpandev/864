/**
 * @summary
 * Global error handling middleware for Express application
 */
import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger/loggerUtils';

/**
 * Error response structure
 */
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * Global error handling middleware
 */
export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
  // Log the error
  logger.error('Error occurred', {
    path: req.path,
    method: req.method,
    error: err.message,
    stack: err.stack,
  });

  // Default error status and message
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || 'Internal Server Error';
  const errorCode = err.code || 'serverError';

  // Create error response
  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      code: errorCode,
      message: errorMessage,
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    },
    timestamp: new Date().toISOString(),
  };

  // Send error response
  res.status(statusCode).json(errorResponse);
}
