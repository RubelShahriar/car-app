import { PermContactCalendar } from '@mui/icons-material';
import { Container } from '@mui/material';
import React from 'react';
import imageOne from '../images/news-one.jpeg';
import imagetwo from '../images/news-two.jpeg';
import imagethree from '../images/news-three.jpeg';
import './News.css';

const News = () => {
    return (
        <Container>
            <div className='news'>
            <h2>Our Latest News</h2>
            <div className='news-flex'>
                <div className='item'>
                    <div className='overflow'><img src={imageOne} alt=''></img></div>
                    <div className='inner-div'>
                        <small><PermContactCalendar className='news-icon'></PermContactCalendar> OCTOBER 19, 2021</small>
                        <h3>GM finds its balance with sales of pickups</h3>
                        <p>Bout avez was main jet. There are suivit bourse depuis. Them longues republique paraissents i people young evidemment reprende tristement</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='overflow'>
                    <img src={imagetwo} alt=''></img></div>
                    <div className='inner-div'>
                        <small><PermContactCalendar className='news-icon'></PermContactCalendar> OCTOBER 19, 2021</small>
                        <h3>GM finds its balance with sales of pickups</h3>
                        <p>Bout avez was main jet. There are suivit bourse depuis. Them longues republique paraissents i people young evidemment reprende tristement</p>
                    </div>
                </div>
                <div className='item'>
                <div className='overflow'><img src={imagethree} alt=''></img></div>
                    <div className='inner-div'>
                        <small><PermContactCalendar className='news-icon'></PermContactCalendar> OCTOBER 19, 2021</small>
                        <h3>GM finds its balance with sales of pickups</h3>
                        <p>Bout avez was main jet. There are suivit bourse depuis. Them longues republique paraissents i people young evidemment reprende tristement</p>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default News;