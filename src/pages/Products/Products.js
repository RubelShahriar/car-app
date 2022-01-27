import { LocationOn, EventNoteRounded } from '@mui/icons-material';
import { CircularProgress, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-hollows-86813.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setPackages(data.slice()))
    }, [])
    return (
        <Container>
            <div className='products'>
            <div className='latest'><h1 style={{color: '#2C3E50'}}>Latest Products</h1></div>
            {!packages.length ? 
            <div style={{textAlign: 'center'}}><CircularProgress></CircularProgress></div> :
            <div className='display'>
                {packages.map(packages => 
                <div className='item'>
                    <div className='image'>
                        <img src={packages.image} alt=''></img>
                    </div>
                    <div className='car-info'>
                        <h3 style={{marginTop: 0}}>Brand: {packages.name}</h3>
                        <div style={{display: 'flex'}}><p style={{marginBottom: 0}}><LocationOn className='icon'/> {packages.place}</p>
                        <p style={{marginBottom: 0, marginLeft: '10px'}}><EventNoteRounded className='icon'/>Model: {packages.version}</p></div>
                        <p style={{fontSize: '20px'}}> Price: ${packages.discountPrice} - <span style={{textDecoration: 'line-through 2px', color: 'gray', fontWeight: 'bold'}}> ${packages.discountPrice}</span></p>
                        <Link style={{marginRight: '15px'}} to={`/purchase/${packages._id}`}><button>Details</button></Link>
                        <Link to={`/purchase/${packages._id}`}><button>Purchase</button></Link>
                    </div>
                </div>)}
            </div>
            }
        </div>
        </Container>
    );
};

export default Products;