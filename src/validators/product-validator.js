// validators/product-validator.js
import { ValidationError } from '../errors/api-error.js';

export class ProductValidator {
  static validateCreatePayload(product) {
    if (!product.product_id || typeof product.product_id !== 'number') {
      throw new ValidationError("Product id is required and must be a number.");
    }

    if (!product.name || typeof product.name !== 'string') {
      throw new ValidationError("Product name is required and must be a string.");
    }

    if (product.price !== undefined && typeof product.price !== 'number') {
      throw new ValidationError("Price must be a number.");
    }
  }

  static validateUpdatePayload(product) {
    if (product.name !== undefined && typeof product.name !== 'string') {
      throw new ValidationError("If provided, product name must be a string.");
    }
    if (product.price !== undefined && typeof product.price !== 'number') {
      throw new ValidationError("If provided, price must be a number.");
    }
  }

}