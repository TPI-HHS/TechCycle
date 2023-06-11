const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Products and Users API",
      version: "1.0.0",
      description:
        "API for selling products such as desktops, laptops, and monitors, as well as user information.",
    },
    servers: [
      {
        url: "https://techcycle-backend.azurewebsites.net/api/v1",
      },
    ],
  },
  basePath: "/",
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  // Path to Swagger schema documentation
  apis: ["./schemas/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
// Swagger page
app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const swaggerSetup = (app) => {
  app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = swaggerSetup;
