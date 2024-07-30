import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import images from './Assets/index1';
import AppBar from './components/AppBar2'; // Import AppBar

import './features.css'; // Import the CSS file

function Features() {
  const navigate = useNavigate(); // Initialize navigate

  const handleBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className='bg'>
    <div className="features-page">
    <AppBar /> {/* Include the AppBar component */}
    <div className="about-page" style={{ marginTop: '90px' }}> {/* Adjust marginTop as needed */}
      <button className="back-button" onClick={handleBack} style={{ marginTop: '50px' }}>Back</button> {/* Back button */}
      <h2 style={{ fontSize: '35px' }}>Features</h2>
      <div className="features-container">
        <div className="feature-item">
          <img src={images.inve1} alt="Track Inventory" className="feature-image" />
          <div className="feature-description">
            <h3>Track Inventory</h3>
            <p>Efficiently track inventory levels in real-time, ensuring you always have accurate data at your fingertips.</p>
          </div>
        </div>
        <div className="feature-item">
          <img src={images.inve4} alt="Generate Reports" className="feature-image" />
          <div className="feature-description">
            <h3>Generate Reports</h3>
            <p>Create detailed reports on inventory status, sales trends, and more to make informed decisions.</p>
          </div>
        </div>
        <div className="feature-item">
          <img src={images.inve2} alt="Manage Orders" className="feature-image" />
          <div className="feature-description">
            <h3>Manage Orders</h3>
            <p>Streamline the order management process, from creation to fulfillment, with an easy-to-use interface.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Features;
