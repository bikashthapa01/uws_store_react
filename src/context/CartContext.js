// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
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


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
