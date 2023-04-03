const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const stateSchema = mongoose.Schema({
  state_name: {
    type: String,
    required: true,
  },
  state_isoCode: {
    type: String,
    required: true,
  },
  state_countryCode: {
    type: String,
    required: true,
  },

  state_latitude: {
    type: String,
    required: true,
  },
  state_longitude: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("State", stateSchema);
