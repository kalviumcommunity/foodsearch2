import React from "react";
import "./Navbar.css";
import Signup from "./signup";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <div className="logo">CraveSavor</div>
        <div className="menubar-wrap">
          <div className="menu">Home</div>
          <div className="menu">Save</div>
          <div className="menu">About Us</div>
        </div>
        <Signup />
      </div>
      <div className="menu-bar">
        <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input placeholder="Type to search ..." />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
