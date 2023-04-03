import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Account from "../../pages/account";
import * as Yup from "yup";
import axios from "axios";
import { Form, Formik } from "formik";
import { useState } from "react";
import LivingCountry from "../selector/LivingCountry";
import LivingState from "../selector/LivingState";
import LivingCity from "../selector/LivingCity";
import TextArea from "../inputs/textArea";

const LocationDetails = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [locationDetails, setLocationDetails] = useState();
  const [selectedLivingCountry, setSelectedLivingCountry] = useState(null);
  const [selectedLivingState, setSelectedLivingState] = useState(null);
  const [selectedLivingCity, setSelectedLivingCity] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initial = {
    urCountry: locationDetails?.urCountry ? locationDetails.urCountry : "",
    urState: locationDetails?.urState ? locationDetails.urState : "",
    urCity: locationDetails?.urCity ? locationDetails.urCity : "",
    fewWordsAbtYou: locationDetails?.fewWordsAbtYou
      ? locationDetails.fewWordsAbtYou
      : "",
    registerLevel: 3,
  };

  const [locationInfos, setLocationInfos] = useState(initial);

  const registerLocationDeatilsValidation = Yup.object({
    urCountry: Yup.string().required("Enter your Country"),
    urState: Yup.string().required("Enter your State"),
    urCity: Yup.string().required("Enter your City"),
    fewWordsAbtYou: Yup.string().required("Enter Few words about you"),
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const basicLocationSubmit = async () => {
    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/updateLocationDetails`,
        {
          locationInfos,
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
      setLocationDetails(data);

      // setTimeout(() => {
      //   dispatch({ type: "LOGIN", payload: rest });
      //   localStorage.setItem("user", JSON.stringify(rest));
      //   navigate("/basic-details");
      // }, 2000);

      // dispatch({ type: "LOGIN", payload: rest });
      // localStorage.setItem("user", JSON.stringify(rest));
      navigate("/add-profile-photo");
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };
  const handleLocationDetailsRegisterChange = (e) => {
    const { name, value } = e.target;
    setLocationInfos({ ...locationInfos, [name]: value });
  };

  const handleLivingCountry = (e, action) => {
    setLocationInfos({ ...locationInfos, [action.name]: e.value });
    setSelectedLivingCountry(e);
    setSelectedLivingState("Select State");
    setSelectedLivingCity("Select City");
  };

  const handleLivingStates = (e, action) => {
    setLocationInfos({ ...locationInfos, [action.name]: e.value });
    setSelectedLivingState(e);
    setSelectedLivingCity("Select City");
    console.log(selectedLivingState, "selectedLivingState");
  };

  const handleLivingCities = (e, action) => {
    setLocationInfos({ ...locationInfos, [action.name]: e.value });
    setSelectedLivingCity(e);
  };

  return (
    <>
      <div className="lg:flex max-w-5xl min-h-screen mx-auto p-6 py-10">
        <div className="flex flex-col items-center lg: lg:flex-row lg:space-x-10">
          <Account />
          <div className="lg:mt-0 lg:w-96 md:w-1/2 sm:w-2/3 mt-10 w-full">
            <Formik
              enableReinitialize
              initialValues={{
                locationInfos,
              }}
              onSubmit={() => {
                basicLocationSubmit();
              }}
            >
              {(formik) => (
                <Form className="p-6 space-y-4 relative bg-white shadow-lg rounded-lg">
                  <div>
                    <label class="mb-1 font-semibold text-gray-500">
                      Your Location Details
                    </label>

                    <LivingCountry
                      value={selectedLivingCountry}
                      onChange={handleLivingCountry}
                      name="urCountry"
                    />
                  </div>
                  <LivingState
                    onChange={handleLivingStates}
                    selectedLivingCountry={selectedLivingCountry}
                    value={selectedLivingState}
                    name="urState"
                  />
                  <LivingCity
                    onChange={handleLivingCities}
                    selectedLivingCountry={selectedLivingCountry}
                    selectedLivingState={selectedLivingState}
                    value={selectedLivingCity}
                    name="urCity"
                  />

                  <div>
                    <label class="mb-1 font-semibold text-gray-500">
                      Few Words about you
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      name="fewWordsAbtYou"
                      onChange={handleLocationDetailsRegisterChange}
                      class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border with-border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div>

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

export default LocationDetails;
