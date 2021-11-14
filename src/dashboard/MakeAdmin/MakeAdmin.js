import { Alert } from '@mui/material';
import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const getValueFromInput = e => {
        setEmail(e.target.value);
    }
    const handleOnsubmit = e => {
        const user = {email};
        fetch('http://localhost:4000/users/admin', {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data)
                setSuccess(true)
            }
        })
        e.target.value = '';
        e.preventDefault();
    }
    return (
        <div className='make-admin'>
            <h3>Make An Admin</h3>
            <form onSubmit={handleOnsubmit}>
                <input type='email' onBlur={getValueFromInput} placeholder='Enter a email'></input>
                <button type='submit'>Make Admin</button>
            </form>
            {success && <Alert severity="success">made admin successfully — check it out!</Alert>}
        </div>
    );
};

export default MakeAdmin;