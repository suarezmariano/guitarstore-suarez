import React, { useContext } from 'react';

import './WidgetCart.css';
import { CartContext } from '../../context/CartContext/CartContext';

const WidgetCart = () => {
  const { items } = useContext(CartContext);
  let itemsInCart = 0;

  items.map((item) => {
    return (itemsInCart = itemsInCart + item.quantity);
  });

  return (
    <div className="ui label">
      <i aria-hidden="true" className="cart icon large"></i> {itemsInCart}
    </div>
  );
};

export default WidgetCart;
