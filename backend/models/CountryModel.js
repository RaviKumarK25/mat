const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const countrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isoCode: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
  phonecode: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Country", countrySchema);
