import React, { useEffect, useState } from 'react';
import { ArrowDropDown, DeleteForeverRounded } from '@mui/icons-material';
import './ManageOrder.css'
import { CircularProgress } from '@mui/material';

const ManageOrder = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-hollows-86813.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])

    //change status after click
    const changeStatus= (e) => {
        e.target.innerText = 'active'
    }
    //DELETE AN USER
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
                    const remainingProducts = order.filter(packages => packages._id !== id);
                    setOrder(remainingProducts);
                }
            })
        }
    }

    return (
        <div>
            <div className='orders'>
            <h2 style={{marginTop: '0'}}>Manage Orders</h2>
                {!order.length ? 
                <CircularProgress style={{marginTop: '10%'}}/> : 
                <table style={{margin: '0 auto', borderCollapse: 'collapse', width: '95%'}}>
                    <thead>
                        <tr>
                            <th><input type='checkbox'/></th>
                            <th>Order ID<ArrowDropDown style={{marginBottom: '-6px', marginLeft: '-4px'}}/></th>
                            <th>Date<ArrowDropDown style={{marginBottom: '-6px', marginLeft: '-4px'}}/></th>
                            <th>Order<ArrowDropDown style={{marginBottom: '-6px', marginLeft: '-4px'}}/></th>
                            <th>Customer<ArrowDropDown style={{marginBottom: '-6px', marginLeft: '-4px'}}/></th>
                            <th>Price<ArrowDropDown style={{marginBottom: '-6px', marginLeft: '-4px'}}/></th>
                            <th>Status<ArrowDropDown style={{marginBottom: '-6px', marginLeft: '-4px'}}/></th>
                            <th>Delete<ArrowDropDown style={{marginBottom: '-6px', marginLeft: '-4px'}}/></th>
                        </tr>
                    </thead>
                        {order.map(order => 
                    <tr>
                        <td><input type='checkbox'></input></td>
                        <td>{order._id}</td>
                        <td>{order.dateString}</td>
                        <td>{order.name}</td>
                        <td>{order.displayName}</td>
                        <td>${order.discountPrice}</td>
                        <td><p style={{color: '#9B59B6', margin: '0', border: '1px solid #9B59B6', borderRadius:'5px', background: '#F5EEF8', cursor: 'pointer'}} onClick={(e) => changeStatus(e)}>pending...</p></td>
                        <td><p style={{margin: 0}} title='delete'><DeleteForeverRounded style={{color: '#D4AC0D', fontSize: '1.8em', cursor: 'pointer'}} onClick={() => handleDeleteOrder(order._id)} /></p></td>
                    </tr>
                        )}
                </table>
                }
            </div>
        </div>
    );
};

export default ManageOrder;