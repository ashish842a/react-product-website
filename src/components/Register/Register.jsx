// Register.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Register.css'

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const registerData = {
        name: name,
        email: email,
        password: password,
      };

      // Send a POST request to the registration endpoint
      const response = await axios.post('http://localhost:8080/register', registerData);
      console.log(response);
      // Assuming your backend sends a success message upon successful registration
      if (response.data) {
        // Redirect to the home page
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('user',response.data.user)
        navigate('/');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed. Please try again.',error);
    }
  };

  return (
    <div className='container-register'>
      <h1>Register Page</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={handleRegister}>Register</button>
      </div>
      <div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
