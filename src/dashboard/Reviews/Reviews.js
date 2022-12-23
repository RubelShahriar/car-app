import React, { useRef } from "react";
import "./Reviews.css";
import useAuth from "../../hooks/useAuth";
import reviewimage from "../../components/images/add-review-image.png";

const Reviews = () => {
  const { user } = useAuth();
  const { displayName, email } = user;
  const date = new Date();
  const dateString = date.toLocaleDateString();
  const ratingRef = useRef();
  const reviewRef = useRef();
  const cityRef = useRef();
  const handleAddReview = (e) => {
    const rating = ratingRef.current.value;
    const review = reviewRef.current.value;
    const city = cityRef.current.value;
    const packageInfo = {
      displayName,
      email,
      rating,
      review,
      city,
      dateString,
    };

    fetch("https://carzone-server.onrender.com/reviews", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(packageInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Review Added Successfully");
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div className="add-review">
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Add a <span style={{ color: "var(--main-color)" }}>Review</span>
      </h1>
      <div className="add-review-grid">
        <div className="add-review-left">
          <div className="add-review-left-text">
            <h1>Add a review😍</h1>
            <p style={{ padding: "0 20px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              distinctio eligendi facilis dolore, iure eum mollitia veritatis
              eius praesentium quae facere repellendus voluptas
            </p>
          </div>
          <img src={reviewimage} alt="img"></img>
        </div>
        <div className="add-review-right">
          <div className="add-review-input-container">
            <form onSubmit={handleAddReview}>
              <input
                type="text"
                required
                placeholder=" Your name"
                defaultValue={displayName}
              />
              <input
                type="email"
                required
                placeholder="Your email"
                defaultValue={email}
              />
              <input
                type="text"
                required
                placeholder="Location"
                ref={cityRef}
              />
              <input
                type="number"
                required
                placeholder="Rating"
                step="0.1"
                ref={ratingRef}
              />
              <textarea
                minRows={6}
                placeholder="Write a review"
                ref={reviewRef}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
