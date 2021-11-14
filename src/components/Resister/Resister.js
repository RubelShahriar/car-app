import React, { useState } from 'react';
import { Alert, AlertTitle, Button, CircularProgress, TextField } from '@mui/material';
import './Resister.css';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Resister = () => {
    const history = useHistory();
    const [inputData, setInputData] = useState({});
    const {createUserAccount, errors, isLoading, user} = useAuth();

    const getInputValue = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInputData = {...inputData}
        newInputData[field] = value;
        console.log(newInputData)
        setInputData(newInputData);
    } 

    const handleResisterSubmit = e => {
        if(inputData.password !== inputData.password2){
            alert("Your password didn't matched")
            return;
        }
        createUserAccount(inputData.email, inputData.password, inputData.name, history)
        e.target.value = '';
        e.preventDefault();
    }

    return (
        <div className='resister'>
            <div>
                <div className='center'><h2>Create a new Accout</h2></div>
            <div className='center'>
            {!isLoading &&<form onSubmit={handleResisterSubmit}>
                <div><TextField
                className='alignment'
                 id="outlined-basic" 
                 sx= {{ width: '1', mt: 20, mb: 2 }}
                 onBlur={getInputValue}
                 name='name'
                 label="Name" 
                 variant="outlined" /></div>
                <div><TextField
                 id="outlined-basic" 
                 sx= {{ width: '1', mt: 2, mb: 2 }}
                 onBlur={getInputValue}
                 name='email'
                 label="Email" 
                 type='email'
                 variant="outlined" /></div>
                <div><TextField
                 id="outlined-basic" 
                 sx={{width:'1', mb: 2}} 
                 label="Password" 
                 onBlur={getInputValue}
                 name='password'
                 type='password' 
                 variant="outlined" /></div>
                <div><TextField
                 id="outlined-basic" 
                 sx={{width:'1', mb: 2}} 
                 label="Retype-Password" 
                 onBlur={getInputValue}
                 name='password2'
                 type='password' 
                 variant="outlined" /></div>
                <Button 
                variant="contained" 
                type='submit' 
                sx={{width: '1', mb: 2}}> 
                Resister
                </Button>
            </form>}
            </div>
            <h3>Already have an Accout? please <Link to='/login'>Log in</Link> </h3>
            {isLoading && <CircularProgress />}
            <div>{user.email && <Alert className='short' severity="success">This is a success alert — check it out!</Alert>}</div>
            <div>{errors && <Alert className="short" severity="error">
                <AlertTitle>{errors}</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
                </Alert>}</div>
            </div>
        </div>
    );
};

export default Resister;