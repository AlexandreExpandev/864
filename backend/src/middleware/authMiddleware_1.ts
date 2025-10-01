/**
 * @summary
 * Authentication middleware for protected routes
 */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';

/**
 * Extended Request interface with user property
 */
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

/**
 * Middleware to authenticate requests using JWT
 */
export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  // Get token from Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({
      success: false,
      error: {
        code: 'authenticationRequired',
        message: 'Authentication required',
      },
      timestamp: new Date().toISOString(),
    });
    return;
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.security.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      error: {
        code: 'invalidToken',
        message: 'Invalid or expired token',
      },
      timestamp: new Date().toISOString(),
    });
  }
}
