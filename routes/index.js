const Router = require("express").Router();

const userRouter = require("./userRouter/userRouter");

Router.use("/users", userRouter);

module.exports = Router;