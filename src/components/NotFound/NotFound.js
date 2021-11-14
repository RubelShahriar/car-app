import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import notfound from '../images/404-error-page-templates.jpeg';

const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={notfound} alt=''></img>
            <Link to='/home'><h2>Back to Home</h2></Link>
        </div>
    );
};

export default NotFound;