import React, { useEffect, useState } from 'react';
import { LocationOn } from '@mui/icons-material';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const [packages, setPackages] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        fetch(`https://tranquil-hollows-86813.herokuapp.com/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])

    const handleDeleteOrder = id => {
        const confirmation = window.confirm('Are you sure, you want to delete this order?')
        if(confirmation){
            const url = `https://tranquil-hollows-86813.herokuapp.com/orders/${id}`;
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
                    <div className='inline'>
                        <img src={packages.image} alt=''></img>
                    </div>
                    <div className='inline'>
                        <p>{packages.name}</p>
                    </div>
                    <div className='inline'>
                        <p><LocationOn className='location'/> {packages.place}</p>
                    </div>
                    <div className='inline'>
                        <p>price: ${packages.amount}</p>
                    </div>
                    <div className='inline blue'>
                        <p onClick={() => handleDeleteOrder(packages._id)}>Cancel Order</p>
                    </div>
                </div>
                ) 
            }
            </div>
        </div>
    );
};

export default MyOrders;