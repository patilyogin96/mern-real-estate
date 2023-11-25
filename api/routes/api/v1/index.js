const express = require("express");
const router = express.Router();

router.use("/user", require("./user.route"));
router.use("/auth", require("./auth.route"));
router.use("/listing", require("./listing.route"));

module.exports = router;
