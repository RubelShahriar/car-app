import { Star } from '@mui/icons-material';
import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './DisplayReviews.css';

const DisplayReviews = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/reviews')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])

    return (
        <Container>
            <div className='reviews'>
                <div className='center'><h2>Consumers Reviews</h2></div>
                <div className='review-flex'>
                {
                packages.map(packages => 
                        <div className='reviews-item'>
                            <div>
                                <h3>{packages.displayName}</h3>
                                <div className='inner-flex'>
                                    <div>
                                        <Rating
                                        initialRating={packages.rating}
                                        emptySymbol="far fa-star star"
                                        fullSymbol="fas fa-star star"
                                        readonly>
                                        </Rating>
                                    </div>
                                    <div>{packages.dateString}</div>
                                </div>
                                <p>{packages.review}</p>
                            </div>
                        </div>
                    ) 
                }
             </div>
            </div>
        </Container>
    );
};

export default DisplayReviews;