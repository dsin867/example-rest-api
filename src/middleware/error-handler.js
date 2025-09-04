import { ApiError, ValidationError } from '../errors/api-error.js';
import { ErrorResponse } from '../errors/error-response.js';

export function errorHandler(err, req, res, next) {

  const errorResponse = new ErrorResponse({
    message: 'Internal Server Error',
    statusCode: 500,
    //details: process.env.NODE_ENV !== 'production' ? err.stack : undefined
  });

  if(err instanceof ValidationError || err instanceof ApiError) {
    errorResponse.message = err.message;
    errorResponse.statusCode = err.statusCode;
  }
 
  res.status(statusCode).json(errorResponse);
}