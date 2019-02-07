const express = require("express");
const routes = express.Router();

//const OrderController = require();
const UserController = require("./controllers/UserController");

routes.post("/register", UserController.store);

module.exports = routes;