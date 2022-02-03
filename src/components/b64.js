import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
  const [packages, setPackages] = useState([]);
    const {user} = useAuth();

    //fetch Data
    useEffect(() => {
        async function fetchData(){
            fetch(`http://localhost:4000/orderedItem?email=${user.email}`)
            .then(res => res.json())
            .then(data => setPackages(data))
        }
        fetchData()
    }, [])

    //delete an order
    const handleDeleteOrder = id => {
        const confirmation = window.confirm('Are you sure, you want to delete this order?')
        if(confirmation){
            const url = `http://localhost:4000/orderedItem/${id}`;
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
            {!packages.length ? 
                <CircularProgress style={{marginTop: '10%'}}/> :
            <table style={{margin: '0 auto', borderCollapse: 'collapse', width: '90%'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Version</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                    {packages.map(packages => 
                        <tr>
                            <td>{packages.productName}</td>
                            <td>{packages.place}</td>
                            <td>{packages.versionYear}</td>
                            <td>${packages.discountPrice}</td>
                            <td>
                                <p style={{border: '1px solid #F4D03F', borderRadius: '5px', color: '#D4AC0D',background: '#FEF9E7',padding: '0 3px', margin: '0', display: 'inline'}} onClick={() => handleDeleteOrder(packages._id)}>Cancel Order</p>
                            </td>
                        </tr>
                    )}
                </table>
            }
        </div>
    );
};

export default MyOrders;
//at the first render everything is ok, but when i refresh or reload the page fetch doesn't work, in the console i get an empty array. why there is no data after refreshing the page. i tried with async function. it doesn't work. in stack overflow, there are many solutions near my problem. but no one worked for me. is there anyone to help, how can i solve this?

