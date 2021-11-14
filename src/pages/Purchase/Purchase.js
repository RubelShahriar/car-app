import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';

const Purchase = () => {
    const date  = new Date;
    const dateString = date.toLocaleDateString();
    const {id} = useParams();
    const [carInfo, setCarInfo] = useState({})
    const {user} = useAuth();
    const {displayName, email} = user;
    const {name, image, place, description, amount} = carInfo;

    

    useEffect(() => {
        const url = `http://localhost:4000/cars/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCarInfo(data));
    }, [])

    const handlePlaceOrder = e => {
        const packageInfo = {name, image, place, displayName, email, description, amount, dateString};

        fetch('http://localhost:4000/orders', { 
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
        <div className='purchase'>
            <div className='place-order'><h2>Place an Order</h2></div>
            <div className='flex'>
                <div className='left'>
                    <h2>Purchase product Details:</h2>
                    <p>product name:{name}</p>
                    <p>product price: {amount}</p>
                    <p>product origin: {place}</p>
                    <img src={image} alt=''></img>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoraliz the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble thena bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                    <button>We hope that you found your Dream car</button>
                </div>
                <div className='right'>
                    <form onSubmit= {handlePlaceOrder}>
                        <input type='text' defaultValue={displayName}></input>
                        <input type='text' defaultValue={email}></input>
                        <input type='text' defaultValue={name}></input>
                        <input type='number' defaultValue={amount}></input>
                        <input type='text' placeholder='Your Phone'></input>
                        <input type='text' placeholder='Address'></input>
                        <input type='text' placeholder='Country'></input>
                        <input type='text' placeholder='Postal Code'></input>
                        <button type='submit'>CONFIRM BOOKING</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;