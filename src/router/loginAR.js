const Router = require("express").Router();

const { Route } = require("express");
const { getBooks, getBook } = require("../controller/homePage");
const { login, signUp } = require("../controller/loginAR");
const { bookPostSort, myAccount } = require("../controller/Trending");
const { upload, updateComment } = require("../controller/upload");
Router.post("/login", (req, res) => {
  login(req, res);
});

Router.post("/register", (req, res) => {
  signUp(req, res);
});

// get book

Router.post("/homepage", (req, res) => {
  getBooks(req, res);
});

Router.post("/getbook", (req, res) => {
  getBook(req, res);
});
// upload
Router.post("/upload", (req, res) => {
  upload(req, res);
});
//upload comment
Router.post("/uploadComment", (req, res) => {
  updateComment(req, res);
});

// book post sort
Router.get("/booksort", (req, res) => {
  bookPostSort(req, res);
});

// myself
Router.post("/myaccount", (req, res) => {
  myAccount(req, res);
});



module.exports = Router;
