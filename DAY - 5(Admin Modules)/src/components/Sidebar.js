import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', background: '#333', color: '#fff', height: '100vh', padding: '1rem' }}>
      <h2>Inventory Management</h2>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/inventory">
          <ListItemText primary="Inventory" />
        </ListItem>
        <ListItem button component={Link} to="/orders">
          <ListItemText primary="Orders" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;