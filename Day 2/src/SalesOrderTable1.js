import React from 'react';
import './SalesOrderTable.css';
import { Button } from '@mui/material';

const SalesOrderTable1 = ({ salesOrders }) => {
  const handlePurchaseClick = (order) => {
    // Handle the purchase action here
    console.log('Purchased:', order);
  };

  return (
    <table className="sales-order-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product SKU</th>
          <th>Product Price</th>
          <th>Description</th>
        </tr>
          {/* <th>Action</th> */}
      </thead>
      <tbody>
        <tr>
          <td>Puma sneaker</td>
          <td>5</td>
          <td>6000</td>
          <td>For Male</td>
          
            <Button
              variant="contained"
              className="custom-purchase-button"
              onClick={() => handlePurchaseClick({ productName: 'Puma sneaker', productSKU: '5', productPrice: '6000', description: 'Female' })}
            >
              Add to Cart
            </Button>
          
        </tr>
        <tr>
          <td>Himalaya</td>
          <td>60</td>
          <td>150</td>
          <td>Body soap</td>
          
            <Button
              variant="contained"
              className="custom-purchase-button"
              onClick={() => handlePurchaseClick({ productName: 'Kuppaimeni', productSKU: '60', productPrice: '150', description: 'Mooligai body soap founded by Maginesh' })}
            >
              Add to Cart
            </Button>
          
        </tr>
        <tr>
          <td>Jockey vest</td>
          <td>200</td>
          <td>200</td>
          <td>All size</td>
          
            <Button
              variant="contained"
              className="custom-purchase-button"
              onClick={() => handlePurchaseClick({ productName: 'Jockey inners', productSKU: '200', productPrice: '200', description: 'fre size' })}
            >
              Add to Cart
            </Button>
          
        </tr>
        <tr>
          <td>MI PowerBank</td>
          <td>15</td>
          <td>2250</td>
          <td>20000mah</td>
          
            <Button
              variant="contained"
              className="custom-purchase-button"
              onClick={() => handlePurchaseClick({ productName: 'MI PowerBank', productSKU: '15', productPrice: '2250', description: '20000mah' })}
            >
              Add to Cart
            </Button>
          
        </tr>
        <tr>
          <td>pixel 6a</td>
          <td>5</td>
          <td>75000</td>
          <td>18gb ram, 128gb rom, marble black.</td>
          
            <Button
              variant="contained"
              className="custom-purchase-button"
              onClick={() => handlePurchaseClick({ productName: 'pixel 6a', productSKU: '5', productPrice: '75000', description: '18gb ram, 128gb rom, marble black.' })}
            >
              Add to Cart
            </Button>
          
        </tr>
        {salesOrders.map((order, index) => (
          <tr key={index}>
            <td>{order.productName}</td>
            <td>{order.productSKU}</td>
            <td>{order.productPrice}</td>
            <td>{order.description}</td>
            
              <Button
                variant="contained"
                className="custom-purchase-button"
                onClick={() => handlePurchaseClick(order)}
              >
                Add to Cart
              </Button>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesOrderTable1;
