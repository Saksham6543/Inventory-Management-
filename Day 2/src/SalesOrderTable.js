import React from 'react';
import './components/SalesOrderTable.css';

const SalesOrderTable = ({ salesOrders }) => {
  return (
    <table className="sales-order-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product SKU</th>
          <th>Product Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Puma sneaker</td>
          <td>5</td>
          <td>6000</td>
          <td>For Male</td>
        </tr>
        <tr>
          <td>Himalaya</td>
          <td>60</td>
          <td>150</td>
          <td>Body soap</td>
        </tr>
        <tr>
          <td>Jockey vest</td>
          <td>200</td>
          <td>200</td>
          <td>All size</td>
        </tr>
        <tr>
          <td>MI PowerBank</td>
          <td>15</td>
          <td>2250</td>
          <td>20000mah</td>
        </tr>
        <tr>
          <td>pixel 6a</td>
          <td>5</td>
          <td>75000</td>
          <td>18gb ram, 128gb rom, marble black.</td>
        </tr>
        {salesOrders.map((order, index) => (
          <tr key={index}>
            <td>{order.productName}</td>
            <td>{order.productSKU}</td>
            <td>{order.productPrice}</td>
            <td>{order.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesOrderTable;
