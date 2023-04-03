import React from "react";
import SingleProfile from "../../components/member/SingleProfile";
import Header from "../../components/menu/Header";
import SideBar from "../../components/menu/SideBar";
import ProfileSettings from "../../components/settings/ProfileSettings";

const Settings = () => {
  return (
    <>
      {" "}
      <div id="wrapper">
        <SideBar />

        <div class="main_content">
          <Header />
          <div class="mcontainer">
            <div class="">
              <ProfileSettings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
