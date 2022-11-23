import { LocationOn, EventNoteRounded } from "@mui/icons-material";
import { CircularProgress, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-hollows-86813.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setPackages(data.slice(0, 6)));
  }, []);

  return (
    <Container>
      <div className="products">
        <div className="latest">
          <h1 style={{ color: "#2C3E50" }}>
            Latest <span style={{ color: "var(--main-color)" }}>Products</span>{" "}
          </h1>
        </div>
        {!packages.length ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress
              style={{ color: "var(--main-color)" }}
            ></CircularProgress>
          </div>
        ) : (
          <div className="display">
            {packages.map((packages, i) => (
              <Link to={`/purchase/${packages._id}`}>
                <div className="item" key={i}>
                  <div className="image">
                    <img
                      src={`data:image/png;base64,${packages.image}`}
                      alt=""
                    ></img>
                  </div>
                  <div className="car-info">
                    <h4 style={{ marginTop: 0, fontWeight: 500 }}>
                      Brand: {packages.productName}
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        fontSize: "16px",
                        margin: "7px 0",
                      }}
                    >
                      <p>
                        <LocationOn
                          className="icon"
                          style={{ marginLeft: "-7px ", marginRight: "-6" }}
                        />{" "}
                        {packages.place}
                      </p>
                      <p style={{ marginLeft: "10px" }}>
                        <EventNoteRounded className="icon" />
                        Model: {packages.versionYear}
                      </p>
                    </div>
                    <p style={{ fontSize: "16px" }}>
                      Price: ${packages.originalPrice} -
                      <span
                        style={{
                          textDecoration: "line-through 2px",
                          color: "gray",
                          fontWeight: "bold",
                        }}
                      >
                        ${packages.discountPrice}
                      </span>
                    </p>
                    <div style={{ marginTop: "10px" }}>
                      <Link
                        style={{ marginRight: "15px" }}
                        to={`/purchase/${packages._id}`}
                      >
                        <button>Details</button>
                      </Link>
                      <button>Purchase</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Products;
