import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
  const [packages, setPackages] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        fetch(`https://tranquil-hollows-86813.herokuapp.com/orderedItem?email=${user.email}`)
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])

    const handleDeleteOrder = id => {
        const confirmation = window.confirm('Are you sure, you want to delete this order?')
        if(confirmation){
            const url = `https://tranquil-hollows-86813.herokuapp.com/orderedItem/${id}`;
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
            <h2 style={{marginTop: '0'}}>My Orders</h2>
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
                            {/* <td><img style={{width: '100px', borderRadius: '5px'}} src={`data:image/png;base64,${packages.image}`} alt=''></img></td> */}
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