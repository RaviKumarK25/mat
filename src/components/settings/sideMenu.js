import React, { useState } from "react";

const SideMenu = ({ menuActive }) => {
  return (
    <>
      <div class="lg:w-1/3">
        <nav
          class="responsive-nav setting-nav setting-menu mb-2"
          uk-sticky="top:30 ; offset:80 ; media:@m ;bottom:true; animation: uk-animation-slide-top"
        >
          <h4 class="mb-0 p-3 uk-visible@m hidden"> Settings</h4>
          <ul>
            <li class={menuActive === 1 && "uk-active"}>
              <a href="/settings">
                <i class="uil-user"></i> Profile
              </a>
            </li>
            <li class={menuActive === 2 && "uk-active"}>
              <a href="/update-photos">
                <i class="icon-material-outline-photo-library"></i> Photos
              </a>
            </li>
            <li class={menuActive === 3 && "uk-active"}>
              <a href="/update-religious-details">
                <i class="icon-material-outline-folder-shared"></i> Religion
                Details
              </a>
            </li>
            <li class={menuActive === 4 && "uk-active"}>
              <a href="/update-family-details">
                <i class="icon-material-outline-group"></i> Family Details
              </a>
            </li>

            <li class={menuActive === 5 && "uk-active"}>
              <a href="/update-partner-preferences">
                <i class="icon-material-outline-person-pin"></i> Partner
                Preferences
              </a>
            </li>

            <li class={menuActive === 6 && "uk-active"}>
              <a href="#">
                <i class="uil-trash-alt"></i> Delete account
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
