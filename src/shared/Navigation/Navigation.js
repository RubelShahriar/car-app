import React from 'react';
import { Link } from 'react-router-dom'; 
import useAuth from '../../hooks/useAuth';
import logo from '../../components/images/car-logo-car-leader.svg';
import { LoginRounded } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material';
import './Navigation.css';

const Navigation = () => {
  const {user, logout} = useAuth();
    return (
            <Box sx={{ flexGrow: 1}}>
              <AppBar sx={{bgcolor: 'white', height: 60}} className='navigation' position="fixed">
                <Container>
                  <Toolbar>
                    <Box sx={{width: 100, cursor: 'pointer'}}>
                      <Link to='/'><img src={logo} alt=''></img></Link>
                    </Box>
                      <Box sx={{ml: 'auto'}}>
                        <Link to='/' className='nav-item'>Home</Link>
                        <Link to='/all-products' className='nav-item'>Products</Link>
                        <Link to='/dashboard' className='nav-item'>Dashboard</Link>
                        {
                          user?.email ? 
                          <p onClick={logout} className='nav-item'>LogOut</p>
                          :
                          <Link to='/login' className='nav-item'>Log In<LoginRounded style={{marginBottom: '-5px'}}/></Link>
                        }
                      </Box>
                  </Toolbar>
                </Container>
              </AppBar>
            </Box>
    );
  };

export default Navigation;