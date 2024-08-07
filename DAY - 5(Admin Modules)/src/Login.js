import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-background">
      <div className="container">
        <div className="left">
          <p className="monash-heading">
            <span style={{ color: '#FF0000' }}>M</span>
            <span style={{ color: '#DAA520' }}>O</span>
            <span style={{ color: '#8B008B' }}>N</span>
            <span style={{ color: '#008000' }}>A</span>
            <span style={{ color: '#0000FF' }}>S</span>
            <span style={{ color: '#4B0082' }}>H</span>
          </p>
          <p className="animated-heading">Sign in</p>
          <p>to access Inventory</p>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button onClick={handleLogin} className="primary-button">
            Login
          </button>
          <div className="signup-container">
            <p>
              Don't have a MONASH account?{' '}
              <span className="secondary-small" onClick={handleSignup} style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}>
                Signup
              </span>
            </p>
          </div>
        </div>
        <div className="right">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzoeBdl1rocMv8k8rSDjSxoW_QO4-jZz5dMA&s"
            width="350"
            height="450"
            alt="Login illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
