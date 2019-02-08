const express = require("express");
const routes = express.Router();

//const OrderController = require();
const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");

routes.post("/register", UserController.store);
routes.post("/auth", AuthController.auth);

module.exports = routes;