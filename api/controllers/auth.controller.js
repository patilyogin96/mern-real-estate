const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { errorHandler } = require("../utils/error");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res, next) => {
  const { full_name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    full_name,
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

exports.googleAuthLogin = async (req, res, next) => {
  // find if the given user exists - if not register the user

  try {
    const { email, name } = req.body;
    const ifUser = await User.findOne({ email });
    console.log("IFUSER", ifUser);

    if (ifUser) {
      const token = jwt.sign({ id: ifUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = ifUser._doc;

      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      // register logic

      const generatePassword = Math.random().toString(36).slice(-8);

      const hashedPassword = bcrypt.hashSync(generatePassword, 10);
      const username =
        name.split(" ").join("").toLowerCase() +
        Math.random().toString(36).slice(-4);

      const newUser = new User({
        full_name: name,
        username,
        email,
        password: hashedPassword,
      });
      console.log("NEWUSER", newUser);
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;

      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    console.log(error);
    next(errorHandler(error));
  }
};
