import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./component/Routing/Navbar";
import UserProfile from "./pages/UserProfile";
import InsertRecord from "./pages/InsertRecord";
import Contact from "./pages/Contact";
import SignOut from "./pages/SignOut";
import SignIn from "./pages/SignIn";
import Protected from "./component/Protected";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Protected Comp={InsertRecord} />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<Protected Comp={UserProfile} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signout" element={<SignOut />} />
    </Routes>
  </>
);

export default App;
