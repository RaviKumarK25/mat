import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import LoginInput from "../inputs/loginInput";

import DotLoader from "react-spinners/DotLoader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const loginInfos = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email.")
      .max(100),
    password: Yup.string().required("Password is required"),
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const loginSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          email,
          password,
        }
      );
      dispatch({ type: "LOGIN", payload: data });
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <div className="lg:mt-0 lg:w-96 md:w-1/2 sm:w-2/3 mt-10 w-full">
        <Formik
          enableReinitialize
          initialValues={{
            email,
            password,
          }}
          validationSchema={loginValidation}
          onSubmit={() => {
            loginSubmit();
          }}
        >
          {(formik) => (
            <Form className="p-6 space-y-1 relative bg-white shadow-lg rounded-lg">
              {error && (
                <div className="input_error font-semibold pb-2">{error}</div>
              )}
              <LoginInput
                type="text"
                name="email"
                placeholder="Email or Phone Number"
                onChange={handleLoginChange}
              />
              <LoginInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleLoginChange}
              />
              <button className="bg-blue-600 font-semibold rounded-md text-center text-white w-full myBtnStyl">
                Log In
              </button>
              <Link
                to="/forgot-password"
                className="text-blue-500 text-center block"
              >
                Forgot Password?
              </Link>

              <hr className="pb-1.5" />
              <div className="flex">
                <Link
                  to="/register"
                  className="bg-green-600 hover:bg-green-500 hover:text-white font-semibold px-5 rounded-md text-center text-white mx-auto myBtnStyl"
                >
                  Create New Account
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
