const express = require("express");
const router = express.Router();
const {
  getAllListings,
  addProperty,
} = require("../../../controllers/listing.controller");

router.get("/", getAllListings);

// only admins can add property
router.post("/add", addProperty);

module.exports = router;
