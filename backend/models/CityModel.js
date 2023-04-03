const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const citySchema = mongoose.Schema({
  city_name: {
    type: String,
    required: true,
  },

  city_countryCode: {
    type: String,
    required: true,
  },
  city_stateCode: {
    type: String,
    required: true,
  },
  city_latitude: {
    type: String,
    required: true,
  },
  city_longitude: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("City", citySchema);
