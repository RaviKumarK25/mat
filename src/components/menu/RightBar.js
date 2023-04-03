import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RightBar = () => {
  const { user } = useSelector((user) => ({ ...user }));
  return (
    <div class="lg:w-72 w-full">
      <div class="card flex flex-col items-center p-4 uk-visible@s fixed">
        <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transition m-0.5 mr-2 w-24 h-24">
          <img
            src={user.picture}
            class="bg-gray-200 border-4 border-white rounded-full w-full h-full"
          />
        </div>
        <Link to="" class="text-xl font-medium capitalize mt-4 uk-link-reset">
          {user.full_name}
        </Link>

        <div class="flex justify-around w-full items-center text-center uk-link-reset text-gray-800 mt-4 mr-4 ml-4 mb-2">
          <div class="card p-2">
            <span class="text-gray-500 font-semibold">0</span>
            <div class="leading-4 relative text-sm">Profile Views</div>
          </div>

          <div class="card p-2">
            <span class="text-gray-500 font-semibold">0</span>
            <div class="leading-4 relative text-sm">Interest Received</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
