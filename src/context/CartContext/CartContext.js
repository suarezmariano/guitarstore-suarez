import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [favs, setFavs] = useState([]);

  const isInCart = (id) => {
    const found = items.find((item) => item.id === id);
    return found;
  };

  const addItem = (item, quantity) => {
    isInCart(item.id)
      ? setItems(
          items.map((prod) => {
            if (prod.id === item.id) {
              prod.quantity += quantity;
            }
            return prod;
          })
        )
      : setItems([
          ...items,
          {
            id: item.id,
            img: item.img,
            brand: item.brand,
            model: item.model,
            price: item.price,
            quantity: quantity,
          },
        ]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearItems = () => {
    setItems([]);
  };

  const isInFavs = (id) => {
    const isFav = favs.find((data) => data.id === id);
    return isFav;
  };

  const addFavs = (data) => {
    isInFavs(data.id)
      ? alert('Ya esta en tus favoritos!')
      : setItems([
          ...favs,
          {
            id: data.id,
            img: data.img,
            brand: data.brand,
            model: data.model,
            price: data.price,
          },
        ]);
  };

  const removeFavs = (id) => {
    setFavs(favs.filter((data) => data.id !== id));
  };

  const clearFavs = () => {
    setFavs([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearItems,
        favs,
        addFavs,
        removeFavs,
        clearFavs,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
