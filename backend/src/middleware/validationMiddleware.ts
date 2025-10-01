import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

/**
 * Middleware factory for request validation using Zod schemas
 * @param schema The Zod schema to validate against
 * @param source The request property to validate (body, params, query)
 */
export function validationMiddleware(
  schema: ZodSchema,
  source: 'body' | 'params' | 'query' = 'body'
) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await schema.parseAsync(req[source]);
      req[source] = data;
      next();
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: {
          message: 'Validation failed',
          code: 'VALIDATION_ERROR',
          details: error.errors
        },
        timestamp: new Date().toISOString()
      });
    }
  };
}
