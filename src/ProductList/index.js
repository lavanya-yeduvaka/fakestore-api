// src/ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Products</h1>
      <div className="content">
        {products.map(product => (
      <div>
          <div key={product.id} className="products-list"> 
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className='product-image' />
              
            </Link>
            </div>
            <p className="product-price">${product.price}</p>
            <h3 className="product-title">{product.title}</h3>
          
    </div>

        ))}
      </div>
    </div>
  );
}

export default ProductList;
