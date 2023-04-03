import React, { useEffect, useRef, useState } from "react";
import Account from "../../pages/account";
import Title from "../Title";

const OTP_LENGTH = 6;

const isValidOTP = (otp) => {
  let valid = false;

  for (let val of otp) {
    valid = !isNaN(parseInt(val));
    if (!valid) break;
  }

  return valid;
};

const MobileOtp = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);

  const inputRef = useRef();

  const focusNextInputField = (index) => {
    setActiveOtpIndex(index + 1);
  };

  const focusPrevInputField = (index) => {
    let nextIndex;
    const diff = index - 1;
    nextIndex = diff !== 0 ? diff : 0;

    setActiveOtpIndex(nextIndex);
  };

  const handleOtpChange = ({ target }, index) => {
    const { value } = target;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1, value.length);

    if (!value) focusPrevInputField(index);
    else focusNextInputField(index);

    setOtp([...newOtp]);
  };

  const handleKeyDown = ({ key }, index) => {
    if (key === "Backspace") {
      focusPrevInputField(index);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  return (
    <>
      <div className="lg:flex max-w-5xl min-h-screen mx-auto p-6 py-10">
        <div className="flex flex-col items-center lg: lg:flex-row lg:space-x-10">
          <Account />
          <div className="lg:mt-0 lg:w-96 md:w-1/2 sm:w-2/3 mt-10 w-full">
            <form className="p-4 relative bg-white items-center text-center text-gray-900 shadow-lg rounded-lg">
              <div>
                <Title>Please enter the OTP to verify your account</Title>
                <p className="text-center dark:text-dark-subtle text-sm">
                  OTP has been sent to your mobile no.
                </p>
              </div>
              <div className="flex justify-center with-border items-center space-x-2 mt-2 mb-4">
                {otp.map((_, index) => {
                  return (
                    <input
                      ref={activeOtpIndex === index ? inputRef : null}
                      key={index}
                      type="number"
                      value={otp[index] || ""}
                      onChange={(e) => handleOtpChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-12 with-border border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary rounded bg-transparent outline-none text-center dark:text-white text-primary font-semibold text-xl spin-button-none"
                    />
                  );
                })}
              </div>

              <button
                type="button"
                className="bg-blue-600 font-semibold rounded-md text-center text-white w-full myBtnStyl"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileOtp;
