import React, { useRef } from 'react';
import './Reviews.css';
import useAuth from '../../hooks/useAuth';
import image from '../../components/images/dash-img.jpeg'

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
                alert('Review Added Successfully')
                e.target.reset();
            }
        })
        e.preventDefault();
    }

    return (
        <div className='review'>
            <div className='image'>
                <img src={image} alt='img'></img>
            </div>
            <div className='reviews'>
                <div className='title'>
                    <h2>Review a product</h2>
                </div>
                <div className='flex-review'>
                    <form onSubmit={handleAddReview}>
                        <input type='text' placeholder='Your Name' defaultValue={displayName}></input>
                        <input type='text' placeholder='Your Email' defaultValue={email}></input>
                        <input type='number' placeholder='Enter rating number 1' ref={ratingRef}></input>
                        <textarea placeholder='Write your reviews' ref={reviewRef}></textarea>
                        <button type='submit'>Add Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reviews;