import * as React from 'react';
import {Switch,Route,Link,useRouteMatch} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import MyOrders from '../../dashboard/MyOrders/MyOrders';
import MakeAdmin from '../../dashboard/MakeAdmin/MakeAdmin';
import AddProduct from '../../dashboard/AddProduct/AddProduct';
import Reviews from '../../dashboard/Reviews/Reviews';
import useAuth from '../../hooks/useAuth';
import ManageOrder from '../../dashboard/ManageOrder/ManageOrder';
import Payment from '../../dashboard/Payment/Payment';
import Home from '../Home/Home'
import './Dashboard.css';
import { AddBoxRounded, AddCommentRounded, AnalyticsRounded, GridViewRounded, HomeRounded, LogoutRounded, PersonAddAlt1Rounded, ShoppingCartRounded } from '@mui/icons-material';
import { Badge } from '@mui/material';

//drawer width
const drawerWidth = 240;

function Dashboard(props) {
  const [packages, setPackages] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://tranquil-hollows-86813.herokuapp.com/orderedItem?email=${user.email}`)
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [packages])
  const {admin,user, logout} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div style={{height: '100vh', background: '#1976d2'}}>
      <Toolbar />
        <Box style={{textAlign: 'center'}}><p style={{fontWeight: '700', margin: '0 auto', color: 'white', fontSize: '30px'}}>CaLeader</p></Box>
      <Divider />
      <Link className='d-link' to={`/home`} style={{marginTop: '30px'}}><HomeRounded className='sidebar-icon'/>Back to Home</Link>
        <Link className='d-link' to={`${url}`}><GridViewRounded className='sidebar-icon'/>Dashboard</Link>
        <Link className='d-link' to={`${url}/add-product`}><AddBoxRounded className='sidebar-icon'/>Add Product</Link>
        <Link className='d-link' to={`${url}/my-orders`}><ShoppingCartRounded className='sidebar-icon'/>My Orders<Badge badgeContent={packages.length} color='secondary' sx={{ml: 2}}></Badge></Link>
        <Link className='d-link' to={`${url}/reviews`}><AddCommentRounded className='sidebar-icon'/>Add a Review</Link>
        <Link className='d-link' to={`${url}/manage-order`}><AnalyticsRounded className='sidebar-icon'/>Manage Order</Link>
         <Link className='d-link' to={`${url}/make-admin`}><PersonAddAlt1Rounded className='sidebar-icon'/>Make Admin</Link>
       {admin && <Box>
         </Box>}
       {user.email && <Link className='d-link' onClick={logout}  to={''}> <LogoutRounded className='sidebar-icon'/>Logout</Link>}
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    <>
    <Box sx={{ display: 'flex', height: '100vh', paddingTop: '60px' }} className='dashboard'>
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
          <Box className='heading'>Admin Dashboard</Box>
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
        <Route exact path={'/home'}>
          <Home></Home>
        </Route>
        <Route exact path={path}>
          <Box className='grid'>
            <Box className='greeting'>Hello, {user.displayName}! 
            WellCome to Your Dashboard</Box>
            <Box className='dashboard-image'></Box>
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
        <Route exact path={`${path}/pay`}>
          <Payment></Payment>
        </Route>
      </Switch>
      </Box>
    </Box>
    </>
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
