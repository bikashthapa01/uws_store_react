// CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart} = useContext(CartContext);

    const calculateTotal = () => {
        return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    };

    return (
        <div className="container mt-5">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cart.map(product => (
                    <div key={product.id} className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={product.thumbnail} alt={product.title} className="card-img" style={{ height: '150px', objectFit: 'cover' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">Price: ${product.price}</p>
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-primary mr-2" onClick={() => decreaseQuantity(product.id)}>-</button>
                                        <span>{product.quantity}</span>
                                        <button className="btn btn-primary ml-2" onClick={() => increaseQuantity(product.id)}>+</button>
                                    </div>
                                    <button className="btn btn-danger mt-2" onClick={() => removeFromCart(product)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <h4>Total: ${calculateTotal().toFixed(2)}</h4>
                <Link to="/checkout"><button className="btn btn-success mt-3">Proceed to Checkout</button></Link>
            </div>
        </div>
    );
}

export default CartPage;
