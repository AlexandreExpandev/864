/**
 * @summary
 * Middleware for request validation using Zod schemas
 */
import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

/**
 * Creates a middleware function that validates request data against a Zod schema
 * @param schema The Zod schema to validate against
 * @param source The request property to validate ('body', 'query', 'params')
 */
export function validationMiddleware(
  schema: ZodSchema,
  source: 'body' | 'query' | 'params' = 'body'
) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await schema.parseAsync(req[source]);
      req[source] = data;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          error: {
            code: 'validationError',
            message: 'Request validation failed',
            details: error.errors,
          },
          timestamp: new Date().toISOString(),
        });
      } else {
        next(error);
      }
    }
  };
}
