import * as React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import MyOrders from "../../dashboard/MyOrders/MyOrders";
import MakeAdmin from "../../dashboard/MakeAdmin/MakeAdmin";
import AddProduct from "../../dashboard/AddProduct/AddProduct";
import Reviews from "../../dashboard/Reviews/Reviews";
import useAuth from "../../hooks/useAuth";
import ManageOrder from "../../dashboard/ManageOrder/ManageOrder";
import Home from "../Home/Home";
import "./Dashboard.css";
import {
  AddBoxRounded,
  AddCommentRounded,
  AnalyticsRounded,
  GridViewRounded,
  HomeRounded,
  LogoutRounded,
  PersonAddAlt1Rounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import { Badge } from "@mui/material";

// drawer width
const drawerWidth = 240;
// component
function Dashboard(props) {
  const { admin, user, logout } = useAuth();
  let { path, url } = useRouteMatch();
  const styles = {
    background: "#f1f1f1",
    fontSize: "16px",
    fontFamily: "El Messiri, sans-serif",
    width: "200px",
    borderRadius: "5px",
    margin: "0 auto 15px auto",
    listStyle: "none",
    padding: "8px 18px",
  };
  const linkStyles = { textDecoration: "none", color: "#34495E" };
  const [packages, setPackages] = React.useState([]);
  React.useEffect(() => {
    fetch(
      `https://tranquil-hollows-86813.herokuapp.com/orderedItem?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [packages, user.email]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // drawer background : "#1976d2"
  const drawer = (
    <div style={{ height: "100vh", background: "var(--login-color)" }}>
      <Box style={{ textAlign: "center" }}>
        <p
          style={{
            fontWeight: "700",
            margin: "0 auto",
            color: "white",
            fontSize: "30px",
          }}
        >
          CarDealer
        </p>
      </Box>
      <Divider />
      <ul style={{ paddingLeft: "0", margin: "30px 0  0" }}>
        <li style={styles}>
          <Link
            className="d-link"
            to={`/home`}
            style={{
              marginTop: "30px",
              textDecoration: "none",
              color: "#34495E",
            }}
          >
            <HomeRounded sx={{ mb: "-5px", mr: 1 }} className="sidebar-icon" />
            Back to Home
          </Link>
        </li>
        <li style={styles}>
          <Link className="d-link" to={`${url}`} style={linkStyles}>
            <GridViewRounded
              sx={{ mb: "-5px", mr: 1 }}
              className="sidebar-icon"
            />
            Dashboard
          </Link>
        </li>
        <li style={styles}>
          <Link className="d-link" to={`${url}/add-product`} style={linkStyles}>
            <AddBoxRounded
              sx={{ mb: "-5px", mr: 1 }}
              className="sidebar-icon"
            />
            Add Product
          </Link>
        </li>
        <li style={styles}>
          <Link className="d-link" to={`${url}/my-orders`} style={linkStyles}>
            <ShoppingCartRounded
              sx={{ mb: "-5px", mr: 1 }}
              className="sidebar-icon"
            />
            My-orders
            <Badge
              badgeContent={packages.length}
              color="secondary"
              sx={{ ml: 2 }}
            ></Badge>
          </Link>
        </li>
        <li style={styles}>
          <Link className="d-link" to={`${url}/reviews`} style={linkStyles}>
            <AddCommentRounded
              sx={{ mb: "-5px", mr: 1 }}
              className="sidebar-icon"
            />
            Add a Review
          </Link>
        </li>
        <li style={styles}>
          <Link
            className="d-link"
            to={`${url}/manage-order`}
            style={linkStyles}
          >
            <AnalyticsRounded
              sx={{ mb: "-5px", mr: 1 }}
              className="sidebar-icon"
            />
            Manage Order
          </Link>
        </li>
        <li style={styles}>
          <Link className="d-link" to={`${url}/make-admin`} style={linkStyles}>
            <PersonAddAlt1Rounded
              sx={{ mb: "-5px", mr: 1 }}
              className="sidebar-icon"
            />
            Make Admin
          </Link>
        </li>
      </ul>
      {admin && <Box></Box>}
      {user.email && (
        <li style={styles}>
          <Link className="d-link" to={""} onClick={logout} style={linkStyles}>
            <LogoutRounded
              sx={{ mb: "-5px", mr: 1 }}
              className="sidebar-icon"
            />
            Logout
          </Link>
        </li>
      )}
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        sx={{ display: "flex", height: "100vh", paddingTop: "60px" }}
        className="dashboard"
      >
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "var(--login-color)",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box className="heading">Admin Dashboard</Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            <Route exact path={"/home"}>
              <Home></Home>
            </Route>
            <Route exact path={path}>
              <Box className="grid">
                <Box className="greeting">
                  Hello, {user.displayName}! WellCome to Your Dashboard
                </Box>
                <Box className="dashboard-image"></Box>
              </Box>
            </Route>
            <Route exact path={`${path}/make-admin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route exact path={`${path}/add-product`}>
              <AddProduct></AddProduct>
            </Route>
            <Route exact path={`${path}/my-orders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route exact path={`${path}/reviews`}>
              <Reviews></Reviews>
            </Route>
            <Route exact path={`${path}/manage-order`}>
              <ManageOrder></ManageOrder>
            </Route>
          </Switch>
        </Box>
      </Box>
    </>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
