import React from "react";
import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    { name: "Tarek Mohamed", rating: "★★★★★", comment: "Excellent service!" },
    { name: "Sara Ali", rating: "★★★★☆", comment: "I enjoyed working with you." },
    { name: "Ahmed Hassan", rating: "★★★★★", comment: "Highly recommend your service." },
    { name: "Mona Adel", rating: "★★★☆☆", comment: "There was a slight delay." },
    { name: "Omar Samir", rating: "★★★★★", comment: "Best service I've ever had." },
    { name: "Laila Nabil", rating: "★★★★☆", comment: "Very satisfied with the results." },
  ];

  return (
    <section id="about" className="reviews">
      <div className="review-title">
        <h2>See what happy customers are saying about our services</h2>
      </div>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="rectangle">
              <p><strong>{review.name}</strong></p>
              <p>{review.rating}</p>
            </div>
            <div className="comment-text">
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
