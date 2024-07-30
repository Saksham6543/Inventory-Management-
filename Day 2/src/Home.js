import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Footer from './Footer';
import AppBar from './AppBar'; // Import the AppBar component

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); // Assuming the login page route is '/login'
  };

  return (
    <div>
      <AppBar /> {/* Include the AppBar component */}
      <div className="home">
        <header className="hero">
          <h1>Welcome to Our Supply Chain Management!!!</h1>
          <p>Unified service management platform for the digital enterprise</p>
          <button onClick={handleLogin} className="login-btn">Login</button>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
