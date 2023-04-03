const Country = require("country-state-city").Country;
const State = require("country-state-city").State;
const City = require("country-state-city").City;
const dotenv = require("dotenv");
dotenv.config();

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(process.env.DATABASE_URL, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mat_app");
  var countriesBulk = dbo.collection("countries").initializeOrderedBulkOp();
  var countries = Country.getAllCountries({});

  countries.forEach((country) => {
    countriesBulk.insert({
      country_name: country.name,
      country_isoCode: country.isoCode,
      country_flag: country.flag,
      country_phonecode: country.phonecode,
      country_currency: country.currency,
      country_latitude: country.latitude,
      country_longitude: country.longitude,
      country_timezones: country.timezones,
    });
  });
  countriesBulk.execute();

  var statesBulk = dbo.collection("states").initializeOrderedBulkOp();
  var states = State.getAllStates({});

  states.forEach((state) => {
    statesBulk.insert({
      state_name: state.name,
      state_isoCode: state.isoCode,
      state_countryCode: state.countryCode,
      state_latitude: state.latitude,
      state_longitude: state.longitude,
    });
  });
  statesBulk.execute();

  var citiesBulk = dbo.collection("cities").initializeOrderedBulkOp();
  var cities = City.getAllCities({});

  cities.forEach((city) => {
    citiesBulk.insert({
      city_name: city.name,
      city_countryCode: city.countryCode,
      city_stateCode: city.stateCode,
      city_latitude: city.latitude,
      city_longitude: city.longitude,
    });
  });
  citiesBulk.execute();
});
