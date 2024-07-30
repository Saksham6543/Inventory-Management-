import React from 'react';
import './SalesDashboard.css';

const salesData = [
  { orderNo: '#001', customerName: 'Harish', productPrice: 'INR.6000', shipmentStatus: 'Shipped' },
  { orderNo: '#002', customerName: 'Adithya', productPrice: 'INR.150', shipmentStatus: 'Processing' },
  { orderNo: '#003', customerName: 'Gowtham', productPrice: 'INR.200', shipmentStatus: 'Delivered' },
  { orderNo: '#004', customerName: 'Gokul', productPrice: 'INR.2250', shipmentStatus: 'Shipped' },
  { orderNo: '#005', customerName: 'Tharun', productPrice: 'INR.75000', shipmentStatus: 'Processing' },
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'Shipped':
      return { color: 'orange' };
    case 'Delivered':
      return { color: 'green' };
    case 'Processing':
      return { color: 'red' };
    default:
      return {};
  }
};

const SalesDashboard = () => {
  return (
    <div className="sales-dashboard">
      <h1>Sales Orders for Packaging</h1>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Customer Name</th>
            <th>Total Price</th>
            <th>Shipment Status</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((item, index) => (
            <tr key={index}>
              <td style={{ color: 'blue' }}>{item.orderNo}</td>
              <td>{item.customerName}</td>
              <td>{item.productPrice}</td>
              <td style={getStatusStyle(item.shipmentStatus)}>{item.shipmentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesDashboard;
