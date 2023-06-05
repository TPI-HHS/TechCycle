/**
 * @swagger
 * tags:
 *   name: Registration
 *   description: Create new User accounts
 */

/**
 * @swagger
 * /register:
 *   post:
 *    operationId: registerUser
 *    tags: ['Registration']
 *    summary: Create a new user account
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Registration"
 *    responses:
 *      '201':
 *        description: User created successfully
 *      '400':
 *        description: Invalid request payload
 *      '500':
 *        description: Internal server error
 */

/**
 * @swagger
 * components:
 *  schemas:
 *   Registration:
 *     type: object
 *     required:
 *       - username
 *       - password
 *       - email
 *       - role
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       email:
 *         type: string
 *       role:
 *         type: string
 *         enum: [customer, employee]
 */
