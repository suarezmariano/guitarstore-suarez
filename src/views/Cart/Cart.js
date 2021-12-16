import React, { useContext } from 'react';
import './Cart.css';

import { CartContext } from '../../context/CartContext/CartContext';

function Cart() {
  const { items, removeItem } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Detalle de tu compra: </h1>
      {items.map((item) => (
        <div key={item.id}>
          <h1>{item.quantity}</h1>
          <h1>{item.brand}</h1>
          <h1>{item.model}</h1>
          <h1>{item.price}</h1>
          <button onClick={() => removeItem(item.id)}>Borrar Producto</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
