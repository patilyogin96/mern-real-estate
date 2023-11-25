const express = require("express");
const router = express.Router();
const {
  getAllListing,
  addProperty,
} = require("../../../controllers/listing.controller");

router.get("/", getAllListing);

// only admins can add property
router.post("/add", addProperty);

module.exports = router;
