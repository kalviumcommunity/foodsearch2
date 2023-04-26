import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Searchbar() {
  const [searchItem,setSearchItem]=useState([])
  
  return (
    <div className="menu-bar">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input placeholder="Type to search ..." />
      </div>
    </div>
  );
}

export default Searchbar;
