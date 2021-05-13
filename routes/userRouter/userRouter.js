const Router = require("express").Router();

//Controllers
const UserController = require("../../controllers/userController");

//Middlewares
const { Authentication } = require("../../middlewares/Authentication");

Router.post("/login", UserController.loginUser);
Router.post("/register", UserController.registerUser);

Router.get("/read/me", Authentication, UserController.readDataUser);

module.exports = Router;