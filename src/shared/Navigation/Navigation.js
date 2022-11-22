import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../components/images/icons8.png";
import "./Navigation.css";
import { Container } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";

const Navigation = () => {
  const { user, logout } = useAuth();
  const [showSiebar, setShowSidebar] = useState(false);
  const navigationbarRightRef = useRef(null);

  const addActivebackground = (e) => {
    const a = navigationbarRightRef.current.childNodes;
    for (let i = 0; i < a.length; i++) {
      a[i].className = "";
    }
    e.target.className = "navigationbar-right-active";
  };

  return (
    <div className="navigationbar">
      <Container>
        <div className="navigationbar-flex">
          <div className="navigationbar-left">
            <Link to="/">
              <img src={logo} alt="navigationbarlogo" />{" "}
              <span className="navigationbar-logo-span">CAR</span>SHOP
            </Link>
            <i className="bx bx-menu navigationbar-menu-icon"></i>
          </div>
          <div className="navigationbar-right" ref={navigationbarRightRef}>
            <Link
              to="/"
              className="navigationbar-right-active"
              onClick={(e) => addActivebackground(e)}
            >
              Home
            </Link>
            <Link to="/all-products" onClick={(e) => addActivebackground(e)}>
              Products
            </Link>
            <Link to="/dashboard" onClick={(e) => addActivebackground(e)}>
              Dashboard
            </Link>
            {user?.email ? (
              <Link onClick={logout}>
                Logout{" "}
                <i className="bx bx-log-out-circle navigationbar-right-icon"></i>
              </Link>
            ) : (
              <Link to="/login">
                Login{" "}
                <i className="bx bx-log-in-circle navigationbar-right-icon"></i>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
