import React, { useState } from "react";
import axios from "axios";
import Header from "../menu/Header";
import SideBar from "../menu/SideBar";
import SideMenu from "./sideMenu";
import Select from "react-select";
import GroupSelector from "../selector/GroupSelector";
import EmployedIn from "../selector/EmployedIn";
import Occupation from "../selector/Occupation";
import CountrySelector from "../selector/CountrySelector";
import StateSelectr from "../selector/StateSelectr";
import CitySelector from "../selector/CitySelector";
import ReligionSelector from "../selector/ReligionSelector";
import { customStyles, religionOptions } from "../../staticDatas";
import { casteOptions } from "../../casteDat";
import StarSelector from "../selector/StarSelector";
import {
  anualIncomeOptions,
  doshamOptions,
  drinkingHabitsOptions,
  eatingHabitsOptions,
  employedInOptions,
  smokingHabitsOptions,
  starOptions,
} from "../../staticSmallDat";
import DoshamSelector from "../selector/DoshamSelector";
import { groupedOptions } from "../../educationDat";
import { occupationOptions } from "../../occupation";
import AnnualIncome from "../selector/AnnualIncome";
import { heightToOptions, maritalStatusOptions } from "../../misselenDat";
import SmokingHabits from "../selector/SmokingHabits";
import DrinkingHabits from "../selector/DrinkingHabits";
import EatingHabits from "../selector/EatingHabits";
import HeightSelector from "../selector/HeightSelector";
import LanguageSelector from "../selector/LanguageSelector";
import { languagesKnownOptions } from "../../languagesDat";
import MotherTongue from "../selector/MotherTongue";
import LivingCountry from "../selector/LivingCountry";
import LivingState from "../selector/LivingState";
import LivingCity from "../selector/LivingCity";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";

const UpdatePartnerPreference = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [basicPartnerPrefDetails, setBasicPartnerPrefDetails] = useState();

  const [menuActive, setMenuActive] = useState(5);

  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [heightFrom, setHeightFrom] = useState("");
  const [heightTo, setHeightTo] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [knowingLanguages, setKnowingLanguages] = useState("");
  const [selectStar, setSelectStar] = useState("");
  const [selectDosham, setSelectDosham] = useState("");
  const [anualIncome, setAnualIncome] = useState("");

  const [selectedLivingCountry, setSelectedLivingCountry] = useState(null);
  const [selectedLivingState, setSelectedLivingState] = useState(null);
  const [selectedLivingCity, setSelectedLivingCity] = useState(null);

  const [eatingHabits, setEatingHabits] = useState(null);
  const [drinkHabits, setDrinkHabits] = useState(null);
  const [smokeHabits, setSmokeHabits] = useState(null);
  const [religion, setReligion] = useState(null);
  const [caste, setCaste] = useState(null);
  const [education, setEducation] = useState(null);
  const [employedIn, setEmployedIn] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [motherLanguage, setMotherLanguage] = useState("");

  const initialPartnerPrefDetails = {
    ageFrom: basicPartnerPrefDetails?.ageFrom
      ? basicPartnerPrefDetails.ageFrom
      : "",
    ageTo: basicPartnerPrefDetails?.ageTo ? basicPartnerPrefDetails.ageTo : "",
    heightFrom: basicPartnerPrefDetails?.heightFrom
      ? basicPartnerPrefDetails.heightFrom
      : "",
    heightTo: basicPartnerPrefDetails?.heightTo
      ? basicPartnerPrefDetails.heightTo
      : "",
    maritalStatus: basicPartnerPrefDetails?.maritalStatus
      ? basicPartnerPrefDetails.maritalStatus
      : "",
    motherLanguage: basicPartnerPrefDetails?.motherLanguage
      ? basicPartnerPrefDetails.motherLanguage
      : "",
    religion: basicPartnerPrefDetails?.religion
      ? basicPartnerPrefDetails.religion
      : "",
    caste: basicPartnerPrefDetails?.caste ? basicPartnerPrefDetails.caste : "",
    selectStar: basicPartnerPrefDetails?.selectStar
      ? basicPartnerPrefDetails.selectStar
      : "",

    selectDosham: basicPartnerPrefDetails?.selectDosham
      ? basicPartnerPrefDetails.selectDosham
      : "",
    education: basicPartnerPrefDetails?.education
      ? basicPartnerPrefDetails.education
      : "",
    employedIn: basicPartnerPrefDetails?.employedIn
      ? basicPartnerPrefDetails.employedIn
      : "",
    occupation: basicPartnerPrefDetails?.occupation
      ? basicPartnerPrefDetails.occupation
      : "",
    anualIncome: basicPartnerPrefDetails?.anualIncome
      ? basicPartnerPrefDetails.anualIncome
      : "",

    livingCountry: basicPartnerPrefDetails?.livingCountry
      ? basicPartnerPrefDetails.livingCountry
      : "",
    livingState: basicPartnerPrefDetails?.livingState
      ? basicPartnerPrefDetails.livingState
      : "",
    livingCity: basicPartnerPrefDetails?.livingCity
      ? basicPartnerPrefDetails.livingCity
      : "",
    eatingHabits: basicPartnerPrefDetails?.eatingHabits
      ? basicPartnerPrefDetails.eatingHabits
      : "",
    drinkHabits: basicPartnerPrefDetails?.drinkHabits
      ? basicPartnerPrefDetails.drinkHabits
      : "",
    smokeHabits: basicPartnerPrefDetails?.smokeHabits
      ? basicPartnerPrefDetails.smokeHabits
      : "",
  };

  const [basicPartPrfDetails, setBasicPartPrfDetails] = useState(
    initialPartnerPrefDetails
  );

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const basicPartnerPreferenceDetailsSubmit = async () => {
    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/updatePartPrefDetails`,
        {
          basicPartPrfDetails,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setError("");

      const { message, ...rest } = data;
      setBasicPartnerPrefDetails(data);

      setSuccess("Successfully Updated!");
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };

  const basedRegionCaste = casteOptions.filter(
    (i) => i.relig === religion?.value
  );

  const ageFromOptions = [];
  obj = {};
  for (var i = 18; i <= 70; i++) {
    var obj = {};
    obj["value"] = i;
    obj["label"] = i;
    ageFromOptions.push(obj);
  }

  const ageToOptions = [];
  obj = {};
  for (var i = ageFrom?.value; i <= 70; i++) {
    var obj = {};
    obj["value"] = i;
    obj["label"] = i;
    ageToOptions.push(obj);
  }

  const heightFromOptions = [];
  obj = {};
  for (var i = 122; i <= 201; i++) {
    var obj = {};
    obj["value"] = i;
    obj["label"] = [i] + " cm";
    heightFromOptions.push(obj);
  }

  const heightToOptions = [];
  myobj = {};
  for (var i = heightFrom?.value; i <= 201; i++) {
    var myobj = {};
    myobj["value"] = [i] + " cm";
    myobj["label"] = [i] + " cm";
    heightToOptions.push(myobj);
  }
  console.log(heightToOptions, "heightToOptions");
  const handleAgeTo = (e, action) => {
    setAgeTo(e);
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleHeightTo = (e, action) => {
    setHeightTo(e);
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleMaritalStatus = (e, action) => {
    setMaritalStatus(e);
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleMotherLanguage = (e, action) => {
    setMotherLanguage(e);
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleCaste = (e, action) => {
    const caste = Array.isArray(e) ? e.map((x) => x.value) : [];
    setCaste(caste);
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: caste });
  };

  const handleSelectStar = (e, action) => {
    const selectStar = Array.isArray(e) ? e.map((x) => x.value) : [];
    setSelectStar(selectStar);
    setBasicPartPrfDetails({
      ...basicPartPrfDetails,
      [action.name]: selectStar,
    });
  };
  const handleSelectDosham = (e, action) => {
    setSelectDosham(e);
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleEducation = (e, action) => {
    const education = Array.isArray(e) ? e.map((x) => x.value) : [];
    setEducation(education);
    setBasicPartPrfDetails({
      ...basicPartPrfDetails,
      [action.name]: education,
    });
  };

  const handleEmployedIn = (e, action) => {
    const employedIn = Array.isArray(e) ? e.map((x) => x.value) : [];
    setEmployedIn(employedIn);
    setBasicPartPrfDetails({
      ...basicPartPrfDetails,
      [action.name]: employedIn,
    });
  };

  const handleOccupation = (e, action) => {
    const occupationss = Array.isArray(e) ? e.map((x) => x.value) : [];

    setOccupation(occupationss);
    setBasicPartPrfDetails({
      ...basicPartPrfDetails,
      [action.name]: occupationss,
    });
  };

  const handleAnualIncome = (e, action) => {
    setAnualIncome(e);
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleEatingHabits = (e, action) => {
    setEatingHabits(e);
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleDrinkHabits = (e, action) => {
    setDrinkHabits(e);
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleSmokeHabits = (e, action) => {
    setSmokeHabits(e);
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleLivingCountry = (e, action) => {
    setSelectedLivingCountry(e);
    setSelectedLivingState("Select State");
    setSelectedLivingCity("Select City");
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleLivingStates = (e, action) => {
    setSelectedLivingState(e);
    setSelectedLivingCity("Select City");
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleLivingCities = (e, action) => {
    setSelectedLivingCity(e);
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };
  const handleSetReligion = (e, action) => {
    setReligion(e);
    setCaste("Select Caste");
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleAge = (e, action) => {
    setAgeFrom(e);
    setAgeTo("Age To");
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  const handleHeight = (e, action) => {
    setHeightFrom(e);
    setHeightTo("Height To");
    setBasicPartPrfDetails({ ...basicPartPrfDetails, [action.name]: e.value });
  };

  console.log(basicPartPrfDetails, "basicPartPrfDetails");
  return (
    <>
      <div id="wrapper">
        <SideBar />

        <div class="main_content">
          <Header />
          <div class="mcontainer">
            <div class="bg-white lg:divide-x lg:flex lg:shadow-md rounded-md shadow lg:rounded-xl overflow-hidden lg:m-0 -mx-4">
              <SideMenu menuActive={menuActive} />
              <div class="lg:py-0 lg:px-5 pl-4 pr-4 mt-4 w-3/4">
                <Formik
                  enableReinitialize
                  initialValues={{
                    basicPartPrfDetails,
                  }}
                  onSubmit={() => {
                    basicPartnerPreferenceDetailsSubmit();
                  }}
                >
                  {(formik) => (
                    <Form className="p-6 space-y-3 relative bg-white shadow-lg rounded-lg">
                      <p class="font-semibold">Age & Height Preference</p>
                      <div class="grid lg:grid-cols-4 gap-2 mt-4 w-full">
                        <Select
                          value={ageFrom}
                          onChange={handleAge}
                          options={ageFromOptions}
                          placeholder="Age From"
                          styles={customStyles}
                          maxMenuHeight={220}
                          name="ageFrom"
                        />
                        <Select
                          value={ageTo}
                          onChange={handleAgeTo}
                          options={ageToOptions}
                          placeholder="Age To"
                          styles={customStyles}
                          maxMenuHeight={220}
                          name="ageTo"
                        />
                        <HeightSelector
                          value={heightFrom}
                          onChange={handleHeight}
                          options={heightFromOptions}
                          placeholder="Height From"
                          maxMenuHeight={220}
                          name="heightFrom"
                        />
                        <HeightSelector
                          value={heightTo}
                          onChange={handleHeightTo}
                          options={heightToOptions}
                          placeholder="Height To"
                          maxMenuHeight={220}
                          name="heightTo"
                        />
                      </div>

                      <div class="grid lg:grid-cols-2 gap-2 mt-6">
                        <Select
                          defaultValue={maritalStatus}
                          onChange={handleMaritalStatus}
                          options={maritalStatusOptions}
                          placeholder="Marital Status"
                          styles={customStyles}
                          maxMenuHeight={220}
                          name="maritalStatus"
                        />
                        <MotherTongue
                          value={motherLanguage}
                          onChange={handleMotherLanguage}
                          options={languagesKnownOptions}
                          placeholder="Mother Tongue"
                          maxMenuHeight={220}
                          name="motherLanguage"
                        />
                      </div>

                      <p class="mt-4 font-semibold">Religion Preference</p>

                      <div class="grid lg:grid-cols-2 gap-2 mt-4">
                        <ReligionSelector
                          value={religion}
                          onChange={handleSetReligion}
                          options={religionOptions}
                          placeholder="Religion"
                          maxMenuHeight={220}
                          name="religion"
                        />

                        <Select
                          getOptionValue={(option) => option.value}
                          onChange={handleCaste}
                          options={basedRegionCaste}
                          placeholder="Select Caste"
                          styles={customStyles}
                          maxMenuHeight={220}
                          isMulti={true}
                          closeMenuOnSelect={false}
                          isClearable={false}
                          name="caste"
                        />
                      </div>

                      <div class="grid lg:grid-cols-2 gap-2 mt-4">
                        <StarSelector
                          getOptionValue={(option) => option.value}
                          onChange={handleSelectStar}
                          options={starOptions}
                          placeholder="Star"
                          maxMenuHeight={220}
                          isMulti
                          closeMenuOnSelect={false}
                          isClearable={false}
                          name="selectStar"
                        />
                        <DoshamSelector
                          value={selectDosham}
                          onChange={handleSelectDosham}
                          options={doshamOptions}
                          placeholder="Dosham"
                          maxMenuHeight={220}
                          name="selectDosham"
                        />
                      </div>

                      <p class="mt-4 font-semibold">Professional Preference</p>

                      <div class="grid lg:grid-cols-2 gap-2 mt-4">
                        <GroupSelector
                          getOptionValue={(option) => option.value}
                          onChange={handleEducation}
                          options={groupedOptions}
                          placeholder="Education"
                          maxMenuHeight={220}
                          isMulti
                          closeMenuOnSelect={false}
                          isClearable={false}
                          name="education"
                        />
                        <EmployedIn
                          getOptionValue={(option) => option.value}
                          onChange={handleEmployedIn}
                          options={employedInOptions}
                          placeholder="Employed in"
                          maxMenuHeight={220}
                          isMulti
                          closeMenuOnSelect={false}
                          isClearable={false}
                          name="employedIn"
                        />
                      </div>

                      <div class="grid lg:grid-cols-2 gap-2 mt-4">
                        <Occupation
                          getOptionValue={(option) => option.value}
                          onChange={handleOccupation}
                          options={occupationOptions}
                          placeholder="Occupation"
                          maxMenuHeight={225}
                          menuPlacement={"bottom"}
                          isMulti
                          closeMenuOnSelect={false}
                          isClearable={false}
                          name="occupation"
                        />
                        <AnnualIncome
                          value={anualIncome}
                          onChange={handleAnualIncome}
                          options={anualIncomeOptions}
                          placeholder="Annual Income"
                          maxMenuHeight={220}
                          name="anualIncome"
                        />
                      </div>

                      <p class="mt-4 font-semibold">Location Preference</p>

                      <div class="grid lg:grid-cols-3 gap-2 mt-4">
                        <LivingCountry
                          value={selectedLivingCountry}
                          onChange={handleLivingCountry}
                          maxMenuHeight={170}
                          name="livingCountry"
                        />
                        <LivingState
                          onChange={handleLivingStates}
                          selectedLivingCountry={selectedLivingCountry}
                          value={selectedLivingState}
                          maxMenuHeight={170}
                          name="livingState"
                        />

                        <LivingCity
                          onChange={handleLivingCities}
                          selectedLivingCountry={selectedLivingCountry}
                          selectedLivingState={selectedLivingState}
                          value={selectedLivingCity}
                          maxMenuHeight={170}
                          name="livingCity"
                        />
                      </div>

                      <p class="mt-4 font-semibold">Habits Preference</p>

                      <div class="grid lg:grid-cols-3 gap-2 mt-4">
                        <EatingHabits
                          value={eatingHabits}
                          onChange={handleEatingHabits}
                          options={eatingHabitsOptions}
                          placeholder="Eating Habits"
                          menuPlacement="top"
                          maxMenuHeight={160}
                          name="eatingHabits"
                        />

                        <DrinkingHabits
                          value={drinkHabits}
                          onChange={handleDrinkHabits}
                          options={drinkingHabitsOptions}
                          placeholder="Drinking Habits"
                          menuPlacement="top"
                          maxMenuHeight={180}
                          name="drinkHabits"
                        />

                        <SmokingHabits
                          value={smokeHabits}
                          onChange={handleSmokeHabits}
                          options={smokingHabitsOptions}
                          placeholder="Smoking Habits"
                          menuPlacement="top"
                          maxMenuHeight={180}
                          name="smokeHabits"
                        />
                      </div>
                      <div class="bg-gray-10 p-6 pt-0 flex justify-end space-x-3 mt-4">
                        <button class="button bg-blue-700">Update</button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePartnerPreference;
