import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, isLoading, loginUser, signInWithGoogle, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item sx={{ mt: 8 }} xs={4} sm={8} md={6} style={{ margin: "auto", backgroundColor: 'lightgoldenrodyellow', borderRadius: '30px', marginTop: '70px', padding: '40px' }}>
                <Typography variant="h4" gutterBottom sx={{ color: "teal", fontWeight: '700' }}>
                    Login
                </Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onBlur={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleOnChange}
                        variant="standard" />

                    <Button className="button" sx={{ width: '75%', m: 1, backgroundColor: 'teal', color: 'white' }} variant="outline-success" type="submit">Login</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text">New user? Please Register</Button>
                    </NavLink>
                    {isLoading && <CircularProgress></CircularProgress>}
                    {user?.email && <Alert severity="success">user Login successfully </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>
                <p>===========OR==========</p>
                <Button className="button" sx={{ width: '75%', m: 1, marginBottom: '20px', backgroundColor: 'teal', color: 'white' }} variant="outline-success" onClick={handleGoogleSignIn} type="submit">Google Sign In</Button>
            </Grid>
        </Grid>
    );
};

export default Login;