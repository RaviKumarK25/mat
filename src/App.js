import {
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
} from "react-router-dom";

import Forget from "./pages/forget";

import Home from "./pages/home";
import Activate from "./pages/home/activate";
import Login from "./pages/login";

import MemberProfile from "./pages/profile";
import Register from "./pages/register";
import Settings from "./pages/settings";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";

import { useState } from "react";
import BasicDetails from "./components/account/BasicDetails";
import LocationDetails from "./components/account/LocationDetails";
import ProfilePhotos from "./components/account/ProfilePhotos";
import MobileOtp from "./components/account/MobileOtp";

import VerifyRoutes from "./routes/verifyRoutes";
import { useSelector } from "react-redux";
import { useReducer } from "react";
import { profilesReducer } from "./functions/reducers";
import { useEffect } from "react";
import axios from "axios";
import UpdateProfile from "./components/settings/updateProfile";
import UpdatePhotos from "./components/settings/updatePhotos";
import UpdateReligiousDetails from "./components/settings/updateReligiousDetails";
import UpdatePartnerPreference from "./components/settings/updatePartnerPreference";
import UpdateFamilyDetails from "./components/settings/updateFamilyDetails";

function App() {
  const [regVisible, setRegVisible] = useState(0);

  const navigate = useNavigate();
  const { _id } = useParams();
  const { user } = useSelector((state) => ({ ...state }));

  var userId = _id === undefined ? user?.id : _id;

  const [{ loading, error, profiles }, dispatch] = useReducer(profilesReducer, {
    loading: false,
    profiles: {},
    error: "",
  });

  useEffect(() => {
    getProfile();
  }, [userId]);

  const getProfile = async () => {
    try {
      dispatch({
        type: "PROFILE_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllMember/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({
        type: "PROFILE_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "PROFILE_ERROR",
        payload: error.response.data.message,
      });
    }
  };

  return (
    <Routes>
      <Route element={<LoggedInRoutes />}>
        <Route
          path="/"
          element={
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
            )
          }
          exact
        />

        <Route path="/activate/:token" element={<Activate />} exact />
        <Route path="/profile/:_id" element={<MemberProfile />} exact />

        <Route
          path="/basic-details"
          element={profiles.registerLevel === 1 ? <BasicDetails /> : <Login />}
          exact
        />
        <Route
          path="/location-details"
          element={
            profiles.registerLevel === 2 ? <LocationDetails /> : <Login />
          }
          exact
        />

        <Route
          path="/add-profile-photo"
          element={profiles.registerLevel === 3 ? <ProfilePhotos /> : <Login />}
          exact
        />

        <Route
          path="/otp-verification"
          element={profiles.registerLevel === 4 ? <MobileOtp /> : <Login />}
          exact
        />

        <Route path="/settings" element={<Settings />} exact />

        <Route path="/update-profile" element={<UpdateProfile />} exact />
        <Route path="/update-photos" element={<UpdatePhotos />} exact />
        <Route
          path="/update-religious-details"
          element={<UpdateReligiousDetails />}
          exact
        />
        <Route
          path="/update-family-details"
          element={<UpdateFamilyDetails />}
          exact
        />
        <Route
          path="/update-partner-preferences"
          element={<UpdatePartnerPreference />}
          exact
        />
      </Route>
      <Route element={<NotLoggedInRoutes />}>
        <Route
          path="/register"
          element={<Register regVisible={regVisible} />}
          exact
        />

        <Route path="/login" element={<Login />} exact />
        <Route path="/forgot-password" element={<Forget />} exact />
      </Route>
    </Routes>
  );
}

export default App;
