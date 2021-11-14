import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../components/images/car-logo-car-leader.svg';
import './Navigation.css';
import { Container } from '@mui/material';
import { PermIdentityOutlined } from '@mui/icons-material';

const Navigation = () => {
  const {user, logout} = useAuth();
    return (
          <Box sx={{ flexGrow: 1 }}>
        <AppBar className='navigation' position="static">
          <Toolbar>
            <IconButton
              className='menu-icon'
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <MenuIcon></MenuIcon>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <img src={logo} alt=''></img>
            </Typography>
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/' className='nav-item'>Services</Link>
            <Link to='/all-products' className='nav-item'>Products</Link>
            <Link to='/dashboard' className='nav-item'>Dashboard</Link>
            {
              user?.email ? 
              <Button onClick={logout} variant="contained">LogOut</Button>
              :
              <Link to='/login'><Button variant="contained">LogIn</Button>
              </Link>
            }
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;