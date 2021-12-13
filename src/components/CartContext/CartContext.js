import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([
    { id: '1', title: 'title', quantity: 5 },
  ]);

  const isInCart = (id) => {};

  const addItem = (item, quantity) => {
    setItems([...items, { ...item, id: item.id, quantity: quantity }]);
  };
  console.log(items);
  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
