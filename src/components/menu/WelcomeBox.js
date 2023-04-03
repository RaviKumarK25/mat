import React, { useState } from "react";
import axios from "axios";

const WelcomeBox = ({ user }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendVerificationLink = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/sendVerification`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <>
      <div class="card lg:mx-0 p-2">
        <div class="flex space-x-3">
          <img src={user.picture} class="w-8 h-8 rounded-full" />
          <p class="items-center space-x-4">
            Hello, {user.full_name}! Good afternoon.
            {/* {user.verified === false && ( */}
            <>
              <span class="text-red-400 font-semibold">
                &nbsp;Please verify your email id.
              </span>
              <a
                onClick={() => {
                  sendVerificationLink();
                }}
              >
                Click here to resend verification email
              </a>
              {success && <div className="success_text">{success}</div>}
              {error && <div className="error_text">{error}</div>}
            </>
            {/* // )} */}
          </p>
        </div>
      </div>
    </>
  );
};

export default WelcomeBox;
