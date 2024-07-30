import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Sidebar from './components/Sidebar1'; // Import the Sidebar component
import AppBar from './components/AppBar1'; // Import the AppBar component
import './CartPage.css'; // Import the CSS file for styling

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { productName: 'Puma sneaker', productSKU: '5', productPrice: '6000', description: 'For Male' },
    { productName: 'Himalaya', productSKU: '60', productPrice: '150', description: 'Body Soap' },
    { productName: 'Jockey', productSKU: '200', productPrice: '200', description: 'All size' },
    { productName: 'MI PowerBank', productSKU: '15', productPrice: '2250', description: '20000mah' },
    { productName: 'Pixel 6a', productSKU: '5', productPrice: '75000', description: '18gb ram, 128gb rom, marble black.' }
  ]);

  const handleRemove = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor:'#FFF8EE'}}>
      <AppBar /> {/* Include the AppBar component */}
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar /> {/* Include the Sidebar component */}
        <Container style={{ flex: 1, paddingTop: '100px', paddingLeft: '170px'}}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <Typography variant="h4" component="h2" style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
                  Cart
                </Typography>
                <TableContainer>
                  <Table className='carts'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Product SKU</TableCell>
                        <TableCell>Product Price</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.productName}</TableCell>
                          <TableCell>{item.productSKU}</TableCell>
                          <TableCell>{item.productPrice}</TableCell>
                          <TableCell>{item.description}</TableCell>
                          <TableCell>
                            <Button variant="contained" color="secondary" onClick={() => handleRemove(index)}>
                              Remove
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default CartPage;
