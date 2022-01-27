import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import './AddProduct.css';
import image from '../../components/images/add-product-dashboard.jpeg'
import { Button, TextField } from '@mui/material';
const AddProduct = () => {
    const {user} = useAuth();
    const {displayName, email} = user;
    const imageRef= useRef();
    const placeRef= useRef();
    const nameRef= useRef();
    const discountRef= useRef();
    const realRef= useRef();
    const descriptionRef= useRef();
    const versionRef= useRef();
    const handleAddPackage = e => {
        const image= imageRef.current.value;
        const place= placeRef.current.value;
        const name = nameRef.current.value;
        const discountPrice = discountRef.current.value;
        const realPrice = realRef.current.value;
        const description = descriptionRef.current.value;
        const version = versionRef.current.value;
        const packageInfo = {image, place, name, displayName, email, realPrice, discountPrice, description, version};

        
        fetch('https://tranquil-hollows-86813.herokuapp.com/cars', { 
            method: 'post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(packageInfo),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Product Added Successfully')
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div className='add-product'>
        <div style={{textAlign: 'center', fontSize: '30px', margin: '20px 0'}}>Add Product to Productpage</div>
        <div className='a-grid'>
            <div className='image'>
                <img src={image} alt='img'></img>
            </div>
            <div>
                <form onSubmit={handleAddPackage}>
                    <TextField sx={{width: '75%', mb: 2}} type='url' required id="outlined-required" label="Image URL" ref={imageRef}/>
                    <TextField sx={{width: '75%', mb: 2}} type='text' required id="outlined-required" label="Product Name" ref={nameRef}/>
                    <TextField sx={{width: '75%', mb: 2}} type='text' required id="outlined-required" label="Place" ref={placeRef}/>
                    <TextField sx={{width: '75%', mb: 2}} type='number' required id="outlined-required" label="Product Price" ref={realRef}/>
                    <TextField sx={{width: '75%', mb: 2}} type='number' required id="outlined-required" label="Discount Price" ref={discountRef}/>
                    <TextField sx={{width: '75%', mb: 2}} type='number' required id="outlined-required" label="Version Year" ref={versionRef}/>
                    <TextField sx={{width: '75%', mb: 2}} type='text' required id="outlined-required" label="Product Description" ref={descriptionRef}/>
                    <Button sx={{width: '75%', mb: 2}} type='submit' variant='contained'>Add Product</Button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default AddProduct;