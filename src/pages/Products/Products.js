import { LocationOn } from '@mui/icons-material';
import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-hollows-86813.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setPackages(data.slice(1, 7)))
    }, [])
    return (
        <Container>
            <div className='products'>
            <div className='latest'><h2>Latest Products</h2></div>
            <div className='display'>
            {
                packages.map(packages => 
                <div className='item'>
                    <div className='image'>
                        <img src={packages.image} alt=''></img>
                    </div>
                    <div className='car-info'>
                        <h3>Brand: {packages.name}</h3>
                        <p><LocationOn className='icon'/> {packages.place} <span>price: ${packages.amount}</span></p>
                        <p>{packages.description}</p>
                        <Link to={`/purchase/${packages._id}`}><button>Purchase</button></Link>
                    </div>
                </div>) 
            }
            </div>
        </div>
        </Container>
    );
};

export default Products;