import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
    const { cart } = useContext(CartContext);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        city: '',
        country: '',
        zipCode: ''
    });

    const calculateTotal = () => {
        return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFinish = () => {
        const { fullName, address, city, country, zipCode } = formData;

        if (!fullName || !address || !city || !country || !zipCode) {
            setMessage('Please fill in all the fields.');
            return;
        }

        // Here, you can send the order details to the server or do any other processing.
        // For now, we'll just display a dummy message.
        setMessage('Order placed successfully!');
    };

    return (
        <div className="container mt-5">
            <h2>Checkout</h2>
            <div className="cart-summary mb-5">
                <h4>Order Summary:</h4>
                {cart.map(product => (
                    <div key={product.id} className="mb-3">
                        <span>{product.title} - ${product.price} x {product.quantity}</span>
                    </div>
                ))}
                <strong>Total: ${calculateTotal().toFixed(2)}</strong>
            </div>

            <div className="user-info mb-5">
                <h4>Shipping Details:</h4>
                <input type="text" name="fullName" className="form-control mb-3" placeholder="Full Name" onChange={handleInputChange} />
                <input type="text" name="address" className="form-control mb-3" placeholder="Address" onChange={handleInputChange} />
                <input type="text" name="city" className="form-control mb-3" placeholder="City" onChange={handleInputChange} />
                <input type="text" name="country" className="form-control mb-3" placeholder="Country" onChange={handleInputChange} />
                <input type="text" name="zipCode" className="form-control mb-3" placeholder="Zip Code" onChange={handleInputChange} />
            </div>

            <button className="btn btn-success" onClick={handleFinish}>Finish</button>

            {message && <div className="alert alert-info mt-4">{message}</div>}
        </div>
    );
}

export default CheckoutPage;