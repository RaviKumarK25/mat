import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicDetails from "../components/account/BasicDetails";
import LocationDetails from "../components/account/LocationDetails";
import MobileOtp from "../components/account/MobileOtp";
import ProfilePhotos from "../components/account/ProfilePhotos";
import Home from "../pages/home";

const VerifyRoutes = ({ profiles }) => {
  const navigate = useNavigate();

  useEffect(() => {
    {
      profiles.registerLevel === 1 ? (
        <BasicDetails />
      ) : profiles.registerLevel === 2 ? (
        <LocationDetails />
      ) : profiles.registerLevel === 3 ? (
        <ProfilePhotos />
      ) : profiles.registerLevel === 4 ? (
        <MobileOtp />
      ) : (
        <Home />
      );
    }
  }, []);
  return <></>;
};

export default VerifyRoutes;
