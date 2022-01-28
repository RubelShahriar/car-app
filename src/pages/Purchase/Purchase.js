import { Button, Container, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../shared/Navigation/Navigation'
import './Purchase.css';

const Purchase = () => {
    const dateString  = new Date().toLocaleDateString();
    const {id} = useParams();
    const [carInfo, setCarInfo] = useState({})
    const {user} = useAuth();
    const {displayName, email} = user;
    const {productName, image, place, description, discountPrice} = carInfo;
    console.log(productName)
    useEffect(() => {
        const url = `https://tranquil-hollows-86813.herokuapp.com/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCarInfo(data));
    }, [])

    const handlePlaceOrder = e => {
        const packageInfo = {productName, image, place, displayName, email, description, discountPrice, dateString};
        fetch('https://tranquil-hollows-86813.herokuapp.com/orders', { 
            method: 'post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(packageInfo),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Package Added Successfully')
                e.target.reset();
            }
        })
        e.preventDefault()
    }

    return (
        <>
        <Navigation></Navigation>
        <Container>
            <div className='purchase'>
            <div style={{textAlign: 'center'}}><h1>Place an Order</h1></div>
            <div className='display'>
                <div className='left' style={{padding: '0 20px 50px'}}>
                    <h2>Purchase product Details:</h2>
                    <p style={{fontSize: '18px', margin: '4px auto'}}>Product Name: {productName}</p>
                    <p style={{fontSize: '18px', margin: '4px auto'}}>Product Price: {discountPrice}</p>
                    <p style={{fontSize: '18px', margin: '4px auto'}}>Product Origin: {place}</p>
                    <img src={`data:image/png;base64,${image}`} alt=''></img>
                    <p style={{fontSize: '18px'}}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoraliz the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble thena bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                    <p style={{padding: '5px 20px', fontSize: '18px', background: 'goldenrod', display: 'inline'}}>We hope that you found your Dream car</p>
                </div>
                <div className='right' style={{textAlign: 'center'}}>
                    <h3>Book Your Order</h3>
                    <form onSubmit= {handlePlaceOrder}>
                        <TextField style={{width: '90%', marginBottom: '10px'}} id="outlined-basic" variant="outlined" defaultValue={displayName} />
                        <TextField style={{width: '90%', marginBottom: '10px'}} id="outlined-basic" variant="outlined" defaultValue={email} />
                        <TextField style={{width: '90%', marginBottom: '10px'}} id="outlined-basic" variant="outlined" value={productName} />
                        <TextField style={{width: '90%', marginBottom: '10px'}} id="outlined-basic" variant="outlined" value={discountPrice} />
                        <TextField style={{width: '90%', marginBottom: '10px'}} id="outlined-basic" variant="outlined" placeholder='Phone' />
                        <TextField style={{width: '90%', marginBottom: '10px'}} id="outlined-basic" variant="outlined" placeholder='Address' />
                        <TextField style={{width: '90%', marginBottom: '10px'}} id="outlined-basic" variant="outlined" placeholder='Country' />
                        <TextField style={{width: '90%', marginBottom: '10px'}} id="outlined-basic" variant="outlined" placeholder='Postal Code' />
                        <TextField style={{width: '90%', marginBottom: '10px'}} id="outlined-basic" variant="outlined" placeholder='Phone' />
                        <Button type='submit' style={{width: '90%'}} variant='contained'>Confirm Booking</Button>
                    </form>
                </div>
            </div>
        </div>
        </Container>
        </>
    );
};

export default Purchase;