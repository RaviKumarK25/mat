import { Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import LoginInput from "../inputs/loginInput";
const CodeVerification = ({
  code,
  setCode,
  error,
  loading,
  setLoading,
  setVisible,
  setError,
  userInfos,
}) => {
  const validateCode = Yup.object({
    code: Yup.string()
      .required("Code is required")
      .min("5", "Code must be 5 characters.")
      .max("5", "Code must be 5 characters."),
  });
  const { email } = userInfos;
  const verifyCode = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/validateResetCode`,
        { email, code }
      );
      setVisible(3);
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
            code,
          }}
          validationSchema={validateCode}
          onSubmit={() => {
            verifyCode();
          }}
        >
          {(formik) => (
            <Form className="p-6 space-y-4 relative bg-white shadow-lg rounded-lg">
              <LoginInput
                type="text"
                name="code"
                onChange={(e) => setCode(e.target.value)}
                placeholder="Code"
              />
              {error && <div className="error_text">{error}</div>}
              <div className="reset_form_btns">
                <Link to="/login" className="text-blue-500 text-center">
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="bg-blue-600 font-semibold rounded-md float-right text-center text-white w-1/4 h-8"
                >
                  Continue
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CodeVerification;
