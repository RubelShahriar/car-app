import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import './AddProduct.css';
import image from '../../components/images/add-product-dashboard.jpeg'
const AddProduct = () => {
    const {user} = useAuth();
    const {displayName, email} = user;
    const imageRef= useRef();
    const placeRef= useRef();
    const nameRef= useRef();
    const amountRef= useRef();
    const descriptionRef= useRef();
    const handleAddPackage = e => {
        const image= imageRef.current.value;
        const place= placeRef.current.value;
        const name = nameRef.current.value;
        const amount = amountRef.current.value;
        const description = descriptionRef.current.value;
        const packageInfo = {image, place, name, displayName, email, amount, description};

        
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
        <div className='flex'>
            <div className='image'>
                <img src={image} alt='img'></img>
            </div>
            <div className='add-product'>
                <div><h2>Add Product to Homepage</h2></div>
                    <form onSubmit={handleAddPackage}>
                        <input type="url" placeholder="Enter Image URL" ref={imageRef}></input>
                        <input type="text" placeholder="Enter Name" ref={nameRef}></input>
                        <input type="text" placeholder="Enter Place" ref={placeRef}></input>
                        <input type="text" placeholder="Enter Amount" ref={amountRef}></input>
                        <input type="text" placeholder="Enter Description" ref={descriptionRef}></input>
                        <input type="submit" className='submit' value="Add Product"></input>
                    </form>
            </div>
        </div>
    );
};

export default AddProduct;