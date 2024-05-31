const { Router } = require("express");

const routes = new Router();

routes.get("/health", (req, res) => {
  res.status(200).json("Servidor on");
});

module.exports = routes;
