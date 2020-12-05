/**
 * Librarian can create update delete books
 *
 * User can request for books
 */
const express = require("express");
const { requireSignin, librarianMiddleware } = require("../common-middleware");
const {
  createBook,
  getBooks,
  deleteBook,
  updateBook,
} = require("../controller/book");
const multer = require("multer");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
router.post(
  "/book/create",
  requireSignin,
  librarianMiddleware,
  upload.single("bookImage"),
  createBook
);
router.get("/book/getBooks", getBooks);
router.patch(
  "/book/update/:id",
  requireSignin,
  librarianMiddleware,
  updateBook
);
router.delete(
  "/book/delete/:id",
  requireSignin,
  librarianMiddleware,
  deleteBook
);

module.exports = router;
