import React, { createContext, useState } from "react";

export const CartContext = createContext();

const initialState = [{ name: "", price: 20, cuantity: 0 }];

export const CartProvider = (children) => {
  const [order, setOrder] = useState(initialState);

  return (
    <CartContext.Provider value={[order, setOrder]}>
      {children}
    </CartContext.Provider>
  );
};
