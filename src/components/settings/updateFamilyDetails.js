import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../menu/Header";
import SideBar from "../menu/SideBar";
import SideMenu from "./sideMenu";
import Select from "react-select";
import FamilyType from "../selector/FamilyType";
import {
  familyTypeOptions,
  fatherOccupOptions,
  MotherOccupOptions,
  numBroOptions,
  numSisOptions,
} from "../../familyDet";
import { famStatusOptions } from "../../staticSmallDat";
import FamilyStatus from "../selector/FamilyStatus";
import FatherOccupation from "../selector/FatherOccup";
import MotherOccupation from "../selector/MotherOccupation";
import { customStyles } from "../../staticDatas";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";

const UpdateFamilyDetails = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [basicFamilyInDetails, setBasicFamilyInDetails] = useState();

  const [menuActive, setMenuActive] = useState(4);
  const [selectStar, setSelectStar] = useState("");
  const [familyType, setFamilyType] = useState("");
  const [familyStatus, setFamilyStatus] = useState("");
  const [fatherOccup, setFatherOccup] = useState("");
  const [motherOccup, setMotherOccup] = useState("");

  const [numBro, setNumBro] = useState("");
  const [numBroMarried, setNumBroMarried] = useState("");

  const [numSis, setNumSis] = useState("");
  const [numSisMarried, setNumSisMarried] = useState("");
  const [famStatus, setFamStatus] = useState("");

  const [numBroSelOptions, setNumBroSelOptions] = useState([]);
  const [numSisSelOptions, setNumSisSelOptions] = useState([]);

  const initialFamilyInfoDetails = {
    familyType: basicFamilyInDetails?.familyType
      ? basicFamilyInDetails.familyType
      : "",
    famStatus: basicFamilyInDetails?.famStatus
      ? basicFamilyInDetails.famStatus
      : "",
    fatherOccup: basicFamilyInDetails?.fatherOccup
      ? basicFamilyInDetails.fatherOccup
      : "",
    motherOccup: basicFamilyInDetails?.motherOccup
      ? basicFamilyInDetails.motherOccup
      : "",
    numBro: basicFamilyInDetails?.numBro ? basicFamilyInDetails.numBro : "",
    numBroMarried: basicFamilyInDetails?.numBroMarried
      ? basicFamilyInDetails.numBroMarried
      : "",
    numSis: basicFamilyInDetails?.numSis ? basicFamilyInDetails.numSis : "",
    numSisMarried: basicFamilyInDetails?.numSisMarried
      ? basicFamilyInDetails.numSisMarried
      : "",
    fewWordsAbtYou: basicFamilyInDetails?.fewWordsAbtYou
      ? basicFamilyInDetails.fewWordsAbtYou
      : "",
  };

  const [basicFmlyInfDetails, setBasicFmlyInfDetails] = useState(
    initialFamilyInfoDetails
  );

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const basicFamilyInfoDetailsSubmit = async () => {
    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/updateFamilyDetails`,
        {
          basicFmlyInfDetails,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setError("");

      const { message, ...rest } = data;
      setBasicFamilyInDetails(data);

      setSuccess("Successfully Updated!");
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };

  const handleFamilyType = (e, action) => {
    setFamilyType(e);
    setBasicFmlyInfDetails({ ...basicFmlyInfDetails, [action.name]: e.value });
  };

  const handleFamStatus = (e, action) => {
    setFamStatus(e);
    setBasicFmlyInfDetails({ ...basicFmlyInfDetails, [action.name]: e.value });
  };
  const handleFatherOccup = (e, action) => {
    setFatherOccup(e);
    setBasicFmlyInfDetails({ ...basicFmlyInfDetails, [action.name]: e.value });
  };
  const handleMotherOccup = (e, action) => {
    setMotherOccup(e);
    setBasicFmlyInfDetails({ ...basicFmlyInfDetails, [action.name]: e.value });
  };

  const handleNumBroMarried = (e, action) => {
    setNumBroMarried(e);
    setBasicFmlyInfDetails({ ...basicFmlyInfDetails, [action.name]: e.value });
  };

  const handleNumSis = (e, action) => {
    setNumSis(e);
    setBasicFmlyInfDetails({ ...basicFmlyInfDetails, [action.name]: e.value });
  };
  const handleBro = (e, action) => {
    setNumBro(e);
    setBasicFmlyInfDetails({ ...basicFmlyInfDetails, [action.name]: e.value });
  };
  const handleNumSisMarried = (e, action) => {
    setNumSisMarried(e);
    setBasicFmlyInfDetails({ ...basicFmlyInfDetails, [action.name]: e.value });
  };
  const handleAbtFamily = (e) => {
    const { name, value } = e.target;
    setBasicFmlyInfDetails({ ...basicFmlyInfDetails, [name]: value });
  };

  const handleBroCount = (e) => {
    setNumBro(e);
    const handleNumBro = [];
    obj = {};
    if (numBro?.value === 0) {
      var obj = { value: "none", label: "none" };
      handleNumBro.push(obj);
      setNumBroSelOptions(handleNumBro);
      setNumBroMarried("none");
    } else {
      for (var i = 1; i <= numBro?.value; i++) {
        var obj = {};
        obj["value"] = [i] + " ";
        obj["label"] = [i] + " ";
        handleNumBro.push(obj);
        setNumBroSelOptions(handleNumBro);
        setNumBroMarried("none");
      }
    }
  };

  useEffect(() => {
    handleBroCount();
  }, [numBro?.value, numBroMarried]);

  const handleSisCount = (e) => {
    setNumSis(e);
    const handleNumSis = [];
    obj = {};
    if (numSis?.value === 0) {
      var obj = { value: "none", label: "none" };
      handleNumSis.push(obj);
      setNumSisSelOptions(handleNumSis);
      setNumSisMarried("none");
    } else {
      for (var i = 1; i <= numSis?.value; i++) {
        var obj = {};
        obj["value"] = [i] + " ";
        obj["label"] = [i] + " ";
        handleNumSis.push(obj);
        setNumSisSelOptions(handleNumSis);
        setNumSisMarried("none");
      }
    }
  };

  useEffect(() => {
    handleSisCount();
  }, [numSis?.value, numSisMarried]);

  console.log(basicFmlyInfDetails, "basicFmlyInfDetails");
  return (
    <>
      <div id="wrapper">
        <SideBar />

        <div class="main_content">
          <Header />
          <div class="mcontainer">
            <div class="">
              <div class="bg-white lg:divide-x lg:flex lg:shadow-md rounded-md shadow lg:rounded-xl overflow-hidden lg:m-0 -mx-4">
                <SideMenu menuActive={menuActive} />
                <div class="lg:py-0 lg:px-5 pl-4 pr-4 mt-4 w-3/4">
                  <Formik
                    enableReinitialize
                    initialValues={{
                      basicFmlyInfDetails,
                    }}
                    onSubmit={() => {
                      basicFamilyInfoDetailsSubmit();
                    }}
                  >
                    {(formik) => (
                      <Form className="p-6 space-y-3 relative bg-white shadow-lg rounded-lg">
                        <div class="grid lg:grid-cols-2 gap-2 w-full">
                          <FamilyType
                            value={familyType}
                            onChange={handleFamilyType}
                            options={familyTypeOptions}
                            placeholder="Family Type"
                            maxMenuHeight={140}
                            name="familyType"
                          />

                          <FamilyStatus
                            value={famStatus}
                            onChange={handleFamStatus}
                            options={famStatusOptions}
                            placeholder="Family Status"
                            maxMenuHeight={225}
                            name="famStatus"
                          />
                        </div>
                        <div class="grid lg:grid-cols-2 gap-2 mt-4">
                          <FatherOccupation
                            value={fatherOccup}
                            onChange={handleFatherOccup}
                            options={fatherOccupOptions}
                            placeholder="Father's Occupation"
                            styles={customStyles}
                            maxMenuHeight={130}
                            name="fatherOccup"
                          />
                          <MotherOccupation
                            value={motherOccup}
                            onChange={handleMotherOccup}
                            options={MotherOccupOptions}
                            placeholder="Mother's Occupation"
                            styles={customStyles}
                            maxMenuHeight={130}
                            name="motherOccup"
                          />
                        </div>

                        <div class="grid lg:grid-cols-4 gap-2 mt-4">
                          <Select
                            value={numBro}
                            onChange={handleBro}
                            options={numBroOptions}
                            placeholder="No. of Brother"
                            styles={customStyles}
                            maxMenuHeight={140}
                            name="numBro"
                          />
                          <Select
                            value={numBroMarried}
                            onChange={handleNumBroMarried}
                            options={numBroSelOptions}
                            placeholder="BrotherMarried"
                            styles={customStyles}
                            maxMenuHeight={140}
                            name="numBroMarried"
                          />
                          <Select
                            value={numSis}
                            onChange={handleNumSis}
                            options={numSisOptions}
                            placeholder="No. of Sister"
                            styles={customStyles}
                            maxMenuHeight={140}
                            name="numSis"
                          />
                          <Select
                            value={numSisMarried}
                            onChange={handleNumSisMarried}
                            options={numSisSelOptions}
                            placeholder="Sister Married"
                            styles={customStyles}
                            maxMenuHeight={140}
                            name="numSisMarried"
                          />
                        </div>

                        <div class="grid lg:grid-cols-1 gap-2 mt-4">
                          <textarea
                            id="message"
                            rows="4"
                            name="fewWordsAbtYou"
                            onChange={handleAbtFamily}
                            class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border with-border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write about your family..."
                          ></textarea>
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
      </div>
    </>
  );
};

export default UpdateFamilyDetails;
