import React, { useState } from "react";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import { Person, Lock, Email } from "@mui/icons-material";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Navigation from "../../shared/Navigation/Navigation";
import svg1 from "../images/undraw_creative_team_r90h.svg";
import "./Resister.css";

const Resister = () => {
  const history = useHistory();
  const [inputData, setInputData] = useState({});
  const { createUserAccount, errors, isLoading, user } = useAuth();

  const getInputValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInputData = { ...inputData };
    newInputData[field] = value;
    console.log(newInputData);
    setInputData(newInputData);
  };

  const handleResisterSubmit = (e) => {
    if (inputData.password !== inputData.password2) {
      alert("Your password didn't matched");
      return;
    }
    createUserAccount(
      inputData.email,
      inputData.password,
      inputData.name,
      history
    );
    e.target.value = "";
    e.preventDefault();
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="signup">
        <div className="signup-right">
          <div className="signup-right-container">
            {!isLoading && (
              <form onSubmit={handleResisterSubmit}>
                <div className="signup-right-container-igroup">
                  <Person className="signup-right-container-igroup-icon" />
                  <input
                    className="signup-right-container-igroup-input"
                    onBlur={getInputValue}
                    name="name"
                    label="Email"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="signup-right-container-igroup">
                  <Email className="signup-right-container-igroup-icon signup-email" />
                  <input
                    className="signup-right-container-igroup-input"
                    onBlur={getInputValue}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="signup-right-container-igroup">
                  <Lock className="signup-right-container-igroup-icon" />
                  <input
                    className="signup-right-container-igroup-input"
                    onBlur={getInputValue}
                    name="email"
                    label="Email"
                    type="password"
                    placeholder="password"
                  />
                </div>
                <div className="signup-right-container-igroup">
                  <Lock className="signup-right-container-igroup-icon lock" />
                  <input
                    className="signup-right-container-igroup-input"
                    onBlur={getInputValue}
                    name="email"
                    label="Email"
                    type="password"
                    placeholder="re-enter password"
                  />
                </div>
                <button type="submit" className="signup-right-container-button">
                  Sign up
                </button>
              </form>
            )}
            <p>
              Already have an Accout? please{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Log in
              </Link>
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {isLoading && (
                <CircularProgress style={{ color: "var(--main-color)" }} />
              )}
            </div>
            <div style={{ width: "100%" }}>
              {user.email && (
                <Alert style={{ borderRadius: "10px" }} severity="success">
                  This is a success alert — check it out!
                </Alert>
              )}
            </div>
            <div style={{ width: "100%" }}>
              {errors && (
                <Alert style={{ borderRadius: "10px" }} severity="error">
                  <AlertTitle>{errors}</AlertTitle>
                  This is an error alert — <strong>check it out!</strong>
                </Alert>
              )}
            </div>
            {/* <button
                onClick={handleGoogleSignIn}
                className="signup-right-container-button"
              >
                Sign In With Google
              </button> */}
          </div>
          <div className="signup-right-icon-container">
            <i className="fb bx bxl-facebook"></i>
            <i className="ggl bx bxl-google"></i>
            <i className="twr bx bxl-twitter"></i>
            <i className="insta bx bxl-instagram"></i>
          </div>
        </div>
        <div className="signup-left">
          <div className="signup-left-text">
            <h1>Join with us!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              distinctio eligendi facilis dolore, iure eum mollitia veritatis
              eius praesentium quae facere repellendus voluptas necessitatibus.
              Culpa minus ex similique debitis tempore!
            </p>
          </div>
          <img className="signup-left-image" src={svg1} alt="signup-svg" />
        </div>
      </div>
    </>
  );
};

export default Resister;
