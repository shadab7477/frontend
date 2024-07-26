// src/ProductColorSelector.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './ProductColorSelector.css';

const ProductColorSelector = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productsWithColor, setProductsWithColor] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [stock, setStock] = useState(0);

  const colors = ['Red', 'Gold', 'Blue', 'Silver', 'Brown', 'Pink'];




  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedProduct || !selectedColor) {
      alert('Please select both a product and a color.');
      return;
    }

    try {
      const response = await axios.put('http://localhost:9000/api/products/color', {
        name: selectedProduct,
        color: selectedColor,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error updating product color:', error);
      alert('An error occurred while updating the product color.');
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9000/product-name');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

    const fetchProductsWithColor = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/products/with-color');
        setProductsWithColor(response.data);
      } catch (error) {
        console.error('Error fetching products with color:', error);
      }
    };

    fetchProductsWithColor();
  }, [handleSubmit]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9000/productcolor-delete/${id}`);
      alert(response.data.message);
      setProductsWithColor(productsWithColor.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('An error occurred while deleting the product.');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
            <h3 className="mb-4">Add Color to Product</h3>
            <div className="form-group">
              <label htmlFor="product-select">Select Product:</label>
              <select
                className="form-control"
                id="product-select"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                <option value="">--Select a product--</option>
                {products.map((product) => (
                  <option key={product._id} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="color-select">Select Color:</label>
              <select
                className="form-control"
                id="color-select"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="">--Select a color--</option>
                {colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="stock">Stock:</label>
              <input
                className="form-control"
                type="number"
                id="stock"
                value={stock}
                onChange={(e) => setStock(parseInt(e.target.value, 10))}
              />
            </div>
            <button type="submit" className="btn btn-dark  rounded-pill text-center mt-3  btn-block">
              Update Stock
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="mb-4">Products with Color</h3>
            <ul className="list-group">
              {productsWithColor.map((product) => (
                <li key={product._id} className="list-group-item d-flex justify-content-between align-items-center">
                  {product.name} - {product.color}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product._id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductColorSelector;
