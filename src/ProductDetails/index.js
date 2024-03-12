// src/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./index.css"
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h1 className="heading">{product.title}</h1>
      <img src={product.image} alt={product.title} className="image" />
      <p className="price">Price: ${product.price}</p>
      <p className='category'><span className="style-text">Category: </span>Category: {product.category}</p>
      <p className="description"><span className="style-text">Description: </span> {product.description}</p>
    </div>
  );
}

export default ProductDetails;
