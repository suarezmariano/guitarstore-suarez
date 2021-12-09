import React, { useContext } from "react";
import "./Cart.css";

import { CartContext } from "../../components/CartContext/CartContext";

function Cart() {
  const [order, setOrder] = useContext(CartContext);

  return (
    <div className=".cart">
      <h1>Detalle de tu compra</h1>
      <p>{order}</p>
    </div>
  );
}

export default Cart;
