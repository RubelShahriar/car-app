import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { CircularProgress, Container } from '@mui/material';
import Slider from 'react-slick';
import quoteImage from '../../components/images/review-quote.png'
import './DisplayReviews.css';

const DisplayReviews = () => {
    //slick-slider part
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3.2,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 500,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 430,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    };

    //review part
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-hollows-86813.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

    return (
        <Container>
            <div style={{textAlign: 'center', margin: '60px 0'}}>
                <div><h1 style={{color: '#2C3E50'}}>Consumers Reviews</h1></div>
                {!review.length ? 
                <div style={{textAlign: 'center'}}><CircularProgress></CircularProgress></div> :
                <Slider {...settings}>
                {review.map(packages => 
                        <div className='reviews-item'>
                                <div style={{marginTop: '30px'}}>
                                    <img style={{margin: '0 auto'}} src={quoteImage} alt=''></img>
                                </div>
                                <div className='scroll-bar'
                                style={{
                                    marginTop: '20px',
                                    height: '150px',
                                    overflow: 'hidden', 
                                    overflowY: 'scroll',
                                    textAlign: 'center'}}>
                                    <p className='text' style={{textAlign: 'center', fontSize: '28px'}}>{packages.review}</p>
                                </div>
                                <h3 className='name' style={{marginTop: '20px'}}>{packages.displayName}</h3>
                                <div>
                                    <div>
                                        <Rating
                                        initialRating={packages.rating}
                                        style={{color: '#ffc107'}}
                                        emptySymbol="far fa-star star"
                                        fullSymbol="fas fa-star star"
                                        readonly>
                                        </Rating>
                                    </div>
                                    <div className='date' style={{marginTop: '10px'}}>{packages.dateString}</div>
                                </div>
                        </div>
                )}
                </Slider>
                }
            </div>
        </Container>
    );
};

export default DisplayReviews;