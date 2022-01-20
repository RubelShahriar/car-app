import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './DisplayReviews.css';
import quoteImage from '../../components/images/review-quote.png'
import Slider from 'react-slick';

const DisplayReviews = () => {
    //slick-slider part
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 3.2,
        slidesToScroll: 1
      };
    //review part
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-hollows-86813.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])

    return (
        <Container>
            <div style={{textAlign: 'center', margin: '60px 0'}}>
                <div><h2>Consumers Reviews</h2></div>
                <Slider {...settings}>
                {packages.map(packages => 
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
            </div>
        </Container>
    );
};

export default DisplayReviews;