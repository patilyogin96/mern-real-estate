const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res, next) => {
  console.log("AuthREQBODy", req.body);
  const { full_name, email, username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    full_name,
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json("User Registered Successfully");
  } catch (error) {
    next(error);
  }
};
