import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { errorResponse, successResponse } from '../../../../utils/response';
import { numberService } from '../../../../services/number';

/**
 * @summary
 * Lists all available numbers with their text representations
 *
 * @function listHandler
 */
export async function listHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const numbers = await numberService.listNumbers();
    res.json(successResponse(numbers));
  } catch (error: any) {
    next(error);
  }
}

/**
 * @summary
 * Gets a specific number by its numeric value and returns its text representation
 *
 * @function getHandler
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const paramSchema = z.object({
      id: z.coerce.number().int().min(1).max(10),
    });

    const result = paramSchema.safeParse(req.params);

    if (!result.success) {
      res.status(400).json(errorResponse('Invalid number. Must be between 1 and 10.'));
      return;
    }

    const { id } = result.data;
    const number = await numberService.getNumberById(id);

    if (!number) {
      res.status(404).json(errorResponse('Number not found'));
      return;
    }

    res.json(successResponse(number));
  } catch (error: any) {
    next(error);
  }
}
