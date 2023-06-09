import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div class="header_wrap">
          <div class="header_inner mcontainer">
            <div class="left_side">
              <div id="logo">
                <a href="feed.html">
                  <img src="assets/images/logo.png" alt="" />
                  <img
                    src="assets/images/logo.png"
                    class="logo_mobile"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div class="right_side">
              <div class="header_widgets">
                <a href="#" class="is_icon" uk-tooltip="title: Notifications">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                  </svg>
                  <span>3</span>
                </a>
                <div uk-drop="mode: click" class="header_dropdown">
                  <div class="dropdown_scrollbar" data-simplebar>
                    <div class="drop_headline">
                      <h4>Notifications</h4>
                      <div class="btn_action">
                        <a
                          href="#"
                          data-tippy-placement="left"
                          title="Notifications"
                        >
                          <ion-icon name="settings-outline"></ion-icon>
                        </a>
                        <a
                          href="#"
                          data-tippy-placement="left"
                          title="Mark as read all"
                        >
                          <ion-icon name="checkbox-outline"></ion-icon>
                        </a>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-1.jpg"
                              alt=""
                            />
                          </div>
                          <span class="drop_icon bg-gradient-primary">
                            <i class="icon-feather-thumbs-up"></i>
                          </span>
                          <div class="drop_text">
                            <p>
                              <strong>Adrian Mohani</strong> Like Your Comment
                              On Video
                              <span class="text-link">
                                Learn Prototype Faster
                              </span>
                            </p>
                            <time> 2 hours ago </time>
                          </div>
                        </a>
                      </li>
                      <li class="not-read">
                        <a href="#">
                          <div class="drop_avatar status-online">
                            <img
                              src="assets/images/avatars/avatar-2.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <p>
                              <strong>Stella Johnson</strong> Replay Your
                              Comments in
                              <span class="text-link">Adobe XD Tutorial</span>
                            </p>
                            <time> 9 hours ago </time>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-3.jpg"
                              alt=""
                            />
                          </div>
                          <span class="drop_icon bg-gradient-primary">
                            <i class="icon-feather-thumbs-up"></i>
                          </span>
                          <div class="drop_text">
                            <p>
                              <strong>Alex Dolgove</strong> Added New Review In
                              Video
                              <span class="text-link">
                                Full Stack PHP Developer
                              </span>
                            </p>
                            <time> 12 hours ago </time>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-1.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <p>
                              <strong>Jonathan Madano</strong> Shared Your
                              Discussion On Video
                              <span class="text-link">Css Flex Box </span>
                            </p>
                            <time> Yesterday </time>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-1.jpg"
                              alt=""
                            />
                          </div>
                          <span class="drop_icon bg-gradient-primary">
                            <i class="icon-feather-thumbs-up"></i>
                          </span>
                          <div class="drop_text">
                            <p>
                              <strong>Adrian Mohani</strong> Like Your Comment
                              On Course
                              <span class="text-link">
                                Javascript Introduction
                              </span>
                            </p>
                            <time> 2 hours ago </time>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar status-online">
                            <img
                              src="assets/images/avatars/avatar-2.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <p>
                              <strong>Stella Johnson</strong> Replay Your
                              Comments in
                              <span class="text-link">
                                Programming for Games
                              </span>
                            </p>
                            <time> 9 hours ago </time>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-2.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <p>
                              <strong>Stella Johnson</strong> Replay Your
                              Comments in
                              <span class="text-link">
                                Programming for Games
                              </span>
                            </p>
                            <time> 9 hours ago </time>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-3.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <p>
                              <strong>Alex Dolgove</strong> Added New Review In
                              Course
                              <span class="text-link">
                                Full Stack PHP Developer
                              </span>
                            </p>
                            <time> 12 hours ago </time>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-1.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <p>
                              <strong>Jonathan Madano</strong> Shared Your
                              Discussion On Course
                              <span class="text-link">Css Flex Box </span>
                            </p>
                            <time> Yesterday </time>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-1.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <p>
                              <strong>Adrian Mohani</strong> Like Your Comment
                              On Course
                              <span class="text-link">
                                Javascript Introduction
                              </span>
                            </p>
                            <time> 2 hours ago </time>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-2.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <p>
                              <strong>Stella Johnson</strong> Replay Your
                              Comments in
                              <span class="text-link">
                                Programming for Games
                              </span>
                            </p>
                            <time> 9 hours ago </time>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <a href="#" class="is_icon" uk-tooltip="title: Message">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>4</span>
                </a>
                <div uk-drop="mode: click" class="header_dropdown is_message">
                  <div class="dropdown_scrollbar" data-simplebar>
                    <div class="drop_headline">
                      <h4>Messages</h4>
                      <div class="btn_action">
                        <a
                          href="#"
                          data-tippy-placement="left"
                          title="Notifications"
                        >
                          <ion-icon
                            name="settings-outline"
                            uk-tooltip="title: Message settings ; pos: left"
                          ></ion-icon>
                        </a>
                        <a
                          href="#"
                          data-tippy-placement="left"
                          title="Mark as read all"
                        >
                          <ion-icon name="checkbox-outline"></ion-icon>
                        </a>
                      </div>
                    </div>
                    <input
                      type="text"
                      class="uk-input"
                      placeholder="Search in Messages"
                    />
                    <ul>
                      <li class="un-read">
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-7.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <strong> Stella Johnson </strong>
                            <time>12:43 PM</time>
                            <p>Alex will explain you how ...</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-1.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <strong> Adrian Mohani </strong>
                            <time> 6:43 PM</time>
                            <p>Thanks for The Answer sit amet...</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-6.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <strong>Alia Dolgove </strong> <time> Wed </time>
                            <p>Alia just joined Messenger!</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-5.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <strong> Jonathan Madano </strong>
                            <time> Sun</time>
                            <p>Replay Your Comments insit amet consectetur</p>
                          </div>
                        </a>
                      </li>
                      <li class="un-read">
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-2.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <strong> Stella Johnson </strong>
                            <time>12:43 PM</time>
                            <p>Alex will explain you how ...</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-1.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <strong> Adrian Mohani </strong>
                            <time> 6:43 PM</time>
                            <p>Thanks for The Answer sit amet...</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-3.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <strong>Alia Dolgove </strong> <time> Wed </time>
                            <p>Alia just joined Messenger!</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="drop_avatar">
                            <img
                              src="assets/images/avatars/avatar-4.jpg"
                              alt=""
                            />
                          </div>
                          <div class="drop_text">
                            <strong> Jonathan Madano </strong>
                            <time> Sun</time>
                            <p>Replay Your Comments insit amet consectetur</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="#" class="see-all">
                    {" "}
                    See all in Messages
                  </a>
                </div>

                <a href="#">
                  <img
                    src="assets/images/avatars/avatar-2.jpg"
                    class="is_avatar"
                    alt=""
                  />
                </a>
                <div
                  uk-drop="mode: click;offset:5"
                  class="header_dropdown profile_dropdown"
                >
                  <a href="timeline.html" class="user">
                    <div class="user_avatar">
                      <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                    </div>
                    <div class="user_name">
                      <div>Stella Johnson</div>
                      <span> @johnson</span>
                    </div>
                  </a>

                  <a href="page-setting.html">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    My Account
                  </a>

                  <a href="#" id="night-mode" class="btn-night-mode">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    Night mode
                    <span class="btn-night-mode-switch">
                      <span class="uk-switch-button"></span>
                    </span>
                  </a>
                  <hr />
                  <a href="form-login.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
