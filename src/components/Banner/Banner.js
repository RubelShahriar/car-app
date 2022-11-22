import { Container } from "@mui/material";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="background">
      <Container>
        <div className="alignment">
          <small style={{ marginBottom: "30px" }}>FIND YOUR DREAM CAR</small>
          <h2 className="heading">LAMBORGINI AVENTADOR LP750 4SV</h2>
          <p className="sub-heading">
            MODEL 2016<span> $486.868</span>
          </p>
          <p className="sub-heading sub">Welcome to CaLeader</p>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
