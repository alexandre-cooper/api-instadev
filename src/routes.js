const { Router } = require("express");
const UserController = require("./apps/controllers/UserController");
const schemaValidator = require("./apps/middlewares/schemaValidator");
const userSchema = require("./schema/created.user.schema.json");
const routes = new Router();

routes.get("/health", (req, res) => {
  res.status(200).json("Servidor on");
});

routes.post("/user", schemaValidator(userSchema), UserController.createUser);
routes.get("/users", UserController.listAllUser);

module.exports = routes;
