const express = require("express");
const app = express();
const cors = require("cors");
const swagger = require("./swagger/swagger");
const createClient = require("./services/clientGenerator");
const db = require("./config/database");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 3001;

const setupDatabase = () => {
  db.authenticate()
    .then(() =>
      console.log("Connection to database has been established successfully.")
    )
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
  db.sync({ alter: true })
    .then(() => {
      console.log("Product table created is successfully");
    })
    .catch((error) => {
      console.error("Error creating products table:", error);
    });
  console.log("DB setup done!");
};

const setupRoutes = () => {
  try {
    const routesDirectory = path.join(__dirname, "routes");

    fs.readdirSync(routesDirectory).forEach((file) => {
      const routePath = path.join(routesDirectory, file);
      const route = require(routePath);
      if (typeof route === "function") {
        app.use("/api/v1", route);
      }
    });
    console.log("Routes setup done!");
  } catch (error) {
    console.error("Error setting up routes:", error);
  }
};
createClient;
setupDatabase();
setupRoutes();

app.get("/api/v1", async (req, res) => {
  res.json({ "This is": "not the right page to start" });
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);

  swagger;
});
