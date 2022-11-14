import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  console.log("-------------");
  return (
    <div className="flex space-x-2">
      <Link to="/profile">profile</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/signin">SignIn</Link>
      <Link to="/signout">SignOut</Link>
    </div>
  );
};

export default Navbar;
