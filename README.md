# Products API (Demo)
## API for managing products

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/dsin867/example-rest-api.git
   cd example-rest-api
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Create a `.env` file at the root level**
   Add your API key in the following format:
   ```env
   API_KEY=example-key-1234
   ```
4. **Start the server**
   ```bash
   node src/index.js
   ```

---

## API Documentation

Base URL: `/api/products`

### Endpoints

#### GET `/api/products`
- **Description:** Retrieve all products.
- **Response:** Array of product objects.

#### POST `/api/products`
- **Description:** Create a new product.
- **Body:**
  ```json
  {
    "product_id": number,
    "name": string,
    "category": string,
    "price": number,
    "stockQuantity": number,
    "brand": string
  }
  ```
- **Response:** Created product object.

#### PUT `/api/products/:id`
- **Description:** Update an existing product by ID.
- **Body:**
  ```json
  {
    "name": string,
    "category": string,
    "price": number,
    "stockQuantity": number,
    "brand": string
  }
  ```
- **Response:** Updated product object.

#### DELETE `/api/products/:id`
- **Description:** Delete a product by ID.
- **Response:** Success message or deleted product object.

---

## Product Object Example
```json
{
  "product_id": 1,
  "created_at": "2024-12-12 04:21:45",
  "isActive": true,
  "name": "Product 1",
  "category": "Category",
  "price": 99.99,
  "stockQuantity": 10,
  "brand": "BrandA"
}
```
