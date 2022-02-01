import { Alert, AlertTitle, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../shared/Navigation/Navigation'
import './Login.css';

const Login = () => {
    const [inputData, setInputData] = useState({});
    const {user, signInWithGoogle, errors, isLoading, loginUser} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const getInputValue = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInputData = {...inputData}
        newInputData[field] = value;
        setInputData(newInputData);
    }

    const handleLoginSubmit = e => {
        loginUser(inputData.email, inputData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <>
        <Navigation></Navigation>
        <div className='log-in-top'>
                <div style={{textAlign: 'center',  marginTop: '100px', marginBottom: '30px'}}><h2>Log in Here</h2></div>
            <div className='login'>
                <div></div>
                <div style={{textAlign: 'center' }}>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField
                    className='input-alignment'
                    id="outlined-basic" 
                    sx= {{ width: '1',  mb: 3 }}
                    onBlur={getInputValue}
                    name='email'
                    label="Email" 
                    type='email'
                    variant="outlined" />
                    <TextField
                    className='input-alignment'
                    id="outlined-basic" 
                    sx={{width:'1', mb: 2}} 
                    label="Password" 
                    onBlur={getInputValue}
                    name='password'
                    type='password' 
                    variant="outlined" />
                    <Button variant="contained" className='display'type='submit'>Sign In</Button>
                    </form>
                    <p>New User? Please <Link to='/resister'>Resister</Link> OR,</p>
                    <Button sx={{ mb: 2}}  onClick={handleGoogleSignIn} className='display' variant="contained">Sign In With Google</Button>
                    {isLoading && <CircularProgress />}
                    {user.email && <Alert className='input-alignment' severity="success">This is a success alert — check it out!</Alert>}
                    {errors && <Alert className='input-alignment' severity="error"><AlertTitle>{errors}</AlertTitle>This is an error alert — <strong>check it out!</strong></Alert>}
                </div>
                <div></div>
            </div>
        </div>
        </>
    );
};

export default Login;