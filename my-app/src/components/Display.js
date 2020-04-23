import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Display = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosWithAuth('/api/users')
            .get('users')
            .then(res => {
                setUsers(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log('Error getting users', err.response)
            })
    }, [])

    return (
        <div>
            <h2>Node Auth Project Users</h2>
            {users.map(prop => {
                return (
                    <div>
                        <h3 key={prop.id}>
                            Users: {prop.username}
                            Password: {prop.password}
                        </h3>
                    </div>
                )
            })}
        </div>
    );
};

export default Display;