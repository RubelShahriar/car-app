import { Container } from '@mui/material';
import React from 'react';
import { SettingsOutlined, SupportAgentRounded, BarChartRounded, EmojiEventsRounded } from '@mui/icons-material';
import './Auto.css'

const Auto = () => {
    return (
        <div className='second'>
            <Container>
                {/*  boxShadow: '2px 2px 10px 2px rgba(0, 0, 0, .2)', */}
                <div className='option' style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr', gridGap: '20px', background: '#ee3131', margin: '-100px 60px 0 60px', padding: '25px'}}>
                    <div className='hover' style={{background: 'white', padding: '15px', borderRadius: '10px 30px 45px'}}>
                        <SettingsOutlined className='setting' style={{fontSize: '50px', color: '#ee3131'}}/>
                        <p style={{fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '10px'}}>All Brands</p>
                        <p style={{fontSize: '20px',marginTop: '0'}}>It is a long established fact that a reader will be distracted by the readable content normal distribution of letters.</p>
                    </div>
                    <div className='hover' style={{background: 'white', padding: '15px', borderRadius: '10px 30px 45px'}}>
                        <SupportAgentRounded className='setting' style={{fontSize: '50px', color: '#ee3131'}}/>
                        <p style={{fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '10px'}}>Free Supports</p>
                        <p style={{fontSize: '20px',marginTop: '0'}}>It is a long established fact that a reader will be distracted by the readable content normal distribution of letters.</p>
                    </div>
                    <div className='hover' style={{background: 'white', padding: '15px', borderRadius: '10px 30px 45px'}}>
                        <BarChartRounded className='setting' style={{fontSize: '50px', color: '#ee3131'}}/>
                        <p style={{fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '10px'}}>Dealership</p>
                        <p style={{fontSize: '20px',marginTop: '0'}}>It is a long established fact that a reader will be distracted by the readable content normal distribution of letters.</p>
                    </div>
                    <div className='hover' style={{background: 'white', padding: '15px', borderRadius: '10px 30px 45px'}}>
                        <EmojiEventsRounded className='setting' style={{fontSize: '50px', color: '#ee3131'}}/>
                        <p style={{fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '10px'}}>Affordable</p>
                        <p style={{fontSize: '20px',marginTop: '0'}}>It is a long established fact that a reader will be distracted by the readable content normal distribution of letters.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Auto;