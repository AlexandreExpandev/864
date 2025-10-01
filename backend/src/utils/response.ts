/**
 * @summary
 * Standard success response formatter
 *
 * @function successResponse
 * @param {any} data - The data to include in the response
 * @param {object} metadata - Optional metadata for the response
 * @returns {object} Formatted success response
 */
export function successResponse(data: any, metadata: any = {}): any {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * @summary
 * Standard error response formatter
 *
 * @function errorResponse
 * @param {string} message - Error message
 * @param {string} code - Error code
 * @param {any} details - Optional error details
 * @returns {object} Formatted error response
 */
export function errorResponse(
  message: string,
  code: string = 'BAD_REQUEST',
  details: any = null
): any {
  return {
    success: false,
    error: {
      message,
      code,
      ...(details && { details }),
    },
    timestamp: new Date().toISOString(),
  };
}
