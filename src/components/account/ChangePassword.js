import { Form, Formik } from "formik";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import LoginInput from "../inputs/loginInput";
const ChangePassword = ({
  password,
  setPassword,
  conf_password,
  setConf_password,
  error,
  laoding,
  setLoading,
  userInfos,
  setError,
}) => {
  const navigate = useNavigate();
  const validatePassword = Yup.object({
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),

    conf_password: Yup.string()
      .required("Confirm your password.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });
  const { email } = userInfos;
  const changePassword = async () => {
    try {
      setLoading(true);
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/changePassword`, {
        email,
        password,
      });
      setError("Your Password is Successfully Updated! Please Login");
      setTimeout(() => {
        navigate("/");
      }, 2000);
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
            password,
            conf_password,
          }}
          validationSchema={validatePassword}
          onSubmit={() => {
            changePassword();
          }}
        >
          {(formik) => (
            <Form className="p-6 space-y-4 relative bg-white shadow-lg rounded-lg">
              <LoginInput
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New password"
              />
              <LoginInput
                type="password"
                name="conf_password"
                onChange={(e) => setConf_password(e.target.value)}
                placeholder="Confirm new password"
                bottom
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
                  Update
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ChangePassword;
