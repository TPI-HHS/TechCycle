/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The user managing API
 */

/**
 * @swagger
 * /users:
 *  get:
 *    security:
 *      - BearerAuth: []
 *    operationId: getAllUsers
 *    tags: ['Users']
 *    summary: "Get all users"
 *    responses:
 *      200:
 *        description: "OK"
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Users"
 *      500:
 *        description: "Internal Server Error"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Error"
 */

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    security:
 *      - BearerAuth: []
 *    operationId: getUserById
 *    tags: ['Users']
 *    summary: "Get a user by ID"
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of the user"
 *        required: true
 *        schema:
 *          type: "integer"
 *    responses:
 *      200:
 *        description: "OK"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Users"
 *      404:
 *        description: "User not found"
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
 *    operationId: updateUserById
 *    tags: ['Users']
 *    summary: "Update a user by ID"
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of the user"
 *        required: true
 *        schema:
 *          type: "integer"
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Users"
 *    responses:
 *      200:
 *        description: "OK"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Users"
 *      404:
 *        description: "User not found"
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
 *    operationId: deleteUserById
 *    tags: ['Users']
 *    summary: "Delete a user by ID"
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of the user"
 *        required: true
 *        schema:
 *          type: "integer"
 *    responses:
 *      204:
 *        description: "No Content"
 *      404:
 *        description: "User not found"
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
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: User ID
 *        username:
 *          type: string
 *          description: Username
 *        password:
 *          type: string
 *          description: User password
 *        email:
 *          type: string
 *          format: email
 *          description: User email address
 *      required: [username, password, email]
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
