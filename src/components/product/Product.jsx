// Product.js
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card card">
      <img src={product.thumbnail} alt={product.title} className="card-img-top product-image" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Rating: {product.rating}</p>
        <button className="btn btn-primary mr-2" onClick={() => addToCart(product)}>Add to Cart</button>
        <button className="btn btn-secondary">View</button>
      </div>
    </div>
  );
}

export default Product;
