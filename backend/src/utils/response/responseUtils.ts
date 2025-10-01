/**
 * @summary
 * Utility functions for standardized API responses
 */

/**
 * Success response structure
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    timestamp: string;
    [key: string]: any;
  };
}

/**
 * Error response structure
 */
export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message?: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * Creates a standardized success response
 * @param data The data to include in the response
 * @param metadata Additional metadata for the response
 */
export function successResponse<T>(data: T, metadata?: Record<string, any>): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      timestamp: new Date().toISOString(),
      ...metadata,
    },
  };
}

/**
 * Creates a standardized error response
 * @param code Error code
 * @param message Optional error message
 * @param details Optional error details
 */
export function errorResponse(code: string, message?: string, details?: any): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
}

/**
 * Creates a standardized paginated response
 * @param data The data array to include in the response
 * @param page Current page number
 * @param pageSize Number of items per page
 * @param total Total number of items
 * @param additionalMetadata Additional metadata for the response
 */
export function paginatedResponse<T>(
  data: T[],
  page: number,
  pageSize: number,
  total: number,
  additionalMetadata?: Record<string, any>
): SuccessResponse<T[]> {
  return {
    success: true,
    data,
    metadata: {
      timestamp: new Date().toISOString(),
      pagination: {
        page,
        pageSize,
        total,
        pages: Math.ceil(total / pageSize),
        hasNext: page * pageSize < total,
        hasPrevious: page > 1,
      },
      ...additionalMetadata,
    },
  };
}
