import React from "react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/menu/Header";
import ProfileList from "../../components/menu/ProfileList";
import RightBar from "../../components/menu/RightBar";
import SideBar from "../../components/menu/SideBar";
import WelcomeBox from "../../components/menu/WelcomeBox";

const Activate = ({ profiles }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((user) => ({ ...user }));
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { token } = useParams();

  useEffect(() => {
    activateAccount();
  }, []);

  const activateAccount = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/activate`,
        { token },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
      localStorage.setItem("user", JSON.stringify({ ...user, verified: true }));
      dispatch({
        type: "VERIFY",
        payload: true,
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setError(error.response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <>
      <div id="wrapper">
        <SideBar />

        <div class="main_content">
          {success && (
            <p className="input_success">Account verification succeded.</p>
          )}
          {error && <p className="input_error">Account verification failed.</p>}
          <Header />
          <div class="mcontainer">
            <div class="lg:flex lg:space-x-10">
              <div class="lg:w-8/12 lg:px40 space-y-7">
                <WelcomeBox user={user} />
                {profiles.map((profile) => (
                  <ProfileList key={profile._id} profile={profile} />
                ))}
              </div>
              <RightBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activate;
