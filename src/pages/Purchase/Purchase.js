import { Button, Container, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../shared/Navigation/Navigation'
import './Purchase.css';

const Purchase = () => {
    const {user} = useAuth();
    const {displayName, email} = user;
    const {id} = useParams();
    const dateString  = new Date().toLocaleDateString();
    const [carInfo, setCarInfo] = useState({})
    const {productName, image, place, description, versionYear, discountPrice} = carInfo;
    const [phone, setPhone] = useState('')
    const [address, setaddress] = useState('')
    const [country, setCountry] = useState('')
    const [postalCode, setPostalCode] = useState('')
    useEffect(() => {
        const url = `https://tranquil-hollows-86813.herokuapp.com/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCarInfo(data));
    }, [])

    const handlePlaceOrder = e => {
        const packageInfo = {displayName, email, productName, place, discountPrice,versionYear, phone, address, country, postalCode, dateString};
        fetch('https://tranquil-hollows-86813.herokuapp.com/orderedItem', { 
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
                    <p style={{fontSize: '20px', margin: '4px auto', fontWeight: 'bold'}}>Product Name: <span style={{fontWeight: 'normal'}}>{productName}</span></p>
                    <p style={{fontSize: '18px', margin: '4px auto', fontWeight: 'bold'}}>Product Price: <span style={{fontWeight: 'normal'}}>${discountPrice}</span></p>
                    <p style={{fontSize: '18px', margin: '4px auto', fontWeight: 'bold'}}>Product Origin: <span style={{fontWeight: 'normal'}}>{place}</span></p>
                    <img src={`data:image/png;base64,${image}`} alt=''></img>
                    <h2 style={{marginBottom: '-10px'}}>Description:</h2>
                    <p style={{fontSize: '18px'}}>{description}</p>
                    <p className='para' style={{padding: '5px 20px', fontSize: '18px', background: 'goldenrod', display: 'inline'}}>We hope that you have found your Dream car</p>
                </div>
                <div className='right' style={{textAlign: 'center'}}>
                    <h3>Book Your Order</h3>
                    <form onSubmit= {handlePlaceOrder}>
                        <TextField type='email' className='input' variant="outlined" defaultValue={email} />
                        <TextField type='text' className='input' variant="outlined" value={productName} />
                        <TextField type='text' className='input' variant="outlined" value={`$${discountPrice}`} />
                        <TextField type='number' className='input' variant="outlined" placeholder='Phone' onChange={e => setPhone(e.target.value)} />
                        <TextField type='text' className='input' variant="outlined" placeholder='Address' onChange={e => setaddress(e.target.value)}/>
                        <TextField type='text' className='input' variant="outlined" placeholder='Country' onChange={e => setCountry(e.target.value)}/>
                        <TextField type='number' className='input' variant="outlined" placeholder='Postal Code' onChange={e => setPostalCode(e.target.value)}/>
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