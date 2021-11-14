import React, { useRef } from 'react';
import './Reviews.css';
import useAuth from '../../hooks/useAuth';

const Reviews = () => {
    const {user} = useAuth();
    const {displayName, email} = user;
    const date  = new Date;
    const dateString = date.toLocaleDateString();
    const ratingRef= useRef();
    const reviewRef= useRef();
    const handleAddReview = e => {
        const rating = ratingRef.current.value;
        const review = reviewRef.current.value;
        const packageInfo = { displayName, email, rating, review, dateString};

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
                alert('Package Added Successfully')
                e.target.reset();
            }
        })
        e.preventDefault();
    }

    return (
        <div className='reviews'>
            <h3>Review this product</h3>
            <div>
                <form onSubmit={handleAddReview}>
                    <input type='text' defaultValue={displayName}></input>
                    <input type='text' defaultValue={email}></input>
                    <input type='number' placeholder='Enter rating number 1 to 5' ref={ratingRef}></input>
                    <textarea placeholder='Write your reviews' ref={reviewRef}></textarea>
                    <button type='submit'>Add Review</button>
                </form>
            </div>
        </div>
    );
};

export default Reviews;