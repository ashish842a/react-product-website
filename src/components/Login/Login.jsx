// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin =async () => {


    let loginData = {
        email:email,
        password:password
    }

    let res =await axios.post('http://localhost:8080/login',loginData)
    console.log(res);
    if (res.data!=null) {
      // Set isLogin to true
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', (res.data.user));

      // Navigate to '/'
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <div className="input-group">
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-group">
        <button className="btn btn-primary" onClick={handleLogin}>
          <span className="fa fa-paper-plane"></span> Login
        </button>
      </div>
    </div>
  );
};

export default Login;
