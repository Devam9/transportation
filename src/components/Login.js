// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Login() {
    // States to store form data and messages
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Handle form submission
    const handleLogin = async (e) => {
        e.preventDefault();

        // Send a POST request to your login API
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username: username,
                password: password
            });

            // Check if the login was successful and store JWT token
            if (response.data.token) {
                // Store JWT token in localStorage or sessionStorage
                localStorage.setItem('token', response.data.token);
                setError('');  // Clear any previous errors
                
                
            }
        } catch (error) {
            // Handle error (e.g., wrong credentials)
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className='background'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                

                {error && <p className="error-message">{error}</p>}

                <p>Don't have an account? <Link to="/Signup">Signup here</Link></p>

                <button type="submit">Login</button>
            </form>
            </div>
        </div>
    );
}

export default Login;
