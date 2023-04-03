import React from "react";
import LoginForm from "../../components/account/LoginForm";
import Account from "../account";

const Login = () => {
  return (
    <>
      <div className="lg:flex max-w-5xl min-h-screen mx-auto p-6 py-10">
        <div className="flex flex-col items-center lg: lg:flex-row lg:space-x-10">
          <Account />
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
