/**
 * Creates a standardized success response
 * @param data The data to include in the response
 * @param metadata Optional metadata for the response
 */
export function successResponse<T>(data: T, metadata?: Record<string, any>) {
  return {
    success: true,
    data,
    metadata: {
      timestamp: new Date().toISOString(),
      ...metadata
    }
  };
}

/**
 * Creates a standardized error response
 * @param message Error message
 * @param code Error code
 * @param details Additional error details
 */
export function errorResponse(message: string, code: string = 'ERROR', details?: any) {
  return {
    success: false,
    error: {
      message,
      code,
      ...(details && { details })
    },
    timestamp: new Date().toISOString()
  };
}
