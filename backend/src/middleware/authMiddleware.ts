import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';

/**
 * @summary
 * Authentication middleware to protect routes
 *
 * @middleware authMiddleware
 */
export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        success: false,
        error: {
          message: 'Authentication required',
          code: 'AUTH_REQUIRED',
        },
        timestamp: new Date().toISOString(),
      });
      return;
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({
        success: false,
        error: {
          message: 'Invalid token format',
          code: 'INVALID_TOKEN_FORMAT',
        },
        timestamp: new Date().toISOString(),
      });
      return;
    }

    // Verify token
    const decoded = jwt.verify(token, config.security.jwtSecret);

    // Add user info to request
    (req as any).user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      error: {
        message: 'Invalid or expired token',
        code: 'INVALID_TOKEN',
      },
      timestamp: new Date().toISOString(),
    });
  }
}
