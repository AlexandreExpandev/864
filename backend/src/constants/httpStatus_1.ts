/**
 * @summary
 * HTTP status code constants
 */

// Success codes
export const STATUS_OK = 200;
export const STATUS_CREATED = 201;
export const STATUS_ACCEPTED = 202;
export const STATUS_NO_CONTENT = 204;

// Client error codes
export const STATUS_BAD_REQUEST = 400;
export const STATUS_UNAUTHORIZED = 401;
export const STATUS_FORBIDDEN = 403;
export const STATUS_NOT_FOUND = 404;
export const STATUS_METHOD_NOT_ALLOWED = 405;
export const STATUS_CONFLICT = 409;
export const STATUS_UNPROCESSABLE_ENTITY = 422;
export const STATUS_TOO_MANY_REQUESTS = 429;

// Server error codes
export const STATUS_INTERNAL_SERVER_ERROR = 500;
export const STATUS_NOT_IMPLEMENTED = 501;
export const STATUS_BAD_GATEWAY = 502;
export const STATUS_SERVICE_UNAVAILABLE = 503;
