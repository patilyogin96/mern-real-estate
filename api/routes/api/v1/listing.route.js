const express = require("express");
const router = express.Router();
const {
  getAllListings,
  addProperty,
  getSingleProperty
} = require("../../../controllers/listing.controller");

router.get("/", getAllListings);
router.get("/:id", getSingleProperty);

// only admins can add property
router.post("/add", addProperty);

module.exports = router;
