const express = require("express");
const routes = express.Router();

//const OrderController = require();
const AuthController = require("./controllers/AuthController");

routes.post("/register", AuthController.store);
routes.post("/auth", AuthController.auth);

module.exports = routes;