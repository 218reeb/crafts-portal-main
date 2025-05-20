import React from "react";
import "./more.css";
const More = () => {
  return (
    <section id="more" className="more">
  <div className="more-content">
    <h1 className="title">How it works</h1>
    
    <p className="description">
      1. Choose a Tasker by price, skills, and reviews.
      <br /><br />
      2. Schedule a Tasker as early as today.
      <br /><br />
      3. Chat, pay, tip, and review all in one place
    </p>
  </div>
  <div className="more-image">
    <img src="/pic/more.jpg" alt="Carpenter" />
  </div>
</section>
  );
};

export default More;

