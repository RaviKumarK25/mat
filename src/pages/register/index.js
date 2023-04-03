import React from "react";
import { useState } from "react";
import BasicDetails from "../../components/account/BasicDetails";
import LocationDetails from "../../components/account/LocationDetails";
import MobileOtp from "../../components/account/MobileOtp";
import ProfilePhotos from "../../components/account/ProfilePhotos";
import RegisterForm from "../../components/account/RegisterForm";
import Account from "../account";

const Register = ({ regVisible }) => {
  return (
    <>
      {regVisible === 0 ? (
        <RegisterForm />
      ) : regVisible === 1 ? (
        <BasicDetails />
      ) : regVisible === 2 ? (
        <LocationDetails />
      ) : regVisible === 3 ? (
        <ProfilePhotos />
      ) : regVisible === 4 ? (
        <MobileOtp />
      ) : (
        ""
      )}
    </>
  );
};

export default Register;
