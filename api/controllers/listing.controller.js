const Listing = require("../models/listing.model");
const { errorHandler } = require("../utils/error");

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
    let parking = req.query.parking;
    if (parking === undefined || parking === "false") {
      parking = { $in: [false, true] };
    }

    let offer = req.query.offer;
    if (offer === undefined || offer === "false") {
      offer = { $in: [false, true] };
    }

    let furnished = req.query.furnished;
    if (furnished === undefined || furnished === "false") {
      furnished = { $in: [false, true] };
    }

    let type = req.query.type;

    if (type === undefined || type === "all") {
      type = { $in: ["sale", "rent"] };
    }

    const q = req.query.q || "";

    const fetchList = await Listing.find({
      name: { $regex: q, $options: "i" },
      furnished,
      offer,
      type,
      parking,
    });
    console.log("Furnished", furnished, offer, parking, type, q, fetchList);
    return res.status(200).json(fetchList);
  } catch (error) {
    next(errorHandler(error));
  }
};

exports.getSingleProperty = async (req, res, next) => {
  try {
    const getProperty = await Listing.findById(req.params.id);

    if (!getProperty) {
      return next(errorHandler(404, "Property not found"));
    }

    res.status(200).json(getProperty);
  } catch (error) {
    next(errorHandler(error));
  }
};
