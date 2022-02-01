import { Container, Grid } from '@mui/material';
import React from 'react';
import { SettingsOutlined, SupportAgentRounded, BarChartRounded, EmojiEventsRounded } from '@mui/icons-material';
import './Auto.css'

const Auto = () => {
    return (
        <div className='second'>
            <Container>
                {/*  boxShadow: '2px 2px 10px 2px rgba(0, 0, 0, .2)', */}
                <Grid className='option' spacing={2} style={{display: 'flex', textAlign: 'center', background: '#ee3131', margin: '-100px 40px 0 40px', padding: '25px'}}>
                    <Grid xs={12} sm={12} md={6} lg={3} className='hover' style={{marginRight: '20px', background: 'white', padding: '15px', borderRadius: '10px 30px 45px'}}>
                        <SettingsOutlined className='setting' style={{fontSize: '50px', color: '#ee3131'}}/>
                        <p style={{fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '10px'}}>All Brands</p>
                        <p style={{fontSize: '20px',marginTop: '0'}}>All Brands are available</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={3} className='hover' style={{marginRight: '20px', background: 'white', padding: '15px', borderRadius: '10px 30px 45px'}}>
                        <SupportAgentRounded className='setting' style={{fontSize: '50px', color: '#ee3131'}}/>
                        <p style={{fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '10px'}}>Free Supports</p>
                        <p style={{fontSize: '20px',marginTop: '0'}}>24/7 Carefully Support</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={3} className='hover' style={{marginRight: '20px', background: 'white', padding: '15px', borderRadius: '10px 30px 45px'}}>
                        <BarChartRounded className='setting' style={{fontSize: '50px', color: '#ee3131'}}/>
                        <p style={{fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '10px'}}>Dealership</p>
                        <p style={{fontSize: '20px',marginTop: '0'}}>Best dealership market</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={3} className='hover' style={{marginRight: '20px', background: 'white', padding: '15px', borderRadius: '10px 30px 45px'}}>
                        <EmojiEventsRounded className='setting' style={{fontSize: '50px', color: '#ee3131'}}/>
                        <p style={{fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '10px'}}>Affordable</p>
                        <p style={{fontSize: '20px',marginTop: '0'}}>Best affordable services</p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Auto;