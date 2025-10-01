import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse } from '../../../../utils/response/responseUtils';
import { numberService } from '../../../../services/number';

/**
 * @api {get} /api/external/public/numbers Get Numbers List
 * @apiName GetNumbers
 * @apiGroup Number
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a list of numbers with their text representations
 *
 * @apiSuccess {Object[]} data List of number objects
 * @apiSuccess {Number} data.number Numeric value
 * @apiSuccess {String} data.text Text representation
 *
 * @apiError {String} ServerError Internal server error
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const numbers = numberService.getNumbersList();
    res.json(successResponse(numbers));
  } catch (error: any) {
    next(error);
  }
}
