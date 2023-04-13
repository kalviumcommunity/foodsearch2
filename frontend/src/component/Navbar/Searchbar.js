import React from 'react'
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";


function Searchbar() {
  return (
    <div className="menu-bar">
        <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input placeholder="Type to search ..." />
        </div>
    </div>    
      
  )
}

export default Searchbar