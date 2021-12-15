import React, { useContext } from 'react';

import './WidgetCart.css';
import { CartContext } from '../../context/CartContext/CartContext';

const WidgetCart = () => {
  const { items } = useContext(CartContext);
  let itemsInCart = 0;

  items.map((item) => {
    itemsInCart = itemsInCart + item.quantity;
  });

  return (
    <div class="ui label">
      <i aria-hidden="true" class="cart icon large"></i> {itemsInCart}
    </div>
  );
};

export default WidgetCart;
