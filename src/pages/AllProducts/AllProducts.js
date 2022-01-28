import { EventNoteRounded, LocationOn } from '@mui/icons-material';
import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../shared/Navigation/Navigation';
import './AllProducts.css';
const AllProducts = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-hollows-86813.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return (
        <>
        <Navigation></Navigation>
        <Container>
            <div className='all-products'>
            <div style={{textAlign: 'center'}}><h2>All Products</h2></div>
            <div className='display'>
            {
                packages.map(packages => 
                <div className='item'>
                    <div className='image'>
                        <img src={`data:image/png;base64,${packages.image}`} alt=''></img>
                    </div>
                    <div className='car-info'>
                        <h3 style={{margin: '0 auto'}}>Brand: {packages.productName}</h3>
                        <p><LocationOn className='icon'/> {packages.place} <span><EventNoteRounded className='icon'/>Model: {packages.versionYear}</span></p>
                        <p style={{fontSize: '20px'}}> Price: ${packages.originalPrice} - <span style={{textDecoration: 'line-through 2px', color: 'gray'}}> ${packages.discountPrice}</span></p>
                        <Link style={{marginRight: '15px'}} to={`/purchase/${packages._id}`}><button>Details</button></Link>
                        <Link to={`/purchase/${packages._id}`}><button>Purchase</button></Link>
                    </div>
                </div>) 
            }
            </div>
        </div>
        </Container>
        </>
    );
};

export default AllProducts;