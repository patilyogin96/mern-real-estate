const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("SSUCCES REQUESt");
  return res.json({ Hello: "III" });
});

module.exports = router;
