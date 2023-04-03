import React, { useState } from "react";
import axios from "axios";
import Header from "../menu/Header";
import SideBar from "../menu/SideBar";
import SideMenu from "./sideMenu";
import Select from "react-select";
import StarSelector from "../selector/StarSelector";
import {
  doshamOptions,
  raasiOptions,
  raasiPairOptions,
  starOptions,
} from "../../staticSmallDat";
import RaasiSelector from "../selector/RaasiSelector";
import DoshamSelector from "../selector/DoshamSelector";
import FavFood from "../selector/hobbies/FavFood";
import {
  favFoodOptions,
  hobbiesOptions,
  musicOptions,
  sportsOptions,
} from "../../hobbiesDat";
import HobbyInterest from "../selector/hobbies/HobbyInterest";
import MusicHobby from "../selector/hobbies/MusicHobby";
import SportsHobby from "../selector/hobbies/SportsHobby";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import RegisterInput from "../inputs/registerInput";

const UpdateReligiousDetails = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [basicReligonDetails, setBasicReligonDetails] = useState();

  const [menuActive, setMenuActive] = useState(3);
  const [selectStar, setSelectStar] = useState("");
  const [selectRaasi, setSelectRaasi] = useState("");
  const [selectDosham, setSelectDosham] = useState("");

  const [favFood, setFavFood] = useState("");
  const [hobbies, setHobbies] = useState("");

  const [music, setMusic] = useState("");
  const [sports, setSports] = useState("");

  const raasiOptions = raasiPairOptions.filter(
    (i) => i.starPair === selectStar?.value
  );

  const initialBasicRlgnDetails = {
    updaStar: basicReligonDetails?.updaStar ? basicReligonDetails.updaStar : "",
    updaRasi: basicReligonDetails?.updaRasi ? basicReligonDetails.updaRasi : "",
    updaDosham: basicReligonDetails?.updaDosham
      ? basicReligonDetails.updaDosham
      : "",
    updaGothram: basicReligonDetails?.updaGothram
      ? basicReligonDetails.updaGothram
      : "",
    updaFavFood: basicReligonDetails?.updaFavFood
      ? basicReligonDetails.updaFavFood
      : "",
    updaHobbyInterest: basicReligonDetails?.updaHobbyInterest
      ? basicReligonDetails.updaHobbyInterest
      : "",
    updaMusicHobby: basicReligonDetails?.updaMusicHobby
      ? basicReligonDetails.updaMusicHobby
      : "",
    updaSportsHobby: basicReligonDetails?.updaSportsHobby
      ? basicReligonDetails.updaSportsHobby
      : "",
  };

  const [basicRlgnInfDetails, setBasicRlgnInfDetails] = useState(
    initialBasicRlgnDetails
  );

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const basicFullReligionDetailsSubmit = async () => {
    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/updateReliDetails`,
        {
          basicRlgnInfDetails,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setError("");

      const { message, ...rest } = data;
      setBasicReligonDetails(data);

      setSuccess("Successfully Updated!");
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };

  const handleRelgnStar = (e, action) => {
    setSelectStar(e);
    setSelectRaasi("Select Raasi");
    setBasicRlgnInfDetails({ ...basicRlgnInfDetails, [action.name]: e.value });
  };

  const handleRelgnRaasi = (e, action) => {
    setSelectRaasi(e);
    setBasicRlgnInfDetails({ ...basicRlgnInfDetails, [action.name]: e.value });
  };

  const handleRelgnDosham = (e, action) => {
    setSelectDosham(e);
    setBasicRlgnInfDetails({ ...basicRlgnInfDetails, [action.name]: e.value });
  };

  const handleFavUrFood = (e, action) => {
    const favFood = Array.isArray(e) ? e.map((x) => x.value) : [];
    setFavFood(favFood);
    setBasicRlgnInfDetails({ ...basicRlgnInfDetails, [action.name]: favFood });
  };

  const handleFavHobbies = (e, action) => {
    const hobbies = Array.isArray(e) ? e.map((x) => x.value) : [];
    setHobbies(hobbies);
    setBasicRlgnInfDetails({ ...basicRlgnInfDetails, [action.name]: hobbies });
  };

  const handleFavMusic = (e, action) => {
    const music = Array.isArray(e) ? e.map((x) => x.value) : [];
    setMusic(music);
    setBasicRlgnInfDetails({ ...basicRlgnInfDetails, [action.name]: music });
  };

  const handleFavSports = (e, action) => {
    const sports = Array.isArray(e) ? e.map((x) => x.value) : [];
    setSports(sports);
    setBasicRlgnInfDetails({ ...basicRlgnInfDetails, [action.name]: sports });
  };

  const handleReligiousChange = (e) => {
    const { name, value } = e.target;
    setBasicRlgnInfDetails({ ...basicRlgnInfDetails, [name]: value });
  };
  console.log(basicRlgnInfDetails, "basicRlgnInfDetails");
  return (
    <>
      <div id="wrapper">
        <SideBar />
        <div class="main_content">
          <Header />
          <div class="mcontainer">
            <div class="bg-white lg:divide-x lg:flex lg:shadow-md rounded-md shadow lg:rounded-xl overflow-hidden lg:m-0 -mx-4">
              <SideMenu menuActive={menuActive} />
              <div class="lg:py-0 lg:px-5 pl-4 pr-4 mt-4 w-3/4">
                <Formik
                  enableReinitialize
                  initialValues={{
                    basicRlgnInfDetails,
                  }}
                  onSubmit={() => {
                    basicFullReligionDetailsSubmit();
                  }}
                >
                  {(formik) => (
                    <Form className="p-6 space-y-3 relative bg-white shadow-lg rounded-lg">
                      <div class="grid lg:grid-cols-2 gap-2 w-full">
                        <StarSelector
                          value={selectStar}
                          onChange={handleRelgnStar}
                          options={starOptions}
                          placeholder="Select Your Star"
                          name="updaStar"
                        />

                        <RaasiSelector
                          value={selectRaasi}
                          onChange={handleRelgnRaasi}
                          options={raasiOptions}
                          placeholder="Select Your Raasi"
                          name="updaRasi"
                        />
                      </div>
                      <div class="grid lg:grid-cols-2 gap-2 mt-4">
                        <DoshamSelector
                          value={selectDosham}
                          onChange={handleRelgnDosham}
                          options={doshamOptions}
                          placeholder="Dosham"
                          name="updaDosham"
                        />
                        <input
                          type="text"
                          placeholder="Enter Your Gothra(m)"
                          name="updaGothram"
                          onChange={handleReligiousChange}
                          className="with-border myInputStylNa"
                        />
                      </div>

                      <p class="mt-4">Hobbies and Interests</p>

                      <div class="grid lg:grid-cols-2 gap-2 mt-4">
                        <FavFood
                          getOptionValue={(option) => option.value}
                          onChange={handleFavUrFood}
                          options={favFoodOptions}
                          placeholder="Favourite Food"
                          isMulti
                          closeMenuOnSelect={false}
                          isClearable={false}
                          maxMenuHeight={130}
                          name="updaFavFood"
                        />

                        <HobbyInterest
                          getOptionValue={(option) => option.value}
                          onChange={handleFavHobbies}
                          options={hobbiesOptions}
                          placeholder="Hobbies & Interests"
                          isMulti
                          closeMenuOnSelect={false}
                          isClearable={false}
                          maxMenuHeight={130}
                          name="updaHobbyInterest"
                        />
                      </div>
                      <div class="grid lg:grid-cols-2 gap-2 mt-4">
                        <MusicHobby
                          getOptionValue={(option) => option.value}
                          onChange={handleFavMusic}
                          options={musicOptions}
                          placeholder="Music"
                          menuPlacement="top"
                          isMulti
                          closeMenuOnSelect={false}
                          isClearable={false}
                          maxMenuHeight={240}
                          name="updaMusicHobby"
                        />
                        <SportsHobby
                          getOptionValue={(option) => option.value}
                          onChange={handleFavSports}
                          options={sportsOptions}
                          placeholder="Sports"
                          menuPlacement="top"
                          isMulti
                          closeMenuOnSelect={false}
                          isClearable={false}
                          maxMenuHeight={240}
                          name="updaSportsHobby"
                        />
                      </div>

                      <div class="bg-gray-10 p-6 pt-0 flex justify-end space-x-3 mt-4">
                        <button class="button bg-blue-700">Update</button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateReligiousDetails;
