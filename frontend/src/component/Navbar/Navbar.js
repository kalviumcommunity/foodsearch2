import React from "react";
import "./Navbar.css";
import Signup from "./signup";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <Link className="abc" to='/home'><div className="logo">CraveSavor</div></Link>
        <div className="menubar-wrap">
        <Link className="abc" to='/home'><div className="menu">Home</div></Link>
        <Link className="abc" to='/save'><div className="menu">Save</div></Link>
        <Link className="abc" to='/about-us'><div className="menu">About Us</div></Link>
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
