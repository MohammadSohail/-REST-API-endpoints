const User = require("../model/student");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      return res.status(400).json({
        message: "User already registered",
      });
    }

    const { name, email, password, role } = req.body;
    const _user = new User({
      name,
      email,
      password,
      role,
    });

    _user.save((error, data) => {
      if (data) {
        return res.status(201).json({
          message: "User created Successfully",
        });
      }
      if (error) {
        console.log(error);
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        const { _id, name, email, role } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            name,
            email,
            role,
          },
        });
      } else {
        return res.status(400).json({
          message: "Bad Password!",
        });
      }
    }
  });
};
