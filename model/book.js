const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  releaseDate: {
    type: Date,
  },
  bookImage: {
    type: String,
  }
});

module.exports = mongoose.model("Book", bookSchema);
