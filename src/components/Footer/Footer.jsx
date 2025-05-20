import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div id="footer" className="footer-container">
        <div className="footer-section">
          <h3>CRAFTS PORTAL</h3>
          <p>© 2025 CRAFTS PORTAL. All rights reserved</p>
        </div>
        <div className="footer-section">
          <h3>CRAFTS PORTAL</h3>
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
        </div>
        <div className="footer-section">
          <h3>FOLLOW</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="polygon1"></div>
      <div className="polygon2"></div>
    </footer>
  );
};

export default Footer;
