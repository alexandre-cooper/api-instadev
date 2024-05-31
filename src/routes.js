const { Router } = require("express");
const UserModel = require("./apps/models/Users");
const routes = new Router();

routes.get("/health", (req, res) => {
  res.status(200).json("Servidor on");
});

routes.get("/users", async (req, res) => {
  const allUsers = await UserModel.findAll();
  res.send({ users: allUsers });
});

module.exports = routes;
