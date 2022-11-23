import React, { useRef, useState } from "react";
import "./Footer.css";
import {
  Email,
  LocationCityOutlined,
  LocationOn,
  Phone,
  Send,
} from "@mui/icons-material";
import { Button, Container } from "@mui/material";

const Footer = () => {
  const [text, setText] = useState("");
  const inputField = useRef(null);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const clearText = (e) => {
    e.preventDefault();
    setText("");
  };
  return (
    <div className="footer">
      <Container>
        <div className="flex">
          <div className="logo">
            <h1>
              <span style={{ color: "var(--main-color)" }}>CAR</span>SHOP
            </h1>
            <p>
              Our industry-leading online auto loan application puts you in the
              driver's seat with the information you need to make a decision on
              your next used car purchase.
            </p>
          </div>
          <div className="contact">
            <h2>Contact Info</h2>
            <div className="inner">
              <LocationOn className="inner-icon"></LocationOn>
              <p>20/F Green Road, Netherlands</p>
            </div>
            <div className="inner">
              <Email className="inner-icon"></Email>
              <p>info@themevessel.com</p>
            </div>
            <div className="inner">
              <Phone className="inner-icon"></Phone>
              <p>+0477 85X6 552</p>
            </div>
            <div className="inner">
              <LocationCityOutlined className="inner-icon"></LocationCityOutlined>
              <p>+0427 85X6 568</p>
            </div>
          </div>
          <div className="subscribe">
            <h2>Subscribe</h2>
            <p style={{ marginBottom: "20px" }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit.
            </p>
            <form>
              <input
                type="text"
                value={text}
                onChange={handleChange}
                ref={inputField}
                placeholder="Your email"
              ></input>
              <Button
                type="submit"
                onClick={clearText}
                style={{
                  background: "var(--main-color)",
                  color: "white",
                  borderRadius: "var(--radius-medium)",
                  height: 37,
                  marginLeft: -5,
                }}
              >
                <Send
                  style={{
                    rotate: "-45deg",
                    marginTop: -6,
                  }}
                ></Send>{" "}
              </Button>
            </form>
          </div>
        </div>
      </Container>
      <div
        style={{
          borderTop: "1px solid #bdbdbd",
          padding: "10px 0 5px",
          textAlign: "center",
          marginTop: "60px",
        }}
      >
        Copyright &copy; {new Date().getFullYear()} CaLeader. All Rights
        Reserved By Rubel Mia
      </div>
    </div>
  );
};

export default Footer;
