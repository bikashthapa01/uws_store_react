// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
};

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(product => product.id !== productToRemove.id);
    setCart(updatedCart);
  };

  const increaseQuantity = (productId) => {
    setCart(prevCart => {
        return prevCart.map(item => 
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
    });
};

const decreaseQuantity = (productId) => {
    setCart(prevCart => {
        return prevCart.map(item => 
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
    });
};

const clearCart = () => {
  setCart([]);
}

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
