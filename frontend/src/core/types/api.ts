/**
 * @interface SuccessResponse
 * @summary Defines the structure for a standardized successful API response.
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata: {
    timestamp: string;
    [key: string]: any;
  };
}

/**
 * @interface ErrorResponse
 * @summary Defines the structure for a standardized error API response.
 */
export interface ErrorResponse {
  success: false;
  error: {
    message: string;
    code: string;
    details?: any;
  };
  timestamp: string;
}
