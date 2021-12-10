import React, { useContext } from "react";
import "./Cart.css";

import { CartContext } from "../../components/CartContext/CartContext";

function Cart() {
  const { items, addItem } = useContext(CartContext);
  console.log(items);
  return <div className=".cart"></div>;
}

export default Cart;
