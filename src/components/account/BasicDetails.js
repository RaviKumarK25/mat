import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Account from "../../pages/account";
import * as Yup from "yup";
import axios from "axios";
import { Form, Formik } from "formik";
import RegisterInput from "../inputs/registerInput";
import Occupation from "../selector/Occupation";
import GroupSelector from "../selector/GroupSelector";
import ReligionSelector from "../selector/ReligionSelector";
import HeightSelector from "../selector/HeightSelector";
import WeightSelector from "../selector/WeightSelector";
import MotherTongue from "../selector/MotherTongue";
import AnnualIncome from "../selector/AnnualIncome";
import FamilyStatus from "../selector/FamilyStatus";
import {
  customStyles,
  heightFromOptions,
  religionOptions,
  weightOptions,
} from "../../staticDatas";
import { languagesKnownOptions } from "../../languagesDat";
import { groupedOptions } from "../../educationDat";
import { occupationOptions } from "../../occupation";
import { anualIncomeOptions, famStatusOptions } from "../../staticSmallDat";
import { casteOptions } from "../../casteDat";
import Select from "react-select";

const BasicDetails = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [basicDetails, setDetails] = useState();
  const [heightFrom, setHeightFrom] = useState("");
  const [weight, setWeight] = useState("");
  const [motherLanguage, setMotherLanguage] = useState("");
  const [religion, setReligion] = useState(null);
  const [education, setEducation] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [anulIncome, setAnulIncome] = useState("");
  const [famStatus, setFamStatus] = useState("");
  const [caste, setCaste] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initial = {
    proHeight: basicDetails?.proHeight ? basicDetails.proHeight : "",
    proWeight: basicDetails?.proWeight ? basicDetails.proWeight : "",
    motherTongue: basicDetails?.motherTongue ? basicDetails.motherTongue : "",
    proReligion: basicDetails?.proReligion ? basicDetails.proReligion : "",
    proCast: basicDetails?.proCast ? basicDetails.proCast : "",
    proEducation: basicDetails?.proEducation ? basicDetails.proEducation : "",
    proOccupation: basicDetails?.proOccupation
      ? basicDetails.proOccupation
      : "",
    annualIncome: basicDetails?.annualIncome ? basicDetails.annualIncome : "",
    familyStatus: basicDetails?.familyStatus ? basicDetails.familyStatus : "",
    registerLevel: 2,
  };

  const [infos, setInfos] = useState(initial);

  const registerBasicDeatilsValidation = Yup.object({
    proHeight: Yup.string().required("Enter your Height"),
    proWeight: Yup.string().required("Enter your Weight"),
    motherTongue: Yup.string().required("Enter your Mother Tongue"),
    proReligion: Yup.string().required("Enter your Religion"),
    proCast: Yup.string().required("Enter your Cast"),
    proEducation: Yup.string().required("Enter your Education"),
    proOccupation: Yup.string().required("Enter your Occupation"),
    annualIncome: Yup.string().required("Enter your Annual Income"),
    familyStatus: Yup.string().required("Enter your Family Status"),
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const basedRegionCaste = casteOptions.filter(
    (i) => i.relig === religion?.value
  );

  const basicDetailsSubmit = async () => {
    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/updateBasicDetails`,
        {
          infos,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setError("");
      // setSuccess(data.message);
      const { message, ...rest } = data;
      setDetails(data);
      // setTimeout(() => {
      //   dispatch({ type: "LOGIN", payload: rest });
      //   localStorage.setItem("user", JSON.stringify(rest));
      //   navigate("/basic-details");
      // }, 2000);

      // dispatch({ type: "LOGIN", payload: rest });
      // localStorage.setItem("user", JSON.stringify(rest));
      navigate("/location-details");
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };

  const handleSetReligion = (e, action) => {
    setReligion(e);
    setCaste("Select Caste");
    setInfos({ ...infos, [action.name]: e.value });
  };
  const handleSetHeightFrom = (e, action) => {
    setHeightFrom(e);
    setInfos({ ...infos, [action.name]: e.value });
  };
  const handleSetWeight = (e, action) => {
    setWeight(e);
    setInfos({ ...infos, [action.name]: e.value });
  };

  const handleSetMotherLanguage = (e, action) => {
    setMotherLanguage(e);
    setInfos({ ...infos, [action.name]: e.value });
  };

  const handleSetCaste = (e, action) => {
    setCaste(e);
    setInfos({ ...infos, [action.name]: e.value });
  };

  const handleSetEducation = (e, action) => {
    setEducation(e);
    setInfos({ ...infos, [action.name]: e.value });
  };

  const handleSetOccupation = (e, action) => {
    setOccupation(e);
    setInfos({ ...infos, [action.name]: e.value });
  };

  const handleSetAnulIncome = (e, action) => {
    setAnulIncome(e);
    setInfos({ ...infos, [action.name]: e.value });
  };

  const handleSetFamStatus = (e, action) => {
    setFamStatus(e);
    setInfos({ ...infos, [action.name]: e.value });
  };

  console.log(infos, "infos");
  return (
    <>
      <div className="lg:flex max-w-5xl min-h-screen mx-auto p-6 py-10">
        <div className="flex flex-col items-center lg: lg:flex-row lg:space-x-10">
          <Account />
          <div className="lg:mt-0 lg:w-96 md:w-1/2 sm:w-2/3 mt-10 w-full">
            <Formik
              enableReinitialize
              initialValues={{
                infos,
              }}
              onSubmit={() => {
                basicDetailsSubmit();
              }}
            >
              {(formik) => (
                <Form className="p-6 space-y-3 relative bg-white shadow-lg rounded-lg">
                  <div class="grid lg:grid-cols-2 gap-2">
                    <HeightSelector
                      value={heightFrom}
                      onChange={handleSetHeightFrom}
                      options={heightFromOptions}
                      placeholder="Height"
                      maxMenuHeight={220}
                      name="proHeight"
                    />
                    <WeightSelector
                      value={weight}
                      onChange={handleSetWeight}
                      options={weightOptions}
                      placeholder="Weight"
                      maxMenuHeight={220}
                      name="proWeight"
                    />
                  </div>

                  <MotherTongue
                    value={motherLanguage}
                    onChange={handleSetMotherLanguage}
                    options={languagesKnownOptions}
                    placeholder="Mother Tongue"
                    maxMenuHeight={220}
                    name="motherTongue"
                  />
                  <ReligionSelector
                    value={religion}
                    onChange={handleSetReligion}
                    options={religionOptions}
                    placeholder="Religion"
                    maxMenuHeight={220}
                    name="proReligion"
                  />
                  <Select
                    value={caste}
                    onChange={handleSetCaste}
                    options={basedRegionCaste}
                    placeholder="Select Caste"
                    styles={customStyles}
                    maxMenuHeight={220}
                    name="proCast"
                  />
                  <GroupSelector
                    value={education}
                    onChange={handleSetEducation}
                    options={groupedOptions}
                    placeholder="Education"
                    maxMenuHeight={220}
                    name="proEducation"
                  />

                  <Occupation
                    value={occupation}
                    onChange={handleSetOccupation}
                    options={occupationOptions}
                    placeholder="Occupation"
                    maxMenuHeight={225}
                    name="proOccupation"
                  />
                  <AnnualIncome
                    value={anulIncome}
                    onChange={handleSetAnulIncome}
                    options={anualIncomeOptions}
                    placeholder="Annual Income"
                    maxMenuHeight={225}
                    name="annualIncome"
                  />
                  <FamilyStatus
                    value={famStatus}
                    onChange={handleSetFamStatus}
                    options={famStatusOptions}
                    placeholder="Family Status"
                    maxMenuHeight={225}
                    name="familyStatus"
                  />

                  <button className="bg-blue-600 font-semibold rounded-md text-center text-white w-full myBtnStyl">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicDetails;
