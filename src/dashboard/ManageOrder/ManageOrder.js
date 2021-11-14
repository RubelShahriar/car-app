import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [order, setOrder] = useState([]);
    const {name}  = order;
    useEffect(() => {
        fetch('http://localhost:4000/orders')
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])
    return (
        <div>
            <h2>ManageOrder{order.length}</h2>

        </div>
    );
};

export default ManageOrder;