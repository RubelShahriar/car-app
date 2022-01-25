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
        .then(data => setPackages(data.slice(3, 11)))
    }, [])
    return (
        <Container>
            <div className='products'>
            <div className='latest'><h1 style={{color: '#2C3E50'}}>Latest Products</h1></div>
            <div className='display'>
            {
                packages.map(packages => 
                <div className='item'>
                    <div className='image'>
                        <img src={packages.image} alt=''></img>
                    </div>
                    <div className='car-info'>
                        <h3 style={{marginTop: 0}}>Brand: {packages.name}</h3>
                        <p style={{marginBottom: 0}}><LocationOn className='icon'/> {packages.place}</p>
                        <p>price: ${packages.amount} -</p>
                        {/* <p>{packages.description}</p> */}
                        <Link style={{marginRight: '15px'}} to={`/purchase/${packages._id}`}><button>Details</button></Link>
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