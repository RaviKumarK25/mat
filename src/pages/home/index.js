import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/menu/Header";
import ProfileList from "../../components/menu/ProfileList";
import RightBar from "../../components/menu/RightBar";
import SideBar from "../../components/menu/SideBar";
import WelcomeBox from "../../components/menu/WelcomeBox";
import { profilesReducer } from "../../functions/reducers";

const Home = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [{ loading, error, profiles }, dispatch] = useReducer(profilesReducer, {
    loading: false,
    profiles: [],
    error: "",
  });

  const getAllProfiles = async () => {
    try {
      dispatch({
        type: "PROFILE_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllProfiles`,
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

  useEffect(() => {
    getAllProfiles();
  }, []);

  return (
    <>
      <div id="wrapper">
        <SideBar />

        <div class="main_content">
          <Header />

          <div class="mcontainer">
            <div class="lg:flex lg:space-x-10">
              <div class="lg:w-8/12 lg:px40 space-y-7">
                <WelcomeBox user={user} />

                {profiles.map((profile) => (
                  <ProfileList key={profile._id} profile={profile} />
                ))}
              </div>
              <RightBar user={user} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
