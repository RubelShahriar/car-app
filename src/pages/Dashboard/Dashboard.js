import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MakeAdmin from '../../dashboard/MakeAdmin/MakeAdmin';
import AddProduct from '../../dashboard/AddProduct/AddProduct';
import MyOrders from '../../dashboard/MyOrders/MyOrders';
import { Button, Container } from '@mui/material';
import Reviews from '../../dashboard/Reviews/Reviews';
import useAuth from '../../hooks/useAuth';
import './Dashboard.css';
import ManageOrder from '../../dashboard/ManageOrder/ManageOrder';
import Payment from '../../dashboard/Payment/Payment';

const drawerWidth = 200;

function Dashboard(props) {
  const {admin,user, logout} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
 
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {admin && <Box>
        <Link className='dashboard-link' to={`${url}/make-admin`}><button>Make Admin</button></Link>
        <Link className='dashboard-link' to={`${url}/add-product`}><button>Add Product</button></Link>
      <Link className='dashboard-link' to={`${url}/pay`}><button>Payment</button></Link>
        </Box>}
        <Link className='dashboard-link' to={`${url}/my-orders`}><button >My Order</button></Link>
      <Link className='dashboard-link' to={`${url}/manage-order`}><button>Manage Order</button></Link>
      <Link className='dashboard-link' to={`${url}/reviews`}><button>Reviews</button></Link>
      {user.email && <Link className='dashboard-link' to={''}><button onClick={logout}>Logout</button></Link>}
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Container>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
       >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <h1>Wellcome to Your Dashboard</h1>
          <h1>please check with this Email:</h1>
          <h4>Email: admin@admin1@gmail.com &&  Pass: 123456</h4>
          <h4>Email: admin@admin1@gmail.com &&  Pass: 123456</h4>
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
        <Route exact path={`${path}/pay`}>
          <Payment></Payment>
        </Route>
      </Switch>
      </Box>
    </Box>
    </Container>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
