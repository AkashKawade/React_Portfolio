import React from "react";
import "./Navbar.css";


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <h1 id="logo"><span>A</span>KASH</h1>
        </div>
        <div className="Menu">
            <a href="#home" className="menuitem">Home</a>
            <a href="#about" className="menuitem">About</a>
            <a href="#workexperience" className="menuitem">Work Experience</a>
            <a href="#portfolio" className="menuitem">Portfolio</a>
            <a href="#contact" className="menuitem">Contact</a>
        </div>
  
      </nav>
    </>
  );
};

export default Navbar;
