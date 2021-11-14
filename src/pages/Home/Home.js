import React from 'react';
import Banner from '../../components/Banner/Banner';
import News from '../../components/News/News';
import DisplayReviews from '../../dashboard/DisplayReivews/DisplayReviews';
import Reviews from '../../dashboard/Reviews/Reviews';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <News></News>
            <DisplayReviews></DisplayReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;