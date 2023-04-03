import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import LoginInput from "../inputs/loginInput";
const ForgetPassword = ({
  email,
  setEmail,
  error,
  setError,
  setLoading,
  setUserInfos,
  setVisible,
}) => {
  const validateEmail = Yup.object({
    email: Yup.string()
      .required("Email address ir required.")
      .email("Must be a valid email address.")
      .max(50, "Email address can't be more than 50 characters."),
  });
  const handleSearch = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/findUser`,
        { email }
      );
      setUserInfos(data);
      setVisible(1);
      setError("");
      setLoading(false);
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
          }}
          validationSchema={validateEmail}
          onSubmit={() => {
            handleSearch();
          }}
        >
          {(formik) => (
            <Form className="p-6 space-y-4 relative bg-white shadow-lg rounded-lg">
              <LoginInput
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered Email ID"
                className="with-border"
              />
              {error && <div className="error_text">{error}</div>}
              <button
                type="submit"
                className="bg-blue-600 font-semibold rounded-md text-center text-white w-full myBtnStyl"
              >
                Reset
              </button>
              <Link to="/login" className="text-blue-500 text-center block">
                Back to Login Page
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ForgetPassword;
