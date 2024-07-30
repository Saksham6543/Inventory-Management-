import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AppBar from './components/AppBar2'; // Import AppBar
import images from './Assets/index1';
// import './about.css';

function AboutUs() {
  const navigate = useNavigate(); // Initialize navigate

  const handleBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div>
      <AppBar /> {/* Include the AppBar component */}
      <div className="about-page" style={{ marginTop: '90px' }}> {/* Adjust marginTop as needed */}
        <button className="back-button" onClick={handleBack} style={{ marginTop: '50px' }}>Back</button> {/* Back button */}
        <h2 style={{ textAlign: 'center' }}>About Us</h2>
        <img 
          src={images.inve3} 
          alt='About us' 
          style={{ 
            height: '300px', /* Adjust the height as needed */
            width: 'auto', 
            display: 'block', 
            margin: '0 auto' 
          }} 
        />
        <p style={{ textAlign: 'center' }}>
          Our Inventory Management System is designed to help businesses track and manage their inventory with ease.
          From tracking stock levels to generating detailed reports and managing orders, our system provides all the
          tools you need to keep your business running smoothly.
        </p>
        <p style={{ textAlign: 'center' }}>
          It provides businesses with real-time visibility into stock levels, automates order processing,
          and generates detailed reports for informed decision-making. Key features include real-time tracking,
          automated alerts for low stock, and integration with other business systems. By using such a platform,
          businesses can enhance operational efficiency, reduce manual errors, and achieve better control over inventory costs,
          ultimately leading to improved overall performance and cost savings.
        </p>
        <p style={{ textAlign: 'center' }}>
          We prioritize security and reliability to ensure your data is always safe and accessible. Our user-friendly
          interface and comprehensive features make us a trustworthy partner for your business.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
