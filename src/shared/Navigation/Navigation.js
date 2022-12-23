import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import useAuth from "../../hooks/useAuth";
import logo from "../../components/images/icons8.png";
import "./Navigation.css";
import { Container } from "@mui/material";
import { useState } from "react";

const Navigation = () => {
  const { user, logout } = useAuth();
  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarFunc = () => {
    if (showSidebar) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  return (
    <div className="navigationbar">
      <Container>
        <div className="navigationbar-flex">
          <div className="navigationbar-left">
            <NavLink to="/">
              <img src={logo} alt="navigationbarlogo" />
              CAR<span className="anchor-text">SHOP</span>
            </NavLink>
            <i
              className="bx bx-menu navigationbar-menu-icon"
              onClick={sidebarFunc}
            ></i>
          </div>
          <Box
            className="navigationbar-right"
            sx={{ display: { xs: !showSidebar && "none", md: "flex" } }}
          >
            <NavLink exact activeClassName="navigationbar-right-active" to="/">
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="navigationbar-right-active"
              to="/all-products"
            >
              Products
            </NavLink>
            <NavLink
              exact
              activeClassName="navigationbar-right-active"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            {user?.email ? (
              <Link onClick={logout}>
                Logout
                <i className="bx bx-log-out-circle navigationbar-right-icon"></i>
              </Link>
            ) : (
              <Link to="/login">
                Login
                <i className="bx bx-log-in-circle navigationbar-right-icon"></i>
              </Link>
            )}
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
