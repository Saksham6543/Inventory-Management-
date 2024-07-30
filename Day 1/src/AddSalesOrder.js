import React, { useState } from 'react';

const AddSalesOrder = ({ addSalesOrder }) => {
  const [salesOrder, setSalesOrder] = useState({
    productName: '',
    productSKU: '',
    productPrice: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalesOrder(prevOrder => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSalesOrder(salesOrder);
    setSalesOrder({
      productName: '',
      productSKU: '',
      productPrice: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add New Item</h2>
      
      <input
        type="text"
        name="productName"
        value={salesOrder.productName}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />

      <input
        type="text"
        name="productSKU"
        value={salesOrder.productSKU}
        onChange={handleChange}
        placeholder="Product SKU"
        required
      />
      
      <input
        type="number"
        name="productPrice"
        value={salesOrder.productPrice}
        onChange={handleChange}
        placeholder="Product Price"
        required
      />
      
      <input
        type="text"
        name="description"
        value={salesOrder.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddSalesOrder;
