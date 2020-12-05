const express = require("express");
const { requireSignin, studentMiddleware } = require("../common-middleware");
const { addBooksToCart } = require("../controller/cart");
const router = express.Router();

router.post(
  "/student/cart/addtocart",
  requireSignin,
  studentMiddleware,
  addBooksToCart
);

module.exports = router;
