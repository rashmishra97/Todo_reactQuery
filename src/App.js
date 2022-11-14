import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import UserProfile from "./pages/UserProfile";
import InsertData from "./pages/InsertData";

const App = () => {
  console.log("App Componenet");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected CompProp={InsertData} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Protected CompProp={UserProfile} />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
