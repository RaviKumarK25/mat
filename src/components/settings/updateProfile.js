import axios from "axios";
import React, { useState } from "react";

import makeAnimated from "react-select/animated";
import { groupedOptions } from "../../educationDat";
import { languagesKnownOptions } from "../../languagesDat";
import { occupationOptions } from "../../occupation";

import {
  anualIncomeOptions,
  drinkingHabitsOptions,
  eatingHabitsOptions,
  employedInOptions,
  physicalStatusOptions,
  smokingHabitsOptions,
} from "../../staticSmallDat";
import AnnualIncome from "../selector/AnnualIncome";
import { Form, Formik } from "formik";
import CitySelector from "../selector/CitySelector";
import CountrySelector from "../selector/CountrySelector";
import DrinkingHabits from "../selector/DrinkingHabits";
import EatingHabits from "../selector/EatingHabits";
import EmployedIn from "../selector/EmployedIn";
import GroupSelector from "../selector/GroupSelector";
import LivingCity from "../selector/LivingCity";
import LivingCountry from "../selector/LivingCountry";
import LivingState from "../selector/LivingState";
import MotherTongue from "../selector/MotherTongue";
import Occupation from "../selector/Occupation";
import PhysicalStatus from "../selector/PhysicalStatus";
import SmokingHabits from "../selector/SmokingHabits";
import StateSelectr from "../selector/StateSelectr";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const animatedComponents = makeAnimated();

const UpdateProfile = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [basicDetails, setDetails] = useState();
  const [physicalStatus, setPhysicalStatus] = useState(null);

  const [eatingHabits, setEatingHabits] = useState(null);
  const [drinkHabits, setDrinkHabits] = useState(null);
  const [smokeHabits, setSmokeHabits] = useState(null);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [selectedLivingCountry, setSelectedLivingCountry] = useState(null);
  const [selectedLivingState, setSelectedLivingState] = useState(null);
  const [selectedLivingCity, setSelectedLivingCity] = useState(null);
  const [education, setEducation] = useState(null);
  const [employedIn, setEmployedIn] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [anulIncome, setAnulIncome] = useState("");
  const [motherLanguage, setMotherLanguage] = useState([]);

  const initialBasicInfDetails = {
    physicalStatus: basicDetails?.physicalStatus
      ? basicDetails.physicalStatus
      : "",
    proEducation: basicDetails?.proEducation ? basicDetails.proEducation : "",
    employedInn: basicDetails?.employedInn ? basicDetails.employedInn : "",
    proOccupation: basicDetails?.proOccupation
      ? basicDetails.proOccupation
      : "",
    annualIncome: basicDetails?.annualIncome ? basicDetails.annualIncome : "",
    knowingLanguages: basicDetails?.knowingLanguages
      ? basicDetails.knowingLanguages
      : "",
    workCountry: basicDetails?.workCountry ? basicDetails.workCountry : "",
    workState: basicDetails?.workState ? basicDetails.workState : "",
    workCity: basicDetails?.workCity ? basicDetails.workCity : "",

    livCountry: basicDetails?.livCountry ? basicDetails.livCountry : "",
    livState: basicDetails?.livState ? basicDetails.livState : "",
    livCity: basicDetails?.livCity ? basicDetails.livCity : "",
    eatHab: basicDetails?.eatHab ? basicDetails.eatHab : "",
    drinkHab: basicDetails?.drinkHab ? basicDetails.drinkHab : "",
    smokeHab: basicDetails?.smokeHab ? basicDetails.smokeHab : "",
  };

  const [basicInfDetails, setBasicInfDetails] = useState(
    initialBasicInfDetails
  );

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const basicFullDetailsSubmit = async () => {
    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/updateBasicFullDetails`,
        {
          basicInfDetails,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setError("");

      const { message, ...rest } = data;
      setDetails(data);

      setSuccess("Successfully Updated!");
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };

  const handleSetPhysicalStatus = (e, action) => {
    setPhysicalStatus(e);
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };
  const handleSetEducation = (e, action) => {
    setEducation(e);
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };

  const handleSetEmployedIn = (e, action) => {
    setEmployedIn(e);
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };

  const handleSetOccupation = (e, action) => {
    setOccupation(e);
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };

  const handleSetAnulIncome = (e, action) => {
    setAnulIncome(e);
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };

  const handleSetMotherLanguage = (e, action) => {
    console.log(e, "e");
    const knowLanguage = Array.isArray(e) ? e.map((x) => x.value) : [];
    setMotherLanguage(knowLanguage);
    setBasicInfDetails({ ...basicInfDetails, [action.name]: knowLanguage });
  };

  const handleSetEatingHabits = (e, action) => {
    setEatingHabits(e);
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };

  const handleSetDrinkHabits = (e, action) => {
    setDrinkHabits(e);
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };

  const handleSetSmokeHabits = (e, action) => {
    setSmokeHabits(e);
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };
  const handleCountry = (e, action) => {
    setSelectedCountry(e.value);
    setSelectedState("Select State");
    setSelectedCity("Select City");
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };

  const handleStates = (e, action) => {
    setSelectedState(e);
    setSelectedCity("Select City");
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };

  const handleCities = (e, action) => {
    setSelectedCity(e);
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };

  const handleLivingCountry = (e, action) => {
    setSelectedLivingCountry(e);
    setSelectedLivingState("Select State");
    setSelectedLivingCity("Select City");
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };

  const handleLivingStates = (e, action) => {
    setSelectedLivingState(e);
    setSelectedLivingCity("Select City");

    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };

  const handleLivingCities = (e, action) => {
    setSelectedLivingCity(e);
    setBasicInfDetails({ ...basicInfDetails, [action.name]: e.value });
  };

  useEffect(() => {
    console.log(motherLanguage);
  }, [basicInfDetails, motherLanguage]);

  console.log(basicInfDetails);
  return (
    <>
      <div class="lg:py-0 lg:px-5 pl-4 pr-4 mt-4 w-full">
        <Formik
          enableReinitialize
          initialValues={{
            basicInfDetails,
          }}
          onSubmit={() => {
            basicFullDetailsSubmit();
          }}
        >
          {(formik) => (
            <Form className="p-6 space-y-3 relative bg-white shadow-lg rounded-lg">
              <div class="grid lg:grid-cols-2 gap-2 w-full">
                <PhysicalStatus
                  defaultValue={physicalStatus}
                  onChange={handleSetPhysicalStatus}
                  options={physicalStatusOptions}
                  placeholder="Select Physical Status"
                  name="physicalStatus"
                />
                <GroupSelector
                  value={education}
                  onChange={handleSetEducation}
                  options={groupedOptions}
                  placeholder="Education"
                  maxMenuHeight={220}
                  name="proEducation"
                />
              </div>
              <div class="grid lg:grid-cols-2 gap-2 mt-4">
                <EmployedIn
                  value={employedIn}
                  onChange={handleSetEmployedIn}
                  options={employedInOptions}
                  placeholder="Employed in"
                  maxMenuHeight={220}
                  name="employedInn"
                />
                <Occupation
                  value={occupation}
                  onChange={handleSetOccupation}
                  options={occupationOptions}
                  placeholder="Occupation"
                  maxMenuHeight={225}
                  name="proOccupation"
                />
              </div>

              <div class="grid lg:grid-cols-2 gap-2 mt-4">
                <AnnualIncome
                  value={anulIncome}
                  onChange={handleSetAnulIncome}
                  options={anualIncomeOptions}
                  placeholder="Annual Income"
                  maxMenuHeight={225}
                  menuPlacement="bottom"
                  name="annualIncome"
                />

                <MotherTongue
                  getOptionValue={(option) => option.value}
                  onChange={handleSetMotherLanguage}
                  options={languagesKnownOptions}
                  placeholder="Knowing Languages"
                  maxMenuHeight={220}
                  isMulti
                  closeMenuOnSelect={false}
                  isClearable={false}
                  name="knowingLanguages"
                />
              </div>

              <p class="mt-4 font-semibold">Working Location</p>
              <div class="grid lg:grid-cols-3 gap-2 mt-4">
                <CountrySelector
                  handleCountry={handleCountry}
                  name="workCountry"
                />

                <StateSelectr
                  handleStates={handleStates}
                  selectedCountry={selectedCountry}
                  selectedState={selectedState}
                  name="workState"
                />

                <CitySelector
                  handleCities={handleCities}
                  selectedCountry={selectedCountry}
                  selectedState={selectedState}
                  selectedCity={selectedCity}
                  name="workCity"
                />
              </div>

              <p class="mt-4 font-semibold">Living Location</p>
              <div class="grid lg:grid-cols-3 gap-2 mt-4">
                <LivingCountry
                  value={selectedLivingCountry}
                  onChange={handleLivingCountry}
                  maxMenuHeight={170}
                  name="livCountry"
                />
                <LivingState
                  onChange={handleLivingStates}
                  selectedLivingCountry={selectedLivingCountry}
                  value={selectedLivingState}
                  maxMenuHeight={170}
                  name="livState"
                />

                <LivingCity
                  onChange={handleLivingCities}
                  selectedLivingCountry={selectedLivingCountry}
                  selectedLivingState={selectedLivingState}
                  value={selectedLivingCity}
                  maxMenuHeight={170}
                  name="livCity"
                />
              </div>

              <p class="mt-4 font-semibold">Habits</p>
              <div class="grid lg:grid-cols-3 gap-2 mt-4">
                <EatingHabits
                  value={eatingHabits}
                  onChange={handleSetEatingHabits}
                  options={eatingHabitsOptions}
                  placeholder="Eating Habits"
                  menuPlacement="top"
                  name="eatHab"
                />

                <DrinkingHabits
                  value={drinkHabits}
                  onChange={handleSetDrinkHabits}
                  options={drinkingHabitsOptions}
                  placeholder="Drinking Habits"
                  menuPlacement="top"
                  name="drinkHab"
                />

                <SmokingHabits
                  value={smokeHabits}
                  onChange={handleSetSmokeHabits}
                  options={smokingHabitsOptions}
                  placeholder="Smoking Habits"
                  menuPlacement="top"
                  name="smokeHab"
                />
              </div>

              <div class="bg-gray-10 p-6 pt-0 flex justify-end space-x-3 mt-4">
                <button class="button bg-blue-700">Update</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default UpdateProfile;
