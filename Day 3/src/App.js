import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Features from './Features';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Footer from './Footer';
import Dashboard from './components/Dashboard';
import AppBar1 from './components/AppBar1';
import Items from './Items';
import AddSalesOrderPage from './AddSalesOrderPage';
import InventoryManager from './InventoryManager';
import CartPage from './CartPage';
import ItemGroupsManager from './ItemGroupsManager';
import Sidebar from './components/Sidebar1';
import PackagesDashboard from './PackagesDashboard';
import SalesDashboard from './SalesDashboard'; // Import SalesDashboard component
import './styles.css';

const sampleItems = {
  groups: {
    'Footwear': [
      { productName: 'Puma sneaker', productSKU: '5', productPrice: '6000', description: 'For Male' },
    ],
    'Personal Care': [
      { productName: 'Himalaya', productSKU: '60', productPrice: '150', description: 'Body soap' },
    ],
    'Apparel': [
      { productName: 'Jockey vest', productSKU: '17', productPrice: '200', description: 'All size' },
    ],
    'Electronics': [
      { productName: 'MI PowerBank', productSKU: '15', productPrice: '2250', description: '20000mah' },
      { productName: 'pixel 6a', productSKU: '5', productPrice: '75000', description: '18gb ram, 128gb rom, marble black.' },
    ],
  },
};

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';
  const isAboutPage = location.pathname === '/about';
  const isFeaturePage = location.pathname === '/features';

  const showAppBarAndSidebar = !isHomePage && !isLoginPage && !isSignUpPage && !isAboutPage && !isFeaturePage;

  return (
    <div>
      {showAppBarAndSidebar && <AppBar1 />}
      <div style={{ display: 'flex' }}>
        {showAppBarAndSidebar && <Sidebar />}
        <div style={{ flexGrow: 1, padding: '20px', marginLeft: showAppBarAndSidebar ? '232px' : '0', paddingTop: showAppBarAndSidebar ? '60px' : '0' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appbar" element={<AppBar1 />} />
            <Route path="/inventory/items" element={<Items />} />
            <Route path="/item-groups" element={<ItemGroupsManager items={sampleItems} />} />
            <Route path="/add-sales-order" element={<AddSalesOrderPage />} />
            <Route path="/inventory-manager" element={<InventoryManager />} />
            <Route path="/order-management" element={<CartPage />} />
            <Route path="/sales/packages" element={<PackagesDashboard />} />
            <Route path="/sales/orders" element={<SalesDashboard />} /> {/* Add the SalesDashboard route */}
          </Routes>
          {location.pathname === '/contact' && <Footer />}
        </div>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
