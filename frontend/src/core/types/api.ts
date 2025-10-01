/**
 * @summary Generic type for a successful API response from the backend.
 */
export interface SuccessResponse<T> {
  data: T;
  success: true;
}

/**
 * @summary Generic type for a failed API response from the backend.
 */
export interface ErrorResponse {
  error: {
    message: string;
    code?: number;
  };
  success: false;
}
