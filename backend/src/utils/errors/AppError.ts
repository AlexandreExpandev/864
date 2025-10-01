/**
 * Custom application error class
 */
export class AppError extends Error {
  statusCode: number;
  code: string;
  details?: any;

  /**
   * Create a new application error
   * @param message Error message
   * @param statusCode HTTP status code
   * @param code Error code for client
   * @param details Additional error details
   */
  constructor(message: string, statusCode: number = 500, code: string = 'SERVER_ERROR', details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
