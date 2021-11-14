import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [order, setOrder] = useState([]);
    const {name}  = order;
    useEffect(() => {
        fetch('https://tranquil-hollows-86813.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])
    return (
        <div>
            <h2>ManageOrder</h2>

        </div>
    );
};

export default ManageOrder;