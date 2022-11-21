import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SignInPage from "./pages/SignInPage";
import SignOutPage from "./pages/SignOutPage";
import TodoPage from "./pages/TodoPage";
import UserProfilePage from "./pages/UserProfilePage";

import Navbar from "./Routing/Navbar";

const App = () => {
  console.log("App Componenet");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected CompProp={TodoPage} />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route
          path="/profile"
          element={<Protected CompProp={UserProfilePage} />}
        />
        <Route path="/signout" element={<SignOutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
