import React from 'react';
import { LoginRounded } from '@mui/icons-material';
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
            <div style={{display: 'flex',  justifyContent: 'center !important'}}>
              <Link to='/' className='nav-item'>Home</Link>
              <Link to='/all-products' className='nav-item'>Products</Link>
              <Link to='/dashboard' className='nav-item'>Dashboard</Link>
              {
                user?.email ? 
                <Button onClick={logout} className='nav-item'>LogOut</Button>
                :
                <Link to='/login' className='nav-item' style={{display: 'flex',alignItems: 'center'}}>Log In<LoginRounded style={{}} /></Link>
              }
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;