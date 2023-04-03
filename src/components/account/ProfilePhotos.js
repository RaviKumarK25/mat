import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { uploadImages } from "../../functions/uploadImages";
import Account from "../../pages/account";
import PulseLoader from "react-spinners/PulseLoader";
import { FiUpload } from "react-icons/fi";

import { updateprofilePicture } from "../../functions/user";
import { useNavigate } from "react-router-dom";

const ProfilePhotos = () => {
  const refInput = useRef(null);
  const [error, setError] = useState("");
  const { user } = useSelector((state) => ({ ...state }));
  const [coverPicture, setCoverPicture] = useState("");
  // const [profilePictureName, setProfilePictureName] = useState("");
  // const cRef = useRef(null);
  // const [selectedImage, setSelectedImage] = useState();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const handleImage = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedImage(file);
  //   setFileToBase(file);
  // };

  // const setFileToBase = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setCoverPicture(reader.result);
  //   };
  // };

  const handleImage = (e) => {
    let file = e.target.files[0];
    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/webp" &&
      file.type !== "image/gif"
    ) {
      setError(`${file.name} format is not supported.`);
      return;
    } else if (file.size > 1024 * 1024 * 5) {
      setError(`${file.name} is too large max 5mb allowed.`);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setCoverPicture(event.target.result);
    };
  };

  const updateProfielPicture = async () => {
    try {
      let img = coverPicture;
      let blob = await fetch(img).then((b) => b.blob());
      const path = `${user.id}/profile_pictures`;
      let formData = new FormData();
      formData.append("file", blob);
      formData.append("path", path);
      const res = await uploadImages(formData, path, user.token);
      const updated_picture = await updateprofilePicture(
        res[0].url,
        user.token
      );
  
      if (updated_picture === "ok") {
        navigate("/otp-verification");
      } else {
        setError(updated_picture);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <>
      <div className="lg:flex max-w-5xl min-h-screen mx-auto p-6 py-10">
        <div className="flex flex-col items-center lg: lg:flex-row lg:space-x-10">
          <Account />
          <div className="lg:mt-0 lg:w-96 md:w-1/2 sm:w-2/3 mt-10 w-full">
            <form className="p-6 space-y-4 relative bg-white shadow-lg rounded-lg">
              <div
                x-data="{photoName: null, photoPreview: null}"
                class="col-span-6 ml-2 sm:col-span-4 md:mr-3"
              >
                <input
                  type="file"
                  ref={refInput}
                  hidden
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  name="image"
                  onChange={handleImage}
                />
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 text-center"
                  for="photo"
                >
                  Profile Photo <span class="text-red-600"> </span>
                </label>

                <div class="text-center">
                  <div class="mt-2 justify-center">
                    <img src={coverPicture} class="justify-center inline" />
                  </div>

                  <div
                    class="mt-2"
                    x-show="photoPreview"
                    style={{ display: "none" }}
                  >
                    <span
                      class="block w-40 h-40 rounded-full m-auto shadow"
                      style={{
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    ></span>
                  </div>
                  {/* <p>{profilePictureName}</p> */}
                  <button
                    type="button"
                    class="inline-flex items-center with-border px-2 py-2 bg-gray-500 font-semibold text-xs text-white uppercase hover:text-white hover:bg-gray-600 mt-2"
                    onClick={() => refInput.current.click()}
                  >
                    <FiUpload class="text-lg mr-1" /> Choose your Photo
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="bg-blue-600 font-semibold rounded-md text-center text-white w-full myBtnStyl "
                onClick={() => updateProfielPicture()}
              >
                {loading ? (
                  <PulseLoader color="#fff" size={5} />
                ) : (
                  "Save changes"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePhotos;
