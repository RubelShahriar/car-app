import React, { useEffect, useState } from 'react';
import { LocationOn } from '@mui/icons-material';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const [packages, setPackages] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        fetch(`http://localhost:4000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])

    const handleDeleteOrder = id => {
        const confirmation = window.confirm('Are you sure, you want to delete this order?')
        if(confirmation){
            const url = `http://localhost:4000/orders/${id}`;
            fetch(url, {
                method: 'delete'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remainingProducts = packages.filter(packages => packages._id !== id);
                    setPackages(remainingProducts);
                }
            })
        }
    }

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className='flex'>
            {
                packages.map(packages => 
                <div className='item'>
                    <div className='image'>
                        <img src={packages.image} alt=''></img>
                    </div>
                    <div className='inner-div'>
                        <h4>{packages.name}</h4>
                        <p><LocationOn className='location'/> {packages.place}</p>
                        <p className='price'>price: ${packages.amount}</p>
                        <p>{packages.description}</p>
                        <button onClick={() => handleDeleteOrder(packages._id)}>Delete Order</button>
                    </div>
                </div>) 
            }
            </div>
        </div>
    );
};

export default MyOrders;