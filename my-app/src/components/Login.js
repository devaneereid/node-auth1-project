import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = (props) => {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    const handleChanges = e => {
        setLogin({
            ...login, [e.target.name]: e.target.value
        });
        console.log(e.target.name, e.target.value);
    };

    const handleSubmit = (e, props) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/auth/login', login)
        .then(res => {
            console.log('Login', res)
            localStorage.setItem('token', res.data.payload);
            props.history.push("/display");
            props.login(login);
        })
        .catch(error => {
            console.log('Login Error', error)
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <input  
                type='text'
                name='username'
                placeholder='Username'
                value={login.username}
                onChange={handleChanges}
                />
            <input  
                type='text'
                name='password'
                placeholder='Password'
                value={login.password}
                onChange={handleChanges}
                />
            <button 
                type='submit'
                onClick={handleSubmit}
                >Login Now</button>
        </div>
    );
};

export default Login;