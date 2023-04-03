import MemberProfile from "../../components/member/MemberProfile";
import SingleProfile from "../../components/member/SingleProfile";
import Header from "../../components/menu/Header";
import ProfileList from "../../components/menu/ProfileList";
import RightBar from "../../components/menu/RightBar";
import SideBar from "../../components/menu/SideBar";
import React, { useEffect, useReducer, useRef, useState } from "react";

import { BsArrowLeft } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";
import { GiWeightScale } from "react-icons/gi";
import { FaElementor } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { TbLanguageKatakana } from "react-icons/tb";
import { IoMdMan } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineSignalWifiStatusbar4Bar } from "react-icons/md";
import { ImMan } from "react-icons/im";
import { ImWoman } from "react-icons/im";
import { MdNaturePeople } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdFastfood } from "react-icons/md";
import { RxHobbyKnife } from "react-icons/rx";
import { BsIntersect } from "react-icons/bs";
import { BsFillFileMusicFill } from "react-icons/bs";
import { MdSportsSoccer } from "react-icons/md";
import { MdSmokeFree } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { profilesReducer } from "../../functions/reducers";

const MemProfile = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const { user } = useSelector((state) => ({ ...state }));

  var userId = _id === undefined ? user._id : _id;

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
      if (data.ok === false) {
        navigate("/profile");
      } else {
        // try {
        //   const images = await axios.post(
        //     `${process.env.REACT_APP_BACKEND_URL}/listImages`,
        //     { path, sort, max },
        //     {
        //       headers: {
        //         Authorization: `Bearer ${user.token}`,
        //       },
        //     }
        //   );
        //   setPhotos(images.data);
        // } catch (error) {

        // }
        dispatch({
          type: "PROFILE_SUCCESS",
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: "PROFILE_ERROR",
        payload: error.response.data.message,
      });
    }
  };

  const profileTop = useRef(null);
  const leftSide = useRef(null);
  const [height, setHeight] = useState();
  const [leftHeight, setLeftHeight] = useState();
  const [scrollHeight, setScrollHeight] = useState();
  // useEffect(() => {
  //   setHeight(profileTop.current.clientHeight + 300);
  //   setLeftHeight(leftSide.current.clientHeight);
  //   window.addEventListener("scroll", getScroll, { passive: true });
  //   return () => {
  //     window.addEventListener("scroll", getScroll, { passive: true });
  //   };
  // }, [loading, scrollHeight]);
  const check = useMediaQuery({
    query: "(min-width:901px)",
  });
  const getScroll = () => {
    setScrollHeight(window.pageYOffset);
  };

  return (
    <>
      <div id="wrapper">
        <SideBar />

        <div class="main_content">
          <Header />
          <div class="mcontainer">
            <div class="lg:flex lg:space-x-10"></div>
            <div class="w-full">
              <Link to="/" class="flex text-xl w-20">
                <BsArrowLeft /> <span class="pl-2 -mt-1">Back</span>
              </Link>
              <div class="flex lg:flex-row flex-col widget card mt-3 items-center p-4 lg:space-x-2">
                <div>
                  <div class="bg-gradient-to-tr from-blue-600 to-pink-600 p-1 rounded-full m-0.5 mr-2  w-56 h-56 relative overflow-hidden uk-transition-toggle">
                    <img
                      src={profiles.picture}
                      class="bg-gray-200 border-4 border-white rounded-full w-full h-full dark:border-gray-900"
                    />
                  </div>
                </div>

                <div class="lg:w/6/6 flex flex-col p-4 lg:items-start items-center">
                  <h2 class="font-semibold lg:text-2xl text-lg mb-2">
                    {profiles.full_name}
                  </h2>
                  <p class="lg:text-left mb-2 text-left dark:text-gray-100">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim placerat facer possim
                    assum Nam liber tempor cum soluta nobis eleifend option
                    congue nihil imperdiet doming id quod mazim placerat facer
                    possim assum Nam liber tempor cum soluta nobis eleifend
                    option congue nihil imperdiet doming id quod mazim placerat
                    facer possim assum Nam
                  </p>

                  <div class="capitalize flex font-semibold space-x-3 text-center text-sm my-2">
                    <a
                      href="#"
                      class="bg-blue-700 shadow-sm p-2 pink-500 px-6 rounded-md text-white hover:text-white hover:bg-blue-500"
                    >
                      Send Interest
                    </a>
                    <div>
                      <a
                        href="#"
                        class="bg-gray-300 flex h-12 h-full items-center justify-center rounded-full text-xl w-9 dark:bg-gray-700"
                      >
                        <i class="icon-feather-chevron-down"></i>
                      </a>

                      <div
                        class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base dark:bg-gray-900"
                        uk-drop="mode: click"
                      >
                        <ul class="space-y-1">
                          <li>
                            <a
                              href="#"
                              class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700"
                            >
                              <i class="uil-user-minus mr-2"></i>Unfriend
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700"
                            >
                              <i class="uil-eye-slash  mr-2"></i>Hide Your Story
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700"
                            >
                              <i class="uil-share-alt mr-2"></i> Share This
                              Profile
                            </a>
                          </li>
                          <li>
                            <hr class="-mx-2 my-2  dark:border-gray-700" />
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600"
                            >
                              <i class="uil-stop-circle mr-2"></i> Block
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-20"></div>
              </div>
              <div class="lg:mt-4 mt-2" id="timeline-tab">
                <div class="md:flex md:space-x-6">
                  <div class="space-y-5 flex-shrink-0 md:w-7/12 mb-6">
                    <div class="widget card p-5 mb-6">
                      <h4 class="text-lg font-semibold"> Photos </h4>

                      <div class="gap-3 grid grid-cols-3 mt-4">
                        <img
                          src="assets/images/avatars/avatar-lg-2.jpg"
                          alt=""
                          class="object-cover rounded-lg col-span-full"
                        />
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          class="rounded-lg"
                        />
                        <img
                          src="assets/images/avatars/avatar-4.jpg"
                          alt=""
                          class="rounded-lg"
                        />
                        <img
                          src="assets/images/avatars/avatar-5.jpg"
                          alt=""
                          class="rounded-lg"
                        />
                      </div>
                    </div>

                    <div class="widget card pt-4 pl-5 pr-5 pb-4">
                      <h4 class="text-lg font-semibold"> About </h4>
                      <ul class="text-gray-600 space-y-3 mt-4">
                        <li class="flex items-center space-x-2">
                          <FaElementor class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Age <strong> 25 </strong>
                        </li>

                        <li class="flex items-center space-x-2">
                          <GiBodyHeight class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Height <strong> 5'11" </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <GiWeightScale class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Weight <strong> 75 KG </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <BsSuitHeartFill class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Marital Status <strong> Not Married </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <TbLanguageKatakana class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Mother Tongue <strong> Tamil </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <IoMdMan class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Physical Status <strong> Normal </strong>
                        </li>

                        <li class="flex items-center space-x-2">
                          <TbLanguageKatakana class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Languages
                          <strong> Tamil, Kannada, English, Hindi </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdOutlineLocationOn class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Living In{" "}
                          <strong> Chennai , Tamil Nadu, India </strong>
                        </li>
                      </ul>
                      <hr />
                      <h5 class="text-lg font-semibold mt-4">Family Details</h5>
                      <ul class="text-gray-600 space-y-3 mt-4">
                        <li class="flex items-center space-x-2">
                          <MdPeopleAlt class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Family Type <strong> BE - ECE </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdOutlineSignalWifiStatusbar4Bar class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Family Status <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdWorkOutline class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Father's Occupation <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdWorkOutline class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Mother's Occupation <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdOutlineLocationOn class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Family Origin <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <ImMan class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          No. of Brother <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <ImMan class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Brother Married<strong> Private </strong>
                        </li>

                        <li class="flex items-center space-x-2">
                          <ImWoman class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          No. of Sister <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <ImWoman class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Sister Married<strong> Private </strong>
                        </li>
                      </ul>
                      <hr />
                      <h5 class="text-lg font-semibold mt-4">
                        About my Family
                      </h5>
                      Family Type
                    </div>
                  </div>

                  <div class="w-full space-y-6">
                    <div class="widget card pt-4 pl-5 pr-5 pb-1">
                      <h5 class="text-lg font-semibold">
                        Professional Information
                      </h5>
                      <ul class="text-gray-600 space-y-3 mt-4">
                        <li class="flex items-center space-x-2">
                          <TbSchool class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Education <strong> BE - ECE </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <FaUserTie class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Employed in <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdWorkOutline class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Occupation Detail <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <GiReceiveMoney class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Annual Income <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdOutlineLocationOn class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Working In{" "}
                          <strong> Chennai , Tamil Nadu, India </strong>
                        </li>
                      </ul>
                      <hr />
                      <h5 class="text-lg font-semibold mt-4">
                        Religious Information
                      </h5>
                      <ul class="text-gray-600 space-y-3 mt-4">
                        <li class="flex items-center space-x-2">
                          <MdPeopleAlt class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Religion <strong> BE - ECE </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdPeopleAlt class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Caste / Sub caste <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <IoIosPeople class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Star <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <IoIosPeople class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Raasi <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <IoIosPeople class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Gothram <strong> Chennai , Tamil Nadu, India </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <IoIosPeople class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Dosham <strong> Chennai , Tamil Nadu, India </strong>
                        </li>
                      </ul>
                      <hr />
                      <h5 class="text-lg font-semibold mt-4">
                        Hobbies and Interests
                      </h5>
                      <ul class="text-gray-600 space-y-3 mt-4">
                        <li class="flex items-center space-x-2">
                          <MdFastfood class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Favourite Food <strong> BE - ECE </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <RxHobbyKnife class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Hobbies <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <BsIntersect class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Interests <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <BsFillFileMusicFill class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Music <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdSportsSoccer class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Sports <strong> Chennai , Tamil Nadu, India </strong>
                        </li>
                      </ul>
                      <hr />
                      <h5 class="text-lg font-semibold mt-4">Habits</h5>
                      <ul class="text-gray-600 space-y-3 mt-4">
                        <li class="flex items-center space-x-2">
                          <MdFastfood class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Eating Habits <strong> BE - ECE </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdSmokeFree class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Smoking Habits <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <BiDrink class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Drinking Habits <strong> Private </strong>
                        </li>
                      </ul>

                      <hr />
                      <h5 class="text-lg font-semibold mt-4">
                        Partner Preferences
                      </h5>
                      <ul class="text-gray-600 space-y-3 mt-4">
                        <li class="flex items-center space-x-2">
                          <FaElementor class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Age <strong> BE - ECE </strong>
                        </li>

                        <li class="flex items-center space-x-2">
                          <GiBodyHeight class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Height <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <BsSuitHeartFill class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Marital Status <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <IoMdMan class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Physical Status <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <TbLanguageKatakana class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Mother Tongue <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <IoIosPeople class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Caste <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <IoIosPeople class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Star<strong> Private </strong>
                        </li>

                        <li class="flex items-center space-x-2">
                          <IoIosPeople class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Dosham <strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <TbSchool class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Education<strong> Private </strong>
                        </li>

                        <li class="flex items-center space-x-2">
                          <FaUserTie class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Employed in<strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdWorkOutline class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Occupation<strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <GiReceiveMoney class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Annual Income<strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdOutlineLocationOn class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Country<strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdOutlineLocationOn class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          State<strong> Private </strong>
                        </li>
                        <li class="flex items-center space-x-2">
                          <MdOutlineLocationOn class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          City<strong> Private </strong>
                        </li>

                        <li class="flex items-center space-x-2">
                          <MdFastfood class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Eating<strong> Private </strong>
                        </li>

                        <li class="flex items-center space-x-2">
                          <MdSmokeFree class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Smoking<strong> Private </strong>
                        </li>

                        <li class="flex items-center space-x-2">
                          <BiDrink class="rounded-full bg-gray-200 text-2xl p-1 mr-3" />
                          Drinking<strong> Private </strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemProfile;
