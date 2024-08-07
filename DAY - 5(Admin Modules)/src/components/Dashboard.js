import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Navbar />
        <div style={{ padding: '1rem', minHeight: 'calc(100vh - 64px - 56px)' }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
