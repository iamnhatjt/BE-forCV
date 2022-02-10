const jwt = require("jsonwebtoken");
const users = require("../module/users");
const middleware = (req, res, next) => {
  if (req.body.token) {
    const token = jwt.verify(req.body.token, "nhatjt");
    res.locals.id = token;
    users.findOne({ id: token }).then((data) => {
      res.locals.username = data.username;
    });
    next();
  } else {
    res.json({ status: "failure", message: "Bạn cần phải đăng nhập" });
  }
};

module.exports = middleware;
