const Book = require("../model/book");
const shortid = require("shortid");

function createList(books) {
  const bookList = [];
  for (let b of books) {
    bookList.push({
      name: b.name,
      author: b.author,
      genre: b.genre,
      releaseDate: b.releaseDate,
      bookImage: b.bookImage,
    });
  }
  return bookList;
}

exports.createBook = (req, res) => {
  const { name, author, genre, releaseDate } = req.body;
  const bookImage = req.file.filename;

  const book = new Book({
    name: name,
    author,
    genre,
    releaseDate,
    bookImage: bookImage,
  });

  book.save((error, book) => {
    if (error) return res.status(400).json({ error });
    if (book) {
      res.status(201).json({ book });
    }
  });
  // res.status(200).json({
  //   file: req.file.filename,
  //   body: req.body,
  // });
};

exports.getBooks = (req, res) => {
  Book.find().exec((error, book) => {
    if (error) return res.status(400).json({ error });
    if (book) {
      const books = createList(book);
      res.status(200).json({ books });
    }
  });
};

exports.updateBook = async (req, res) => {
  try {
    const user = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
    });
    if (!user) return res.status(404).json({ message: "Wrong user id!" });
    res.send(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const user = await Book.findByIdAndDelete(req.params.id);
    if (!user)
      return res.status(404).json({ message: "Not found any book to delete" });
    res.status(200).json({
      message: "Deleted",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};
