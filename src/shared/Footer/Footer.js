import React, { useRef, useState } from 'react';
import './Footer.css';
import logo  from '../../components/images/car-logo-car-leader.svg';
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
        <div className='footer'>
              <Container>
                <div className='flex'>
                    <div className='logo'>
                        <img src={logo} alt=''></img>
                        <p>Our industry-leading online auto loan application puts you in the driver's seat with the information you need to make a decision on your next used car purchase. Each online auto loan approval is 100% personalized to you</p>
                        <Facebook className='icon'></Facebook>
                        <Twitter className='icon'></Twitter>
                        <Google className='icon'></Google>
                        <LinkedIn className='icon'></LinkedIn>
                    </div>
                    <div className='contact'>
                        <h2>Contact Info</h2>
                        <div className='inner'>
                            <LocationOn className='inner-icon'></LocationOn>
                            <p>20/F Green Road, Netherlands</p>
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
            </Container>
            <div style={{borderTop: '1px solid #ffc107', padding: '10px 0 5px', textAlign: 'center'}}>Copyright &copy; {new Date().getFullYear} CaLeader. All Rights Reserved By Rubel Mia</div>
        </div>
    );
};

export default Footer;