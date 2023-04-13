import React, { useState } from "react";
import "./Navbar.css";
import Signup from "./signup";
import { Link } from "react-router-dom";

function Navbar() {

  const [navbar,setNavbar]=useState(false)


  const changeBackground =()=>{
    if(window.scrollY>=50){
      setNavbar(true);
    }
    else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll',changeBackground);

  return (
    <div className="navbar-container">
      <div className={navbar ?'navbar active':'navbar'}>
        <Link className="abc" to='/home'><div className="logo">CraveSavor</div></Link>
        <div className="menubar-wrap">
        <Link className="abc" to='/home'><div className="menu">Home</div></Link>
        <Link className="abc" to='/save'><div className="menu">Save</div></Link>
        <Link className="abc" to='/about-us'><div className="menu">About Us</div></Link>
        </div>
        <Signup />
      </div>
    </div>
  );
}

export default Navbar;
