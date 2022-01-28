import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './AddProduct.css';
import addProductImage from '../../components/images/add-product-dashboard.jpeg'
import { Button, Input, TextField } from '@mui/material';
const AddProduct = () => {
    const [image, setImage] = useState(null)
    const [productName, setProductName] = useState('')
    const [place, setPlace] = useState('')
    const [originalPrice, setOriginalPrice] = useState(0)
    const [discountPrice, setDiscountPrice] = useState(0)
    const [versionYear, setVersionYear] = useState(0)
    const [description, setDiscription] = useState('')
    const {user} = useAuth();
    const {displayName, email} = user;
    //handle add product form submit
    const handleAddProduct = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('displayName', displayName)
        formData.append('email', email)
        formData.append('image', image)
        formData.append('productName', productName)
        formData.append('place', place)
        formData.append('originalPrice', originalPrice)
        formData.append('discountPrice', discountPrice)
        formData.append('versionYear', versionYear)
        formData.append('description', description)
        //fetch car api 
        fetch('https://tranquil-hollows-86813.herokuapp.com/products', {
            method: 'POST',
            body: formData
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Product Added Successfully')
                }
            })
            .catch(error => {
            console.error('Error:', error);
            });
    }
    return (
        <div className='add-product'>
        <div style={{textAlign: 'center', fontSize: '30px', margin: '20px 0'}}>Add Product to Productpage</div>
        <div className='a-grid'>
            <div className='image'>
                <img src={addProductImage} alt='img'></img>
            </div>
            <div>
                <form onSubmit={handleAddProduct}>
                    <Input sx={{width: '75%', mb: 2}} accept="image/*" type="file" onChange={(e) => setImage(e.target.files[0])} />
                    <TextField sx={{width: '75%', mb: 2}} onChange={(e) => setProductName(e.target.value)} type='text' variant='standard' label="Product Name" />
                    <TextField sx={{width: '75%', mb: 2}} onChange={(e) => setPlace(e.target.value)} type='text' variant='standard' label="Place" />
                    <TextField sx={{width: '75%', mb: 2}} onChange={(e) => setOriginalPrice(e.target.value)} type='number' variant='standard' label="Product Price" />
                    <TextField sx={{width: '75%', mb: 2}} onChange={(e) => setDiscountPrice(e.target.value)} type='number' variant='standard' label="Discount Price" />
                    <TextField sx={{width: '75%', mb: 2}} onChange={(e) => setVersionYear(e.target.value)} type='number' variant='standard' label="Version Year" />
                    <TextField sx={{width: '75%', mb: 3}} onChange={(e) => setDiscription(e.target.value)} type='text' variant='standard' label="Product Description" />
                    <Button sx={{width: '75%'}} type='submit' variant='contained'>Add Product</Button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default AddProduct;