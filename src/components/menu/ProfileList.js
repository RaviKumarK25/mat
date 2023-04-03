import React from "react";
import WelcomeBox from "./WelcomeBox";
import { GoLocation } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { TbLanguageKatakana } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileList = ({ profile, user }) => {
  return (
    <>
      {/* profile list start */}
      <section class="font-sans leading-normal">
        <div class="border shadow-xl bg-white rounded overflow-hidden sm:flex p-3">
          <Link to={`/profile/${profile._id}`}>
            <div class="sm:h-48 sm:w-48 md:w-48 md:h-48 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
              <img src={profile.picture} alt="" />
            </div>
          </Link>
          <div class="px-6">
            <Link to={`/profile/${profile._id}`}>
              <h3 class="mb-0 font-black text-gray-500 line-clamp-1">
                {profile.full_name}
              </h3>
              <span className="text-gray-400 flex">
                {profile.bYear} <span className="pl-1">Years,</span>
                &nbsp;5'11"
                <span className="pl-1">Height</span>
                <span className="pl-2 pt-1">
                  <AiOutlineHeart />
                </span>
                <span className="pl-1">{profile.marital}</span>
              </span>
              <span class="line-clamp-1 text-gray-400">
                Hi this is Ramesh, born and raised in bangalore. born and raised
                in bangalore. born and raised in bangalore. born and raised in
                bangalore. born and raised in bangalore.
              </span>

              <p className="text-base flex pt-2 text-gray-400 -ml-0.5">
                <TbLanguageKatakana />
                &nbsp;
                <span className="pr-2 pl-0 -mt-0.5 text-sm">Malayalam</span>
                <BsPeople />
                &nbsp;
                <span className="pl-1 pr-2 -mt-0.5 text-sm">
                  Mudaliyar Mudaliyar
                </span>
              </p>

              <span class="text-sm flex text-gray-400 -ml-0.5">
                <MdOutlineSchool />
                &nbsp;
                <span className="pl-1 pr-2 -mt-0.5 text-sm ">
                  BE - ECE Professional
                </span>
                <MdWorkOutline />
                &nbsp;
                <span className="pl-1 -mt-0.5 text-sm line-clamp-1 w-48 h-5">
                  Software Professional Softwaresss
                </span>
              </span>
              <span class="text-sm flex text-gray-400 pt-1">
                <GoLocation />
                &nbsp;&nbsp;
                <span className="text-sm -mt-1 line-clamp-1 text-gray-400">
                  Coimbatore, Tamilnadusss, India, Tamilnadu, IndiaCoimbatore,
                  Tamilnadu, India
                </span>
              </span>
            </Link>
            <span class="flex content-center pt-2">
              <span class="pr-4">Wanna connect to her?</span>
              <button class="bg-green-600 hover:bg-green-800 text-sm text-white font-semibold hover:text-white py-0 px-10 rounded-sm h-7">
                Yes
              </button>
              &nbsp;&nbsp;
              <button class="bg-gray-200 float-right text-sm text-blue font-semibold py-0 px-6 rounded-sm h-7">
                No
              </button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileList;
