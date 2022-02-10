const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");
const bookPost = new Schema({
  createAt: { type: Date, default: Date.now() },
  title: String,
  image: String,
  author: String,
  category: String,
  from: String,
  review: [{ image: String, title: String, words: String }],
  comment: [
    {
      from: String,
      comment: String,
      rate: Number,
      createAt: { type: Date, default: Date.now() },
    },
  ],
  view: { type: Number, default: 1 },
  oneStart: { type: Number, default: 0 },
  TwoStart: { type: Number, default: 0 },
  ThreeStart: { type: Number, default: 0 },
  ForStart: { type: Number, default: 0 },
  FiveStart: { type: Number, default: 0 },
});

module.exports = mongoose.model("bookPosts", bookPost);
