const bookPost = require("../module/bookPosts");
const users = require("../module/users");

const jwt = require("jsonwebtoken");
const req = require("express/lib/request");

const getBooks = (req, res) => {
  bookPost
    .find({})
    .then((data) => {
      var dataRemake = [];
      data.map((dataChild) => {
        dataRemake.push({
          _id: dataChild._id,
          title: dataChild.title,
          image: dataChild.image,
          createAt: dataChild.createAt,
          author: dataChild.author,
          category: dataChild.category,
          from: dataChild.from,
          view: dataChild.view,
        });
      });
      if (req.body.token) {
        const id = jwt.verify(req.body.token, "nhatjt");
        users.findOne({ _id: id }).then((data1) => {
          res.json({ login: true, data: dataRemake, username: data1.username });
        });
      } else {
        res.json({ login: false, data: data });
      }
    })
    .catch((err) => {
      res.json({ status: "failure" });
    });
};

const getBook = (req, res) => {
  bookPost
    .findOne({
      _id: req.body.id,
    })
    .then((data) => {
      if (data) {
        Object.assign(data, { view: data.view + 1 });
        data.save();
        res.json({ status: "success", data: data });
      } else {
        res.json({
          status: "failure",
          message: "Bài viết đã bị xóa hoặc chưa từng tồn tại",
        });
      }
    })
    .catch((err) => {
      res.json({ status: "failure" });
    });
};
module.exports = { getBooks, getBook };
