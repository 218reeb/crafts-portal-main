import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <div id="header" className="logo">CRAFTS PORTAL</div>
        <ul>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#hero">Services</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
