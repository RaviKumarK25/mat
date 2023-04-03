const Country = require("../models/CountryModel");
const State = require("../models/StateModel");
const City = require("../models/CityModel");

exports.getCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getStates = async (req, res) => {
  try {
    const { state_countryCode } = req.params;

    const states = await State.find({ state_countryCode });

    if (!states) {
      return res.json({ ok: false });
    }
    res.json(states);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getCities = async (req, res) => {
  try {
    const { city_countryCode, city_stateCode } = req.params;

    const cities = await City.find({ city_countryCode, city_stateCode });

    if (!cities) {
      return res.json({ ok: false });
    }
    res.json(cities);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
