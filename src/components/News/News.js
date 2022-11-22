import { PermContactCalendar } from "@mui/icons-material";
import { Container } from "@mui/material";
import React from "react";
import imageOne from "../images/news-one.jpeg";
import imagetwo from "../images/news-two.jpeg";
import imagethree from "../images/news-three.jpeg";
import "./News.css";

const News = () => {
  return (
    <Container>
      <div className="news">
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#2C3E50" }}>
            Our Latest <span style={{ color: "var(--main-color)" }}>News</span>
          </h1>
        </div>
        <div className="news-flex">
          <div className="item">
            <div className="overflow">
              <img src={imageOne} alt=""></img>
            </div>
            <div className="inner-div">
              <small>
                <PermContactCalendar className="news-icon"></PermContactCalendar>{" "}
                OCTOBER 19, 2021
              </small>
              <h3>GM finds its balance with sales of pickups</h3>
              <p>
                Bout avez was main jet. There are suivit bourse depuis. Them
                longues republique paraissents i people young evidemment
                reprende tristement
              </p>
            </div>
          </div>
          <div className="item">
            <div className="overflow">
              <img src={imagetwo} alt=""></img>
            </div>
            <div className="inner-div">
              <small>
                <PermContactCalendar className="news-icon"></PermContactCalendar>{" "}
                OCTOBER 19, 2021
              </small>
              <h3>Tour with us scenic consectetur adipisicing elit</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                nihil unde quo doloremque provident explicabo, rem quibusdam
                voluptatum earum!
              </p>
            </div>
          </div>
          <div className="item">
            <div className="overflow">
              <img src={imagethree} alt=""></img>
            </div>
            <div className="inner-div">
              <small>
                <PermContactCalendar className="news-icon"></PermContactCalendar>{" "}
                OCTOBER 19, 2021
              </small>
              <h3>Accusamus porro tempora eaque inventore beatae at</h3>
              <p>
                Fuga vero non, ullam repellat odit mollitia consequuntur debitis
                maiores iste a est possimus ipsam obcaecati excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default News;
