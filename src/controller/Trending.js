const bookPosts = require("../module/bookPosts");
const users = require("../module/users");
const jwt = require("jsonwebtoken");

const bookPostSort = (req, res) => {
  bookPosts
    .find({})
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
          if (data[i].view < data[j].view) {
            let tg = data[i];
            data[i] = data[j];
            data[j] = tg;
          }
        }
      }
      res.json(data);
    })
    .catch((err) => {
      res.json({ status: "failure" });
    });
};

const myAccount = (req, res) => {
  const token = jwt.verify(req.body.token, "nhatjt");
  users
    .findOne({
      _id: token,
    })
    .then((data) => {
      const name = data.username;
      bookPosts
        .find({
          from: name,
        })
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json("err");
        });
    })
    .catch((err) => {
      res.json({ status: err });
    });
};

module.exports = { bookPostSort, myAccount };
