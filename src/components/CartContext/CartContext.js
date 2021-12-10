import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'primer producto',
      quantity: 5,
    },
  ]);

  const isInCart = (id) => {};

  const addItem = (id, item, quantity) => {
    setItems([...items, { ...item, quantity: quantity }]);
  };

  return (
    <CartContext.Provider value={[items, addItem]}>
      {children}
    </CartContext.Provider>
  );
};
