import React, { useRef, useState } from 'react';
import './Footer.css';
import logo  from '../../components/images/logo.png';
import { Email, Facebook, Google, LinkedIn, LocationCityOutlined, LocationOn, Phone, Send, Twitter, } from '@mui/icons-material';
import { Button, Container, Input } from '@mui/material';

const Footer = () => {
    const [text, setText] = useState('')
    const inputField = useRef(null)
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const clearText = (e) => {
        e.preventDefault()
        setText('')
    }
    return (
        <Container style={{margin: '0 auto !important'}} className='footer'>
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
                    <p style={{marginBottom: '20px'}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                    <form>
                        <Input type='text' value={text} onChange={handleChange} ref={inputField} className='input' placeholder='Email Address'></Input>
                        <Button type='submit' onClick={clearText} style={{background: '#ffb400', color: 'white'}}><Send style={{marginLeft:'10px'}} ></Send> </Button>
                    </form>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Footer;