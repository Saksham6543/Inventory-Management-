import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home1 from './Homepage';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';


import './styles.css'; 


const App = () => {


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
