const bookPosts = require("../module/bookPosts");
const users = require("../module/users");
const jwt = require("jsonwebtoken");

const upload = (req, res) => {
  bookPosts
    .create({
      title: req.body.title,
      author: req.body.author,
      image: req.body.image,
      category: req.body.category,
      from: req.body.from,
      review: req.body.review,
    })
    .then(() => {
      res.json({ status: "success", message: "Đăng bài thành công" });
    })
    .catch((err) => {
      console.log(err);
    });
};

// upload comment
const updateComment = (req, res) => {
  const id = req.body.idBook;
  bookPosts
    .findOne({
      _id: id,
    })
    .then((data) => {
      if (data) {
        data.comment.unshift({
          from: req.body.from,
          comment: req.body.comment,
          rate: req.body.rate,
        });
        if (req.body.rate == 1) {
          data.oneStart = data.oneStart + 1;
        }
        if (req.body.rate == 2) {
          data.TwoStart = data.TwoStart + 1;
        }
        if (req.body.rate == 3) {
          data.ThreeStart = data.ThreeStart + 1;
        }
        if (req.body.rate == 4) {
          data.FourStart = data.FourStart + 1;
        }
        if (req.body.rate == 5) {
          data.FiveStart = data.FiveStart + 1;
        }
        data.save();
        res.json({ status: "success", data: data });
      } else {
        res.json({
          status: "failure",
          message: "Không có sách này đâu mà commnet!",
        });
      }
    })
    .catch(() => {
      res.status(400).json("lỗi server");
    });
};

module.exports = { upload, updateComment };
