import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [pass, setPassword] = useState("");
  const [username, setUsername] = useState("");
  // const [status, setStatus] = useState(false);  ||
  const navigate = useNavigate();

  const loginHandler = () => {
    if (pass === "12345" && username === "user") {
      localStorage.setItem("usernamekey", username);
      localStorage.setItem("passkey", pass);
      localStorage.setItem("isLogin", true);
      // <Navbar />;
      navigate("/");
    } else {
      alert("incorret username and password");
    }
  };

  // let login;
  // useEffect(() => {
  //   console.log("loginState =====", loginState);
  //   login = localStorage.getItem(loginState);
  //   console.log("LOGIN HAVE ", login);
  //   if (login === true) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div className="space-x-2">
      <h1 className="bg-slate-400">Login Page</h1>
      <input
        type="text"
        required
        className="border  mx-5 "
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        required
        className="border  mx-5 "
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="button" onClick={loginHandler} className="mx-2 bg ">
        Login
      </button>
    </div>
  );
};

export default SignInPage;
