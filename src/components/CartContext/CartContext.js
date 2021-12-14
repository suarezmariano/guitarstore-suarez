import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isInCart = (id) => {};

  const addItem = (item, quantity) => {
    setItems([{ ...item, id: item.id, price: item.price, quantity: quantity }]);
  };
  console.log(items);
  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
