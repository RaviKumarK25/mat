import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterInput from "../inputs/registerInput";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import DateOfBirthSelect from "./DateOfBirthSelect";
import Gender from "./Gender";
import MaritalStatus from "./MaritalStatus";
import Account from "../../pages/account";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfos = {
    full_name: "",
    gender: "",
    marital: "",
    bDay: new Date().getDate(),
    bMonth: new Date().getMonth() + 1,
    bYear: new Date().getFullYear(),
    mob_num: "",
    email: "",
    password: "",
    registerLevel: 1,
  };

  const [user, setUser] = useState(userInfos);
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
  } = user;
  const yearTemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const years = Array.from(new Array(108), (val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

  const registerValidation = Yup.object({
    full_name: Yup.string()
      .required("Enter your full name")
      .min(3, "Name must be between 3 and 16 characters.")
      .max(16, "Name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    mob_num: Yup.number()
      .required("Please enter valid mobile no.")
      .min(3, "Please enter valid mobile no.")

      .test(
        "Is positive?",
        "ERROR: The number must be greater than 0!",
        (value) => value > 0
      ),
    email: Yup.string()
      .required("Please enter your valid email id")
      .email("Enter a valid email address."),
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers, letters and special characters"
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),
  });

  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const registerSubmit = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        {
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
        }
      );
      setError("");
      // setSuccess(data.message);
      const { message, ...rest } = data;
      // setTimeout(() => {
      //   dispatch({ type: "LOGIN", payload: rest });
      //   localStorage.setItem("user", JSON.stringify(rest));
      //   navigate("/basic-details");
      // }, 2000);

      dispatch({ type: "LOGIN", payload: rest });
      localStorage.setItem("user", JSON.stringify(rest));
      navigate("/basic-details");
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
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
                full_name,
                gender,
                marital,
                bDay,
                bMonth,
                bYear,
                mob_num,
                email,
                password,
              }}
              validationSchema={registerValidation}
              onSubmit={() => {
                let current_date = new Date();
                let picked_date = new Date(bYear, bMonth - 1, bDay);
                let atleast14 = new Date(1970 + 14, 0, 1);
                let noMoreThan70 = new Date(1970 + 70, 0, 1);
                if (current_date - picked_date < atleast14) {
                  setDateError("it looks like you are a minor!");
                } else if (current_date - picked_date > noMoreThan70) {
                  setDateError(
                    "it looks like you have enetered the wrong date of birth."
                  );
                } else if (gender === "") {
                  setDateError("");
                  setGenderError(
                    "Please choose a gender. You can change who can see this later."
                  );
                } else {
                  setDateError("");
                  setGenderError("");
                  registerSubmit();
                }
              }}
            >
              {(formik) => (
                <Form className="pl-6 pr-6 pt-3 pb-3 space-y-3 relative bg-white shadow-lg rounded-lg">
                  <RegisterInput
                    type="text"
                    placeholder="Your Full Name"
                    name="full_name"
                    onChange={handleRegisterChange}
                  />
                  <div class="grid lg:grid-cols-2 gap-5">
                    <Gender
                      gender={gender}
                      handleRegisterChange={handleRegisterChange}
                    />
                    <MaritalStatus
                      marital={marital}
                      handleRegisterChange={handleRegisterChange}
                    />
                  </div>
                  <label>Date of Birth</label>
                  <DateOfBirthSelect
                    bDay={bDay}
                    bMonth={bMonth}
                    bYear={bYear}
                    days={days}
                    months={months}
                    years={years}
                    handleRegisterChange={handleRegisterChange}
                    dateError={dateError}
                  />

                  <RegisterInput
                    type="number"
                    placeholder="Enter Your Mobile No."
                    name="mob_num"
                    onChange={handleRegisterChange}
                  />

                  <RegisterInput
                    type="email"
                    placeholder="Your Email ID"
                    name="email"
                    onChange={handleRegisterChange}
                  />

                  <RegisterInput
                    type="password"
                    placeholder="Create Password"
                    name="password"
                    onChange={handleRegisterChange}
                  />

                  <p className="text-xs text-gray-400 pt-3">
                    By clicking Sign Up, you agree to our
                    <a href="#" className="text-blue-500">
                      Terms
                    </a>
                    ,<a href="#">Data Policy</a> and{" "}
                    <a href="#">Cookies Policy</a>. You may receive SMS
                    Notifications from us and can opt out any time.
                  </p>
                  <div className="flex">
                    <button className="bg-blue-600 font-semibold rounded-md text-center text-white w-full myBtnStyl">
                      Sign Up
                    </button>
                  </div>
                  <Link to="/login" className="text-blue-500 text-center block">
                    Goto Login Page
                  </Link>

                  {/* <DotLoader color="#1876f2" loading={loading} size={30} /> */}
                  {error && <div className="error_text">{error}</div>}
                  {success && <div className="success_text">{success}</div>}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
