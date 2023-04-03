import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ForgetPassword from "../../components/account/ForgetPassword";
import SendEmail from "../../components/account/SendEmail";
import CodeVerification from "../../components/account/CodeVerification";
import ChangePassword from "../../components/account/ChangePassword";
import Account from "../account";

const Forget = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [visible, setVisible] = useState(0);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [conf_password, setConf_password] = useState("");
  const [error, setError] = useState("");
  const [userInfos, setUserInfos] = useState("");
  return (
    <>
      <div className="lg:flex max-w-5xl min-h-screen mx-auto p-6 py-10">
        <div className="flex flex-col items-center lg: lg:flex-row lg:space-x-10">
          <Account />
          {visible === 0 && (
            <ForgetPassword
              email={email}
              setEmail={setEmail}
              error={error}
              setError={setError}
              setLoading={setLoading}
              setUserInfos={setUserInfos}
              setVisible={setVisible}
            />
          )}
          {visible === 1 && userInfos && (
            <SendEmail
              email={email}
              userInfos={userInfos}
              error={error}
              setError={setError}
              setLoading={setLoading}
              setUserInfos={setUserInfos}
              setVisible={setVisible}
            />
          )}
          {visible === 2 && (
            <CodeVerification
              user={user}
              code={code}
              setCode={setCode}
              error={error}
              setError={setError}
              setLoading={setLoading}
              setVisible={setVisible}
              userInfos={userInfos}
            />
          )}
          {visible === 3 && (
            <ChangePassword
              password={password}
              conf_password={conf_password}
              setConf_password={setConf_password}
              setPassword={setPassword}
              error={error}
              setError={setError}
              setLoading={setLoading}
              setVisible={setVisible}
              userInfos={userInfos}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Forget;
