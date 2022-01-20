import { Container } from '@mui/material';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='background'>
            <Container>
                <div className='find'>
                <small>FIND YOUR DREAM CAR</small>
                <h2>LAMBORGINI AVENTADOR</h2>
                <h2>LP750 4SV</h2>
                <p>MODEL 2016<span>  $486.868</span></p>
                </div>
            </Container>
        </div>
    );
};

export default Banner;