const Listing = require("../models/listing.model");

exports.addProperty = async (req, res, next) => {
  // console.log("REAChedListiongaa", req.body);
  try {
    const addNewProperty = await Listing.create(req.body);
    console.log("NEWPROP", addNewProperty);
    return res.status(201).json(addNewProperty);
  } catch (error) {
    console.log("CatchError", error);
  }
};
exports.getAllListings = async (req, res, next) => {
  try {
    const fetchList = await Listing.find({});
    return res.status(200).json(fetchList);
  } catch (error) {}
};
