const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  username: String,
  password: String,
  createAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("users", user);
