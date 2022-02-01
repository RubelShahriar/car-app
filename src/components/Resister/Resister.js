import React, { useState } from 'react';
import { Alert, AlertTitle, Button, CircularProgress, TextField } from '@mui/material';
import './Resister.css';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Navigation from '../../shared/Navigation/Navigation';

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
        <>
        <Navigation></Navigation>
        <div className='resister'>
                        <div style={{textAlign: 'center',  marginTop: '100px', marginBottom: '30px'}}><h2>Create a new Accout</h2></div>
            <div className='grid'>
                        <div></div>
                        <div style={{textAlign: 'center'}}>
                            {!isLoading &&
                                <form onSubmit={handleResisterSubmit}>
                                    <div><TextField
                                    className='alignment'
                                    id="outlined-basic" 
                                    sx= {{ width: '70%', mb: 2 }}
                                    onBlur={getInputValue}
                                    name='name'
                                    label="Name" 
                                    variant="outlined" /></div>
                                    <div><TextField
                                    className='alignment'
                                    id="outlined-basic" 
                                    sx= {{ width: '70%', mb: 2 }}
                                    onBlur={getInputValue}
                                    name='email'
                                    label="Email" 
                                    type='email'
                                    variant="outlined" /></div>
                                    <div><TextField
                                    className='alignment'
                                    id="outlined-basic" 
                                    sx={{width:'70%', mb: 2}} 
                                    label="Password" 
                                    onBlur={getInputValue}
                                    name='password'
                                    type='password' 
                                    variant="outlined" /></div>
                                    <div><TextField
                                    className='alignment'
                                    id="outlined-basic" 
                                    sx={{width:'70%', mb: 2}} 
                                    label="Re-enter Password" 
                                    onBlur={getInputValue}
                                    name='password2'
                                    type='password' 
                                    variant="outlined" /></div>
                                    <Button 
                                    className='signup-btn'
                                    variant="contained" 
                                    type='submit' 
                                    sx={{width: '70%', mb: 2}}> 
                                    Resister
                                    </Button>
                                </form>
                            }
                                {isLoading && <CircularProgress />}
                                <div style={{width: '70%', margin: '0 auto'}}>{user.email && <Alert  severity="success">This is a success alert — check it out!</Alert>}
                                </div>
                                <div style={{width: '70%', margin: '0 auto'}}>{errors && <Alert severity="error">
                                    <AlertTitle>{errors}</AlertTitle>
                                    This is an error alert — <strong>check it out!</strong>
                                    </Alert>}
                                </div>
                                <p>Already have an Accout? please <Link to='/login'>Log in</Link> </p>
                        </div>

            </div>
        </div>
        </>
    );
};

export default Resister;