const Router = require("express").Router();

const userRouter = require("./userRouter/userRouter");

Router.use("/user", userRouter);

module.exports = Router;