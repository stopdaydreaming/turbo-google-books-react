const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//only expecting the following properties
const bookSchema = new Schema({
  authors: [{ type: String, required: true }],
  description: { type: String, required: false },
  image: { type: String, required: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
