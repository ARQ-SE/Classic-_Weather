import React from "react";
import "./Navbar.css"
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="mainbar">
    
      <div className="sections">
      <img src={logo} alt="img" />
      <h3>
        Classic Weather App
      </h3>
      </div>
      <div className="sections">
      <button className="navBtn">Home</button>
      <button className="navBtn">About</button>
      </div>
      
    </div>
  );
};

export default Navbar;
