const express = require("express");
const app = express();
const mongose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// import src

const loginAR = require("./src/router/loginAR");
// middle ware

var corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
// router

app.get("/", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // If needed
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  ); // If needed
  res.setHeader("Access-Control-Allow-Credentials", true); // If needed

  res.send("cors problem fixed:)");
});

app.use("/", loginAR);
// connect database and start server

mongose
  .connect(
    "mongodb+srv://nhatjt:1234@blogbook.ghxhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database...");
    app.listen(5000, () => {
      console.log("server running....");
    });
  })
  .catch((err) => {
    console.log("something wrong during connect to data base: ", err);
  });
