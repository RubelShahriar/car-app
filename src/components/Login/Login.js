import { Alert, AlertTitle, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
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
        <div className='login'>
            <div>
                <div className='heading'><h2>Log In Here!</h2></div>
            <div><form onSubmit={handleLoginSubmit}>
                <TextField
                 id="outlined-basic" 
                 sx= {{ width: '1', mt: 20, mb: 2 }}
                 onBlur={getInputValue}
                 name='email'
                 label="Email" 
                 type='email'
                 variant="outlined" />
                <TextField
                 id="outlined-basic" 
                 sx={{width:'1', mb: 2}} 
                 label="Password" 
                 onBlur={getInputValue}
                 name='password'
                 type='password' 
                 variant="outlined" />
                <Button 
                    variant="contained" 
                    className='display'
                    type='submit' 
                    sx={{width: '1'}}>
                        Sign In
                </Button>
            </form></div>
            <p>New User? Please <Link to='/resister'>Resister</Link> OR,</p>
            <div><Button sx={{width:'1', mb: 2}}  onClick={handleGoogleSignIn} variant="contained">SignIn With Google</Button></div>
            {isLoading && <CircularProgress />}
            <div>{user.email && <Alert  severity="success">This is a success alert — check it out!</Alert>}</div>
            <div>{errors && <Alert severity="error">
                <AlertTitle>{errors}</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
                </Alert>}</div>
            </div>
        </div>
    );
};

export default Login;