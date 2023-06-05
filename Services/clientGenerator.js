const path = require("path");
const { codegen } = require("swagger-axios-codegen");
const swagger = require("../swagger/swagger.json");

const clientPath = path.join(__dirname, "..", "clientApi");

codegen({
  methodNameMode: "operationId",
  serviceNameSuffix: "Client",
  source: swagger,
  outputDir: clientPath,
  fileName: "tech-cycle-client.ts",
  useStaticMethod: false,
});
