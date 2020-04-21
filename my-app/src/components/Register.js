import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';


const Register = props => {
    const [register, setRegister] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (e, props) => {
        e.preventDefault();
        setRegister({
            username: "",
            password: ""
        });
        
        axiosWithAuth()
            .post('/api/auth/register', register)
            .then(res => {
                console.log(res);
                props.history.push('/login');
            })
            .catch(error => {
                console.log('Error', error);
            });
    };

    const handleChange = e => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={register.username} 
                    onChange={handleChange}
                    />
                <input
                    type='text'
                    name='password'
                    placeholder='Password'
                    value={register.password} 
                    onChange={handleChange}
                    />
                    <button type='submit'>Sign Up</button>
                    <p>Already have an account?
                        <Link to='/login'>Login</Link>
                    </p>
            </form>
        </div>
    );
};

export default Register;