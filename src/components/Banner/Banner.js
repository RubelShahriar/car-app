import { Button, Container } from '@mui/material';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='background'>
            <Container>
                <div style={{marginLeft: '100px'}}>
                <small style={{marginBottom: '40px'}}>FIND YOUR DREAM CAR</small>
                <h2 style={{fontSize: '40px', marginBottom: '-15px'}}>LAMBORGINI AVENTADOR</h2>
                <h2 style={{fontSize: '40px', marginBottom: '-15px'}}>LP750 4SV</h2>
                <p style={{paddingTop: '10px', color: 'red'}}>MODEL 2016<span>  $486.868</span></p>
                <Button variant='contained' sx={{ boxShadow:0}} className='font-family'>Wellcome to CaLeader</Button>
                </div>
            </Container>
        </div>
    );
};

export default Banner;