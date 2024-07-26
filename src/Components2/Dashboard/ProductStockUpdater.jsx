// src/ProductStockUpdater.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./update.css"
const ProductStockUpdater = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [stock, setStock] = useState(0);

  useEffect(() => {
    // Fetch all product names from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9000/product-name');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Fetch colors for the selected product from the backend
    if (selectedProduct) {
      const fetchColors = async () => {
        try {
          const response = await axios.get(`http://localhost:9000/api/products/${selectedProduct}/colors`);
          setColors(response.data);
        } catch (error) {
          console.error('Error fetching colors:', error);
        }
      };

      fetchColors();
    } else {
      setColors([]);
    }
  }, [selectedProduct]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedProduct || !selectedColor || typeof stock !== 'number') {
      alert('Please select a product, color, and enter a valid stock number.');
      return;
    }

    try {
      const response = await axios.put('http://localhost:9000/api/products/stock', {
        name: selectedProduct,
        color: selectedColor,
        stock: stock,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error updating product stock:', error);
      alert('An error occurred while updating the product stock.');
    }
  };

  return (

<>

<div className=" bg-white p-1 mainwelcome px-3 my-4 ">
        <div className="row welcome items-center align-bottom ">
            <div className="col-6 pt-3  text-primary">
                Hii, welcome back!
            </div>
            <div className="col-6 pt-2 text-end  ">
                Dashboard &lt;  Products
            </div>
        </div>
    </div>

<div className="inputbox bg-white text-center py-5 ">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="product-select">Select Product:</label>
        <select
        className='inputi'
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
      {colors.length > 0 && (
        <div>
          <label htmlFor="color-select">Select Color:</label>
          <select
        className='inputi'

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
      )}
      <div>
        <label htmlFor="stock">Stock:</label>
        <input
        className="inputi"
          type="number"
          id="stock"
          value={stock}
          onChange={(e) => setStock(parseInt(e.target.value, 10))}
        />
      </div>
      <button className='btn btn-dark mt-3 ' type="submit">Update Stock</button>
    </form>
    </div>
</>
  );
};

export default ProductStockUpdater;
