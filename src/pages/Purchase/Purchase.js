import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Navigation from "../../shared/Navigation/Navigation";
import "./Purchase.css";

const Purchase = () => {
  const { user } = useAuth();
  const { displayName, email } = user;
  const { id } = useParams();
  const dateString = new Date().toLocaleDateString();
  const [carInfo, setCarInfo] = useState({});
  const { productName, image, place, description, versionYear, discountPrice } =
    carInfo;
  const [phone, setPhone] = useState("");
  const [address, setaddress] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  useEffect(() => {
    const url = `https://tranquil-hollows-86813.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarInfo(data));
  }, [id]);

  const handlePlaceOrder = (e) => {
    const packageInfo = {
      displayName,
      email,
      productName,
      place,
      discountPrice,
      versionYear,
      phone,
      address,
      country,
      postalCode,
      dateString,
    };
    fetch("https://tranquil-hollows-86813.herokuapp.com/orderedItem", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(packageInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Package Added Successfully");
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <div className="purchase">
          <h1 style={{ textAlign: "center" }}>
            Place an <span style={{ color: "var(--main-color)" }}>Order</span>
          </h1>
          <div className="display">
            <div className="left">
              <h2>Product Details:</h2>
              <p>
                Product Name:{" "}
                <span style={{ fontWeight: "normal" }}>{productName}</span>
              </p>
              <p>
                Product Price:{" "}
                <span style={{ fontWeight: "normal" }}>${discountPrice}</span>
              </p>
              <p>
                Product Origin:{" "}
                <span style={{ fontWeight: "normal" }}>{place}</span>
              </p>
              <img src={`data:image/png;base64,${image}`} alt=""></img>
              <h2>Description:</h2>
              <p style={{ fontSize: "18px", fontWeight: "400" }}>
                {description}
              </p>
              <p
                style={{
                  backgroundColor: "var(--main-color)",
                  marginTop: "10px",
                  padding: "10px",
                  borderRadius: "6px",
                  color: "white",
                  display: "inline-block",
                }}
              >
                We hope that you have found your Dream car
              </p>
            </div>
            <div className="right">
              <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
                Book Your Order
              </h3>
              <div className="igroup-container">
                <div className="container-main">
                  <form onSubmit={handlePlaceOrder}>
                    <input type="email" defaultValue={email} />
                    <input type="text" value={productName} />
                    <input type="text" value={`$${discountPrice}`} />
                    <input
                      type="number"
                      placeholder="Phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      onChange={(e) => setaddress(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Postal Code"
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <button type="submit">Confirm Booking</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Purchase;
