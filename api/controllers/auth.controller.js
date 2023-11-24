const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { errorHandler } = require("../utils/error");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res, next) => {
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

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const isUserPresent = await User.findOne({ email });

    if (!isUserPresent) return next(errorHandler(401, "User not found"));
    const validPassword = bcrypt.compareSync(password, isUserPresent.password);
    if (!validPassword) return next(errorHandler(403, "Wrong Password"));
    const token = jwt.sign({ id: isUserPresent._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = isUserPresent._doc;
    console.log("AuthREQBODydoc", token);
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
