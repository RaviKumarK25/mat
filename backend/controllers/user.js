const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation");
const User = require("../models/User");
const Code = require("../models/Code");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../helpers/tokens");
const { sendVerificationEmail, sendResetCode } = require("../helpers/mailer");
const generateCode = require("../helpers/generateCode");

exports.register = async (req, res) => {
  try {
    const {
      full_name,
      gender,
      marital,
      bDay,
      bMonth,
      bYear,
      mob_num,
      email,
      password,
      registerLevel,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "invalid email address",
      });
    }
    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message:
          "This email address already exists,try with a different email address",
      });
    }
    const checkMobileNo = await User.findOne({ mob_num });
    if (checkMobileNo) {
      return res.status(400).json({
        message:
          "This mobile number already exists,try with a different mobile number",
      });
    }
    if (!validateLength(full_name, 3, 30)) {
      return res.status(400).json({
        message: "full name must between 3 and 30 characters.",
      });
    }

    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
        message: "password must be atleast 6 characters.",
      });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);

    const user = await new User({
      full_name,
      gender,
      marital,
      bDay,
      bMonth,
      bYear,
      mob_num,
      email,
      password: cryptedPassword,
      registerLevel,
    }).save();
    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      "30m"
    );
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.full_name, url);
    const token = generateToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,
      picture: user.picture,
      full_name: user.full_name,
      token: token,
      verified: user.verified,
      registerLevel: user.registerLevel,
      message: "Register Success ! please activate your email to start",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.activateAccount = async (req, res) => {
  try {
    const validUser = req.user.id;
    const { token } = req.body;
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    const check = await User.findById(user.id);

    if (validUser !== user.id) {
      return res.status(400).json({
        message: "You don't have the authorization to complete this operation.",
      });
    }
    if (check.verified == true) {
      return res
        .status(400)
        .json({ message: "This email is already activated." });
    } else {
      await User.findByIdAndUpdate(user.id, { verified: true });
      return res
        .status(200)
        .json({ message: "Account has beeen activated successfully." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message:
          "The email address you entered is not connected to an account.",
      });
    }
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.status(400).json({
        message: "Invalid credentials.Please try again.",
      });
    }
    const token = generateToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,

      picture: user.picture,
      full_name: user.full_name,

      token: token,
      verified: user.verified,
      registerLevel: user.registerLevel,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.sendVerification = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id);
    if (user.verified === true) {
      return res.status(400).json({
        message: "This account is already activated.",
      });
    }
    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      "30m"
    );
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.full_name, url);
    return res.status(200).json({
      message: "Email verification link has been sent to your email.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.findUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      return res.status(400).json({
        message: "Account does not exists.",
      });
    }
    return res.status(200).json({
      email: user.email,
      picture: user.picture,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.sendResetPasswordCode = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select("-password");
    await Code.findOneAndRemove({ user: user._id });
    const code = generateCode(5);
    const savedCode = await new Code({
      code,
      user: user._id,
    }).save();
    sendResetCode(user.email, user.full_name, code);
    return res.status(200).json({
      message: "Email reset code has been sent to your email",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.validateResetCode = async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({ email });
    const Dbcode = await Code.findOne({ user: user._id });
    if (Dbcode.code !== code) {
      return res.status(400).json({
        message: "Verification code is wrong..",
      });
    }
    return res.status(200).json({ message: "ok" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.changePassword = async (req, res) => {
  const { email, password } = req.body;

  const cryptedPassword = await bcrypt.hash(password, 12);
  await User.findOneAndUpdate(
    { email },
    {
      password: cryptedPassword,
    }
  );
  return res.status(200).json({ message: "ok" });
};
exports.getAllProfilesList = async (req, res) => {
  try {
    const profiles = await User.find();
    res.json(profiles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getMemberProfiles = async (req, res) => {
  try {
    const { _id } = req.params;
    const profiles = await User.findOne({ _id }).select(
      "-password -mob_num -email -followers -friends -following"
    );
    if (!profiles) {
      return res.json({ ok: false });
    }
    res.json(profiles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateBasicDetails = async (req, res) => {
  try {
    const { infos } = req.body;
    const updated = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          "basicDetails.proHeight": infos.proHeight,
          "basicDetails.proWeight": infos.proWeight,
          "basicDetails.motherTongue": infos.motherTongue,
          "basicDetails.proReligion": infos.proReligion,
          "basicDetails.proCast": infos.proCast,
          "basicDetails.proEducation": infos.proEducation,
          "basicDetails.proOccupation": infos.proOccupation,
          "basicDetails.annualIncome": infos.annualIncome,
          "basicFamilyDetails.famStatus": infos.familyStatus,
          registerLevel: 2,
        },
      },

      {
        new: true,
      }
    );
    res.json(updated.basicDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateFullBasicDetails = async (req, res) => {
  try {
    const { basicInfDetails } = req.body;
    const updated = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          "basicDetails.physicalStatus": basicInfDetails.physicalStatus,
          "basicDetails.proEducation": basicInfDetails.proEducation,
          "basicDetails.employedIn": basicInfDetails.employedInn,
          "basicDetails.proOccupation": basicInfDetails.proOccupation,
          "basicDetails.annualIncome": basicInfDetails.annualIncome,
          "basicDetails.knowingLanguages": basicInfDetails.knowingLanguages,
          "basicDetails.workCountry": basicInfDetails.workCountry,
          "basicDetails.workState": basicInfDetails.workState,
          "basicDetails.workCity": basicInfDetails.workCity,
          "basicDetails.livCountry": basicInfDetails.livCountry,
          "basicDetails.livState": basicInfDetails.livState,
          "basicDetails.livCity": basicInfDetails.livCity,
          "basicDetails.eatHab": basicInfDetails.eatHab,
          "basicDetails.drinkHab": basicInfDetails.drinkHab,
          "basicDetails.smokeHab": basicInfDetails.smokeHab,
        },
      },
      {
        new: true,
      }
    );
    res.json(updated.basicDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateLocationDetails = async (req, res) => {
  try {
    const { locationInfos } = req.body;
    const updated = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          "basicDetails.livCountry": locationInfos.urCountry,
          "basicDetails.livState": locationInfos.urState,
          "basicDetails.livCity": locationInfos.urCity,
          "basicFamilyDetails.abtFamily": locationInfos.fewWordsAbtYou,
          registerLevel: 3,
        },
      },
      {
        new: true,
      }
    );
    res.json(updated.locationDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateFamilyInfoDetails = async (req, res) => {
  try {
    const { basicFmlyInfDetails } = req.body;
    const updated = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          "basicFamilyDetails.famType": basicFmlyInfDetails.familyType,
          "basicFamilyDetails.famStatus": basicFmlyInfDetails.famStatus,
          "basicFamilyDetails.fatherOccup": basicFmlyInfDetails.fatherOccup,
          "basicFamilyDetails.motherOccup": basicFmlyInfDetails.motherOccup,
          "basicFamilyDetails.numBro": basicFmlyInfDetails.numBro,
          "basicFamilyDetails.numBroMar": basicFmlyInfDetails.numBroMarried,
          "basicFamilyDetails.numSis": basicFmlyInfDetails.numSis,
          "basicFamilyDetails.numSisMar": basicFmlyInfDetails.numSisMarried,
          "basicFamilyDetails.abtFamily": basicFmlyInfDetails.fewWordsAbtYou,
        },
      },
      {
        new: true,
      }
    );
    res.json(updated.basicFamilyDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePartnerPrefDeatils = async (req, res) => {
  try {
    const { basicPartPrfDetails } = req.body;
    const updated = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          "basicPartnerPrefDetails.parAgeFrom": basicPartPrfDetails.ageFrom,
          "basicPartnerPrefDetails.parAgeTo": basicPartPrfDetails.ageTo,
          "basicPartnerPrefDetails.parHeightFrom":
            basicPartPrfDetails.heightFrom,
          "basicPartnerPrefDetails.parHeightTo": basicPartPrfDetails.heightTo,
          "basicPartnerPrefDetails.parMaritalStatus":
            basicPartPrfDetails.maritalStatus,
          "basicPartnerPrefDetails.parMotherTongue":
            basicPartPrfDetails.motherLanguage,
          "basicPartnerPrefDetails.parReligionPre":
            basicPartPrfDetails.religion,
          "basicPartnerPrefDetails.parCastePre": basicPartPrfDetails.caste,
          "basicPartnerPrefDetails.parStarPre": basicPartPrfDetails.selectStar,
          "basicPartnerPrefDetails.parDoshamPre":
            basicPartPrfDetails.selectDosham,
          "basicPartnerPrefDetails.parEducationPre":
            basicPartPrfDetails.education,
          "basicPartnerPrefDetails.parEmployedIn":
            basicPartPrfDetails.employedIn,
          "basicPartnerPrefDetails.parOccupPref":
            basicPartPrfDetails.occupation,
          "basicPartnerPrefDetails.parSalary": basicPartPrfDetails.anualIncome,
          "basicPartnerPrefDetails.parCountryPref":
            basicPartPrfDetails.livingCountry,
          "basicPartnerPrefDetails.parStatePref":
            basicPartPrfDetails.livingState,
          "basicPartnerPrefDetails.parCityPref": basicPartPrfDetails.livingCity,
          "basicPartnerPrefDetails.parEatHab": basicPartPrfDetails.eatingHabits,
          "basicPartnerPrefDetails.parDrinkHab":
            basicPartPrfDetails.drinkHabits,
          "basicPartnerPrefDetails.parSmokeHab":
            basicPartPrfDetails.smokeHabits,
        },
      },
      {
        new: true,
      }
    );
    res.json(updated.basicPartnerPrefDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReligionMoreDetails = async (req, res) => {
  try {
    const { basicRlgnInfDetails } = req.body;
    const updated = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          "basicReligonDetails.profStar": basicRlgnInfDetails.updaStar,
          "basicReligonDetails.profRasi": basicRlgnInfDetails.updaRasi,
          "basicReligonDetails.profDosham": basicRlgnInfDetails.updaDosham,
          "basicReligonDetails.profGothram": basicRlgnInfDetails.updaGothram,
          "basicReligonDetails.favFoods": basicRlgnInfDetails.updaFavFood,
          "basicReligonDetails.favHobbies":
            basicRlgnInfDetails.updaHobbyInterest,
          "basicReligonDetails.favMusics": basicRlgnInfDetails.updaMusicHobby,
          "basicReligonDetails.favSportsss":
            basicRlgnInfDetails.updaSportsHobby,
        },
      },
      {
        new: true,
      }
    );
    res.json(updated.basicReligonDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProfilePicture = async (req, res) => {
  try {
    const { url } = req.body;

    await User.findByIdAndUpdate(req.user.id, {
      picture: url,
      registerLevel: 4,
    });

    res.json(url);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
