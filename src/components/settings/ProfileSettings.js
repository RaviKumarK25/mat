import React, { useEffect, useState } from "react";
import SideMenu from "./sideMenu";
import UpdateFamilyDetails from "./updateFamilyDetails";
import UpdateProfile from "./updateProfile";

const ProfileSettings = () => {
  const [menuActive, setMenuActive] = useState(1);

  return (
    <>
      <div class="bg-white lg:divide-x lg:flex lg:shadow-md rounded-md shadow lg:rounded-xl overflow-hidden lg:m-0 -mx-4">
        <SideMenu menuActive={menuActive} />
        <UpdateProfile />
      </div>
    </>
  );
};

export default ProfileSettings;
