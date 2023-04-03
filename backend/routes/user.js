const express = require("express");
const {
  getCountries,
  getStates,
  getCities,
} = require("../controllers/countryControllers");
const {
  register,
  activateAccount,
  login,
  auth,
  sendVerification,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  changePassword,
  getAllProfilesList,
  getMemberProfiles,
  updateBasicDetails,
  updateLocationDetails,
  updateProfilePicture,
  updateCover,
  updateFullBasicDetails,
  updateReligionMoreDetails,
  updateFamilyInfoDetails,
  updatePartnerPrefDeatils,
} = require("../controllers/user");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/sendVerification", authUser, sendVerification);
router.post("/findUser", findUser);
router.post("/sendResetPasswordCode", sendResetPasswordCode);
router.post("/validateResetCode", validateResetCode);
router.post("/changePassword", changePassword);
router.get("/getAllProfiles", authUser, getAllProfilesList);
router.get("/getAllMember/:_id", authUser, getMemberProfiles);
router.patch("/updateBasicDetails", authUser, updateBasicDetails);
router.patch("/updateBasicFullDetails", authUser, updateFullBasicDetails);
router.patch("/updateReliDetails", authUser, updateReligionMoreDetails);
router.patch("/updateLocationDetails", authUser, updateLocationDetails);

router.patch("/updateFamilyDetails", authUser, updateFamilyInfoDetails);
router.patch("/updatePartPrefDetails", authUser, updatePartnerPrefDeatils);
router.patch("/updateProfilePicture", authUser, updateProfilePicture);

router.get("/getAllCountries", authUser, getCountries);
router.get("/getAllStates/:state_countryCode", authUser, getStates);
router.get(
  "/getAllCities/:city_countryCode/:city_stateCode",
  authUser,
  getCities
);

module.exports = router;
