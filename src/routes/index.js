const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger.json");

const usersRoutes = require("./users.routes");
const productsRoutes = require("./products.routes");
const carsRoutes = require("./cars.routes");

// recibe como parametro una instancia de expres
const apiRoutes = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  app.use(usersRoutes);
  app.use(productsRoutes);
  app.use(carsRoutes);
};

module.exports = apiRoutes;
