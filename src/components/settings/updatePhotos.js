import React, { useRef, useState } from "react";
import Header from "../menu/Header";
import SideBar from "../menu/SideBar";
import SideMenu from "./sideMenu";
import PulseLoader from "react-spinners/PulseLoader";
import { FiUpload } from "react-icons/fi";
import { updateprofilePicture } from "../../functions/user";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadImages } from "../../functions/uploadImages";

const UpdatePhotos = () => {
  const refInput = useRef(null);
  const [coverPicture, setCoverPicture] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  const [menuActive, setMenuActive] = useState(2);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

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
      <div id="wrapper">
        <SideBar />

        <div class="main_content">
          <Header />
          <div class="mcontainer">
            <div class="">
              <div class="bg-white lg:flex lg:divide-x lg:shadow-md rounded-md shadow lg:rounded-xl overflow-hidden lg:m-0 -mx-4">
                <SideMenu menuActive={menuActive} />

                <div class="lg:py-0 lg:px-6  pl-4 pr-4 mt-4">
                  <form className="p-6 space-y-4 relative bg-white shadow-lg rounded-lg">
                    <input
                      type="file"
                      ref={refInput}
                      hidden
                      multiple
                      accept="image/jpeg,image/png,image/webp,image/gif"
                      name="image"
                      onChange={onSelectFile}
                    />

                    <label
                      class="block text-gray-700 text-sm font-bold mb-2 text-center"
                      for="photo"
                    >
                      Add Photos <span class="text-red-600"> </span>
                    </label>
                    <div class="grid lg:grid-cols-2 gap-3">
                      {selectedImages &&
                        selectedImages.map((image, index) => {
                          return (
                            <div key={image} class="grid relative">
                              <img
                                src={image}
                                class="max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden object-cover inset-0"
                                alt="upload"
                              />
                              <button
                                type="button"
                                onClick={() => deleteHandler(image)}
                                class="flex items-center px-3 py-2 text-red-500 w-36"
                              >
                                <i class="uil-trash-alt mr-1"></i> Delete Image
                              </button>
                            </div>
                          );
                        })}
                    </div>
                    {selectedImages.length > 0 &&
                      (selectedImages.length > 4 ? (
                        <div
                          class="bg-red-500 border p-2 relative rounded-md"
                          uk-alert
                        >
                          <p class="text-white">
                            You can't upload more than 4 images! &nbsp;
                            <span>
                              please delete <b> {selectedImages.length - 4} </b>{" "}
                              of them{" "}
                            </span>
                          </p>
                        </div>
                      ) : (
                        ""
                      ))}
                    <button
                      type="button"
                      class="inline-flex items-center with-border px-2 py-2 bg-gray-500 font-semibold text-xs text-white uppercase hover:text-white hover:bg-gray-600 mt-2"
                      onClick={() => refInput.current.click()}
                    >
                      <FiUpload class="text-lg mr-1" /> Choose your Photo
                    </button>
                  </form>
                  <button
                    type="button"
                    className="bg-blue-600 font-semibold rounded-md text-center text-white w-full myBtnStyl "
                    onClick={() => updateProfielPicture()}
                  >
                    {loading ? (
                      <PulseLoader color="#fff" size={5} />
                    ) : (
                      "SAVE PHOTOS"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePhotos;
