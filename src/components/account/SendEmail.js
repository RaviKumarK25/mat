import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const SendEmail = ({
  userInfos,
  email,
  error,
  setError,
  setVisible,
  setUserInfos,
  loading,
  setLoading,
}) => {
  const sendEmail = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/sendResetPasswordCode`,
        { email }
      );
      setError("");
      setVisible(2);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <div className="p-6 space-y-4 relative bg-white shadow-lg rounded-lg">
        <div className="reset_grid">
          <div className="reset_left">
            <label htmlFor="email" className="hover1">
              <input type="radio" name="" id="email" checked readOnly />
              <div className="label_col">
                <span>Send code via email </span>&nbsp;
                <span className="font-semibold">{userInfos.email}</span>
              </div>
            </label>
          </div>
          <div className="reset_right centered">
            <img src={userInfos.picture} alt="" />
          </div>
        </div>
        {error && (
          <div className="error_text" style={{ padding: "10px" }}>
            {error}
          </div>
        )}

        <button
          onClick={() => {
            sendEmail();
          }}
          className="bg-blue-600 font-semibold rounded-md text-center text-white w-full myBtnStyl"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default SendEmail;
