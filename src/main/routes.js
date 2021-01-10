const { Router } = require("express");
const ExampleController = require("../presentation/controller/Example.controller");

const routes = new Router();

routes.post("/example", ExampleController.store);

module.exports = routes;
