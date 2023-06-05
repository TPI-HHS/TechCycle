/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The product managing API
 */

/**
 * @swagger
 * /products:
 *   get:
 *     operationId: 'getProducts'
 *     tags: ['Products']
 *     description: Use to request all products
 *     responses:
 *       200:
 *         description: The list of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 #ref: '#components/schemas/product'
 *       404:
 *          description: No products found
 *   post:
 *    security:
 *      - BearerAuth: []
 *    tags: ['Products']
 *    summary: "Create a new product"
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Product"
 *    responses:
 *      201:
 *        description: "Created"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Product"
 *      500:
 *        description: "Internal Server Error"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Error"
 */

/**
 * @swagger
 * /products/{id}:
 *  get:
 *    operationId: getProductById
 *    tags: ['Products']
 *    summary: "Get a product by ID"
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of the product"
 *        required: true
 *        schema:
 *          type: "integer"
 *    responses:
 *      200:
 *        description: "OK"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Product"
 *      404:
 *        description: "Product not found"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Error"
 *      500:
 *        description: "Internal Server Error"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Error"
 *  put:
 *    security:
 *      - BearerAuth: []
 *    operationId: updateProductById
 *    tags: ['Products']
 *    summary: "Update a product by ID"
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of the product"
 *        required: true
 *        schema:
 *          type: "integer"
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Product"
 *    responses:
 *      200:
 *        description: "OK"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Product"
 *      404:
 *        description: "Product not found"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Error"
 *      500:
 *        description: "Internal Server Error"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Error"
 *  delete:
 *    security:
 *      - BearerAuth: []
 *    operationId: deleteProductById
 *    tags: ['Products']
 *    summary: "Delete a product by ID"
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of the product"
 *        required: true
 *        schema:
 *          type: "integer"
 *    responses:
 *      204:
 *        description: "No Content"
 *      404:
 *        description: "Product not found"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Error"
 *      500:
 *        description: "Internal Server Error"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Error"
 */

/**
 *
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *           - name
 *           - model
 *           - description
 *           - stocklevel
 *           - price
 *       properties:
 *         id:
 *           type: integer
 *           description: Product ID
 *         name:
 *           type: string
 *           description: Product name
 *         model:
 *           type: string
 *           enum: [desktop, laptop, monitor]
 *           description: Product model
 *         description:
 *           type: string
 *           description: Product description
 *         stocklevel:
 *           type: number
 *           format: float
 *           description: Product stocklevel
 *         price:
 *           type: number
 *           format: float
 *           description: Product price
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
