import React from 'react';
import './Footer.css';
import logo  from '../../components/images/logo.png';
import { Email, Facebook, Google, LinkedIn, LocationCityOutlined, LocationOn, Phone, Send, Twitter, } from '@mui/icons-material';
import { Button, Container, Input } from '@mui/material';

const Footer = () => {
    return (
        <Container className='footer'>
            <div>
            <div className='flex'>
                <div className='logo'>
                    <img src={logo} alt=''></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat.</p>
                    <Facebook className='icon'></Facebook>
                    <Twitter className='icon'></Twitter>
                    <Google className='icon'></Google>
                    <LinkedIn className='icon'></LinkedIn>
                </div>
                <div className='contact'>
                    <h2>Contact Info</h2>
                    <div className='inner'>
                        <LocationOn className='inner-icon'></LocationOn>
                        <p>20/F Green Road, Dhanmondi, Dhaka</p>
                    </div>
                    <div className='inner'>
                        <Email className='inner-icon'></Email>
                        <p>info@themevessel.com</p>
                    </div>
                    <div className='inner'>
                        <Phone className='inner-icon'></Phone>
                        <p>+0477 85X6 552</p>
                    </div>
                    <div className='inner'>
                        <LocationCityOutlined className='inner-icon'></LocationCityOutlined>
                        <p>+0477 85X6 552</p>
                    </div>
                </div>
                <div className='links'>
                <h2>Usefull Links</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Car Listing</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                        <li>Elements</li>
                    </ul>
                </div>
                <div className='subscribe'>
                <h2>Subscribe</h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                    <Input type='text' className='input' placeholder='Email Address'></Input>
                    <Button type='submit' className='button'><Send className='send'></Send> </Button>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Footer;