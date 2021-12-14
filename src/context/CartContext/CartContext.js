import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item, quantity) => {
    setItems([
      ...items,
      {
        id: item.id,
        brand: item.brand,
        model: item.model,
        price: item.price,
        quantity: quantity,
      },
    ]);
  };
  console.log(items);
  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
