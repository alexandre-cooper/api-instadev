const { Router } = require("express");
const UserController = require("./apps/controllers/UserController");
const AuthenticationController = require("./apps/controllers/AuthenticationController");
const schemaValidator = require("./apps/middlewares/schemaValidator");
const authSchema = require("./schema/auth.schema.json");
const userSchema = require("./schema/created.user.schema.json");
const AuthenticationMiddleware = require("./apps/middlewares/authentication");
const routes = new Router();

routes.post(
  "/auth",
  schemaValidator(authSchema),
  AuthenticationController.authenticate
);
routes.post("/user", schemaValidator(userSchema), UserController.createUser);
routes.get("/users", UserController.listAllUser);
routes.use(AuthenticationMiddleware);
routes.get("/health", (req, res) => {
  res.status(200).json("Autorizado");
});

module.exports = routes;
