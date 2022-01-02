const Router = require("express").Router();

const { login, signUp } = require("../controller/loginAR");
Router.post("/login", (req, res) => {
  login(req, res);
});

Router.post("/signup", (req, res) => {
  signUp(req, res);
});

module.exports = Router;
