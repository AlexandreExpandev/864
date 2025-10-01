/**
 * @summary
 * Unit tests for number controller
 */
import { Request, Response, NextFunction } from 'express';
import { getHandler, convertHandler } from './controller';
import { numberList, numberToText } from '../../../../services/number/numberService';

// Mock the number service
jest.mock('../../../../services/number/numberService', () => ({
  numberList: jest.fn(),
  numberToText: jest.fn(),
}));

describe('Number Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();
  });

  describe('getHandler', () => {
    it('should return list of numbers', async () => {
      // Mock the service response
      (numberList as jest.Mock).mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      await getHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(numberList).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: true,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        metadata: expect.objectContaining({
          timestamp: expect.any(String),
        }),
      });
    });

    it('should call next with error if service throws', async () => {
      const error = new Error('Service error');
      (numberList as jest.Mock).mockImplementation(() => {
        throw error;
      });

      await getHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('convertHandler', () => {
    it('should convert valid number to text', async () => {
      mockRequest.params = { number: '5' };
      (numberToText as jest.Mock).mockReturnValue('cinco');

      await convertHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(numberToText).toHaveBeenCalledWith(5);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: true,
        data: { number: 5, text: 'cinco' },
        metadata: expect.objectContaining({
          timestamp: expect.any(String),
        }),
      });
    });

    it('should return error for non-numeric input', async () => {
      mockRequest.params = { number: 'abc' };

      await convertHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          error: expect.objectContaining({
            code: 'invalidNumber',
          }),
        })
      );
    });

    it('should return error for out of range number', async () => {
      mockRequest.params = { number: '11' };

      await convertHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          error: expect.objectContaining({
            code: 'numberOutOfRange',
          }),
        })
      );
    });
  });
});
