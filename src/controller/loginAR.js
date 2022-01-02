const users = require("../module/users");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  users
    .findOne({
      username: req.body.username,
      password: req.body.password,
    })
    .then((data) => {
      if (data) {
        res.json({
          status: "success",
          token: jwt.sign(data.id, "nhatjt"),
          message: "Đăng nhập thành công",
        });
      } else {
        res.json({
          status: "failure",
          message: "Thông tin không chính xác hoặc đăng ký",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const signUp = (req, res) => {
  users
    .findOne({
      username: req.body.username,
      password: req.body.password,
    })
    .then((data) => {
      if (data) {
        res.json({ status: "failure", message: "Chọn tên đăng nhập khác" });
      } else {
        users
          .create({
            username: req.body.username,
            password: req.body.password,
          })
          .then(() => {
            res.json({ status: "success", message: "Đăng ký thành công" });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
};

module.exports = { login, signUp };
