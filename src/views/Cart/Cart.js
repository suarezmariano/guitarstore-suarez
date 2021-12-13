import React, { useContext } from 'react';
import './Cart.css';

import { CartContext } from '../../components/CartContext/CartContext';

function Cart() {
  const { items } = useContext(CartContext);

  return (
    <div className=".cart">
      <h1>Detalle de tu compra: </h1>
      {items.map((item) => (
        <div key={item.id}>
          <h1>{item.id}</h1>
          <h1>{item.title}</h1>
          <h1>{item.quantity}</h1>
        </div>
      ))}
    </div>
  );
}

export default Cart;
