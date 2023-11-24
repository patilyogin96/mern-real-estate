const jwt = require("jsonwebtoken");
const { errorHandler } = require("./error");
const { use } = require("../routes/api");

exports.authorizeUser = (req, res, next) => {
  const token = req.access_token;
  if (!token) return errorHandler(403, "Unauthorized");
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return errorHandler(401, "Forbidden");
    console.log("TokenUSER", user);
    req.user = user;
    next();
  });
};
