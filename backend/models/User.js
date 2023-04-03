const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    full_name: {
      type: String,
      required: [true, "first name is required"],
      trim: true,
      text: true,
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
      trim: true,
    },
    marital: {
      type: String,
      enum: ["Not Married", "Divorced"],
      required: [true, "Marital status is required"],
    },
    bDay: {
      type: Number,
      required: true,
      trim: true,
    },
    bMonth: {
      type: Number,
      required: true,
      trim: true,
    },
    bYear: {
      type: Number,
      required: true,
      trim: true,
    },
    mob_num: {
      type: Number,
      required: [true, "mobile no. is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    picture: {
      type: String,
      trim: true,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
    },
    cover: {
      type: String,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    registerLevel: {
      type: Number,
      trim: true,
      default: 0,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: "User",
        },
      },
    ],

    savedPosts: [
      {
        post: {
          type: ObjectId,
          ref: "Post",
        },
        savedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],

    basicDetails: {
      proHeight: {
        type: String,
        default: "",
        trim: true,
      },
      proWeight: {
        type: String,
        default: "",
        trim: true,
      },
      motherTongue: {
        type: String,
        default: "",
        trim: true,
      },
      proReligion: {
        type: String,
        default: "",
        trim: true,
      },
      proCast: {
        type: String,
        default: "",
        trim: true,
      },
      proEducation: {
        type: String,
        default: "",
        trim: true,
      },
      proOccupation: {
        type: String,
        default: "",
        trim: true,
      },
      annualIncome: {
        type: String,
        default: "",
        trim: true,
      },

      physicalStatus: {
        type: String,
        default: "",
        trim: true,
      },
      employedIn: {
        type: String,
        default: "",
        trim: true,
      },
      knowingLanguages: [
        {
          type: String,
          default: "",
          trim: true,
        },
      ],
      workCountry: {
        type: String,
        default: "",
        trim: true,
      },
      workState: {
        type: String,
        default: "",
        trim: true,
      },
      workCity: {
        type: String,
        default: "",
        trim: true,
      },
      livCountry: {
        type: String,
        default: "",
        trim: true,
      },
      livState: {
        type: String,
        default: "",
        trim: true,
      },
      livCity: {
        type: String,
        default: "",
        trim: true,
      },
      eatHab: {
        type: String,
        default: "",
        trim: true,
      },
      drinkHab: {
        type: String,
        default: "",
        trim: true,
      },
      smokeHab: {
        type: String,
        default: "",
        trim: true,
      },
    },
    basicReligonDetails: {
      profStar: {
        type: String,
        default: "",
        trim: true,
      },
      profRasi: {
        type: String,
        default: "",
        trim: true,
      },
      profDosham: {
        type: String,
        default: "",
        trim: true,
      },
      profGothram: {
        type: String,
        default: "",
        trim: true,
      },
      favFoods: [
        {
          type: String,
          default: "",
          trim: true,
        },
      ],
      favHobbies: [
        {
          type: String,
          default: "",
          trim: true,
        },
      ],
      favMusics: [
        {
          type: String,
          default: "",
          trim: true,
        },
      ],
      favSportsss: [
        {
          type: String,
          default: "",
          trim: true,
        },
      ],
    },

    basicFamilyDetails: {
      famType: {
        type: String,
        default: "",
        trim: true,
      },
      famStatus: {
        type: String,
        default: "",
        trim: true,
      },
      fatherOccup: {
        type: String,
        default: "",
        trim: true,
      },
      motherOccup: {
        type: String,
        default: "",
        trim: true,
      },
      numBro: {
        type: String,
        default: "",
        trim: true,
      },
      numBroMar: {
        type: String,
        default: "",
        trim: true,
      },
      numSis: {
        type: String,
        default: "",
        trim: true,
      },
      numSisMar: {
        type: String,
        default: "",
        trim: true,
      },
      abtFamily: {
        type: String,
        default: "",
        trim: true,
      },
    },
    basicPartnerPrefDetails: {
      parAgeFrom: {
        type: String,
        default: "",
        trim: true,
      },
      parAgeTo: {
        type: String,
        default: "",
        trim: true,
      },
      parHeightFrom: {
        type: String,
        default: "",
        trim: true,
      },
      parHeightTo: {
        type: String,
        default: "",
        trim: true,
      },

      parMaritalStatus: {
        type: String,
        default: "",
        trim: true,
      },
      parMotherTongue: {
        type: String,
        default: "",
        trim: true,
      },
      parReligionPre: {
        type: String,
        default: "",
        trim: true,
      },

      parCastePre: [
        {
          type: String,
          default: "",
          trim: true,
        },
      ],
      parStarPre: [
        {
          type: String,
          default: "",
          trim: true,
        },
      ],

      parDoshamPre: {
        type: String,
        default: "",
        trim: true,
      },

      parEducationPre: [
        {
          type: String,
          default: "",
          trim: true,
        },
      ],

      parEmployedIn: [
        {
          type: String,
          default: "",
          trim: true,
        },
      ],
      parOccupPref: [
        {
          type: String,
          default: "",
          trim: true,
        },
      ],
      parSalary: {
        type: String,
        default: "",
        trim: true,
      },

      parCountryPref: {
        type: String,
        default: "",
        trim: true,
      },
      parStatePref: {
        type: String,
        default: "",
        trim: true,
      },
      parCityPref: {
        type: String,
        default: "",
        trim: true,
      },

      parEatHab: {
        type: String,
        default: "",
        trim: true,
      },
      parDrinkHab: {
        type: String,
        default: "",
        trim: true,
      },
      parSmokeHab: {
        type: String,
        default: "",
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
