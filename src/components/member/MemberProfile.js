import React from "react";

const MemberProfile = () => {
  return (
    <>
      <div class="container pro-container m-auto">
        {/* <!-- profile-cover--> */}
        <div class="flex lg:flex-row flex-col items-center lg:py-8 lg:space-x-8">
          <div>
            <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full m-0.5 mr-2  w-56 h-56 relative overflow-hidden uk-transition-toggle">
              <img
                src="assets/images/avatars/avatar-7.jpg"
                class="bg-gray-200 border-4 border-white rounded-full w-full h-full dark:border-gray-900"
              />

              <div class="absolute -bottom-3 custom-overly1 flex justify-center pt-4 pb-7 space-x-3 text-2xl text-white uk-transition-slide-bottom-medium w-full">
                <a href="#" class="hover:text-white">
                  <i class="uil-camera"></i>
                </a>
                <a href="#" class="hover:text-white">
                  <i class="uil-crop-alt"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="lg:w/8/12 flex-1 flex flex-col lg:items-start items-center">
            <h2 class="font-semibold lg:text-2xl text-lg mb-2">
              {" "}
              Stella Jonathan
            </h2>
            <p class="lg:text-left mb-2 text-center  dark:text-gray-100">
              {" "}
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum
            </p>

            <div class="flex font-semibold mb-3 space-x-2  dark:text-gray-10">
              <a href="#">Travailing</a> , <a href="#">Sports</a> ,{" "}
              <a href="#">Movies</a>
            </div>

            <div class="capitalize flex font-semibold space-x-3 text-center text-sm my-2">
              <a
                href="#"
                class="bg-gray-300 shadow-sm p-2 px-6 rounded-md dark:bg-gray-700"
              >
                {" "}
                Add friend
              </a>
              <a
                href="#"
                class="bg-pink-500 shadow-sm p-2 pink-500 px-6 rounded-md text-white hover:text-white hover:bg-pink-600"
              >
                {" "}
                Send message
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
                        <i class="uil-share-alt mr-2"></i> Share This Profile
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
        <div class="w-full space-y-6">
          <div class="widget card p-5">
            <h4 class="text-lg font-semibold"> About </h4>
            <ul class="text-gray-600 space-y-3 mt-3">
              <li class="flex items-center space-x-2">
                <ion-icon
                  name="home-sharp"
                  class="rounded-full bg-gray-200 text-xl p-1 mr-3"
                ></ion-icon>
                Live In <strong> Cairo , Eygept </strong>
              </li>
              <li class="flex items-center space-x-2">
                <ion-icon
                  name="globe"
                  class="rounded-full bg-gray-200 text-xl p-1 mr-3"
                ></ion-icon>
                From <strong> Aden , Yemen </strong>
              </li>
              <li class="flex items-center space-x-2">
                <ion-icon
                  name="heart-sharp"
                  class="rounded-full bg-gray-200 text-xl p-1 mr-3"
                ></ion-icon>
                From <strong> Relationship </strong>
              </li>
              <li class="flex items-center space-x-2">
                <ion-icon
                  name="logo-rss"
                  class="rounded-full bg-gray-200 text-xl p-1 mr-3"
                ></ion-icon>
                Flowwed By <strong> 3,240 People </strong>
              </li>
            </ul>
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
            <a href="#" class="button gray mt-3 w-full">
              {" "}
              Edit{" "}
            </a>
          </div>
        </div>
        <div class="flex justify-between lg:border-t border-gray-100 flex-col-reverse lg:flex-row pt-2"></div>

        <div class="my-6 grid lg:grid-cols-4 grid-cols-2 gap-1.5 hover:text-yellow-700 uk-link-reset">
          <div>
            <div
              class="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle"
              tabindex="0"
            >
              <img
                src="assets/images/avatars/avatar-lg-1.jpg"
                class="w-full h-full absolute object-cover inset-0"
              />

              <div class="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                <a href="#story-modal" uk-toggle class="flex items-center">
                  {" "}
                  <ion-icon name="heart" class="mr-1"></ion-icon> 150{" "}
                </a>
                <a href="#story-modal" uk-toggle class="flex items-center">
                  {" "}
                  <ion-icon
                    name="chatbubble-ellipses"
                    class="mr-1"
                  ></ion-icon>{" "}
                  30{" "}
                </a>
                <a href="#story-modal" uk-toggle class="flex items-center">
                  {" "}
                  <ion-icon name="pricetags" class="mr-1"></ion-icon> 12{" "}
                </a>
              </div>
            </div>
          </div>
          <div>
            <div
              class="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle"
              tabindex="0"
            >
              <img
                src="assets/images/post/img1.jpg"
                class="w-full h-full absolute object-cover inset-0"
              />

              <div class="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                <a href="#story-modal" uk-toggle class="flex items-center">
                  {" "}
                  <ion-icon name="heart" class="mr-1"></ion-icon> 150{" "}
                </a>
                <a href="#story-modal" uk-toggle class="flex items-center">
                  {" "}
                  <ion-icon
                    name="chatbubble-ellipses"
                    class="mr-1"
                  ></ion-icon>{" "}
                  30{" "}
                </a>
                <a href="#story-modal" uk-toggle class="flex items-center">
                  {" "}
                  <ion-icon name="pricetags" class="mr-1"></ion-icon> 12{" "}
                </a>
              </div>
            </div>
          </div>

          <div>
            <div
              class="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle"
              tabindex="0"
            >
              <img
                src="assets/images/avatars/avatar-1.jpg"
                class="w-full h-full absolute object-cover inset-0"
              />

              <div class="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                <a href="#story-modal" uk-toggle class="flex items-center">
                  {" "}
                  <ion-icon name="heart" class="mr-1"></ion-icon> 150{" "}
                </a>
                <a href="#story-modal" uk-toggle class="flex items-center">
                  {" "}
                  <ion-icon
                    name="chatbubble-ellipses"
                    class="mr-1"
                  ></ion-icon>{" "}
                  30{" "}
                </a>
                <a href="#story-modal" uk-toggle class="flex items-center">
                  {" "}
                  <ion-icon name="pricetags" class="mr-1"></ion-icon> 12{" "}
                </a>
              </div>
            </div>
          </div>
          <div>
            <div
              class="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle"
              tabindex="0"
            >
              <img
                src="assets/images/avatars/avatar-6.jpg"
                class="w-full h-full absolute object-cover inset-0"
              />

              <div class="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                <a href="#story-modal" uk-toggle class="flex items-center">
                  {" "}
                  <ion-icon name="heart" class="mr-1"></ion-icon> 150{" "}
                </a>
                <a href="#story-modal" uk-toggle class="flex items-center">
                  {" "}
                  <ion-icon
                    name="chatbubble-ellipses"
                    class="mr-1"
                  ></ion-icon>{" "}
                  30{" "}
                </a>
                <a href="#story-modal" uk-toggle class="flex items-center">
                  {" "}
                  <ion-icon name="pricetags" class="mr-1"></ion-icon> 12{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberProfile;
