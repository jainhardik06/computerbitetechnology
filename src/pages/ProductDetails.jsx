import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  
  return (
    <div className="product-details">
      <div className="page-container">
        <h1>Product Details Page</h1>
        <p>Product ID: {productId}</p>
        <p>This is the product details page.</p>
      </div>
    </div>
  );
};

export default ProductDetails;
