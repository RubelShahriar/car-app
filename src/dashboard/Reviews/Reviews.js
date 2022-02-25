import React, { useRef } from 'react';
import './Reviews.css';
import useAuth from '../../hooks/useAuth';
import image from '../../components/images/dash-img.jpeg'
import { Button, TextareaAutosize, TextField } from '@mui/material';

const Reviews = () => {
    const {user} = useAuth();
    const {displayName, email} = user;
    const date  = new Date(); 
    const dateString = date.toLocaleDateString();
    const ratingRef= useRef();
    const reviewRef= useRef();
    const cityRef = useRef()
    const handleAddReview = e => {
        const rating = ratingRef.current.value;
        const review = reviewRef.current.value;
        const city = cityRef.current.value;
        const packageInfo = { displayName, email, rating, review, city, dateString};

        fetch('https://tranquil-hollows-86813.herokuapp.com/reviews', { 
            method: 'post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(packageInfo),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Review Added Successfully')
                e.target.reset();
            }
        })
        e.preventDefault();
    }

    return (
        <div className='add-review'>
            <div style={{textAlign: 'center', fontSize: '30px', margin: '20px 0'}}>Add a Review</div>
            <div className='a-grid'>
                <div className='image'>
                    <img src={image} alt='img'></img>
                </div>
                <div>
                    <form onSubmit={handleAddReview}>
                        <TextField className='input' sx={{width: '75%', mb: 2}} type='text' required label=" Your Name" defaultValue={displayName}/>
                        <TextField className='input' sx={{width: '75%', mb: 2}} type='email' required label=" Your Email" defaultValue={email}/>
                        <TextField className='input' sx={{width: '75%', mb: 2}} type='text' required label=" Your City" ref={cityRef}/>
                        <TextField className='input' sx={{width: '75%', mb: 2}} type='number' required label=" Your Rating" step="0.1" ref={ratingRef}/>
                        <TextareaAutosize className='textarea' minRows={4} placeholder="Write a review" ref={reviewRef} required/>
                        <Button className='btn' sx={{width: '75%', mb: 2}} type='submit' variant='contained'>Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reviews;