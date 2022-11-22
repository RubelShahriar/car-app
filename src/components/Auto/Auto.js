import { Container, Grid } from "@mui/material";
import React from "react";
import {
  SettingsOutlined,
  SupportAgentRounded,
  BarChartRounded,
  EmojiEventsRounded,
} from "@mui/icons-material";
import "./Auto.css";

const Auto = () => {
  return (
    <div className="floating-div">
      <Container>
        <Grid
          className="option"
          spacing={2}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            background: "#e0e0e0",
            margin: "120px 40px 0 40px",
            padding: "25px",
          }}
        >
          <Grid xs={12} sm={12} md={6} lg={3} className="item">
            <SettingsOutlined className="setting" />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: 0,
                marginBottom: "10px",
              }}
            >
              All Brands
            </p>
            <p style={{ fontSize: "20px", marginTop: "0" }}>
              All Brands are available
            </p>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} className="item">
            <SupportAgentRounded className="setting" />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: 0,
                marginBottom: "10px",
              }}
            >
              Free Supports
            </p>
            <p style={{ fontSize: "20px", marginTop: "0" }}>
              24/7 Carefully Support
            </p>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} className="item">
            <BarChartRounded className="setting" />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: 0,
                marginBottom: "10px",
              }}
            >
              Dealership
            </p>
            <p style={{ fontSize: "20px", marginTop: "0" }}>
              Best dealership market
            </p>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} className="item">
            <EmojiEventsRounded className="setting" />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: 0,
                marginBottom: "10px",
              }}
            >
              Affordable
            </p>
            <p style={{ fontSize: "20px", marginTop: "0" }}>
              Best affordable services
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Auto;
