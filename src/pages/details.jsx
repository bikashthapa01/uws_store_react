import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useProduct } from '../context/ProductContext';
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const {product} = useProduct();
    const navigate = useNavigate();


    const handleAddToCart = () => {
        addToCart(product, Number(quantity));
        // Optionally, display a message or navigate the user to the cart page
    };

    const handleCheckout = () => {
        addToCart(product, Number(quantity));
        // Navigate the user to the checkout page
        navigate("/cart");
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.thumbnail} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <strong>Price: ${product.price}</strong>
                    <div className="mt-3">
                        <label>Quantity:</label>
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" className="form-control w-25" />
                    </div>
                    <button className="btn btn-primary mt-3" onClick={handleAddToCart}>Add to Cart</button>
                    <button className="btn btn-success mt-3 ml-3" onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
