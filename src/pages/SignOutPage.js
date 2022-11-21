import React from "react";
import { useNavigate } from "react-router-dom";

const SignOutPage = () => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    localStorage.setItem("isLogin", false);
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h1 className="bg-blue-500">Sign Out Page</h1>
      <button type="button" onClick={buttonHandler}>
        LOGOUT
      </button>
    </div>
  );
};
export default SignOutPage;
