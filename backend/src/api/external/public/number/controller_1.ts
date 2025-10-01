/**
 * @summary
 * Controller for number operations including listing available numbers
 * and converting numbers to their text representation.
 */
import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse } from '../../../../utils/response/responseUtils';
import { numberList, numberToText } from '../../../../services/number/numberService';

/**
 * @summary
 * Returns the list of available numbers (1-10)
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const numbers = numberList();
    res.json(successResponse(numbers));
  } catch (error: any) {
    next(error);
  }
}

/**
 * @summary
 * Converts a number to its text representation
 */
export async function convertHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const num = parseInt(req.params.number);

    if (isNaN(num)) {
      res.status(400).json(errorResponse('invalidNumber'));
      return;
    }

    if (num < 1 || num > 10) {
      res.status(400).json(errorResponse('numberOutOfRange'));
      return;
    }

    const textRepresentation = numberToText(num);
    res.json(successResponse({ number: num, text: textRepresentation }));
  } catch (error: any) {
    next(error);
  }
}
