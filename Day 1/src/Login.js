import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="container">
      {/* <img src="path_to_your_logo.png" alt="Logo" /> */}
      <h1>Signin to your account</h1>
      <form>
        <label>Email address/PhoneNumber</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="remember-me">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <div className="forgot-password">
          <a href="#">Forgot your password?</a>
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <a href="#" className="secondary-button" onClick={handleSignUp}>Don't Have an Account, Please Register now</a>
    </div>
  );
};

export default Login;
