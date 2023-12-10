const express = require("express");
const authController = require("../../../controllers/auth.controller");
const router = express.Router();

router.post("/sign-up", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/google-login", authController.googleAuthLogin);

module.exports = router;
