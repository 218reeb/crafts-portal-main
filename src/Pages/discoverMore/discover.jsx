import React from 'react';
import './Discover More.css';

const DiscoverMore = () => {
  return (
    <section id="discover" className="discoverMore">
    <div>
      <header>
        <nav>
          <div className="logo">CRAFTS PORTAL</div>
          <ul>
            <li><a href="landing page.html#header">Home</a></li>
            <li><a href="landing page.html#categories">Services</a></li>
            <li><a href="landing page.html#about">About Us</a></li>
            <li><a href="landing page.html#footer">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="welcome_text">
        <div className="welcome-content">
          <p className="welcome-description">
            Everything you need to know about our platform in one place!
          </p>
        </div>
      </section>

      <section className="about">
        <div className="about-content">
          <p className="description">
            We’re tired of the many phone calls and recommendations that aren’t always accurate. That’s why we’ve created this platform to make it easier for you to find trusted professionals quickly and in an organized way. Whether you’re looking for an electrician, plumber, carpenter, or any other service, we’re here to help you find the right one.
          </p>
        </div>
        <div className="about-image">
          <img src="/pic/11.jpg" alt="Carpenter" />
        </div>
        <div className="about-title">
          <h1 className="title">Who are we?</h1>
          <p className="subtitle">crafts portal platform, the link between you and the best craftsmen in your area.</p>
        </div>
      </section>

      <section className="about-1">
        <div className="about-1-content">
          <h3>Request the service:</h3>
          <p>Specify the type of service, location, and time that works for you.</p>
          <h3>Professionals receive the request:</h3>
          <p>The platform sends your request to the nearest qualified professionals.</p>
          <h3>Communication and execution:</h3>
          <p>The professional will contact you and carry out the service, and you can rate them after completion.</p>
          <p className="summary">All of this happens in one platform, without the need to talk to anyone or tire yourself out.</p>
        </div>
        <div className="about-1-title">
          <h1 className="title-1">How does our platform work?</h1>
          <p className="subtitle-1">Simple steps to help you find the right professional:</p>
        </div>
        <div className="about-1-image">
          <img src="/pic/more.jpg" alt="Carpenter" />
        </div>
      </section>

      <section className="about-2">
        <div className="about-2-content">
          <h3>Rated Professionals:</h3>
          <p>Each professional has a profile with ratings from previous clients.</p>
          <h3>Fast response:</h3>
          <p>The request reaches the professional in moments.</p>
          <h3>Safe transactions:</h3>
          <p>All conversations take place through the platform.</p>
          <h3>Available on all devices:</h3>
          <p>Whether on mobile or computer, you can easily use our platform.</p>
          <p className="summary">we’re a complete management system for your relationship with the professional!</p>
        </div>
        <div className="about-2-image">
          <img src="/pic/111.jpg" alt="Carpenter" />
        </div>
        <div className="about-2-title">
          <h1 className="title-2">Why choose us?</h1>
          <p className="subtitle-2">Features you won’t find anywhere else:</p>
        </div>
      </section>

      <section className="download">
        <div className="download-content">
          <h1>Download the app and start using our platform anytime!</h1>
        </div>
        <div className="download-image">
          <img src="/pic/download.png" alt="Download App" />
        </div>
      </section>

      <footer>
        <div className="footer-container" id="footer">
          <div className="footer-section">
            <h3>CRAFTS PORTAL</h3>
            <p>© 2025 CRAFTS PORTAL. All rights reserved</p>
          </div>
          <div className="footer-section">
            <h3>CRAFTS PORTAL</h3>
            <ul>
              <li><a href="#header">Home</a></li>
              <li><a href="#categories">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#footer">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>FOLLOW</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="polygon1"></div>
        <div className="polygon2"></div>
      </footer>
    </div>
  </section>
  );
};

export default DiscoverMore;
