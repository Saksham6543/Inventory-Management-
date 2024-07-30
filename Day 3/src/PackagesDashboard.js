// PackagesDashboard.js
import React from 'react';
import './PackagesDashboard.css';

const PackagesDashboard = () => {
  return (
    <div className="packages-dashboard">
      <div className="package-column not-shipped">
        <div className="column-header">
          <h2>Packages, Not Shipped</h2>
          <span className="menu-icon">☰</span>
        </div>
        <div className="column-content">
          <p>No Records Found</p>
        </div>
      </div>
      <div className="package-column shipped">
        <div className="column-header">
          <h2>Shipped Packages</h2>
          <span className="menu-icon">☰</span>
        </div>
        <div className="column-content">
          <p>No Records Found</p>
        </div>
      </div>
      <div className="package-column delivered">
        <div className="column-header">
          <h2>Delivered Packages</h2>
          <span className="menu-icon">☰</span>
        </div>
        <div className="column-content">
          <p>No Records Found</p>
        </div>
      </div>
    </div>
  );
};

export default PackagesDashboard;
