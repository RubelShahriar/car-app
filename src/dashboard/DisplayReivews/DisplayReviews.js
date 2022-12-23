import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { CircularProgress, Container } from "@mui/material";
import Slider from "react-slick";
import quoteImage from "../../components/images/review-quote.png";
import "./DisplayReviews.css";

const DisplayReviews = () => {
  //slick-slider part
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //review part
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://carzone-server.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <Container>
      <div className="display-review">
        <div>
          <h1 style={{ color: "#2C3E50", marginBottom: "30px" }}>
            Consumers{" "}
            <span style={{ color: "var(--main-color)" }}>Reviews</span>
          </h1>
        </div>
        {!review.length ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress
              style={{ color: "var(--main-color)" }}
            ></CircularProgress>
          </div>
        ) : (
          <Slider {...settings}>
            {review.map((packages, i) => (
              <div className="reviews-item" key={i}>
                <div style={{ marginTop: "30px" }}>
                  <img
                    style={{ margin: "0 auto" }}
                    src={quoteImage}
                    alt=""
                  ></img>
                </div>
                <div
                  className="scroll-bar"
                  style={{
                    marginTop: "20px",
                    height: "150px",
                    overflow: "hidden",
                    overflowY: "scroll",
                    textAlign: "center",
                  }}
                >
                  <p
                    className="text"
                    style={{ textAlign: "center", fontSize: "26px" }}
                  >
                    {packages.review}
                  </p>
                </div>
                <h3 className="name" style={{ marginTop: "20px" }}>
                  {packages.displayName}
                </h3>
                <div>
                  <div>
                    <Rating
                      initialRating={packages.rating}
                      style={{ color: "#ffc107" }}
                      emptySymbol="far fa-star star"
                      fullSymbol="fas fa-star star"
                      readonly
                    ></Rating>
                  </div>
                  <div className="date" style={{ marginTop: "10px" }}>
                    {packages.dateString}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </Container>
  );
};

export default DisplayReviews;
