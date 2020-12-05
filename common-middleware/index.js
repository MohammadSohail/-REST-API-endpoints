const jwt = require("jsonwebtoken");

exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } else return res.status(400).json({ message: "Authorization required" });
  next();
};

exports.librarianMiddleware = (req, res, next) => {
  if (req.user.role !== "librarian") {
    return res
      .status(400)
      .json({ message: "Sorry,Only Librarian can add books!!" });
  }
  next();
};

exports.studentMiddleware = (req, res, next) => {
  if (req.user.role !== "student") {
    return res.status(400).json({ message: "User Acess Denied" });
  }
  next();
};
