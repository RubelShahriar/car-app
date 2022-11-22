import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Person, Lock } from "@mui/icons-material";
import svg1 from "../images/undraw_different_love_a3rg.svg";
import googlesvg from "../images/icons8-google.svg";
import Navigation from "../../shared/Navigation/Navigation";
import "./Login.css";

const Login = () => {
  const [inputData, setInputData] = useState({});
  const { user, signInWithGoogle, errors, isLoading, loginUser } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const getInputValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInputData = { ...inputData };
    newInputData[field] = value;
    setInputData(newInputData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(inputData.email, inputData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="login">
        <div className="login-left">
          <div className="login-left-text">
            <h1>Welcome Back!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              distinctio eligendi facilis dolore, iure eum mollitia veritatis
              eius praesentium quae facere repellendus voluptas necessitatibus.
              Culpa minus ex similique debitis tempore!
            </p>
          </div>
          <img className="login-left-image" src={svg1} alt="login-svg" />
        </div>
        <div className="login-right">
          <div className="login-right-container">
            <form onSubmit={handleLoginSubmit}>
              <div className="login-right-container-igroup">
                <Person className="login-right-container-igroup-icon" />
                <input
                  className="login-right-container-igroup-input"
                  onBlur={getInputValue}
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="login-right-container-igroup">
                <Lock className="login-right-container-igroup-icon lock" />
                <input
                  className="login-right-container-igroup-input"
                  onBlur={getInputValue}
                  name="email"
                  label="Email"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="login-right-container-button">
                Sign in
              </button>
            </form>
            <p>
              New User? Please{" "}
              <Link to="/resister" style={{ textDecoration: "none" }}>
                Sign up
              </Link>{" "}
              OR,
            </p>
            <div className="login-google-igroup">
              <img src={googlesvg} alt="googlesvg" />
              <button
                onClick={handleGoogleSignIn}
                className="login-right-container-button login-google-button"
              >
                Sign In With Google
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {isLoading && (
                <CircularProgress style={{ color: "var(--main-color)" }} />
              )}
            </div>
            <div style={{ width: "100%", marginTop: "15px" }}>
              {user.email && (
                <Alert style={{ borderRadius: "10px" }} severity="success">
                  This is a success alert — check it out!
                </Alert>
              )}
            </div>
            <div style={{ width: "100%", marginTop: "15px" }}>
              {errors && (
                <Alert style={{ borderRadius: "10px" }} severity="error">
                  <AlertTitle>{errors}</AlertTitle>
                  This is an error alert — <strong>check it out!</strong>
                </Alert>
              )}
            </div>
          </div>
          <div className="login-right-icon-container">
            <i className="fb bx bxl-facebook"></i>
            <i className="ggl bx bxl-google"></i>
            <i className="twr bx bxl-twitter"></i>
            <i className="insta bx bxl-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
